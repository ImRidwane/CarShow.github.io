const IMG_SUPRA = "supra-mk5-widebody.jpeg";
const IMG_AVENTADOR = "aventador-svj.jpg";
const IMG_RX7 = "rx7-fd3s-widebody.jpg";
const IMG_GTR = "gtr-r35-nismo.jpg";
const IMG_LAFERRARI = "LaFerrari.jpg";
const IMG_GT3RS = "911-gt3-rs.jpg";
const IMG_P1GTR = "p1-gtr.jpeg";
const IMG_CHIRON = "chiron-super-sport-300-og.jpg";
const IMG_JESKO = "jesko-absolut.jpg";
const IMG_ZONDA = "zonda-r.jpg";
const IMG_VIPER = "viper-acr-srt.jpg";

// Assign images
document.getElementById('imgChiron').src = IMG_CHIRON;
document.getElementById('imgJesko').src = IMG_JESKO;
document.getElementById('imgZonda').src = IMG_ZONDA;
document.getElementById('imgP1gtr').src = IMG_P1GTR;
document.getElementById('imgLaferrari').src = IMG_LAFERRARI;
document.getElementById('imgAventador').src = IMG_AVENTADOR;
document.getElementById('imgGt3rs').src = IMG_GT3RS;
document.getElementById('imgViper').src = IMG_VIPER;
document.getElementById('imgSupra').src = IMG_SUPRA;
document.getElementById('imgRx7').src = IMG_RX7;
document.getElementById('imgGtr').src = IMG_GTR;

// Set hero background (default = chiron)
const heroBg = document.getElementById('heroBg');
heroBg.style.backgroundImage = "url(" + IMG_JESKO + ")";

function setHero(src) {
  heroBg.style.backgroundImage = "url(" + src + ")";
}

// Nav active state on scroll
const sections = ['hypercars','supercars','jdm'];
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 80) current = id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});
