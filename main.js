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

(function cyberBackground(){
const canvas = document.getElementById("bg-stars");
if (!canvas) { console.warn("[cyber-bg] #bg-stars not found"); return; }

// TEMP: ignore reduced-motion so you can verify it works.
// Set HONOR_REDUCED_MOTION = true later if you want to respect the setting.
const HONOR_REDUCED_MOTION = false;
const prefersReduced =
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (HONOR_REDUCED_MOTION && prefersReduced) {
  console.log("[cyber-bg] reduced-motion on — animation skipped");
  return;
}
console.log("[cyber-bg] running");

  const ctx = canvas.getContext("2d");
  let w, h, DPR, particles = [], t = 0;

  function resize(){
    DPR = Math.min(window.devicePixelRatio || 1, 2);

    // Size the canvas to match the hero area precisely
    const hero = document.querySelector(".hero");
    const rect = hero
      ? hero.getBoundingClientRect()
      : { width: innerWidth, height: innerHeight * 0.65 };

    w = Math.floor(rect.width * DPR);
    h = Math.floor(rect.height * DPR);

    canvas.width = w;
    canvas.height = h;
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";

    // Rebuild particle field based on area
    const count = Math.floor((w * h) / 55000);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() * 0.6 + 0.2) * DPR,      // drift right
      vy: (Math.random() * 0.10 - 0.05) * DPR,    // slight vertical wobble
      l: Math.random() * 20 + 10,                 // streak length
      a: Math.random() * Math.PI * 2              // phase for twinkle
    }));
  }
// ==== Cyber Neon Background
  function drawBackground(){
    // base fill
    ctx.fillStyle = "#0b0f12";
    ctx.fillRect(0, 0, w, h);

    // two aurora-like radial glows
    const g1 = ctx.createRadialGradient(w * 0.2, h * 0.12, 0, w * 0.2, h * 0.12, h * 0.9);
    g1.addColorStop(0, "rgba(0,229,255,0.14)");
    g1.addColorStop(1, "rgba(0,0,0,0)");

    const g2 = ctx.createRadialGradient(w * 0.9, h * 0.95, 0, w * 0.9, h * 0.95, h * 1.2);
    g2.addColorStop(0, "rgba(57,255,20,0.12)");
    g2.addColorStop(1, "rgba(0,0,0,0)");

    ctx.globalCompositeOperation = "lighter";
    ctx.fillStyle = g1; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = g2; ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "source-over";
  }

  function drawGrid(){
    // subtle moving grid (diagonal + horizontal)
    ctx.save();
    const spacing = 40 * DPR;
    const offset = (t * 0.6) % spacing;

    // diagonal cyan lines
    ctx.strokeStyle = "rgba(0,229,255,0.08)";
    ctx.lineWidth = 1 * DPR;
    for (let x = -w; x < w * 2; x += spacing){
      ctx.beginPath();
      ctx.moveTo(x + offset, 0);
      ctx.lineTo(x + offset + h * 0.2, h);
      ctx.stroke();
    }

    // horizontal green lines
    ctx.strokeStyle = "rgba(57,255,20,0.06)";
    for (let y = 0; y < h; y += spacing){
      ctx.beginPath();
      ctx.moveTo(0, y + offset);
      ctx.lineTo(w, y + offset);
      ctx.stroke();
    }

    ctx.restore();
  }

  function drawParticles(){
    // neon data streaks (green + cyan)
    ctx.save();
    ctx.globalCompositeOperation = "lighter";

    for (const p of particles){
      p.x += p.vx; p.y += p.vy;
      if (p.x - p.l > w) { p.x = -10; p.y = Math.random() * h; }
      if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;

      const alpha = 0.12 + 0.12 * Math.sin(p.a += 0.08);

      // green base streak
      ctx.beginPath();
      ctx.strokeStyle = `rgba(57,255,20,${alpha})`;
      ctx.lineWidth = 1.2 * DPR;
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x - p.l, p.y);
      ctx.stroke();

      // cyan edge glow
      ctx.beginPath();
      ctx.strokeStyle = `rgba(0,229,255,${alpha * 0.8})`;
      ctx.lineWidth = 0.7 * DPR;
      ctx.moveTo(p.x, p.y + 1);
      ctx.lineTo(p.x - p.l * 0.6, p.y + 1);
      ctx.stroke();
    }

    ctx.restore();
  }

  function drawScanlines(){
    // faint CRT scanlines
    const lineH = 3 * DPR;
    ctx.save();
    ctx.globalAlpha = 0.06;
    ctx.fillStyle = "#000";
    for (let y = 0; y < h; y += lineH * 2){
      ctx.fillRect(0, y, w, lineH);
    }
    ctx.restore();
  }

  function tick(){
    t += 1;
    ctx.clearRect(0, 0, w, h);
    drawBackground();
    drawGrid();
    drawParticles();
    drawScanlines();
    requestAnimationFrame(tick);
  }

  resize();
  tick();
  window.addEventListener("resize", resize);
})();
// ---------- Animated counters for stat boxes ----------
// Usage in HTML:
// <div class="stat-value" data-count="4" data-suffix="+">0</div>
(function counters(){
  const items = $$("[data-count]");
  if (!items.length) return;

  const duration = 1200; // ms
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (!entry.isIntersecting) return;
      io.unobserve(entry.target);
      const el = entry.target;
      const target = parseFloat(el.dataset.count || "0");
      const suffix = el.dataset.suffix || "";
      const start = performance.now();

      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        const val = Math.floor(target * eased);
        el.textContent = val + suffix;
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(step);
    });
  }, {threshold: 0.3});

  items.forEach(el => io.observe(el));
})();

