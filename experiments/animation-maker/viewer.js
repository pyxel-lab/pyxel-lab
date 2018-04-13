// Viewer
importScripts('paper.js');

(async () => {
  // Get a canvas object for this paper.
  const canvas = await paper.get('canvas');
  const ctx = canvas.getContext('2d');

  // Get the paper number of this piece of paper (which should not change).
  const paperNumber = await paper.get('number');

  const frameSliderPaperNumber = 257;
  const capturePaperNumber =  757;

  const frames = [];

  setInterval(async () => {
    const papers = await paper.get('papers');
    const frame = papers[frameSliderPaperNumber].data.frame

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (frame === 10) { // run playback on 10th frame
      const playBackFrame = Math.floor((Date.now() / 100 % 9))

      if (frames[playBackFrame]) {
        ctx.putImageData(frames[frame], 0, 0);
      }

    } else if (frames[frame]) { // otherwise display frame selected by frame slider
      ctx.putImageData(frames[frame], 0, 0);
    }

    // mask border
    const borderSize = 12
    ctx.clearRect(0, 0, canvas.width, borderSize)
    ctx.clearRect(0, canvas.height - borderSize, canvas.width, borderSize)
    ctx.clearRect(0, 0, borderSize, canvas.height)
    ctx.clearRect(canvas.width - borderSize, 0,  borderSize, canvas.height)
    ctx.fillStyle='red'

    ctx.commit();
  }, 100);

  paper.whenPointsAt({
    direction: 'right',
    whiskerLength: 2,
    requiredData: ['isTrigger'],
    callback: async () => {
      const papers = await (paper.get('papers'))
      const frame = papers[].data.frame
      const picture = papers[].picture
      frames[frame] = picture
    }
  })
})();
