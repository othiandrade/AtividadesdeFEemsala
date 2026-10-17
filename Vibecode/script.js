// Tame Impala — página de fã (não oficial)
// Menu mobile, navbar ativa, animações de entrada no scroll e placeholders de imagem.

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Menu mobile ---------- */
const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.getElementById('menu-mobile');
const iconOpen = menuToggle.querySelector('[data-icon-open]');
const iconClose = menuToggle.querySelector('[data-icon-close]');

function setMenu(open) {
  menu.classList.toggle('hidden', !open);
  iconOpen.classList.toggle('hidden', open);
  iconClose.classList.toggle('hidden', !open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}

menuToggle.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});

// Fecha ao clicar em um link, ao apertar Esc ou ao voltar para o desktop
menu.querySelectorAll('[data-menu-link]').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuToggle.focus();
  }
});

window.matchMedia('(min-width: 64rem)').addEventListener('change', (event) => {
  if (event.matches) setMenu(false);
});

/* ---------- Sombra da navbar ao rolar ---------- */
const navbar = document.querySelector('[data-navbar]');

function updateNavbar() {
  navbar.dataset.scrolled = String(window.scrollY > 8);
}

updateNavbar();
window.addEventListener('scroll', updateNavbar, { passive: true });

/* ---------- Link ativo conforme a seção visível ---------- */
const navLinks = document.querySelectorAll('[data-nav-link]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.setAttribute('aria-current', String(link.hash === `#${entry.target.id}`));
      });
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);

document.querySelectorAll('[data-section]').forEach((section) => sectionObserver.observe(section));

/* ---------- Entrada suave no scroll ---------- */
// As classes de "escondido" só entram via JS: sem JS (ou com movimento reduzido) tudo aparece normalmente.
const HIDDEN_CLASSES = ['opacity-0', 'translate-y-8'];
const TRANSITION_CLASSES = ['transition', 'duration-1000', 'ease-out'];
const revealItems = document.querySelectorAll('[data-reveal]');

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove(...HIDDEN_CLASSES);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealItems.forEach((item, index) => {
    item.classList.add(...TRANSITION_CLASSES, ...HIDDEN_CLASSES);
    // Pequeno atraso em cascata entre itens vizinhos
    item.style.transitionDelay = `${(index % 3) * 120}ms`;
    revealObserver.observe(item);
  });
}

/* ---------- Placeholders de imagem ---------- */
// Enquanto o src estiver vazio, a imagem fica invisível e o gradiente do container aparece.
// ✏️ AÇÃO: nada a fazer aqui — ao preencher o src no HTML, a imagem aparece sozinha.
document.querySelectorAll('img').forEach((img) => {
  const src = img.getAttribute('src');
  if (!src || src === '#') {
    img.classList.add('opacity-0');
    return;
  }
  img.addEventListener('error', () => img.classList.add('opacity-0'));
});

/* ---------- Ano atual no rodapé ---------- */
const yearEl = document.querySelector('[data-year]');
if (yearEl) yearEl.textContent = new Date().getFullYear();
