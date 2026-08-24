/* ═══════════════════════════════════════════════
   BRAGANDA SYSTEMS — Shared Nav, Footer & Components
   Injected on every page via <script>
═══════════════════════════════════════════════ */

(function () {
  /* ── NAV DATA ── */
  const solutionsMenu = [
    {
      label: 'AI GTM Systems',
      href: '/solutions/ai-gtm/',
      links: [
        { label: 'AI Outbound Engine', href: '/solutions/ai-outbound/' },
        { label: 'GTM Intelligence & Enrichment', href: '/solutions/gtm-intelligence/' },
        { label: 'Speed-to-Lead', href: '/solutions/speed-to-lead/' },
        { label: 'Lead Scoring & Routing', href: '/solutions/ai-gtm/#lead-scoring-routing' },
        { label: 'Follow-Up & Nurture', href: '/solutions/follow-up-nurture/' },
        { label: 'Database Reactivation', href: '/solutions/database-reactivation/' },
        { label: 'CRM & RevOps Automation', href: '/solutions/crm-revops/' },
        { label: 'Pipeline Reporting & Attribution', href: '/solutions/crm-revops/#pipeline-reporting' },
      ],
    },
    {
      label: 'AI Automation',
      href: '/solutions/ai-automation/',
      links: [
        { label: 'Workflow Automation', href: '/solutions/ai-automation/#workflow-automation' },
        { label: 'Document Processing', href: '/solutions/document-processing/' },
        { label: 'Operations Automation', href: '/solutions/ai-automation/#operations-automation' },
        { label: 'AI Agents', href: '/solutions/ai-automation/#ai-agents' },
        { label: 'API & Platform Integrations', href: '/solutions/ai-automation/#integrations' },
        { label: 'Reporting Automation', href: '/solutions/ai-automation/#reporting-automation' },
      ],
    },
    {
      label: 'Custom AI Systems',
      href: '/solutions/custom-ai/',
      links: [
        { label: 'Internal Tools', href: '/solutions/custom-ai/#internal-tools' },
        { label: 'RAG Systems', href: '/solutions/custom-ai/#rag-systems' },
        { label: 'Agentic Workflows', href: '/solutions/custom-ai/#agentic-workflows' },
        { label: 'AI Dashboards', href: '/solutions/custom-ai/#ai-dashboards' },
        { label: 'Custom Applications', href: '/solutions/custom-ai/#custom-applications' },
        { label: 'AI Operating System (AI-OS)', href: '/solutions/ai-os/' },
      ],
    },
  ];

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions/', dropdown: solutionsMenu },
    { label: 'How We Work', href: '/services/' },
    { label: 'Case Studies', href: '/case-studies/' },
    { label: 'Insights', href: '/blog/' },
    { label: 'About', href: '/about/' },
  ];

  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const isActive = (href) => currentPath === href.replace(/\/$/, '');
  const isActivePrefix = (href) => href !== '/' && currentPath.indexOf(href.replace(/\/$/, '')) === 0;

  const megaMenuHTML = (cols) => `
    <div class="nav-megamenu" role="menu">
      ${cols.map(col => `
        <div class="megamenu-col">
          <div class="megamenu-col-label">${col.label}</div>
          <ul class="megamenu-links">
            ${col.links.map(l => `<li><a href="${l.href}" role="menuitem">${l.label}</a></li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>`;

  const navHTML = `
  <nav role="navigation" aria-label="Main navigation">
    <div class="nav-inner">
      <a class="nav-logo" href="/" aria-label="Braganda Systems Home">BRAGANDA<span>.</span>SYSTEMS</a>
      <ul class="nav-links" id="nav-links">
        ${navLinks.map(l => {
          if (l.dropdown) {
            const active = isActive(l.href) || isActivePrefix(l.href);
            return `
            <li class="nav-item-dropdown">
              <button class="nav-dropdown-trigger nav-highlight" data-href="${l.href}" aria-expanded="false" aria-haspopup="true"${active ? ' aria-current="page"' : ''}>
                ${l.label}
                <svg viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              ${megaMenuHTML(l.dropdown)}
            </li>`;
          }
          return `<li><a href="${l.href}"${isActive(l.href) ? ' aria-current="page"' : ''}>${l.label}</a></li>`;
        }).join('')}
      </ul>
      <div class="nav-cta">
        <a class="btn btn-orange btn-sm" href="/contact/">Book a Call →</a>
      </div>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;

  /* ── FOOTER (no phone — email only) ── */
  const footerHTML = `
  <footer role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="nav-logo" href="/">BRAGANDA<span>.</span>SYSTEMS</a>
          <p>AI GTM Systems, AI Automation and Custom AI Systems that generate pipeline, improve conversion and remove manual work.</p>
          <a class="btn btn-orange btn-sm" href="/contact/">Book a Systems Call →</a>
        </div>
        <div class="footer-col">
          <h5>AI GTM Systems</h5>
          <ul class="footer-links">
            <li><a href="/solutions/ai-outbound/">AI Outbound Engine</a></li>
            <li><a href="/solutions/gtm-intelligence/">GTM Intelligence</a></li>
            <li><a href="/solutions/speed-to-lead/">Speed-to-Lead</a></li>
            <li><a href="/solutions/database-reactivation/">Database Reactivation</a></li>
            <li><a href="/solutions/crm-revops/">CRM &amp; RevOps</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Automation &amp; Custom AI</h5>
          <ul class="footer-links">
            <li><a href="/solutions/ai-automation/">AI Automation</a></li>
            <li><a href="/solutions/document-processing/">Document Processing</a></li>
            <li><a href="/solutions/custom-ai/">Custom AI Systems</a></li>
            <li><a href="/solutions/ai-os/">AI-OS</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Company</h5>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/solutions/">Solutions</a></li>
            <li><a href="/services/">How We Work</a></li>
            <li><a href="/case-studies/">Case Studies</a></li>
            <li><a href="/blog/">Insights</a></li>
            <li><a href="/about/">About</a></li>
            <li><a href="/contact/">Book a Call</a></li>
          </ul>
        </div>
      </div>
      <p style="font-size:11px;color:var(--grey-label);margin-top:32px;line-height:1.6;max-width:820px;">All product names, logos and brands referenced on this site are property of their respective owners. Their use does not imply endorsement or partnership.</p>
      <div class="footer-bottom">
        <span>© 2025 Braganda Systems Ltd. All rights reserved.</span>
        <a href="mailto:hello@braganda.com">hello@braganda.com</a>
      </div>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ── MOBILE NAV TOGGLE ── */
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-links');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const open = navList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.nav-dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth > 900) {
        window.location.href = trigger.dataset.href;
        return;
      }
      e.preventDefault();
      const parent = trigger.closest('.nav-item-dropdown');
      const open = parent.classList.toggle('open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* ── TICKER (homepage only) ── */
  const tickerEl = document.getElementById('ticker-inner');
  if (tickerEl) {
    const items = ['AI GTM Systems', 'Speed to Lead', 'GTM Intelligence',
      'Database Reactivation', 'CRM & RevOps', 'AI Automation',
      'AI Outbound', 'Custom AI Systems', 'Pipeline Reporting', 'Workflow Orchestration'];
    const doubled = [...items, ...items];
    tickerEl.innerHTML = doubled.map(t =>
      `<div class="ticker-item"><span class="ticker-dot"></span>${t}</div>`
    ).join('');
  }

  /* ── Blog category pills ── */
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  /* ── TECHNOLOGY ECOSYSTEM (reusable, data-driven) ── */
  // capabilityStatus: 'active' = genuinely used/integrated; 'planned' = architecture supports it, not yet built
  const TECH_DATA = [
    { name: 'HubSpot', category: 'CRM & RevOps', description: 'CRM architecture, lifecycle automation, lead routing, nurture and reporting.', status: 'active' },
    { name: 'Salesforce', category: 'CRM & RevOps', description: 'CRM workflows, pipeline processes, marketing integration and data sync.', status: 'active' },
    { name: 'Pardot', category: 'CRM & RevOps', description: 'Marketing automation and lead scoring within the Salesforce ecosystem.', status: 'active' },
    { name: 'Zoho CRM', category: 'CRM & RevOps', description: 'CRM configuration, workflow automation and pipeline management.', status: 'active' },
    { name: 'n8n', category: 'Automation & Orchestration', description: 'Multi-step AI automation, APIs, webhooks, enrichment workflows and orchestration.', status: 'active' },
    { name: 'Zapier', category: 'Automation & Orchestration', description: 'Lightweight cross-platform automation and app connections.', status: 'active' },
    { name: 'Make', category: 'Automation & Orchestration', description: 'Visual, multi-step workflow automation across connected platforms.', status: 'active' },
    { name: 'Clay', category: 'GTM Intelligence & Enrichment', description: 'Account intelligence, enrichment, research and GTM workflows.', status: 'active' },
    { name: 'Apollo', category: 'GTM Intelligence & Enrichment', description: 'Contact and account data for outbound prospecting and enrichment.', status: 'active' },
    { name: 'Apify', category: 'GTM Intelligence & Enrichment', description: 'Automated web data collection feeding GTM intelligence workflows.', status: 'active' },
    { name: 'OpenAI', category: 'AI & LLMs', description: 'Research, classification, extraction, personalisation and workflow reasoning.', status: 'active' },
    { name: 'Claude (Anthropic)', category: 'AI & LLMs', description: 'AI models selected around the use case — reasoning, drafting and analysis.', status: 'active' },
    { name: 'Supabase', category: 'Data & Infrastructure', description: 'Structured workflow data, application backends and automation state.', status: 'active' },
    { name: 'PostgreSQL', category: 'Data & Infrastructure', description: 'Relational data storage underpinning custom systems and dashboards.', status: 'active' },
    { name: 'AWS', category: 'Data & Infrastructure', description: 'Cloud infrastructure for custom applications and data pipelines.', status: 'active' },
    { name: 'Slack', category: 'Communication', description: 'Sales alerts, notifications and internal workflow approvals.', status: 'active' },
    { name: 'WordPress', category: 'Web & Analytics', description: 'Website builds and CMS integrations connected into the wider GTM stack.', status: 'active' },
    { name: 'Webflow', category: 'Web & Analytics', description: 'Design-led website builds connected into automation and CRM systems.', status: 'active' },
    { name: 'GA4', category: 'Web & Analytics', description: 'Website and funnel analytics feeding attribution and reporting.', status: 'active' },
    { name: 'Figma', category: 'Web & Analytics', description: 'Product and interface design for custom dashboards and tools.', status: 'active' },
  ];

  function renderTechEcosystem(container) {
    const filterAttr = container.dataset.techFilter; // comma-separated category list, optional
    const filters = filterAttr ? filterAttr.split(',').map(s => s.trim()) : null;
    const data = filters ? TECH_DATA.filter(t => filters.includes(t.category)) : TECH_DATA;
    const categories = [...new Set(data.map(t => t.category))];
    container.innerHTML = categories.map(cat => `
      <div>
        <div class="tech-category-label">${cat}</div>
        <div class="tech-row">
          ${data.filter(t => t.category === cat).map(t => `
            <div class="tech-badge" tabindex="0">
              <span class="tech-dot"></span>${t.name}
              <span class="tech-tip" role="tooltip">${t.description}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('') + `<p class="tech-disclaimer">All product names, logos and brands are property of their respective owners. Their use does not imply endorsement or partnership. Displaying a technology means we work with, understand or can integrate it.</p>`;
  }

  document.querySelectorAll('[data-tech-ecosystem]').forEach(renderTechEcosystem);
})();
