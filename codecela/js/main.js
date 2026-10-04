/* =============================================================
   CodeCela · main.js
   Patrón IIFE · clásico defer · sin imports · sin módulos.
   Cada init va envuelta en safe().
   ============================================================= */
(function () {
  "use strict";

  /* -- helpers -- */
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };

  function safe(fn, name) {
    try { fn(); }
    catch (e) { if (window.console) console.warn("[codecela:" + name + "]", e); }
  }

  /* =========================================================
     1. Navegación: fija al hacer scroll + cierra menú móvil
     ========================================================= */
  function initNav() {
    var nav = $(".nav");
    if (!nav) return;
    var on = function () {
      if (scrollY > 80) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    // Cierra <details> del menú móvil al elegir un enlace
    $$(".nav-mobile a").forEach(function (a) {
      a.addEventListener("click", function () {
        var d = $(".nav-mobile");
        if (d) d.removeAttribute("open");
      });
    });
  }

  /* =========================================================
     2. Scroll suave en anclas
     ========================================================= */
  function initAnchors() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var off = 80;
      window.scrollTo({
        top: el.getBoundingClientRect().top + scrollY - off,
        behavior: reduced ? "auto" : "smooth"
      });
    });
  }

  /* =========================================================
     3. Revelado en scroll (IntersectionObserver)
     ========================================================= */
  function initReveals() {
    var els = $$("[data-reveal]");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-revealed");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.01, rootMargin: "0px 0px -4% 0px" });
    els.forEach(function (el) { io.observe(el); });
    setTimeout(function () {
      els.forEach(function (el) {
        if (!el.classList.contains("is-revealed") && el.getBoundingClientRect().top < innerHeight) {
          el.classList.add("is-revealed");
        }
      });
    }, 6000);
  }

  /* =========================================================
     4. Terminal: efecto de compilación + revelado de preview
     ========================================================= */
  function initTerminal() {
    var term = document.querySelector("[data-term]");
    if (!term) return;
    var code = term.querySelector(".term-code");
    var lines = code ? code.querySelectorAll(".term-line") : [];
    if (!lines.length) return;

    if (reduced) {
      // Sin animación: revelar preview inmediato, quitar cursor
      var cur = term.querySelector(".cursor-blink");
      if (cur) cur.remove();
      $$(".term-preview > *").forEach(function (p) { p.classList.add("is-on"); });
      return;
    }

    var preview = term.querySelectorAll(".term-preview > *");
    term.classList.add("term-loading");

    (async function () {
      // Barrido de líneas (simula compilación)
      for (var i = 0; i < lines.length; i++) {
        lines[i].classList.add("is-active");
        await wait(80);
        lines[i].classList.remove("is-active");
      }
      // Quitar cursor al terminar
      var cur = term.querySelector(".cursor-blink");
      if (cur) cur.remove();
      // Revelar preview con stagger
      for (var j = 0; j < preview.length; j++) {
        preview[j].classList.add("is-on");
        await wait(180);
      }
      term.classList.remove("term-loading");
    })();
  }

  /* =========================================================
     6. Formulario de contacto → mailto
     ========================================================= */
  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var fd = new FormData(form);
      var name = fd.get("name") || "";
      var biz = fd.get("business") || "";
      var plan = (form.querySelector("#c-plan") || {}).value || "";
      var email = fd.get("email") || "";
      var subject = "Cotización desde CodeCela — " + (biz || name);
      var body = "Hola, soy " + name + ".\n"
               + "Negocio: " + biz + ".\n"
               + "Plan de interés: " + (plan || "sin especificar") + ".\n"
               + "Email: " + email + ".\n\n"
               + "Cuéntame sobre tu negocio.";
      var mailto = "mailto:franco.codecela@gmail.com?"
                 + "subject=" + encodeURIComponent(subject)
                 + "&body=" + encodeURIComponent(body);
      form.innerHTML = '<p class="form-ok">Recibido. Te escribo en breve.</p>';
      setTimeout(function () { location.href = mailto; }, 400);
    });
  }

  /* =========================================================
     7. Boot
     ========================================================= */
  function boot() {
    safe(initNav, "nav");
    safe(initAnchors, "anchors");
    safe(initReveals, "reveals");
    safe(initTerminal, "terminal");
    safe(initContactForm, "contact");
    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
