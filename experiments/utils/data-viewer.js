// data viewer
importScripts('paper.js');

(async () => {
  // Get a canvas object for this paper.
  var canvas = await paper.get('canvas', { width: 300, height: 450});
  var ctx = canvas.getContext('2d');

  var otherPaper

  function IsNumeric(val) {
    return Number(parseFloat(val)) === val;
  }

  function prettyPrint(val) {
    if (IsNumeric) {
      return Math.round(val * 100) / 100
    }
  }

  // Repeat every 100 milliseconds.
  setInterval(async () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = '20px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillStyle = 'red';

    if (!otherPaper) {
      ctx.fillText('connect to other paper', 20, 20);
      ctx.fillText('to see the attributes stored in it', 20, 40);
      return
    }

    var data = (await paper.get('papers'))[otherPaper].data

    ctx.fillText(`#${otherPaper}`, 20, 40);

    var i = 0;

    Object.keys(data).forEach((key, i) => {
      ctx.fillText(`${key} : ${data[key]}`, 20, 20 * (i + 4));
    })

    ctx.commit();
  }, 100);

  paper.whenPointsAt({
    callback: (event) => {
      if (event) {
        otherPaper = event.paperNumber
      } else {
        otherPaper = null
      }
    },

    // optional
    direction: 'left'
  });

})();
