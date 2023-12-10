window.onload = () => {
  const menu_btn = document.querySelector('.humburger');
  const moblile_menu = document.querySelector('.mob-navbar');
  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    moblile_menu.classList.toggle('is-active');
  })
}

document.addEventListener('scroll', () => {
  const toup = document.querySelector('.toup');
  const header = document.querySelector('.main-heading');
  if (window.scrollY > 0) {
    header.classList.add('scrolled')
    toup.classList.remove('hide')
    toup.classList.add('show')
  } else {
    header.classList.remove('scrolled')
    toup.classList.remove('show')
    toup.classList.add('hide')
  }
})


const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var icon = document.getElementById('icon');
var icon2 = document.getElementById('icon2');
icon.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    icon.src = "data/sun.png"
  }else {
    icon.src = "data/moon.png"
  }
}

icon2.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    icon2.src = "data/sun.png"
  }else {
    icon2.src = "data/moon.png"
  }
}