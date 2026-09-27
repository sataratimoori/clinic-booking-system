const section = document.querySelector("#quality");
const counters = document.querySelectorAll(".stat-item strong");

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);
      const duration = 1500;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        const easedProgress = 1 - Math.pow(1 - progress, 3);

        const current = Math.floor(easedProgress * target);

        counter.textContent = current + "+";

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      }

      requestAnimationFrame(updateCounter);
      observer.unobserve(section);
    });
  }
});

observer.observe(section);
