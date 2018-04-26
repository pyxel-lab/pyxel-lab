// Microphone
importScripts('paper.js');

(async () => {

  // connect microphone to output
  var mic = await sound.Microphone();
  mic.open();
  mic.connect(await sound.output)

  // write text Microphone
  var canvas = await paper.get('canvas');
  var ctx = canvas.getContext('2d');

  ctx.font = "16px sans-serif"
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText("microphone", canvas.width / 2, canvas.height / 2);
  ctx.commit();

})();
