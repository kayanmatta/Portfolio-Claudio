document.addEventListener('DOMContentLoaded', function() {
  // Seleciona os containers que têm h1 ou h2 (ajuste se necessário)
  const candidates = Array.from(document.querySelectorAll('div'))
    .filter(d => d.querySelector('h1, h2'));

  // Aplica classes alternadas
  candidates.forEach((el, i) => {
    el.classList.add('reveal'); // classe base
    if (i % 2 === 0) el.classList.add('from-left');
    else el.classList.add('from-right');

    // opcional: small stagger using CSS variable
    el.style.setProperty('--delay', `${i * 60}ms`);
  });

  // Observer
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // optional: unobserve to avoid re-triggering
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  candidates.forEach(el => obs.observe(el));
});
