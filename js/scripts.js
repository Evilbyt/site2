// script.js - Core JS functionality

// Typewriter effect
const typewriter = document.querySelector('.typewriter');
const phrases = JSON.parse(typewriter.getAttribute('data-text'));
let i = 0, j = 0, current = '', isDeleting = false;

function type() {
  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      current = phrases[i].substring(0, j++);
      typewriter.textContent = current;
    } else if (isDeleting && j >= 0) {
      current = phrases[i].substring(0, j--);
      typewriter.textContent = current;
    }

    if (j === phrases[i].length + 1) {
      isDeleting = true;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
    setTimeout(type, isDeleting ? 60 : 120);
  }
}
type();

// Smooth scroll for internal links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ParticlesJS config (optional override)
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('ParticlesJS config loaded');
});
