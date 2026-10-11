document.addEventListener('DOMContentLoaded', () => {
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

  // Apply reveal to content blocks on city pages as well as landing page
  document.querySelectorAll('.info-block').forEach((el) => {
    el.classList.add('reveal');
  });
  document.querySelectorAll('.page-hero-inner').forEach((el) => {
    el.classList.add('reveal');
  });

  const revealTargets = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((el) => observer.observe(el));

  const heroBackdrop = document.querySelector('.hero-backdrop');
  const glowOne = document.querySelector('.glow-one');
  const glowTwo = document.querySelector('.glow-two');
  if (heroBackdrop) {
    const onScroll = () => {
      const y = window.scrollY;
      const t = Math.min(1, y / 800);
      heroBackdrop.style.transform = `scale(${1 + t * 0.08}) translateY(${ -y * 0.12 }px)`;
      if (glowOne) glowOne.style.transform = `translateY(${ -y * 0.06 }px) translateX(${ y * 0.02 }px)`;
      if (glowTwo) glowTwo.style.transform = `translateY(${ -y * 0.05 }px) translateX(${ -y * 0.015 }px)`;
    };
    window.addEventListener('scroll', () => requestAnimationFrame(onScroll), { passive: true });
  }

  const cards = document.querySelectorAll('.city-card');
  cards.forEach((card) => {
    const inner = document.createElement('div');
    inner.className = 'city-card-inner-tilt';
    while (card.firstChild) { inner.appendChild(card.firstChild); }
    card.appendChild(inner);

    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (py - 0.5) * 8;
      const ry = (px - 0.5) * -10;
      inner.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(4px)`;
    });

    card.addEventListener('pointerleave', () => {
      inner.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });

    card.addEventListener('mouseenter', () => card.classList.add('hover-float'));
    card.addEventListener('mouseleave', () => card.classList.remove('hover-float'));
  });

  const metricBoxes = document.querySelectorAll('.metric-box strong');
  metricBoxes.forEach((el) => {
    const raw = el.textContent.trim();
    const target = parseInt(raw.replace(/[^\d]/g, ''), 10);
    if (!Number.isFinite(target)) return;
    const start = performance.now();
    const duration = 1200;
    const tick = (ts) => {
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    };
    el.textContent = '0';
    requestAnimationFrame(tick);
  });
});
