function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Обработчики событий для ссылок в навигации
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      scrollToSection(sectionId);
    });
  });
  