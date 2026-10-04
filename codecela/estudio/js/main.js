/* CodeCela — interacciones del sitio de marca */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Reloj de Celaya en la barra superior */
  function tick() {
    var el = document.getElementById("reloj");
    if (!el) return;
    try {
      var hora = new Date().toLocaleTimeString("es-MX", {
        timeZone: "America/Mexico_City",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      });
      el.textContent = "Celaya · " + hora;
    } catch (e) {
      el.textContent = "Celaya";
    }
  }
  tick();
  setInterval(tick, 30000);

  /* Revelados al entrar en viewport */
  var rvs = document.querySelectorAll(".rv");
  if (reduce || !("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(rvs, function (el) {
      el.classList.add("is-in");
    });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    Array.prototype.forEach.call(rvs, function (el) { io.observe(el); });
  }

  /* Puntos laterales: sección activa */
  var dots = document.querySelectorAll(".dot[data-dot]");
  if (dots.length && "IntersectionObserver" in window) {
    var map = {};
    var sections = [];
    Array.prototype.forEach.call(dots, function (dot) {
      var id = dot.getAttribute("data-dot");
      var sec = document.getElementById(id);
      if (sec) {
        map[id] = dot;
        sections.push(sec);
      }
    });

    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          Array.prototype.forEach.call(dots, function (d) {
            d.classList.remove("is-on");
          });
          if (map[entry.target.id]) map[entry.target.id].classList.add("is-on");
        }
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    sections.forEach(function (s) { io2.observe(s); });
  }
})();
