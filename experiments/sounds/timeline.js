// Graph
importScripts('paper.js');


(async () => {
  // Get a canvas object for this paper.
  var canvas = await paper.get('canvas', {width: 400, height: 400});
  var ctx = canvas.getContext('2d');

  const duration = 3; 
 /*
  const whisker = await paper.get('whisker', { direction: 'down', whiskerLenght: 0.5, color: 'green'})
  const whiskerTwo = await paper.get('whisker', { direction: 'right', whiskerLenght: 0.5, color: 'green'})
  let otherPaperNumber = null;
  let otherCanvas = null;
  let otherCtx = null;
  
 
  whisker.on('paper.Added', async ({paperNumber})=>{
    otherPaperNumber = paperNumber;
    otherCanvas= await paper.get('canvas', {number: paperNumber, width: 500, id:Math.random()})
    otherCtx = otherCanvas.getContext('2d');
    console.log('added!');
  })
   whisker.on('paperRemoved', () => {
    otherPaperNumber = null;
    otherCanvas = null;
    otherCtx = null;
  })
  */

  setInterval(() => {
    
    //duration = updateDuration(duration, otherPaperNumber.duration);
    
    var time = (Date.now() * (1 / duration) % 1000) / 1000;
    paper.set('data', {time});

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var xPosition = time * canvas.width;

    ctx.strokeStyle = "red";
    ctx.beginPath()
    ctx.moveTo(xPosition, 0);
    ctx.lineTo(xPosition, canvas.height);
    ctx.stroke();

    ctx.commit();

  }, 16);

/*
function updateDuration(duration, newDuration){
  if(otherPaperNumber != null){
    return newDuration;
  } else{
    return duration;
  }
}
*/

})();
