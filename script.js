// Functionality For Toggle text on clicking Buttons
let btns = document.querySelectorAll('.btn-row button');
let text = document.querySelectorAll('.service-content p');

function hideAllText() {
    text.forEach((p) => {
        p.style.display = 'none';
    });
}

// Initially hide all texts except the first one
hideAllText();
if (text[0]) text[0].style.display = 'block';

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        hideAllText();
        text[index].style.display = 'block';
        btns.forEach(b => b.classList.remove('btn-active'));
        btn.classList.add('btn-active');
    });
});


// --------------------------------------------------------------------------------------------------------------------------------


// Functionality For Slider
document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.querySelector(".marquee-inner");
    const speed = 1; // Scrolling Speed
    let scrollAmount = 0;
    let isHovered = false;
  
    // Duplicates the content
    const marqueeContent = marquee.innerHTML;
    marquee.innerHTML += marqueeContent;
  
    const startScrolling = () => {
      if (!isHovered) {
        scrollAmount -= speed;
        if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
          scrollAmount = 0;
        }
        marquee.style.transform = `translateX(${scrollAmount}px)`;
      }
      requestAnimationFrame(startScrolling);
    };
  
    marquee.addEventListener("mouseover", () => {
      isHovered = true;
    });
  
    marquee.addEventListener("mouseout", () => {
      isHovered = false;
    });
  
    startScrolling();
  });



     // --------------------------------------------------------------------------------------------------------------------------------

    // Functionality for animating the number count
    document.addEventListener('DOMContentLoaded', () => {
    const countElements = document.querySelectorAll('.box-row .box span');
    let hasAnimated = false; // Flag to prevent multiple triggers
  
    const startCounting = (element) => {
      const targetCount = parseInt(element.getAttribute('data-count'), 10);
      let currentCount = 0;
      const duration = 2000; // Total duration of the animation in milliseconds (4 seconds)
      const startTime = performance.now(); // Get the current time
  
      const updateCount = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Ensure the progress does not exceed 1
        currentCount = Math.floor(progress * targetCount);
  
        element.textContent = currentCount.toLocaleString();
  
        if (progress < 1) {
          requestAnimationFrame(updateCount); // Continue animation
        } else {
          element.textContent = targetCount.toLocaleString(); // Ensure final value is displayed
        }
      };
  
      requestAnimationFrame(updateCount); // Start the animation
    };
  
    const checkScrollPosition = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 2200; // Set your trigger scroll position
  
      if (scrollPosition >= triggerPosition && !hasAnimated) {
        countElements.forEach((element) => {
          startCounting(element);
        });
        hasAnimated = true; // Ensure the animation runs only once
      }
    };
  
    window.addEventListener('scroll', checkScrollPosition);
  });

  //   ------------------------------------------------------------------------------------------------------------------------------------

// Functionality For Back To Top Button
let backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', () => {
    window.scrollTo(0,0);
})

