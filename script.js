const header = document.querySelector('[data-header]');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

const updateHeader = () => header?.classList.toggle('scrolled', scrollY > 24);
updateHeader();
addEventListener('scroll', updateHeader, { passive: true });

menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('open', !open);
});
nav?.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('.framework-list details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    item.parentElement.querySelectorAll('details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const attributes = {
  'zero-trust': ['01', 'Zero Trust Network Access', 'Connect an authenticated user to a specific application after evaluating identity, device posture, location, and risk. Trust is continuously reassessed throughout the session.', ['Least privilege', 'App-level access', 'Continuous trust'], ['IDENTITY', 'VERIFY', 'APPLICATION']],
  identity: ['02', 'Identity-based access control', 'Make identity the new control point. User, group, role, device posture, and behavioral signals shape every access decision.', ['Identity context', 'Device posture', 'Adaptive policy'], ['USER', 'EVALUATE', 'RESOURCE']],
  web: ['03', 'Secure web gateway', 'Inspect web traffic close to the user to stop malicious destinations, control acceptable use, and protect data without appliance backhaul.', ['URL controls', 'Malware defense', 'TLS inspection'], ['REQUEST', 'INSPECT', 'WEB']],
  cloud: ['04', 'Cloud access security broker', 'Discover cloud application use, govern sanctioned services, and apply context-aware controls to sensitive actions and data.', ['SaaS discovery', 'Data control', 'App governance'], ['USER', 'GOVERN', 'SAAS']],
  firewall: ['05', 'Firewall as a service', 'Deliver stateful firewall policy from distributed service edges, with consistent rules for users, branches, and cloud workloads.', ['IPS', 'DNS security', 'App control'], ['TRAFFIC', 'ENFORCE', 'DESTINATION']],
  dlp: ['06', 'Data loss prevention', 'Classify sensitive content and control its movement across web, SaaS, private applications, and managed or unmanaged devices.', ['Classification', 'Inline policy', 'Data context'], ['CONTENT', 'CLASSIFY', 'ACTION']],
  threat: ['07', 'Threat intelligence', 'Enrich each inspection decision with current reputation, malware, campaign, and behavior intelligence from across the edge.', ['Global signals', 'IOC matching', 'Behavior'], ['SIGNAL', 'CORRELATE', 'BLOCK']],
  policy: ['08', 'Unified policy engine', 'Express security and network intent once, distribute it globally, and preserve a consistent interpretation across every service.', ['One console', 'Policy reuse', 'Change history'], ['INTENT', 'COMPILE', 'EDGE']],
  visibility: ['09', 'End-to-end visibility', 'Correlate user experience, route health, access decisions, threats, and data events in one operational view.', ['Unified logs', 'Digital experience', 'Path insight'], ['EVENTS', 'CORRELATE', 'INSIGHT']],
  performance: ['10', 'Performance optimization', 'Select the best available path by application requirements and live network health while enforcing policy at the closest edge.', ['Smart routing', 'QoE signals', 'Low latency'], ['SESSION', 'OPTIMIZE', 'APP']],
  scalability: ['11', 'Scalability and elasticity', 'Add users, sites, applications, and inspection capacity through cloud-delivered services instead of another appliance cycle.', ['Elastic edge', 'Global reach', 'Fast expansion'], ['DEMAND', 'SCALE', 'CAPACITY']],
  complexity: ['12', 'Reduced complexity', 'Replace fragmented consoles, overlapping rules, and chained appliances with one architecture, policy model, and telemetry plane.', ['Fewer seams', 'Shared context', 'Simpler ops'], ['TOOLS', 'CONVERGE', 'PLATFORM']]
};

const attributePanel = document.querySelector('[data-attribute-panel]');
document.querySelectorAll('[data-attribute]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-attribute]').forEach((other) => other.setAttribute('aria-selected', String(other === button)));
    const [number, title, body, tags, diagram] = attributes[button.dataset.attribute];
    attributePanel.innerHTML = `<div class="panel-top"><span>ATTRIBUTE / ${number}</span><span>ACTIVE</span></div><div class="panel-diagram"><i>${diagram[0]}</i><b>${diagram[1]}</b><i>${diagram[2]}</i></div><h3>${title}</h3><p>${body}</p><div class="panel-tags">${tags.map((tag) => `<span>${tag}</span>`).join('')}</div>`;
  });
});

const comparisons = {
  why: [
    ['SASE', 'The cloud-delivered architecture that converges networking and security.'],
    ['Zero Trust', 'The access principle: verify explicitly and grant only the access required.'],
    ['SD-WAN', 'The networking capability that selects efficient application-aware paths.']
  ],
  baseline: [
    ['SASE', 'A distributed cloud edge, one policy plane, and converged security plus networking.'],
    ['Zero Trust', 'Strong identity, device context, least privilege, and continuous verification.'],
    ['SD-WAN', 'Multiple transports, centralized orchestration, live path measurement, and application steering.']
  ],
  use: [
    ['SASE', 'Use it as the target operating model for users, branches, cloud, and data.'],
    ['Zero Trust', 'Use it to decide who may access which application under what conditions.'],
    ['SD-WAN', 'Use it to connect sites and select reliable paths into the service edge.']
  ]
};

const comparePanel = document.querySelector('[data-compare-panel]');
document.querySelectorAll('[data-compare]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-compare]').forEach((other) => other.setAttribute('aria-selected', String(other === button)));
    comparePanel.innerHTML = comparisons[button.dataset.compare].map(([name, text]) => `<article><span>${name}</span><p>${text}</p></article>`).join('');
  });
});

const resources = {
  pricing: ['Pricing / designed around your edge', 'Start with your users and sites.<br><em>Scale from there.</em>', 'One platform subscription brings security and networking together without separate appliance cycles or disconnected policy engines.', 'Request a design session'],
  support: ['Customer support / engineers included', 'Architecture help before,<br><em>during, and after.</em>', 'Work with engineers who understand policy, routing, applications, and migration dependencies—not a queue that sees only one product feature.', 'Meet the engineering team'],
  know: ['What to know / readiness brief', 'Map the journey<br><em>before the migration.</em>', 'Inventory users, sites, applications, controls, traffic paths, and success measures. A clear baseline turns convergence into an operational program.', 'Get the readiness brief'],
  stories: ['Case studies / patterns from the field', 'See how teams<br><em>converge the edge.</em>', 'Explore practical patterns for remote access, branch modernization, cloud governance, and security-stack consolidation.', 'Explore the field notes']
};

const resourcePanel = document.querySelector('[data-resource-panel]');
document.querySelectorAll('[data-resource]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-resource]').forEach((other) => other.setAttribute('aria-selected', String(other === button)));
    const [kicker, title, body, action] = resources[button.dataset.resource];
    resourcePanel.innerHTML = `<p class="section-kicker">${kicker}</p><h2>${title}</h2><p>${body}</p><a class="button button-dark" href="#contact">${action} <span>↗</span></a>`;
  });
});

document.querySelector('.newsletter-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = event.currentTarget.querySelector('[data-form-status]');
  const button = event.currentTarget.querySelector('button');
  if (status) status.textContent = 'You’re on the list — the next Edge Notes briefing will arrive by email.';
  if (button) button.innerHTML = 'Subscribed <span>✓</span>';
});

if (reducedMotion) {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .08 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}
