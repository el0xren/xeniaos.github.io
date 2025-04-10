// Xenia
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const icon = themeToggle.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

const contactLinks = document.querySelectorAll('.contact-link');
const modal = document.getElementById('contact-modal');
const closeModal = document.querySelector('.close-modal');

contactLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted! (This is a demo)');
  modal.style.display = 'none';
  contactForm.reset();
});