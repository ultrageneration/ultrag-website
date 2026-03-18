
 // =========================
  // FAQ TOGGLE LOGIC FOR ACCORDION
  // =========================

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
  // =========================
  // NAVBAR SCROLL EFFECT
  // =========================
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // =========================
  // HAMBURGER MENU
  // =========================
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const overlay = document.getElementById('overlay');

  function closeMenu() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('active');
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      overlay.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', !expanded);
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  document.querySelectorAll('#nav-menu a').forEach(link =>
    link.addEventListener('click', closeMenu)
  );

  // =========================
  // SCROLL TO TOP
  // =========================
  const scrollBtn = document.getElementById('scrollToTop');

  window.addEventListener('scroll', () => {
    const firstSection = document.querySelector('section');
    if (firstSection && window.scrollY > firstSection.offsetHeight) {
      scrollBtn.style.display = 'flex';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