// ---------- Smooth scroll with sticky-header offset ----------
(function smoothScroll(){
  const header = $("header") || document.body;
  const getOffset = () => {
    const style = getComputedStyle(header);
    const sticky = /(sticky|fixed)/.test(style.position);
    return sticky ? header.offsetHeight : 0;
  };

  const isHashLink = (a) => a.hash && a.hash.startsWith("#") && $(a.hash);

  document.addEventListener("click", (e)=>{
    const a = e.target.closest('a[href^="#"]');
    if (!a || !isHashLink(a)) return;
    e.preventDefault();
    const target = $(a.hash);
    const top = target.getBoundingClientRect().top + window.scrollY - (getOffset() + 12);
    window.scrollTo({ top, behavior: "smooth" });
    // move focus for a11y
    target.setAttribute("tabindex","-1");
    target.focus({ preventScroll: true });
    setTimeout(()=> target.removeAttribute("tabindex"), 600);

    // close mobile menu if open
    if (navMenu?.classList.contains("open")) {
      navMenu.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
      navToggle?.focus();
    }
  });
})();

// ---------- External link hardening ----------
(function hardenExternalLinks(){
  $$('a[href^="http"]').forEach(a=>{
    try{
      const url = new URL(a.href);
      if (url.host !== location.host){
        a.target = "_blank";
        const rel = (a.getAttribute("rel") || "").split(/\s+/);
        if (!rel.includes("noopener")) rel.push("noopener");
        a.setAttribute("rel", rel.join(" ").trim());
      }
    }catch(_){}
  });
})();

// ---------- Mobile nav a11y: Esc, click-outside, focus trap ----------
(function navA11y(){
  if (!navToggle || !navMenu) return;

  // Close on Esc
  document.addEventListener("keydown", (e)=>{
    if (e.key === "Escape" && navMenu.classList.contains("open")){
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.focus();
    }
  });

  // Click outside to close
  document.addEventListener("click", (e)=>{
    if (!navMenu.classList.contains("open")) return;
    const within = e.target === navMenu || navMenu.contains(e.target) || e.target === navToggle;
    if (!within){
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Minimal focus trap when open
  const focusablesSel = 'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
  document.addEventListener("keydown", (e)=>{
    if (e.key !== "Tab" || !navMenu.classList.contains("open")) return;
    const focusables = $$(focusablesSel, navMenu).filter(el => !el.hasAttribute("disabled"));
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first){ last.focus(); e.preventDefault(); }
    else if (!e.shiftKey && document.activeElement === last){ first.focus(); e.preventDefault(); }
  });
})();

// ---------- Lazy-load images with data-src ----------
(function lazyImages(){
  const imgs = $$('img[data-src]');
  if (!imgs.length || !("IntersectionObserver" in window)) return;

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (!entry.isIntersecting) return;
      const img = entry.target;
      io.unobserve(img);
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
      img.addEventListener("load", ()=> img.classList.add("loaded"), {once:true});
    });
  }, {rootMargin: "200px 0px"});

  imgs.forEach(img => io.observe(img));
})();

// ---------- Tiny parallax (optional) ----------
(function parallax(){
  if (prefersReduced) return;
  const els = $$(".parallax");
  if (!els.length) return;

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(()=>{
      const vh = window.innerHeight;
      els.forEach(el=>{
        const rect = el.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, 1 - rect.top / vh)); // 0..1
        const translate = Math.round(progress * -12); // px
        el.style.transform = `translateY(${translate}px)`;
      });
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, {passive:true});
  onScroll();
})();