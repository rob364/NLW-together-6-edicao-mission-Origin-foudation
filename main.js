/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
<<<<<<< HEAD
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
=======
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
>>>>>>> e3447b8d94e2c199ae0042ca19cfdbc03624e7a8

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
<<<<<<< HEAD
const links = document.querySelectorAll("nav ul li a");
=======
const links = document.querySelectorAll('nav ul li a')
>>>>>>> e3447b8d94e2c199ae0042ca19cfdbc03624e7a8

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
<<<<<<< HEAD
function changeHeaderWhenScroll() {
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;

=======
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
>>>>>>> e3447b8d94e2c199ae0042ca19cfdbc03624e7a8
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
<<<<<<< HEAD
    header.classList.remove("scroll");
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

=======
    header.classList.remove('scroll')
  }
})

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

>>>>>>> e3447b8d94e2c199ae0042ca19cfdbc03624e7a8
scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
<<<<<<< HEAD
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
);

/* Botão voltar para o topo*/

function bacToTop() {
  const backToTopButtom = document.querySelector(".back-to-top");

  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

/* When Scroll*/
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
  backToTop();
});

/*
function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top");

  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

*/

/* When Scroll 
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
  backToTop();
});

*/
=======
  #contact .text, #contact .links
  `,
  { interval: 100 }
)
>>>>>>> e3447b8d94e2c199ae0042ca19cfdbc03624e7a8
