document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const mobileNav = document.querySelector('.mobile-nav');
  
  menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });

  document.addEventListener('click', function(event) {
    if (!menuIcon.contains(event.target) && !mobileNav.contains(event.target)) {
      menuIcon.classList.remove('active');
      mobileNav.classList.remove('active');
    }
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      menuIcon.classList.remove('active');
      mobileNav.classList.remove('active');
    }
  });
});