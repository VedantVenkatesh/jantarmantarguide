// Toggle mobile menu visibility
const mobileMenuButton = document.getElementById('mobile-menu-button')
const navbarMenu = document.getElementById('navbar-menu')

mobileMenuButton.addEventListener('click', function () {
  navbarMenu.classList.toggle('hidden')
})

// Toggle submenu on mobile
const submenuToggles = document.querySelectorAll('.mobile-submenu-toggle')

submenuToggles.forEach(function (toggle) {
  toggle.addEventListener('click', function (e) {
    const submenu = this.nextElementSibling
    submenu.classList.toggle('hidden')
  })
})

// Close submenu and navigate when a link is clicked on mobile
const submenuLinks = document.querySelectorAll('.dropdown-menu a')

submenuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    // Hide all submenus
    document.querySelectorAll('.dropdown-menu').forEach(function (submenu) {
      submenu.classList.add('hidden')
    })
    // Optionally close the mobile menu after navigating
    navbarMenu.classList.add('hidden')
  })
})
// Slider Js
 var swiper = new Swiper('.default-carousel', {
   loop: true,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
     dots: false
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 })
