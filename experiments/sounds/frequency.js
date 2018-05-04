// FrequencyValue 110
importScripts('paper.js');

(async () => {
  // Get a canvas object for this paper.
  const canvas = await paper.get('canvas');
  const ctx = canvas.getContext('2d');

  // Get the paper number of this piece of paper (which should not change).
  const paperNumber = await paper.get('number');


  //Set frequency
  await paper.set('data', { frequency: 110 });

  // Repeat every 100 milliseconds.
  setInterval(async () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = '20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'red';
    ctx.fillText(`F 110`, canvas.width / 2, canvas.height / 2);
    ctx.commit();
  }, 100);


})();
