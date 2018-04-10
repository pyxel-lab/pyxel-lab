// Resizer
importScripts('paper.js');

(async () => {
  // Get a canvas object for this paper.
  const canvas = await paper.get('canvas');
  const ctx = canvas.getContext('2d');

  // Get the paper number of this piece of paper (which should not change).
  const paperNumber = await paper.get('number');

  var papers = await paper.get('papers');
  var prevSize = papers[paperNumber].data.size

  // Repeat every 100 milliseconds.
  setInterval(async () => {
    // Get a list of all the papers.
    var papers = await paper.get('papers');

    const points = papers[paperNumber].points
    const size = (Math.floor(Math.abs(points.bottomLeft.y - points.topLeft.y) / 10) * 10) / 330

   if (size !== prevSize) {
      prevSize = size
      paper.set('data', {size})
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = `${Math.min(Math.max(size * 20, 10), 40)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillStyle = 'green';

    ctx.fillText(`${Math.floor(100 * size)}%`, canvas.width / 2, canvas.height / 2);

    ctx.commit();

  }, 100);
})();
