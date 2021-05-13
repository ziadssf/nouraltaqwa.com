// => variables
const header = document.querySelector('header .content');
const soundsContent = document.querySelector('.elquran .content');
const UlList = header.querySelector('ul');
const burgerIcon = document.querySelector('.burger-icon');
const burgerIconSpan = burgerIcon.querySelectorAll('span');
const text = document.querySelector('h2 .texts');
const UlLinks = UlList.querySelectorAll('a');
const sectionsEl = document.querySelectorAll('section');
const sounds = document.querySelectorAll('.elquran .box');
const loadMoreSounds = document.querySelector('.elquran .load-more');
let checkSoundsContentHeight = false;
let checkSound = false;
let video = document.createElement('video');
const bannerEl = document.querySelector('.banner');
const loaderEl = document.querySelector('.loader');
const displayedEl = document.querySelector('.displayed');
const openAzanBtn = document.querySelector('a.elslah');
const azanSection = document.querySelector('div#elslah');
const closeAzanSec = document.querySelector('#elslah #close');
const texts = [
   "القرآن الكريم كاملا إستماع و تحميل",
   "القرآن الكريم كاملا إستماع و تحميل",
   "القرآن الكريم كاملا إستماع و تحميل",
   "مسابقات رماضانية كل سنة",
   "مسابقات رماضانية كل سنة",
   "مسابقات رماضانية كل سنة",
   "هدايا في كل عيد لكل مسلم و مسلمة",
   "هدايا في كل عيد لكل مسلم و مسلمة",
   "هدايا في كل عيد لكل مسلم و مسلمة",
   "مواقيت الصلاوات الخمس",
   "مواقيت الصلاوات الخمس",
   "مواقيت الصلاوات الخمس",
];
let count = 0;
let index = 0;
let letters = '';
let currentText = '';

// => functions
const effectHeader = () => {
   header.classList.toggle('effect', window.scrollY > 100);
};

const UlSlideLeft = () => {
   UlList.classList.toggle('slide-left');
};

const burgerIconEffect = () => {
   burgerIconSpan[0].classList.toggle('rotate1');
   burgerIconSpan[1].classList.toggle('rotate2');
   burgerIconSpan[2].classList.toggle('displayed');
};

const removeEffect = () => {
   UlList.classList.remove('slide-left');
   burgerIconSpan[0].classList.remove('rotate1');
   burgerIconSpan[1].classList.remove('rotate2');
   burgerIconSpan[2].classList.remove('displayed');
};

const textWhite = () => {
   if (count == texts.length) {
      count = 0;
   };
   currentText = texts[count];
   letters = currentText.slice(0, ++index);
   text.textContent = letters;
   if (letters.length == currentText.length) {
      setTimeout(() => {
         count++;
         index = 0;
      }, 1050)
   };
   setTimeout(textWhite, 350);
};
textWhite();




const homeLinkActive = () => {
   for (w = 0; w < UlLinks.length; w++) {
      UlLinks[w].classList.remove('active');
   }
   UlLinks[0].classList.add('active');
};

const loading = () => {
   loaderEl.style.display = 'flex';
   document.body.style.overflow = 'hidden';
   document.querySelectorAll('a').forEach(a => {
      a.style.pointerEvents = 'none';
   });
   setTimeout(() => {
      document.body.style.overflow = 'auto';
      loaderEl.style.opacity = '0';
      loaderEl.style.zIndex = '-1';
      document.querySelectorAll('a').forEach(a => {
         a.style.pointerEvents = 'all';
      });
   }, 20000);
};

// => events
window.addEventListener('scroll', () => {
   let current = '';
   sectionsEl.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 50) {
         current = section.getAttribute('id');
      }
      UlLinks.forEach(link => {
         link.classList.remove('active');
         if (link.classList.contains(current)) {
            link.classList.add('active');
         }
      });
   });
   effectHeader();
   if (window.scrollY == 0) {
      homeLinkActive();
   }
   setTimeout(() => {
      removeEffect();
   }, 400);
});

window.addEventListener('load', () => {
   loading();
});

burgerIcon.addEventListener('click', () => {
   displayedEl.classList.remove('showHide');
   azanSection.classList.remove('slideTop' ? 'slideTop' : null);
   openAzanBtn.classList.remove('active');
   UlSlideLeft();
   burgerIconEffect();
});


setTimeout(() => {
   const sounds = document.querySelectorAll('.elquran .box');
   sounds.forEach(sound => {
      sound.addEventListener('click', () => {
         for (l = 0; l < document.querySelectorAll('.elquran audio').length; l++) {
            document.querySelectorAll('.elquran audio')[l].pause();
         }
         for (x = 0; x < document.querySelectorAll('.elquran audio').length; x++) {
            document.querySelectorAll('.elquran img')[x].style.animationPlayState = 'paused';
         }
         for (a = 0; a < document.querySelectorAll('.elquran .box').length; a++) {
            document.querySelectorAll('.elquran .box')[a].querySelector('i').classList.remove('fa-pause')
            document.querySelectorAll('.elquran .box')[a].querySelector('i').classList.add('fa-play')
         }
         checkSound = !checkSound;
         if (checkSound) {
            for (e = 0; e < document.querySelectorAll('.elquran .box').length; e++) {
               sound.querySelector('i') ? sound.querySelector('i').remove() : null;
            }
            let icon = `<i class="fa ${checkSound ? "fa-pause" : "fa-play"}" aria-hidden="true"></i>`;
            sound.innerHTML += icon;
            sound.querySelector('audio').loop = true;
            sound.querySelector('audio').pause();
            sound.querySelector('audio').currentTime = 0;
            sound.querySelector('audio').play();
            sound.querySelector('img').style.animation = 'rotateSound 0.7s linear infinite';
         } else {
            for (e = 0; e < document.querySelectorAll('.elquran .box').length; e++) {
               sound.querySelector('i') ? sound.querySelector('i').remove() : null;
            }
            let icon = `<i class="fa ${checkSound ? "fa-pause" : "fa-play"}" aria-hidden="true"></i>`;
            sound.innerHTML += icon;
            sound.querySelector('audio').pause();
            sound.querySelector('img').style.animationPlayState = 'paused';
         }
      });
   });
}, 0);



loadMoreSounds.addEventListener('click', () => {
   checkSoundsContentHeight = !checkSoundsContentHeight;
   loadMoreSounds.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i>`;
   setTimeout(() => {
      soundsContent.style.height = checkSoundsContentHeight ? 'fit-content' : '942px';
      loadMoreSounds.innerHTML = checkSoundsContentHeight ? 'إغلاق' : 'كل السور';
   }, 1000);
});

openAzanBtn.addEventListener('click', () => {
   window.scrollBy(0, window.scrollY <= 0 ? 2 : -2);
   setTimeout(() => {
      for (ul = 0; ul < UlLinks.length; ul++) {
         UlLinks[ul].classList.remove('active');
      }
      openAzanBtn.classList.add('active');
   },200)
   displayedEl.classList.add('showHide');
   azanSection.classList.add('slideTop');
   document.body.style.overflow = 'hidden';
});

closeAzanSec.addEventListener('click', () => {
   for (ul = 0; ul < UlLinks.length; ul++) {
      UlLinks[ul].classList.remove('active');
   }
   openAzanBtn.classList.remove('active');
   window.scrollBy(0, window.scrollY <= 0 ? 2 : -2);
   displayedEl.classList.remove('showHide');
   azanSection.classList.remove('slideTop');
   document.body.style.overflow = 'auto';
});
