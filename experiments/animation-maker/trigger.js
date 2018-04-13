// trigger
importScripts('paper.js');

(async () => {
  // Get a canvas object for this paper.
  const canvas = await paper.get('canvas');
  const ctx = canvas.getContext('2d');

  // mark paper as trigger
  paper.set('data', {isTrigger: true})

  // draw trigger label
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.font = '20px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'red';
  ctx.fillText(`trigger`, canvas.width / 2, canvas.height / 2);
  ctx.commit();
})();
