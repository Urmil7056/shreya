<script>
    let current = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    let slideInterval;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      current = index;
    }

    function moveSlide(step) {
      let newIndex = (current + step + totalSlides) % totalSlides;
      showSlide(newIndex);
    }
    
    function currentSlide(index) {
        showSlide(index);
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            moveSlide(1);
        }, 4000);
    }

    document.querySelector('.prev').addEventListener('click', () => {
        moveSlide(-1);
        resetInterval();
    });

    document.querySelector('.next').addEventListener('click', () => {
        moveSlide(1);
        resetInterval();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide(index);
            resetInterval();
        });
    });

    resetInterval();
  </script>