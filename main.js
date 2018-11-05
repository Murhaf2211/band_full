let navMoreUl = document.querySelector('#more');
let list = document.querySelector('#morelist');

let navList = document.querySelectorAll('.navlist');
let sections = document.querySelectorAll('.sectionlist');

let leftButton = document.querySelector('#left');
let rightButton = document.querySelector('#right');
let hamePic = document.querySelectorAll('.homeImg');

navMoreUl.addEventListener('click',function(){
  list.classList.toggle('visible');

})

window.addEventListener('scroll', function(ev) {
for (let i = 0; i < sections.length; i++) {
  if (window.pageYOffset >= sections[i].offsetTop && window.pageYOffset < sections[i + 1].offsetTop) {
    for (let x = 0; x < name.length; x++) {
    if (navList[x].classList.contains('spyScroll')){
    navList[x].classList.remove('spyScroll');
    break;
  }
    }
    navList[i].classList.add('spyScroll');
      }
    }
})
