const contents = document.querySelector('.policy-contents');
const contentsQuery = window.matchMedia('(min-width: 851px)');
contents.open = contentsQuery.matches;
contentsQuery.addEventListener('change', event => { contents.open = event.matches; });
const contentsLinks = [...contents.querySelectorAll('nav a')];
contentsLinks.forEach(link => link.addEventListener('click', () => { if (!contentsQuery.matches) contents.open = false; }));
const policySections = [...document.querySelectorAll('.policy-section')];
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (!visible.length) return;
    const current = '#' + visible[0].target.id;
    contentsLinks.forEach(link => { if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  }, {rootMargin: '-110px 0px -60% 0px', threshold: 0});
  policySections.forEach(section => sectionObserver.observe(section));
}
document.querySelectorAll('.footer-policies a').forEach(link => { if (new URL(link.href).pathname === location.pathname) link.setAttribute('aria-current', 'page'); });
