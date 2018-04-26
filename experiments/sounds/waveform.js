// Waveform
importScripts('paper.js');

(async () => {
  var waveform = await sound.Waveform({ size: 1024 });
  (await sound.input).connect(waveform)

  var canvas = await paper.get('canvas');
  var ctx = canvas.getContext('2d');

  // Repeat every 100 milliseconds.
  setInterval(async () => {
    var values = await waveform.getValue();

    var segmentSize = canvas.width / values.length;
    var centerY = canvas.height / 2

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(0, centerY);

    for (var i = 0; i < values.length; i++) {
      ctx.lineTo(segmentSize * i, centerY - (50 * values[i]));
    }

    ctx.stroke();
    ctx.commit();
  }, 100);
})();
