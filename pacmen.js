const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  let game = document.getElementById('game');

  // add image to <div id='game'>  
  let pacImg = document.createElement('img');
  pacImg.src = './images/PacMan1.png';
  game.appendChild(pacImg);

  // set size and position
  let position = setToRandom(200);  // 0 to 200
  pacImg.width = 100;
  pacImg.style.position = 'absolute';
  pacImg.style.left = position.x;
  pacImg.style.top = position.y;

  // set return
  let velocity = setToRandom(10);  // 0 to 10
  return {
    pacImg,
    position,
    velocity,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
  
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
