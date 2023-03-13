function paintMode() {
  const body = document.querySelector('.sketch');
  let isPainting = false;

  body.style.display = "block";

  body.addEventListener('mousedown', function () {
    isPainting = true;
  });

  body.addEventListener('mouseup', function () {
    isPainting = false;
  });

  body.addEventListener('mousemove', function (event) {
    if (isPainting) {
      const dot = document.createElement('div');
      dot.className = 'paint-dot';
      dot.style.left = (event.pageX - 4) + 'px';
      dot.style.top = (event.pageY - 4) + 'px';
      body.appendChild(dot);
    }
  });
}

function paintModeMobile() {
  const body = document.querySelector('.sketch');
  let isPainting = false;

  body.style.display = "block";

  body.addEventListener('touchstart', function (event) {
    isPainting = true;
    const touch = event.touches[0];
    const dot = document.createElement('div');
    dot.className = 'paint-dot';
    dot.style.left = (touch.pageX - 4) + 'px';
    dot.style.top = (touch.pageY - 4) + 'px';
    body.appendChild(dot);
  });

  body.addEventListener('touchend', function () {
    isPainting = false;
  });

  body.addEventListener('touchmove', function (event) {
    if (isPainting) {
      event.preventDefault();
      const touch = event.touches[0];
      const dot = document.createElement('div');
      dot.className = 'paint-dot';
      dot.style.left = (touch.pageX - 4) + 'px';
      dot.style.top = (touch.pageY - 4) + 'px';
      body.appendChild(dot);
    }
  });
}

const rainbowText = document.getElementById("rainbow-text");
const rainbowIcon = document.getElementById("rainbow-icon");

rainbowIcon.addEventListener("click", () => {
  rainbowIcon.classList.add("rainbow");
});
