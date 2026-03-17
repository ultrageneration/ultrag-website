<!-- Toggle Logic For Accordion -->
<script>
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
</script>

<script>
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
</script>

<!-- EmailJS SDK -->
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>

<!-- Google reCAPTCHA -->
<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<script>
  (function () {
    emailjs.init("MgYEzIVXQthVrfVBn");
  })();

  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const recaptcha = grecaptcha.getResponse();
    if (!recaptcha) {
      alert("Please complete the CAPTCHA");
      return;
    }

    emailjs.sendForm('service_og620hh', 'template_j3zp6vh', this)
      .then(() => {
        alert('Message sent successfully!');
        this.reset();
        grecaptcha.reset(); // reset CAPTCHA
      }, (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      });
  });
</script>
<!-- Toggle Hamburger Menu -->
<script>
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const overlay = document.getElementById('overlay');

  function closeMenu() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('active');
  }

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', !expanded);
  });

  overlay.addEventListener('click', closeMenu);

  // Optional: Close menu when any nav link is clicked
  document.querySelectorAll('#nav-menu a').forEach(link =>
    link.addEventListener('click', closeMenu)
  );
</script>

<script>
  const scrollBtn = document.getElementById('scrollToTop');

  window.addEventListener('scroll', () => {
    const firstSection = document.querySelector('section'); // assuming first section
    if (window.scrollY > firstSection.offsetHeight) {
      scrollBtn.style.display = 'flex';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
</script> 