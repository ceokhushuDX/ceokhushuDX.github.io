const faders = document.querySelectorAll('.fade-up, .fade-up-delay, .fade-up-delay-2, .fade-side');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

faders.forEach(fade => observer.observe(fade));
