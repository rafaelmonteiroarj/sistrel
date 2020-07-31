const menu = document.getElementsByClassName("sub");
const btnTop = document.getElementById("btnTop");
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const header = document.querySelector('header');
const menuSistrel = document.querySelector('.menu-sistrel');
const menuToggle = document.querySelector(".menu-toggle");
const acc = document.getElementsByClassName("accordion");
const subItems = document.getElementsByClassName("sub-items");

let showToggle = true;

const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
sessionStorage.setItem('intFrameWidth', w);

window.addEventListener('resize', () => {
  const intFrameWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  sessionStorage.setItem('intFrameWidth', intFrameWidth);
})


/** sub list  */
Array.from(menu).forEach((element, index) => {
  let showMenu = true;

  element.addEventListener('mouseover', () => {
    // console.log('mouseover', `intFrameWidth: ${sessionStorage.getItem('intFrameWidth')}`);
    if (sessionStorage.getItem('intFrameWidth') > 1200) {
      acc[index].classList.add('on');
      subItems[index].classList.add('active');
    }
  });

  element.addEventListener('mouseout', () => {
    // console.log('mousemouseoutover', `intFrameWidth: ${sessionStorage.getItem('intFrameWidth')}`);
    if (sessionStorage.getItem('intFrameWidth') > 1200) {
      acc[index].classList.remove('on');
      subItems[index].classList.remove('active');
    }
  });

  element.addEventListener('click', () => {
    // console.log('click', `intFrameWidth: ${sessionStorage.getItem('intFrameWidth')}`);
    if (sessionStorage.getItem('intFrameWidth') <= 1200) {
      acc[index].classList.toggle('on', showMenu);
      subItems[index].classList.toggle('active', showMenu);
      showMenu = !showMenu;
    }
  });
});

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('on');
  menuSistrel.classList.toggle('active');

  if (menuSistrel.classList.contains("active")) {
    footer.classList.add("disable");
    main.classList.add("disable");
    btnTop.classList.add("disable2");
  } else {
    footer.classList.remove("disable");
    main.classList.remove("disable");
    btnTop.classList.remove("disable2");
  }
});

const animeScroll = () => {
  const windowTop = window.pageYOffset;
  if (windowTop > 100) {
    header.classList.add('animeScroll');
    console.log('>>>>>>>', windowTop);
  } else {
    header.classList.remove('animeScroll');
  }
}

window.addEventListener('scroll', () => {
  animeScroll();
})

/** Botão para navegar até o TOPO */
window.onscroll = () =>  scroll();

const scroll = () => {
  let btn = document.getElementById("btnTop");

  if (document.documentElement.scrollTop > 50) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

const backToTop = () => {
  document.documentElement.scrollTop = 0;
}