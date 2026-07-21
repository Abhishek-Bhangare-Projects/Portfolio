// Interactive behaviors: mobile menu toggle, scroll reveal, and current year
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('show') && !nav.contains(e.target) && e.target !== toggle) {
        nav.classList.remove('show');
      }
    });
  }

  // Close nav menu on clicking a nav link
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav && nav.classList.contains('show')) {
        nav.classList.remove('show');
      }
    });
  });

  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Reveal on scroll with IntersectionObserver
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .timeline-card, .community-card, .hero-content, .section h2').forEach(el => {
    el.classList.add('pre-reveal');
    revealObserver.observe(el);
  });
});
