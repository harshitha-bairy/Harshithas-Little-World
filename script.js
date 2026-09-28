// Tiny interactions — intentionally simple and lightweight.
document.querySelectorAll(".place").forEach((place) => {
  place.addEventListener("mouseenter", () => {
    place.style.transform = "translateY(-4px)";
    place.style.transition = "transform .25s ease";
  });
  place.addEventListener("mouseleave", () => {
    place.style.transform = "translateY(0)";
  });
});

const hero = document.querySelector(".hero-collage");
if (hero && window.matchMedia("(min-width: 801px)").matches) {
  hero.addEventListener("mousemove", (e) => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    hero.querySelector(".photo-main").style.transform =
      `translate(${x * 7}px, ${y * 7}px) rotate(3deg)`;
    hero.querySelector(".photo-small").style.transform =
      `translate(${x * -9}px, ${y * -9}px) rotate(-7deg)`;
  });
}
