window.onload = () => {
  const transition_el = document.querySelector('.transition');
  const anchors = document.querySelectorAll('a');
  const menu_btn = document.querySelector('.humburger');
  const moblile_menu = document.querySelector('.mob-navbar');
  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    moblile_menu.classList.toggle('is-active');
  })
  
  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 500);
  
  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;

      console.log(transition_el);

      transition_el.classList.add('is-active');

      console.log(transition_el);

      setInterval(() => {
        window.location.href = target;
      }, 500);
    })
  }
}

var icon = document.getElementById('icon');
var icon2 = document.getElementById('icon2')
icon.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    icon.src = "../data/sun.png"
  }else {
    icon.src = "../data/moon.png"
  }
}

icon2.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    icon2.src = "../data/sun.png"
  }else {
    icon2.src = "../data/moon.png"
  }
}
