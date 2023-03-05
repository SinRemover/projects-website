let isPainting = false;
function paintMode() {
    const body = document.querySelector('html');
    if(isPainting===false){
        isPainting=true
    }else isPainting = false
  
    body.addEventListener('mousemove', function(event) {
      if (isPainting) {
        const dot = document.createElement('div');
        dot.className = 'paint-dot';
        dot.style.left = (event.pageX - 4) + 'px';
        dot.style.top = (event.pageY - 4) + 'px';
        body.appendChild(dot);
      }
    });
  }

