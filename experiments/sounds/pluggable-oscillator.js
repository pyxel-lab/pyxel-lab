// Oscillator
importScripts('paper.js');

(async () => {
  // connect oscillator to output
  const papers = await paper.get('papers');
  const paperNumber = await paper.get('number');
  var lastFrequency = (await paper.get('papers'))[paperNumber].data.lastFrequency;

  if(papers[paperNumber].data.lastFrequency != undefined){
    var osc = await sound.Oscillator({frequency: lastFrequency});
  }
  else{
    var osc = await sound.Oscillator({ frequency: 440 });
  }

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



  // check for input value
  paper.whenPointsAt({
    callback: async(event) => {
      if(event != null){
        if(event.paper.data.frequency != undefined){
          osc.frequency = event.paper.data.frequency;
          await paper.set('data', { lastFrequency: event.paper.data.frequency});

        }
      }
      else{

      }
    },

    // optional
    direction : 'down',
  });

})();