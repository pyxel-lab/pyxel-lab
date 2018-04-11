// Color Picker
importScripts('paper.js');

(async () => {
  // Get a canvas object for this paper.
  const canvas = await paper.get('canvas');
  const ctx = canvas.getContext('2d');

  // Get the paper number of this piece of paper (which should not change).
  const paperNumber = await paper.get('number');


    // Repeat every 100 milliseconds.
    setInterval(async () => {
      const {points} = (await paper.get('papers'))[paperNumber];
      const color = (Math.abs(points.bottomLeft.y - points.topLeft.y) / 2) % 260

      paper.set('data', {color})

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "blue"
      ctx.fillStyle = `hsl(${color}, 50%, 50%)`
      ctx.fillRect(30, 30, canvas.width - 60, canvas.height - 60)
      ctx.commit();

    }, 100);

})();