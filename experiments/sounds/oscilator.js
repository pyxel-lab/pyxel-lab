// Oscillator
importScripts('paper.js');

(async () => {
  // connect oscillator to output
  var osc = await sound.Oscillator({ frequency: 400 });
  osc.start();
  osc.connect(await sound.output)

  // write text "sound"
  var canvas = await paper.get('canvas');
  var ctx = canvas.getContext('2d');

  ctx.font = "20px sans-serif"
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText("Sound", canvas.width / 2, canvas.height / 2);
  ctx.commit();


  // update frequence
  const paperNumber = await paper.get('number');

  setInterval(async () => {
    var { points } = (await paper.get('papers'))[paperNumber];


    var diffY = points.topRight.y - points.bottomRight.y
    var diffX = points.topRight.x - points.bottomRight.x
    var distance = Math.sqrt(Math.pow(diffY, 2) + Math.pow(diffX, 2))

    osc.frequency = distance;
  }, 100)

})();