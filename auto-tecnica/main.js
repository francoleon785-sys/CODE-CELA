/**
 * Auto Técnica Automotriz — JS nativo, sin librerías
 * Intersección para revelados, scroll para float y parallax
 */
(function () {
  'use strict';

  /* ---- Reveals (IntersectionObserver) ---- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  /* ---- WhatsApp float (a los 400px) ---- */
  const wa = document.getElementById('whatsappFabContainer');
  let showing = false;
  function toggleWa() {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (!wa) return;
    if (y > 400 && !showing) {
      showing = true;
      wa.classList.add('is-visible');
    } else if (y <= 400 && showing) {
      showing = false;
      wa.classList.remove('is-visible');
    }
  }
  window.addEventListener('scroll', toggleWa, { passive: true });
  toggleWa(); // estado inicial

  /* ---- Hero parallax sutil (translateY) ---- */
  const heroImg = document.querySelector('.hero-bg-photo');
  if (heroImg) {
    function heroParallax() {
      const y = window.scrollY || document.documentElement.scrollTop;
      const max = 300;
      const p = Math.min(y, max) / max;
      heroImg.style.transform = 'translateY(' + (p * 40) + 'px) scale(1.05)';
    }
    window.addEventListener('scroll', heroParallax, { passive: true });
    heroParallax();
  }

  /* ---- Línea a línea del H1 (solo hero) ---- */
  const heroH1 = document.querySelector('.hero-h1');
  if (heroH1) {
    const lines = heroH1.querySelectorAll('span');
    lines.forEach((line, i) => {
      line.style.opacity = '0';
      line.style.transform = 'translateY(14px)';
      line.style.transition = 'opacity .7s ease ' + (i * 0.15) + 's, transform .7s ease ' + (i * 0.15) + 's';
    });
    // Disparar tras carga
    requestAnimationFrame(() => {
      setTimeout(() => {
        lines.forEach((line) => {
          line.style.opacity = '1';
          line.style.transform = 'translateY(0)';
        });
      }, 120);
    });
  }
})();


