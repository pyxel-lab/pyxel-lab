// frame-slider
importScripts('paper.js');

(async () => {
  const canvas = await paper.get('canvas');
  const ctx = canvas.getContext('2d');

  const supporterCanvas = await paper.get('supporterCanvas');
  const paperNumber = await paper.get('number');

  const numberOfFrames = 10;
  const stepSize = (supporterCanvas.width / numberOfFrames);

  setInterval(async () => {
    const {points, data} = (await paper.get('papers'))[paperNumber]

    const frame = Math.floor(points.topLeft.x / stepSize) + 1

    paper.set('data', {frame});

    // draw current frame number
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = '20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'red';
    ctx.fillText(frame, canvas.width / 2, canvas.height / 2);
    ctx.commit();

  }, 100);
})();
