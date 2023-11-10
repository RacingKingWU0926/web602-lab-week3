const pacMen = []; // This array holds all the pacmen
const pacmanHeight = 100;  // this will be the same as width
const pacmanWidth = 100;  // set a constant width for all pacman created
const positionScaler = 200;
const velocityScaler = 10;
const timeout = 20;

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
  let position = setToRandom(positionScaler);  // 0 to 200
  pacImg.width = pacmanWidth;
  pacImg.style.position = 'absolute';
  pacImg.style.left = position.x;
  pacImg.style.top = position.y;

  // set return
  let velocity = setToRandom(velocityScaler);  // 0 to 10
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
  setTimeout(update, timeout);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
  let rb = window.innerWidth - pacmanWidth;  // right bound
  let lb = window.innerHeight - pacmanHeight;  // lower bound

  // reverse on horizontal
  if (item.position.x < 0 || item.position.x >= rb) {
    item.velocity.x *= -1;
  }

  // reverse on vertical
  if (item.position.y < 0 || item.position.y >= lb) {
    item.velocity.y *= -1;
  }
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
