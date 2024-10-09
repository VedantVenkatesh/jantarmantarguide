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
//Swiper Slider Js
var swiper = new Swiper('.default-carousel', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dots: false,
  },
  autoplay: {
    delay: 60000, // Delay in milliseconds (e.g., 3000ms = 3 seconds)
    disableOnInteraction: false, // Keeps autoplay active even after user interaction
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// Pie Hover Effect
 document.addEventListener('DOMContentLoaded', function () {
   const segments = document.querySelectorAll('.segment')

   // Add hover effect to each segment
   segments.forEach((segment) => {
     segment.addEventListener('mouseover', function () {
       // Reduce opacity of non-hovered segments
       segments.forEach((s) => {
         if (s !== segment) {
           s.style.fillOpacity = '0.2' // Make other segments transparent
         }
       })
       // Change hovered segment to yellow
       segment.style.fill = '#0078b6'
     })

     segment.addEventListener('mouseout', function () {
       // Reset transparency and colors of all segments
       segments.forEach((s) => {
         s.style.fillOpacity = '1' // Reset transparency
         s.style.fill = s.getAttribute('fill') // Reset original color
       })
     })
   })
 })
