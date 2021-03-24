const blowButton = document.querySelector('.blow-button');
const candleFlame = document.querySelector('.candle-flame');

let scale = 1;
let isFlaming = true;

blowButton.addEventListener('click', function () {
  scale -= 0.25;
  if (scale > 0) {
    candleFlame.style.transform = `scale(${scale})`;
    increasingScale();
  } else {
    isFlaming = false;
    candleFlame.style.display = 'none';
    modalWrapper.style.visibility = 'visible';
    modalWrapper.style.opacity = '1';
  }
});

function increasingScale () {
  let interval = setInterval(function() {
    if (scale >= 1 || !isFlaming) {
      clearInterval(interval);
    }
    scale += 0.005;
    candleFlame.style.transform = `scale(${scale})`;
  }, 30);
}

const modalWrapper = document.querySelector('.modal-wrapper');
const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', function () {
  modalWrapper.style.visibility = 'hidden';
  modalWrapper.style.opacity = '0';
})