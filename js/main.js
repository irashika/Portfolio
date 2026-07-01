// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal
const revealTargets = document.querySelectorAll(
  '.hero-title, .hero-sub, .hero-cta, .section-title, .lens-card, .project, .skill-block, .exp, .stats-grid > div, .quote, .beyond-list li, .contact-title, .contact-email, .about-copy p'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

revealTargets.forEach(el => io.observe(el));

// Smooth nav highlight on hover (subtle parallax-ish cursor)
document.querySelectorAll('.project').forEach(p => {
  p.addEventListener('mousemove', (e) => {
    const r = p.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 6;
    const y = ((e.clientY - r.top) / r.height - .5) * 6;
    const media = p.querySelector('.project-media');
    if (media) media.style.transform = `translate(${x}px, ${y}px) scale(1.01)`;
  });
  p.addEventListener('mouseleave', () => {
    const media = p.querySelector('.project-media');
    if (media) media.style.transform = '';
  });
});
