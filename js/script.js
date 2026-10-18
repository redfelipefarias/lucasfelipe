// Ano automático no rodapé
const anoEl = document.getElementById('ano');
if (anoEl) {
  anoEl.textContent = new Date().getFullYear();
}

// Destaca no menu a seção visível
const secoes = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.menu a');

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        links.forEach((link) => {
          link.classList.toggle('ativo', link.getAttribute('href') === '#' + entrada.target.id);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

secoes.forEach((secao) => observador.observe(secao));