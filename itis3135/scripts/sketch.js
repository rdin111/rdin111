// sketch.js

function setup() {
    const canvas = createCanvas(710, 400); // Create a canvas of size 710x400
    canvas.parent('sketch-holder'); 
  
    initCanvas(); // Initialize canvas with a black background
  
    strokeWeight(10);
    colorMode(HSB);
  
    // Setup clear button
    const clearBtn = document.getElementById('clear-button');
    clearBtn.addEventListener('click', initCanvas);
  }
  
  
  function mouseDragged() {
    const hue = (mouseX - mouseY) % 360; // Calculate hue based on mouse position
    stroke(hue, 90, 90);   // Set stroke color based on hue
    line(pmouseX, pmouseY, mouseX, mouseY); // Draw line from previous to current mouse position
  }
  
  // Helper function to reset canvas
  function initCanvas() {
    background(0);
    describe('Interactive drawing: drag the mouse to create colorful lines.');
  }
  