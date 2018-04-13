// Keyboard
importScripts('paper.js');

(async () => {
  // Get a canvas object for this paper.
  const canvas = await paper.get('canvas');
  const ctx = canvas.getContext('2d');

  const supporterCanvas = await paper.get('supporterCanvas');
  const supporterCtx = supporterCanvas.getContext('2d');

  // Get the paper number of this piece of paper (which should not change).
  const paperNumber = await paper.get('number');

  const { letters = [] } = (await paper.get('papers'))[paperNumber].data

  supporterCtx.font = '100px sans-serif';
  supporterCtx.textAlign = 'center';
  supporterCtx.fillStyle = 'red';

  letters.forEach((letter, i) => {
    supporterCtx.fillStyle = getColor(i);
    supporterCtx.fillText(letter.value, letter.x, letter.y);
  });

  supporterCtx.commit();

  paper.whenKeyPressed(async (evt) => {
    const {points, data} = (await paper.get('papers'))[paperNumber];

    const letters = data.letters || [];
    const deltaX = points.bottomLeft.x - points.topLeft.x;
    const deltaY = points.bottomLeft.y - points.topLeft.y;
    const value = evt.key;
    const x = points.center.x - deltaX;
    const y = points.center.y - deltaY;

    if (value === 'Backspace') {
      supporterCtx.clearRect(0, 0, supporterCanvas.width, supporterCanvas.height);

      paper.set('data', { letters: [] })

    } else if (value.length === 1) {
      supporterCtx.fillStyle = getColor(letters.length);
      supporterCtx.fillText(value, x, y);
      paper.set('data', { letters: letters.concat([{x, y, value: evt.key}]) })
    }

    supporterCtx.commit();
  });

})();

function getColor (i) {
  return `hsl(${(i * 5) % 360}, 50%, 50%)`;
}