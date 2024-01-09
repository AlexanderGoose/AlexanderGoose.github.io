document.addEventListener('DOMContentLoaded', function() {
    const pageLinks = document.querySelectorAll('.page-link');
    const overlay = document.querySelector('.overlay');
  
    pageLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();

        document.body.classList.add('no-scroll');
  
        // Slide in the black overlay from the right
        overlay.style.left = '0';
        overlay.style.opacity = '1';
  
        // Navigate to the new page after a delay (adjust as needed)
        const nextPage = this.getAttribute('href');
        setTimeout(() => {
          window.location.href = nextPage;
        }, 500); // 500 milliseconds (0.5 seconds) matches the transition duration
      });
    });
  });



  document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('lineGraph');
    const ctx = canvas.getContext('2d');
  
    // Set canvas size to fill the entire window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    // Parameters for the moving line graph
    const amplitude = canvas.height / 2;
    const frequency = 0.02; // Adjust the frequency for faster or slower oscillation
    let phase = 0;
  
    // Function to draw the moving line graph
    function drawMovingLineGraph() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      ctx.beginPath();
      ctx.moveTo(0, amplitude * Math.sin(phase) + canvas.height / 2);
  
      for (let x = 0; x < canvas.width; x += 5) {
        const y = amplitude * Math.sin(frequency * x + phase) + canvas.height / 2;
        ctx.lineTo(x, y);
      }
  
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
  
      // Increment the phase for the next frame
      phase += 0.05;
  
      // Call the next frame
      requestAnimationFrame(drawMovingLineGraph);
    }
  
    // Start the animation
    drawMovingLineGraph();
  
    // Resize canvas when the window is resized
    window.addEventListener('resize', function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  });