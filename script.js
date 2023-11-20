// JavaScript to set and control the text positions

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

function positionTextAtTop() {
  const windowHeight = window.innerHeight;
  const h1Height = h1.clientHeight;
  const h2Height = h2.clientHeight;
  const h1Top = 10;

  h1.style.top = h1Top + 'px';
  h2.style.top = h1Top + h1Height + 'px';
}

window.addEventListener('resize', positionTextAtTop);
positionTextAtTop();
