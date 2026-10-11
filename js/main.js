// Enhanced interaction script: parallax, counters, tilt and staggered reveal
(function(){
  function createDotPills(){
    const navPills = document.querySelectorAll('.nav-pill');
    navPills.forEach((pill) => {
      if (pill.dataset._decorated) return;
      const dot = document.createElement('span');
      dot.style.display = 'inline-block';
      dot.style.width = '8px';
      dot.style.height = '8px';
      dot.style.borderRadius = '50%';
      dot.style.background = 'linear-gradient(135deg, #dffaff, #42b3d8)';
      dot.style.boxShadow = '0 0 0 3px rgba(126, 219, 255, 0.18)';
      dot.style.marginRight = '0.12rem';
      pill.insertBefore(dot, pill.firstChild);
      pill.dataset._decorated = '1';
    });
  }

  function initReveal(){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // once visible, unobserve to avoid repeated triggers
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  function initParallax(){
    const heroBackdrop = document.querySelector('.hero-backdrop');
    const glowOne = document.querySelector('.glow-one');
    const glowTwo = document.querySelector('.glow-two');
    if (!heroBackdrop) return;

    let lastY = window.scrollY;
    function onScroll(){
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;
      const t = Math.min(1, y / 800);
      // move backdrop slower
      heroBackdrop.style.transform = `scale(${1 + t*0.06}) translateY(${ -y * 0.12 }px)`;
      if (glowOne) glowOne.style.transform = `translateY(${ -y * 0.06 }px) translateX(${ y * 0.02 }px)`;
      if (glowTwo) glowTwo.style.transform = `translateY(${ -y * 0.03 }px) translateX(${ -y * 0.01 }px)`;
    }

    document.addEventListener('scroll', throttle(onScroll, 16), { passive: true });
  }

  function throttle(fn, wait){
    let t = null; let last = 0;
    return function(){
      const now = Date.now();
      if (!last || now - last >= wait){ fn.apply(this, arguments); last = now }
      else { clearTimeout(t); t = setTimeout(()=>{ fn.apply(this, arguments); last = Date.now() }, wait - (now - last)) }
    }
  }

  function animateCounters(){
    const boxes = document.querySelectorAll('.metric-box strong');
    boxes.forEach((el) => {
      const raw = el.textContent.trim();
      // only animate if content is numeric
      const target = parseInt(raw.replace(/[,+]/g,''),10);
      if (!isFinite(target)) return;
      el.textContent = '0';
      const duration = 1200 + Math.min(1600, target*12);
      const start = performance.now();
      requestAnimationFrame(function step(ts){
        const t = Math.min(1, (ts - start)/duration);
        const ease = easeOutCubic(t);
        const val = Math.round(target * ease);
        el.textContent = val.toLocaleString();
        if (t < 1) requestAnimationFrame(step);
        else el.parentElement.classList.add('animated');
      });
    });

    // trigger when metrics are visible
    const mBoxes = document.querySelectorAll('.metric-box');
    if (mBoxes.length){
      const ob = new IntersectionObserver((entries,obx) => {
        entries.forEach(en => {
          if (en.isIntersecting){
            animateCounters();
            obx.disconnect();
          }
        })
      },{ threshold: 0.2 });
      // observe first metric-box parent wrapper
      mBoxes[0] && ob.observe(mBoxes[0]);
    }
  }

  function easeOutCubic(t){ return 1 - Math.pow(1 - t, 3); }

  function initCardTilt(){
    document.querySelectorAll('.city-card').forEach(card => {
      // create inner wrapper to tilt
      if (!card.querySelector('.city-card-inner-tilt')){
        const inner = document.createElement('div');
        inner.className = 'city-card-inner-tilt';
        while (card.firstChild) inner.appendChild(card.firstChild);
        card.appendChild(inner);
      }
      const inner = card.querySelector('.city-card-inner-tilt');

      card.addEventListener('pointermove', (e)=>{
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (py - 0.5) * 6; // rotateX
        const ry = (px - 0.5) * -10; // rotateY
        inner.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
      });
      card.addEventListener('pointerleave', ()=>{
        inner.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      });

      // add gentle float on hover
      card.addEventListener('mouseenter', ()=>{ card.classList.add('hover-float') });
      card.addEventListener('mouseleave', ()=>{ card.classList.remove('hover-float') });
    });
  }

  // Stagger entrance for city cards when the grid becomes visible
  function initCardStagger(){
    const grid = document.querySelector('.city-grid');
    if (!grid) return;
    const ob = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          const cards = grid.querySelectorAll('.city-card');
          cards.forEach((c, i) => setTimeout(()=> c.classList.add('visible'), i*80));
          obs.disconnect();
        }
      });
    }, { threshold: 0.12 });
    ob.observe(grid);
  }

  // On DOM ready initialize
  function init(){
    createDotPills();
    initReveal();
    initParallax();
    initCardTilt();
    initCardStagger();
    // counters: only run once reveal triggers; using a small delay
    setTimeout(()=>{
      // directly attempt to animate numeric counters present
      const nums = document.querySelectorAll('.metric-box strong');
      if (nums && nums.length) animateCounters();
    }, 600);
  }

  // Run init after DOM loaded
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  // expose for debug
  window.__YEYEFENG = { init }; 
})();
