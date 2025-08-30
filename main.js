// Helpers
const $ = (sel, parent=document) => parent.querySelector(sel);
const $$ = (sel, parent=document) => [...parent.querySelectorAll(sel)];

// Mobile nav
const navToggle = $(".nav-toggle");
const navMenu = $("#nav-menu");
if (navToggle && navMenu){
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  $$(".nav-link", navMenu).forEach(a => a.addEventListener("click", ()=>{
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }));
}

// ScrollSpy
const sections = $$(".section");
const links = $$(".nav-link");
const spy = () => {
  const fromTop = window.scrollY + 100;
  sections.forEach(sec => {
    if (sec.offsetTop <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop){
      links.forEach(l => l.classList.remove("active"));
      const id = sec.getAttribute("id");
      const link = $(`.nav-link[href="#${id}"]`);
      if (link) link.classList.add("active");
    }
  });
};
window.addEventListener("scroll", spy);
spy();

// Reveal on scroll
if ("IntersectionObserver" in window){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e => {
      if (e.isIntersecting){ e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, {threshold: 0.2});
  $$(".reveal").forEach(el => io.observe(el));
}

// Typewriter (no external libs)
(function typewriter(){
  const el = $("#typewriter-text");
  if (!el) return;
  let lines = [];
  try { lines = JSON.parse(el.dataset.lines || "[]"); } catch(e){}
  const speed = 28;       // ms per char
  const pause = 700;      // ms after each line
  let i = 0;

  const write = () => {
    const text = lines[i] || "";
    el.textContent = "";
    let j = 0;
    const tick = () => {
      el.textContent = text.slice(0, j++);
      if (j <= text.length) requestAnimationFrame(tick);
      else setTimeout(()=>{ i = (i+1) % lines.length; write(); }, pause);
    };
    tick();
  };
  write();
})();

// Footer year
const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
