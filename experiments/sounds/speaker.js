// Program 1
importScripts('paper.js');

(async () => {

  // connect input to speaker
  (await sound.input).toMaster();

  // draw speaker symbol
  var canvas = await paper.get('canvas')
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = "red";

  ctx.translate(25, 50);
  ctx.fillRect(0, 0, 20, 40)

  ctx.translate(22, -20);
  ctx.beginPath();
  ctx.moveTo(0, 20)
  ctx.lineTo(30, 0)
  ctx.lineTo(30, 80)
  ctx.lineTo(0, 60)
  ctx.fill();

  ctx.commit();

})();
