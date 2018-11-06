let navMoreUl = document.querySelector('#more');
let list = document.querySelector('#morelist');

let navList = document.querySelectorAll('.navlist');
let sections = document.querySelectorAll('.sectionlist');

let leftButton = document.querySelector('#left');
let rightButton = document.querySelector('#right');
let hamePic = document.querySelectorAll('.homeImg');

let bandParagaph = document.querySelectorAll('.Band_paragaph');
let bandImg = document.querySelectorAll('.Band_Pic');

let goUp = document.querySelector('#up');

navMoreUl.addEventListener('click',function(){
  list.classList.toggle('visible');
})

window.addEventListener('scroll', function(ev) {
for (let i = 0; i < sections.length; i++) {
  if (window.pageYOffset >= sections[i].offsetTop && window.pageYOffset < sections[i + 1].offsetTop) {
    for (let j = 0; j < navList.length; j++) {
    if (navList[j].classList.contains('spyScroll')){
    navList[j].classList.remove('spyScroll');
    break;
  }
    }
    navList[i].classList.add('spyScroll');
      }
    }
})

for (let x = 0; x < bandImg.length; x++) {
  bandImg[x].addEventListener('click', function(ev){
    ev.stopPropagation();
    bandParagaph[x].classList.toggle('paragVisible');
  })
}
goUp.addEventListener('click',function(){
  document.body.scrollTop = document.documentElement.scrollTop = 0;
})
