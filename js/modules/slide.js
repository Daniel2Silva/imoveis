export default function slideActive() {}

const slides = document.querySelectorAll('[data-slide="slide"]');
let index = 0;

slides[0].classList.add('active')
function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

setInterval(next, 3000);
