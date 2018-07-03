// Graph Reader
importScripts('paper.js');

(async () => {
  // Get a canvas object for this paper.
  const canvas = await paper.get('canvas', { width: 300 });
  const ctx = canvas.getContext('2d');

  let otherPaperNumber = null;
  let otherCanvas = null;
  let otherCtx = null;

  const whisker = await paper.get('whisker', { direction: 'left', whiskerLength: 0.5 });

  whisker.on('paperAdded', async ({ paperNumber }) => {
    otherPaperNumber = paperNumber;
    otherCanvas = await paper.get('canvas', { number: paperNumber, width: 500, id: Math.random() });
    otherCtx = otherCanvas.getContext('2d');
  })

  whisker.on('paperRemoved', () => {
    otherPaperNumber = null;
    otherCanvas = null;
    otherCtx = null;
  })

  setInterval(async () => {

    if (!otherCanvas) { return }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    otherCtx.clearRect(0, 0, otherCanvas.width, otherCanvas.height);

    // draw on other canvas

    const markers = (await paper.get('markers'))
      .filter(({ paperNumber }) => paperNumber === otherPaperNumber)
      .sort((a, b) => a.positionOnPaper.x - b.positionOnPaper.x)

    const greenMarkers = markers.filter(marker => marker.colorName === 'green')
    drawLines(greenMarkers, 'green');

    const redMarkers = markers.filter(marker => marker.colorName === 'red')
    drawLines(redMarkers, 'red');

    markers.forEach(marker => {
      otherCtx.beginPath()
      otherCtx.arc(marker.positionOnPaper.x * otherCanvas.width, marker.positionOnPaper.y * otherCanvas.height, 30, 0, 2 * Math.PI, false)
      otherCtx.fillStyle = 'black'
      otherCtx.fill()
    });

    otherCtx.commit();

    // draw data on this canvas

    const otherPaperObj = (await paper.get('papers'))[otherPaperNumber];
    const { time } = otherPaperObj.data;

    const redValue = calcValue(redMarkers, time);
    const greenValue = calcValue(greenMarkers, time);

    paper.set('data', {
      red: redValue,
      green: greenValue
    })

    ctx.font = '20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'red';
    // ctx.fillText(`time: ${Math.round(time * 100) / 100}`, canvas.width / 2, canvas.height / 2);
    ctx.fillText(`red value: ${Math.round(redValue * 100) / 100}`, canvas.width / 2, canvas.height / 2 + 30);
    ctx.fillText(`green value: ${Math.round(greenValue * 100) / 100}`, canvas.width / 2, canvas.height / 2 + 60);

    ctx.commit();


  }, 100);

  /* helper functions */

  function calcValue(markers, time) {

    const leftMarker = markers
      .filter(marker => marker.positionOnPaper.x < time)
      .slice(-1)[0];

    const rightMarker = markers
      .filter(marker => marker.positionOnPaper.x > time)[0];

    let value;
    if (leftMarker && rightMarker) {
      x1 = leftMarker.positionOnPaper.x;
      y1 = leftMarker.positionOnPaper.y;
      x2 = rightMarker.positionOnPaper.x;
      y2 = rightMarker.positionOnPaper.y;

      const m = (y2 - y1) / (x2 - x1);
      const c = y1 - m * x1;

      const linear = t => m * t + c;
      value = linear(time);
      return Math.floor(Math.abs(1 - value) * 100) / 100;
    } else {
      return 0;
    }
  }

  function drawLines(markers, color) {

    if (!markers.length) return;

    otherCtx.beginPath();
    otherCtx.moveTo(markers[0].positionOnPaper.x * otherCanvas.width, markers[0].positionOnPaper.y * otherCanvas.height);

    for (let i = 1; i < markers.length; i++) {
      otherCtx.lineTo(markers[i].positionOnPaper.x * otherCanvas.width, markers[i].positionOnPaper.y * otherCanvas.height);
    }

    otherCtx.lineWidth = 5;
    otherCtx.strokeStyle = color;
    otherCtx.stroke();
  }

})();
