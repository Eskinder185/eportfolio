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
    entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, {threshold: 0.2});
  $$(".reveal").forEach(el => io.observe(el));
}

// Typewriter (no external libs)
(function typewriter(){
  const el = $("#typewriter-text");
  if (!el) return;
  let lines = [];
  try { lines = JSON.parse(el.dataset.lines || "[]"); } catch(e){}
  const speed = 28, pause = 700;
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

// Top progress bar
const progress = $("#progress");
const onScroll = () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
  progress.style.width = (scrolled * 100) + "%";
};
window.addEventListener("scroll", onScroll);
onScroll();

// Card tilt (subtle 3D)
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReduced){
  $$(".tilt").forEach(card => {
    const strength = 10; // deg
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateY(${px*strength}deg) rotateX(${-py*strength}deg) translateZ(0)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

// Background stars (canvas)
(function stars(){
  const canvas = $("#bg-stars");
  if (!canvas || prefersReduced) return;
  const ctx = canvas.getContext("2d");
  let w, h, stars;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  function resize(){
    w = canvas.width = Math.floor(innerWidth * DPR);
    h = canvas.height = Math.floor(innerHeight * 0.6 * DPR); // hero area
    canvas.style.height = Math.floor(innerHeight * 0.6) + "px";
    canvas.style.width = "100%";
    stars = Array.from({length: Math.floor((w*h)/35000)}, () => ({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*1.8 + .2,
      a: Math.random()*1,
      v: (Math.random()*0.3 + 0.1) * DPR
    }));
  }

  function tick(){
    ctx.clearRect(0,0,w,h);
    ctx.globalCompositeOperation = "lighter";
    for (const s of stars){
      s.a += 0.02;
      const twinkle = 0.5 + 0.5*Math.sin(s.a);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(57,255,20,${0.15*twinkle})`;
      ctx.fill();
      // subtle drift
      s.x += s.v*0.02;
      if (s.x > w) s.x = 0;
    }
    requestAnimationFrame(tick);
  }

  resize();
  tick();
  window.addEventListener("resize", resize);
})();
