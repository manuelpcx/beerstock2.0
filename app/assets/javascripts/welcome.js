const sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin: 'bottom',
  reset: false,
  cleanup: false
});
sr.reveal('.centrado', {
  duration: 2000,
  origin: 'rigth',
  distance: '300px'
});
sr.reveal('h2', {
  duration: 2000,
  origin: 'rigth',
  distance: '300px'
});
sr.reveal('#card1', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  delay: 200
});
sr.reveal('#card2', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  delay: 600
});
sr.reveal('#card3', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  delay: 1200
});
sr.reveal('.centrado', {
  duration: 2000,
  origin: 'rigth',
  distance: '300px'
});
sr.reveal('#contac-h3', {
  duration: 2000,
  origin: 'top',
  distance: '300px'
});
sr.reveal('footer ul', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px'
});
// smoth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
