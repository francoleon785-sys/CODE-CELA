// window.__BRAND__ = 'Panel Taller';

window.__BRAND__ = {
  name: 'Panel Taller',
  version: '1.0.0',
  color: '#E8850B',
  apiBase: '/api',
  supabaseUrl: 'https://umeblauueaspcmveqkjh.supabase.co'
};

window.__LIBRARY__ = {
  $(sel) { return document.querySelector(sel); },
  $$(sel) { return document.querySelectorAll(sel); },
  on(el, event, fn, opts) { el.addEventListener(event, fn, opts); },
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: '✓', error: '✕', info: 'ℹ' };
    toast.innerHTML = `<span>${icons[type] || 'ℹ'}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(100%)'; }, 3000);
    setTimeout(() => toast.remove(), 3400);
  },
  navigateTo(section) {
    this.$$('.section-panel').forEach(p => p.classList.remove('active'));
    this.$$('.nav-item').forEach(n => n.classList.remove('active'));
    const panel = document.getElementById(`panel-${section}`);
    if (panel) panel.classList.add('active');
    const nav = document.querySelector(`.nav-item[data-section="${section}"]`);
    if (nav) nav.classList.add('active');
    const titles = { dashboard: 'Panel Principal', clients: 'Clientes', services: 'Servicios', appointments: 'Turnos', inventory: 'Inventario', settings: 'Configuración' };
    const h1 = document.querySelector('.header-left h1');
    if (h1) h1.textContent = titles[section] || 'Panel';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  formatDate(dateStr) { return new Date(dateStr).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }); },
  formatTime(dateStr) { return new Date(dateStr).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }); },
  generateId() { return Date.now().toString(36) + Math.random().toString(36).substr(2, 5); },
  safe(fn) { return function(...args) { try { return fn.apply(this, args); } catch(e) { console.error('Safe error:', e); } }; },
  initIntersectionObserver(selector, callback, opts = {}) {
    const el = document.querySelector(selector);
    if (!el) return;
    const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { callback(entry); observer.unobserve(entry.target); } }); }, { threshold: 0.05, ...opts });
    observer.observe(el);
  },
  loadData(key) { try { return JSON.parse(localStorage.getItem(`panel_${key}`)) || null; } catch(e) { return null; } },
  saveData(key, data) { try { localStorage.setItem(`panel_${key}`, JSON.stringify(data)); } catch(e) { console.error('Save error:', e); } }
};
