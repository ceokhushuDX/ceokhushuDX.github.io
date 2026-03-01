/* CUSTOM CURSOR */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

/* 3D Tilt Effect */
document.querySelectorAll(".tilt").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  });
});

/* GSAP ANIMATIONS */
gsap.from(".hero-content h1", { opacity: 0, y: 40, duration: 1 });
gsap.from(".hero-content p", { opacity: 0, y: 40, delay: 0.3, duration: 1 });
gsap.from(".btn", { opacity: 0, y: 40, delay: 0.6, duration: 1 });

gsap.from(".hero-img", {
  opacity: 0,
  x: 100,
  delay: 0.7,
  duration: 1.2
});

/* Scroll Animations */
gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
    },
    y: 60,
    opacity: 0,
    duration: 1,
  });
});


