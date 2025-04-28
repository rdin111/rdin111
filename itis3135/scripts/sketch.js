// sketch.js

// sketch.js

function initCanvas() {
    background(0);
    describe('Interactive drawing: drag the mouse to create colorful lines.');
  }
  
  function setup() {
    const canvas = createCanvas(710, 400);
    canvas.parent('sketch-holder');
  
    initCanvas();
  
    strokeWeight(10);
    colorMode(HSB);
  
    // Setup clear button
    const clearBtn = document.getElementById('clear-button');
    clearBtn.addEventListener('click', initCanvas);
  }
  
  function draw() {
    // Nothing needed here unless you want animation
  }
  
  function mouseDragged() {
    const hue = (mouseX - mouseY) % 360; // Wrap hue around for smooth colors
    stroke(hue, 90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  