const btn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  btn.setAttribute("aria-expanded", String(isOpen));
});
