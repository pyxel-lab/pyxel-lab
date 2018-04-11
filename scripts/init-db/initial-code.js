importScripts('paper.js');

(async () => {
  // Get a canvas object for this paper.
  const canvas = await paper.get('canvas');
  const ctx = canvas.getContext('2d');

  // Get the paper number of this piece of paper (which should not change).
  const paperNumber = await paper.get('number');

  // Repeat every 100 milliseconds.
  setInterval(async () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = `${Math.min(Math.max(size * 20, 10), 40)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillStyle = 'red';
    ctx.fillText(`#${paperNumber}`, canvas.width / 2, canvas.height / 2);
    ctx.commit();
  }, 100);
})();
