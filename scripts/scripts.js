document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS library
    AOS.init();
  
    // Select the navigation element
    const nav = document.querySelector('nav');
  
    // Add scroll event listener
    window.addEventListener('scroll', function() {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;
      console.log('Scroll Position:', scrollPosition);
  
      // Set the background color based on scroll position
      if (scrollPosition > 0) {
        nav.style.backgroundColor = 'orange';
      } else {
        nav.style.backgroundColor = 'lightgray';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('image-container');
    let isImageVisible = false;

    window.addEventListener('scroll', function() {
        // Get the current scroll position
        const scrollPosition = window.scrollY;

        // Check if the scroll position is greater than a threshold (e.g., 500)
        if (scrollPosition > 500 && !isImageVisible) {
            // Scroll down: show the image and flip animation
            imageContainer.classList.remove('hidden');
            imageContainer.classList.add('flip');
            isImageVisible = true;
        } else if (scrollPosition <= 500 && isImageVisible) {
            // Scroll up: hide the image and reset flip animation
            imageContainer.classList.add('hidden');
            imageContainer.classList.remove('flip');
            isImageVisible = false;
        }
    });
});

