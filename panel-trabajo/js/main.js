(function() {
  'use strict';

  const LIB = window.__LIBRARY__;
const navigateTo = (section) => {
  LIB.$$('.section-panel').forEach(p => p.classList.remove('active'));
  LIB.$$('.nav-item').forEach(n => n.classList.remove('active'));
  const panel = document.getElementById(`panel-${section}`);
  if (panel) panel.classList.add('active');
  const nav = document.querySelector(`.nav-item[data-section="${section}"]`);
  if (nav) nav.classList.add('active');
  const titles = { dashboard: 'Panel Principal', clients: 'Clientes', services: 'Servicios', appointments: 'Turnos', inventory: 'Inventario', settings: 'Configuración' };
  const h1 = document.querySelector('.header-left h1');
  if (h1) h1.textContent = titles[section] || 'Panel';
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
const showToast = LIB.showToast.bind(LIB);
const formatDate = LIB.formatDate.bind(LIB);
const formatTime = LIB.formatTime.bind(LIB);

  let currentSection = 'dashboard';

  const mockData = {
    clients: [
      { id: 1, name: 'Carlos Méndez', phone: '+52 55 1234 5678', service: 'Cambio de aceite', status: 'active', date: '2026-09-12', vehicle: 'Toyota Hilux 2020' },
      { id: 2, name: 'Ana Rodríguez', phone: '+52 55 9876 5432', service: 'Frenos', status: 'pending', date: '2026-09-11', vehicle: 'Honda Civic 2019' },
      { id: 3, name: 'Luis García', phone: '+52 55 4567 8901', service: 'Alineación', status: 'completed', date: '2026-09-10', vehicle: 'VW Golf 2021' },
      { id: 4, name: 'María López', phone: '+52 55 3456 7890', service: 'Transmisión', status: 'pending', date: '2026-09-13', vehicle: 'Chevrolet Silverado' },
      { id: 5, name: 'Pedro Sánchez', phone: '+52 55 2345 6789', service: 'Revisión general', status: 'active', date: '2026-09-12', vehicle: 'Nissan Sentra 2018' },
    ],
    appointments: [
      { id: 1, client: 'Carlos Méndez', time: '09:00', service: 'Cambio de aceite', status: 'confirmed' },
      { id: 2, client: 'Ana Rodríguez', time: '10:30', service: 'Frenos', status: 'confirmed' },
      { id: 3, client: 'María López', time: '11:00', service: 'Transmisión', status: 'pending' },
      { id: 4, client: 'Pedro Sánchez', time: '14:00', service: 'Revisión general', status: 'confirmed' },
      { id: 5, client: 'Luis García', time: '15:30', service: 'Alineación', status: 'completed' },
    ],
    inventory: [
      { name: 'Aceite 10W-40', qty: 45, unit: 'litros', status: 'ok' },
      { name: 'Filtro de aceite', qty: 30, unit: 'piezas', status: 'ok' },
      { name: 'Pastillas de freno', qty: 8, unit: 'juegos', status: 'low' },
      { name: 'Batería 12V', qty: 3, unit: 'piezas', status: 'low' },
      { name: 'Aceite de transmisión', qty: 12, unit: 'litros', status: 'ok' },
      { name: 'Bujías', qty: 0, unit: 'piezas', status: 'low' },
      { name: 'Línea de freno', qty: 15, unit: 'metros', status: 'ok' },
      { name: 'Filtro de aire', qty: 25, unit: 'piezas', status: 'ok' },
    ],
    services: [
      { name: 'Cambio de aceite', price: 450, time: '30 min' },
      { name: 'Frenos (juego)', price: 1200, time: '1.5 hrs' },
      { name: 'Alineación', price: 800, time: '1 hr' },
      { name: 'Transmisión', price: 2500, time: '3 hrs' },
      { name: 'Revisión general', price: 650, time: '2 hrs' },
      { name: 'Batería', price: 1800, time: '1 hrs' },
    ],
    stats: { clients: 127, appointments: 34, revenue: 18450, pending: 8 }
  };

  function renderDashboard() {
    const stats = mockData.stats;
    return `
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-header">
            <div class="stat-icon amber">👥</div>
            <span class="stat-change up">+12%</span>
          </div>
          <div class="stat-value">${stats.clients}</div>
          <div class="stat-label">Clientes activos</div>
        </div>
        <div class="stat-card">
          <div class="stat-header">
            <div class="stat-icon blue">📅</div>
            <span class="stat-change up">+8%</span>
          </div>
          <div class="stat-value">${stats.appointments}</div>
          <div class="stat-label">Turnos hoy</div>
        </div>
        <div class="stat-card">
          <div class="stat-header">
            <div class="stat-icon green">💰</div>
            <span class="stat-change up">+23%</span>
          </div>
          <div class="stat-value">$${stats.revenue.toLocaleString()}</div>
          <div class="stat-label">Ingresos del mes</div>
        </div>
        <div class="stat-card">
          <div class="stat-header">
            <div class="stat-icon red">⏳</div>
            <span class="stat-change down">-5%</span>
          </div>
          <div class="stat-value">${stats.pending}</div>
          <div class="stat-label">Pendientes</div>
        </div>
      </div>
      <div class="dashboard-top">
        <div class="card">
          <div class="card-header">
            <h2>📊 Ingresos últimos 7 días</h2>
            <button class="card-action">Ver reporte</button>
          </div>
          <div class="card-body">
            <div class="bar-chart">
              <div class="bar" style="height:60%"><span class="bar-value">$2.1k</span><span class="bar-label">Lun</span></div>
              <div class="bar" style="height:80%"><span class="bar-value">$2.8k</span><span class="bar-label">Mar</span></div>
              <div class="bar" style="height:45%"><span class="bar-value">$1.6k</span><span class="bar-label">Mié</span></div>
              <div class="bar" style="height:90%"><span class="bar-value">$3.2k</span><span class="bar-label">Jue</span></div>
              <div class="bar" style="height:70%"><span class="bar-value">$2.5k</span><span class="bar-label">Vie</span></div>
              <div class="bar" style="height:55%"><span class="bar-value">$1.9k</span><span class="bar-label">Sáb</span></div>
              <div class="bar" style="height:40%"><span class="bar-value">$1.4k</span><span class="bar-label">Dom</span></div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>⚡ Actividad reciente</h2>
            <button class="card-action">Ver todo</button>
          </div>
          <div class="card-body">
            <div class="activity-list">
              <div class="activity-item">
                <div class="activity-dot green"></div>
                <div>
                  <div class="activity-text"><strong>Carlos Méndez</strong> completó servicio de cambio de aceite</div>
                  <div class="activity-time">Hace 2 horas</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-dot amber"></div>
                <div>
                  <div class="activity-text"><strong>Nuevo turno</strong> para María López a las 11:00</div>
                  <div class="activity-time">Hace 45 minutos</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-dot blue"></div>
                <div>
                  <div class="activity-text"><strong>Inventario</strong> bajo en pastillas de freno</div>
                  <div class="activity-time">Hace 1 hora</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-dot amber"></div>
                <div>
                  <div class="activity-text"><strong>Ana Rodríguez</strong> agendó servicio de frenos</div>
                  <div class="activity-time">Ayer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-grid">
        <div class="card">
          <div class="card-header">
            <h2>👥 Últimos clientes</h2>
            <button class="card-action" onclick="window.navigateTo('clients')">Ver todos</button>
          </div>
          <div class="card-body" style="padding:0;overflow-x:auto;">
            <table class="data-table">
              <thead><tr><th>Cliente</th><th>Vehículo</th><th>Servicio</th><th>Estado</th></tr></thead>
              <tbody>
                ${mockData.clients.slice(0,4).map(c => `
                  <tr>
                    <td style="color:var(--text-primary);font-weight:600">${c.name}</td>
                    <td>${c.vehicle}</td>
                    <td>${c.service}</td>
                    <td><span class="status-badge ${c.status}">${c.status === 'active' ? 'Activo' : c.status === 'completed' ? 'Completado' : 'Pendiente'}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>📋 Próximos turnos</h2>
            <button class="card-action" onclick="window.navigateTo('appointments')">Ver todos</button>
          </div>
          <div class="card-body">
            <div class="activity-list">
              ${mockData.appointments.slice(0,3).map(a => `
                <div class="activity-item">
                  <div class="activity-dot amber"></div>
                  <div>
                    <div class="activity-text"><strong>${a.client}</strong> - ${a.service}</div>
                    <div class="activity-time">${a.time} · ${a.status === 'confirmed' ? 'Confirmado' : 'Pendiente'}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>🚀 Acciones rápidas</h2>
        </div>
        <div class="card-body">
          <div class="quick-actions">
            <button class="quick-action-btn" onclick="window.navigateTo('clients'); window.openClientModal()">
              <span class="qa-icon">👤</span> Nuevo cliente
            </button>
            <button class="quick-action-btn" onclick="window.navigateTo('appointments'); window.openAppointmentModal()">
              <span class="qa-icon">📅</span> Agendar turno
            </button>
            <button class="quick-action-btn" onclick="window.navigateTo('inventory')">
              <span class="qa-icon">📦</span> Ver inventario
            </button>
            <button class="quick-action-btn" onclick="window.navigateTo('services')">
              <span class="qa-icon">⚙️</span> Gestionar servicios
            </button>
          </div>
        </div>
      </div>`;
  }

  function renderClients() {
    return `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
        <h2 style="font-size:22px;font-weight:800;">Clientes</h2>
        <button class="btn btn-primary" onclick="window.openClientModal()">+ Agregar cliente</button>
      </div>
      <div class="card">
        <div class="card-body" style="padding:0;overflow-x:auto;">
          <table class="data-table">
            <thead><tr><th>Cliente</th><th>Vehículo</th><th>Servicio</th><th>Fecha</th><th>Estado</th><th>Acciones</th></tr></thead>
            <tbody>
              ${mockData.clients.map(c => `
                <tr>
                  <td style="color:var(--text-primary);font-weight:600">${c.name}</td>
                  <td>${c.vehicle}</td>
                  <td>${c.service}</td>
                  <td>${formatDate(c.date)}</td>
                  <td><span class="status-badge ${c.status}">${c.status === 'active' ? 'Activo' : c.status === 'completed' ? 'Completado' : 'Pendiente'}</span></td>
                  <td><button class="btn btn-sm btn-secondary" onclick="window.showToast('Editando ${c.name}','info')">Editar</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
  }

  function renderServices() {
    return `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
        <h2 style="font-size:22px;font-weight:800;">Servicios</h2>
        <button class="btn btn-primary" onclick="window.showToast('Formulario de servicio en desarrollo','info')">+ Agregar servicio</button>
      </div>
      <div class="card">
        <div class="card-body" style="padding:0;overflow-x:auto;">
          <table class="data-table">
            <thead><tr><th>Servicio</th><th>Precio</th><th>Duración</th><th>Acciones</th></tr></thead>
            <tbody>
              ${mockData.services.map(s => `
                <tr>
                  <td style="color:var(--text-primary);font-weight:600">${s.name}</td>
                  <td style="color:var(--accent);font-weight:700">$${s.price.toLocaleString()}</td>
                  <td>${s.time}</td>
                  <td><button class="btn btn-sm btn-secondary" onclick="window.showToast('Editando ${s.name}','info')">Editar</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
  }

  function renderAppointments() {
    return `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
        <h2 style="font-size:22px;font-weight:800;">Turnos</h2>
        <button class="btn btn-primary" onclick="window.openAppointmentModal()">+ Nuevo turno</button>
      </div>
      <div class="card">
        <div class="card-body" style="padding:0;">
          ${mockData.appointments.map(a => `
            <div class="schedule-row">
              <div style="font-weight:600;color:var(--text-primary)">${a.client}</div>
              <div style="color:var(--text-muted)">${a.time}</div>
              <div>${a.service}</div>
              <div><span class="status-badge ${a.status === 'confirmed' ? 'active' : a.status === 'completed' ? 'completed' : 'pending'}">${a.status === 'confirmed' ? 'Confirmado' : a.status === 'completed' ? 'Completado' : 'Pendiente'}</span></div>
              <div><button class="btn btn-sm btn-secondary" onclick="window.showToast('Editando turno','info')">Editar</button></div>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  function renderInventory() {
    return `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
        <h2 style="font-size:22px;font-weight:800;">Inventario</h2>
        <button class="btn btn-primary" onclick="window.showToast('Agregar producto en desarrollo','info')">+ Agregar</button>
      </div>
      <div class="inventory-grid">
        ${mockData.inventory.map(item => `
          <div class="inventory-item">
            <div class="inv-icon">${item.qty === 0 ? '⚠️' : item.qty < 10 ? '🔶' : '📦'}</div>
            <div class="inv-name">${item.name}</div>
            <div class="inv-qty">${item.qty} ${item.unit}</div>
            <span class="inv-stock ${item.status}">${item.status === 'low' ? (item.qty === 0 ? 'Agotado' : 'Bajo') : 'Disponible'}</span>
          </div>
        `).join('')}
      </div>`;
  }

  function renderSettings() {
    return `
      <h2 style="font-size:22px;font-weight:800;margin-bottom:24px;">Configuración</h2>
      <div class="card">
        <div class="card-body">
          <div class="setting-row">
            <div class="setting-label">
              <h4>Notificaciones por email</h4>
              <p>Recibe alertas de turnos y citas</p>
            </div>
            <button class="toggle active" onclick="this.classList.toggle('active')"></button>
          </div>
          <div class="setting-row">
            <div class="setting-label">
              <h4>Modo oscuro</h4>
              <p>Aplicar tema oscuro automáticamente</p>
            </div>
            <button class="toggle active" onclick="this.classList.toggle('active')"></button>
          </div>
          <div class="setting-row">
            <div class="setting-label">
              <h4>Reserva automática</h4>
              <p>Confirmar turnos automáticamente</p>
            </div>
            <button class="toggle" onclick="this.classList.toggle('active')"></button>
          </div>
          <div class="setting-row">
            <div class="setting-label">
              <h4>Recordatorios SMS</h4>
              <p>Enviar recordatorios por texto</p>
            </div>
            <button class="toggle active" onclick="this.classList.toggle('active')"></button>
          </div>
          <div style="margin-top:32px;display:flex;gap:12px;">
            <button class="btn btn-primary" onclick="window.showToast('Configuración guardada','success')">Guardar cambios</button>
            <button class="btn btn-secondary" onclick="window.showToast('Configuración reseteada','info')">Restaurar defaults</button>
          </div>
        </div>
      </div>
      <div class="card" style="margin-top:20px;">
        <div class="card-header"><h2>🔌 Conexiones</h2></div>
        <div class="card-body">
          <div class="setting-row">
            <div class="setting-label"><h4>Supabase</h4><p>${window.__BRAND__.supabaseUrl}</p></div>
            <span class="status-badge pending">Por conectar</span>
          </div>
          <div class="setting-row">
            <div class="setting-label"><h4>API de IA</h4><p>OpenAI / Claude / Deepseek</p></div>
            <span class="status-badge pending">Por conectar</span>
          </div>
          <div class="setting-row">
            <div class="setting-label"><h4>Base de datos local</h4><p>localhost:54322</p></div>
            <span class="status-badge active">Activo</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderPage() {
    const renderers = {
      dashboard: renderDashboard,
      clients: renderClients,
      services: renderServices,
      appointments: renderAppointments,
      inventory: renderInventory,
      settings: renderSettings
    };
    const main = document.getElementById('main-content');
    if (!main) return;
    const fn = renderers[currentSection];
    main.innerHTML = fn ? fn() : '<p>Sección no encontrada</p>';
    initAnimations();
  }

  function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    $$('.stat-card, .card').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      el.style.transition = `all 0.4s ease ${i * 0.05}s`;
      observer.observe(el);
    });
  }

  function setupNavigation() {
    $$('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const section = item.dataset.section;
        if (section) {
          currentSection = section;
          navigateTo(section);
          renderPage();
        }
      });
    });
  }

  function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        if (q.length > 2) {
          showToast(`Buscando: "${q}"`, 'info');
        }
      });
    }
  }

  function setupHeaderButtons() {
    $$('.header-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('notif-btn')) {
          showToast('Tienes 3 notificaciones nuevas', 'info');
        } else if (btn.classList.contains('settings-btn')) {
          currentSection = 'settings';
          navigateTo('settings');
          renderPage();
        }
      });
    });
  }

  function setupMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('open');
      });
    }
  }

  function init() {
    renderPage();
    setupNavigation();
    setupSearch();
    setupHeaderButtons();
    setupMobileMenu();
    initAnimations();

    setTimeout(() => showToast('Bienvenido a Panel Taller ✨', 'success'), 800);
  }

  document.addEventListener('DOMContentLoaded', init);

  window.navigateTo = navigateTo;
  window.openClientModal = () => showToast('Modal de cliente en desarrollo', 'info');
  window.openAppointmentModal = () => showToast('Modal de turno en desarrollo', 'info');
})();
