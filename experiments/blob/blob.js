// blob

importScripts('paper.js');

(async () => {
  // Get a canvas object for this paper.
  const canvas = await paper.get('canvas');
  const ctx = canvas.getContext('2d');

  // Get the paper number of this piece of paper (which should not change).
  const paperNumber = await paper.get('number');

  var connectedPaperNumber = null;
  var currentSize = 20;

  // Repeat every 100 milliseconds.
  setInterval(async () => {
    // Get a list of all the papers.
    const papers = await paper.get('papers');

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // head
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, currentSize, 0, Math.PI * 2)
    ctx.fill();

    // eyes
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(canvas.width / 2 - currentSize / 2, canvas.height / 2, currentSize * 0.2, 0, Math.PI * 2)
    ctx.fill();

    ctx.beginPath();
    ctx.arc(canvas.width / 2 + currentSize / 2, canvas.height / 2, currentSize * 0.2, 0, Math.PI * 2)
    ctx.fill();

    // pupils
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(canvas.width / 2 - currentSize / 2, canvas.height / 2, currentSize * 0.1, 0, Math.PI * 2)
    ctx.fill();

    ctx.beginPath();
    ctx.arc(canvas.width / 2 + currentSize / 2, canvas.height / 2, currentSize * 0.1, 0, Math.PI * 2)
    ctx.fill();
    ctx.commit();

  }, 100);

  // get size from other page
  paper.whenPointsAt({
    wiskerLength: 2,
    requiredData: ['size'],
    callback: async ({paperNumber}) => {
      connectedPaperNumber = paperNumber
      currentSize = (await paper.get('papers'))[paperNumber].data.size * 20
    }
  })

})();
