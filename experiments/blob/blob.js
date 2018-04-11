// blob

importScripts('paper.js');

(async () => {
  // Get a canvas object for this paper.

  const canvas = await paper.get('canvas');
  const ctx = canvas.getContext('2d');

  // Get the paper number of this piece of paper (which should not change).
  const paperNumber = await paper.get('number');

  // Repeat every 100 milliseconds.
  setInterval(async () => {
    const {size = 1, color = 200} = (await paper.get('papers'))[paperNumber].data
    const blobSize = size * 20

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // head
    ctx.fillStyle = `hsl(${color}, 50%, 50%)`;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, blobSize, 0, Math.PI * 2)
    ctx.fill();

    // eyes
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(canvas.width / 2 - blobSize / 2, canvas.height / 2, blobSize * 0.2, 0, Math.PI * 2)
    ctx.fill();

    ctx.beginPath();
    ctx.arc(canvas.width / 2 + blobSize / 2, canvas.height / 2, blobSize * 0.2, 0, Math.PI * 2)
    ctx.fill();

    // pupils
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(canvas.width / 2 - blobSize / 2, canvas.height / 2, blobSize * 0.1, 0, Math.PI * 2)
    ctx.fill();

    ctx.beginPath();
    ctx.arc(canvas.width / 2 + blobSize / 2, canvas.height / 2, blobSize * 0.1, 0, Math.PI * 2)
    ctx.fill();
    ctx.commit();

  }, 100);

  // get color/size from other page
  paper.whenPointsAt({
    wiskerLength: 2,
    callback: async ({paperNumber}) => {
      const data = (await paper.get('papers'))[paperNumber].data

      console.log(data)

      if (data.color != undefined) {
        paper.set('data', {color: data.color})
      }

      if (data.size != undefined) {
        paper.set('data', {size: data.size})
      }
    }
  })

})();
