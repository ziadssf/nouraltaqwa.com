const questionsData = [
   {
      quiz: 'ما هي السورة التي نزلت كاملة؟',
      answers : [
         'سورة الحشر',
         'سورة النور',
         'سورة البقرة',
         'ورة المدثر',
      ],
      answer: 3,
      id:1,
   },
   {
      quiz: 'ما هي السورة التي يطلق عليها سنام القرآن؟',
      answers : [
         'سورة الفجر',
         'سورة النور',
         'سورة البقرة',
         ' ورة العصر',
      ],
      answer: 2,
      id:2,
   },
   {
      quiz: 'ما هي السورة التي حث النبي صلى الله عليه وسلم النساء بتعلمها؟',
      answers : [
         'سورة النور',
         'سورة الكهف',
         'سورة النساء',
         'ورة النمل',
      ],
      answer:0,
      id:3,
   },
   {
      quiz: 'ما هي الليلة التي أنزل فيها القرآن الكريم؟',
      answers : [
         'ليلة ١٧  من رمضان ',
         'ليلة ٢٧  من رمضان',
         'ليلة ٢٩  من رمضان',
         'يلة ٣  من رمضان',
      ],
      answer: 1,
      id:4,
   },
   {
      quiz: 'كم عدد سور القرآن الكريم؟',
      answers : [
         '١١٠ سورة',
         '١٠٠ سورة',
         '١١٤ سورة',
         '١٩ سورة',
      ],
      answer: 2,
      id:5,
   },
   {
      quiz: 'أين نزلت أول آية في القرآن الكريم؟',
      answers : [
         'في غار حراء',
         'في غار ثور',
         'في جبل أحد',
         'ي جبل عرفة',
      ],
      answer: 0,
      id:6,
   },
   {
      quiz: 'ما هي أول الآيات التي أنزلت من القرآن الكريم؟',
      answers : [
         'آيات من سورة الحشر',
         'آيات من سورة النور',
         'آيات من سورة الكهف',
         'آيات من سورة القلم',
      ],
      answer: 3,
      id:7,
   },
   {
      quiz: 'في أي سورة تكررت الآية الكريمة {فبأي آلاء ربكما تكذبان} ؟',
      answers : [
         'في سورة الرحمن',
         'في سورة الكوثر',
         'في سورة النمل',
         'في سورة التوبة',
      ],
      answer:0,
      id:8,
   },
   {
      quiz: 'أطول آية في القرآن الكريم في أي سورة تقع؟',
      answers : [
         'سورة الانعام',
         'سورة الشعراء',
         'سورة البقرة',
         'سورة الاعراف',
      ],
      answer:2,
      id:9,
   },
   {
      quiz: 'أقصر سورة في القرآن الكريم ما هي من حيث عدد الايات؟',
      answers : [
         'سورة الكَوْثَر',
         'سورة الإخْلَاص',
         'سورة الفِيل',
         'سورة العَصْر',
      ],
      answer:0,
      id:10,
   },
   {
      quiz: 'كم مرة ذكر اسم الله سبحانه وتعالى في القرآن الكريم؟',
      answers : [
         'ذكر ۱۰۰۰ مرة',
         'ذكر ۱۸۰۰ مرة',
         'ذكر ۲٦۹۷ مرة',
         'ذكر ۷۲۰ مرة',
      ],
      answer:2,
      id:11,
   },
   {
      quiz: 'ما هي السورة الموجودة في القرآن التي بها سجدتان؟',
      answers : [
         'سورة الأعراف',
         'سورة الحج',
         'سورة السجدة',
         'سورة ص',
      ],
      answer:1,
      id:12,
   },
   {
      quiz: 'سورة في القرآن الكريم ذكر فيها اللبن؟',
      answers : [
         'سورة محَمَّد',
         'سورة المُمتَحنَة',
         'سورة الأحْقاف',
         'سورة الجَاثيَة',
      ],
      answer:0,
      id:13,
   },
   {
      quiz: 'ما هي أول سورة نزلت في المدينة بعد هجرة النبي؟',
      answers : [
         'سورة التوبَة',
         'سورة يُوسُف',
         'سورة النِّسَاء',
         'سورة البَقَرَة',
      ],
      answer:3,
      id:14,
   },
   {
      quiz: 'القرآن الكريم فيه كم سجدة؟',
      answers : [
         'سجدة ۱۲',
         '۲۰ سجدة',
         '۱۳ سجدة',
         '۱۹ سجدة',
      ],
      answer:2,
      id:15,
   },
   {
      quiz: 'كم من المرات ذكر أيوب عليه السلام في القرآن الكريم؟',
      answers : [
         'عَشر مرات',
         'أَرْبَع مرات',
         'ثَلاث مرات',
         'سَبْع مرات',
      ],
      answer:1,
      id:16,
   },
   {
      quiz: 'ما هو عدد السور المدنية بالقرآن الكريم؟',
      answers : [
         'تِسْعَةٌ وعِشْرُونَ سورة',
         'سِتَّةٌ وتِسْعُونَ سورة',
         'إثْنانِ وسَبْعونَ سورة',
         'واحِدٌ وعِشْرُونَ سورة',
      ],
      answer:0,
      id:17,
   },
   {
      quiz: 'من هو النبي الذي سمي بخاتم الأنبياء؟',
      answers : [
         'النبي محمد صلى الله عليه و سلم',
         'نوح عليه السلام',
         'أيوب عليه السلام',
         'إبراهيم عليه السلام',
      ],
      answer:0,
      id:18,
   },
   {
      quiz: 'ماذا كان يعمل الرسول محمد صلى الله عليه و سلم قبل الوحي؟',
      answers : [
         'كان يعمل في الرعي',
         'كان يعمل تاجرا',
         'كان يعمل بمهنتي التجارة و رعي الغنائم',
         'كان يعمل في الزراعة',
      ],
      answer:2,
      id:19,
   },
   {
      quiz: 'من هو أول الأنبياء الذي مارس عبادة الصوم؟',
      answers:[
            'آدم عليه السلام',
            'نوح عليه السلام',
            'إبراهيم عليه السلام',
            'محمد صلى الله عليه و سلم',
      ],
      answer:0,
      id:20,
   }
]

// load quran sounds

function displayedElements() {
   fetch('dataK.json')
      .then(response => response.json())
      .then(data => {
         for (let q = 0; q < data.length; q++) {
            const audioSrc = data[q].link;
            const audioEl = new Audio();
            audioEl.src = audioSrc;
            const el = `<div class="box">
                        <img src="./Images/pngegg no show.png"/>
                        <p>${data[q].name}</p>
                        <i class="fa fa-play" aria-iden="true"></i>
                     </div>`
            document.querySelector('.elquran .content').innerHTML += el;
            document.querySelectorAll('.elquran .content .box').forEach(box => {
               box.appendChild(audioEl);
            });
         }
         const contentData = document.querySelectorAll('.elquran .content .box');
         for (d1 = 0; d1 <= 16; d1++) {
            const d1ContentEl = document.querySelector('.one');
            const d1Content = data[d1];
            d1ContentEl.innerHTML += `<a href="${d1Content.link}" target="_blank" download class="item">
                                 <img src="./Images/pngegg no show.png">
                                 <i class="fas fa-cloud-download-alt"></i>
                                 <p>${d1Content.name}</p>
                              </a>`;
         }

         for (d2 = 17; d2 <= 32; d2++) {
            const d2ContentEl = document.querySelector('.two');
            const d2Content = data[d2];
            d2ContentEl.innerHTML += `<a href="${d2Content.link}" target="_blank" download class="item">
                                 <img src="./Images/pngegg no show.png">
                                 <i class="fas fa-cloud-download-alt"></i>
                                 <p>${d2Content.name}</p>
                              </a>`;
         }

         for (d3 = 33; d3 <= data.length-1; d3++) {
            const d3ContentEl = document.querySelector('.three');
            const d3Content = data[d3];
            d3ContentEl.innerHTML += `<a href="${d3Content.link}" target="_blank" download class="item">
                                 <img src="./Images/pngegg no show.png">
                                 <i class="fas fa-cloud-download-alt"></i>
                                 <p>${d3Content.name}</p>
                              </a>`;
         }
      });
};
displayedElements();


// load prayer time api

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = dd + '-' + mm + '-' + yyyy;
const API_URL_PRAYER_TIMES = `https://api.aladhan.com/timingsByAddress/${today}?address=egypt,alexandria`;
today = yyyy + '-' + mm + '-' + dd;

function prayerTime() {
   fetch('dataP.json')
      .then((response) => response.json())
      .then((prayTime) => {
         const prayTimesDate = {
            Fajr: prayTime.data.timings.Fajr,
            Dhuhr: prayTime.data.timings.Dhuhr,
            Asr: prayTime.data.timings.Asr,
            Maghrib: prayTime.data.timings.Maghrib,
            Isha: prayTime.data.timings.Isha,
         }
         document.querySelector('span#Fajr').innerHTML = prayTimesDate.Fajr;
         document.querySelector('span#Dhuhr').innerHTML = prayTimesDate.Dhuhr;
         document.querySelector('span#Asr').innerHTML = prayTimesDate.Asr;
         document.querySelector('span#Maghrib').innerHTML = prayTimesDate.Maghrib;
         document.querySelector('span#Isha').innerHTML = prayTimesDate.Isha;
         function formatAMPM(date) {
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let currentPray = '';
            const azanElContent = document.querySelector('.azan');
            hours = (hours < 10) ? '0' + hours : hours;
            minutes = (minutes < 10) ? '0' + minutes : minutes;
            let time = hours + ':' + minutes;
            if (JSON.stringify(time) == JSON.stringify(document.querySelector('span#Fajr').textContent)) {
               currentPray = 'الفجر';
               document.querySelector('.prayName').innerHTML = currentPray;
               document.querySelector('.prayDate').innerHTML = prayTimesDate.Fajr;
            } else if(JSON.stringify(time) == JSON.stringify(document.querySelector('span#Dhuhr').textContent)){
               currentPray = 'الظهر';
               document.querySelector('.prayName').innerHTML = currentPray;
               document.querySelector('.prayDate').innerHTML = prayTimesDate.Dhuhr;
            } else if(JSON.stringify(time) == JSON.stringify(document.querySelector('span#Asr').textContent)){
               currentPray = 'العصر';
               document.querySelector('.prayName').innerHTML = currentPray;
               document.querySelector('.prayDate').innerHTML = prayTimesDate.Asr;
            } else if(JSON.stringify(time) == JSON.stringify(document.querySelector('span#Maghrib').textContent)){
               currentPray = 'المغرب';
               document.querySelector('.prayName').innerHTML = currentPray;
               document.querySelector('.prayDate').innerHTML = prayTimesDate.Maghrib;
            } else if(JSON.stringify(time) == JSON.stringify(document.querySelector('span#Isha').textContent)){
               currentPray = 'العشاء';
               document.querySelector('.prayName').innerHTML = currentPray;
               document.querySelector('.prayDate').innerHTML = prayTimesDate.Isha;
            }
            if ((JSON.stringify(time) == JSON.stringify(prayTimesDate.Fajr)) || (JSON.stringify(time) == JSON.stringify(prayTimesDate.Dhuhr)) || (JSON.stringify(time) == JSON.stringify(prayTimesDate.Asr)) || (JSON.stringify(time) == JSON.stringify(prayTimesDate.Maghrib)) || (JSON.stringify(time) == JSON.stringify(prayTimesDate.Isha))) {
               azanElContent.style.transform = 'translateX(0%)';
               azanElContent.style.opacity = '1';
               document.querySelectorAll('audio').forEach(audio => {
                  audio.pause();
               });
               azanElContent.querySelector('audio').play();
               document.body.style.overflow = 'hidden';
            }
            azanElContent.querySelector('audio').addEventListener('ended', () => {
               azanElContent.style.transform = 'translateX(-100%)';
               azanElContent.style.opacity = '0';
               azanElContent.querySelector('audio').pause;
               document.body.style.overflow = 'auto';
               openAzanBtn.classList.add('active');
               displayedEl.classList.add('showHide');
               azanSection.classList.add('slideTop');
               document.body.style.overflow = 'hidden';
            });
            const azanForPrayName = azanElContent.querySelector('.content .prayName').textContent;
            if (azanForPrayName == 'الفجر') {
               document.querySelector('span#Fajr').style.color = '#FFF';
               document.querySelector('span#Fajr').style.background = '#007BFF';
            } else {
               document.querySelector('span#Fajr').style.color = '#000';
               document.querySelector('span#Fajr').style.background = '#FFF';
            }
            if (azanForPrayName == 'الظهر') {
               document.querySelector('span#Dhuhr').style.color = '#FFF';
               document.querySelector('span#Dhuhr').style.background = '#007BFF';
            } else {
               document.querySelector('span#Dhuhr').style.color = '#000';
               document.querySelector('span#Dhuhr').style.background = '#FFF';
            }
            if (azanForPrayName == 'العصر') {
               document.querySelector('span#Asr').style.color = '#FFF';
               document.querySelector('span#Asr').style.background = '#007BFF';
            } else {
               document.querySelector('span#Asr').style.color = '#000';
               document.querySelector('span#Asr').style.background = '#FFF';
            }
            if (azanForPrayName == 'المغرب') {
               document.querySelector('span#Maghrib').style.color = '#FFF';
               document.querySelector('span#Maghrib').style.background = '#007BFF';
            } else {
               document.querySelector('span#Maghrib').style.color = '#000';
               document.querySelector('span#Maghrib').style.background = '#FFF';
            }
            if (azanForPrayName == 'العشاء') {
               document.querySelector('span#Isha').style.color = '#FFF';
               document.querySelector('span#Isha').style.background = '#007BFF';
            } else {
               document.querySelector('span#Isha').style.color = '#000';
               document.querySelector('span#Isha').style.background = '#FFF';
            }
         }
         setInterval(() => formatAMPM(new Date), 1000);
      });
}



prayerTime();

// load questions data

const questionEl = document.querySelector('h2.question');
const resultsEl = document.querySelector('.results');
const nextQuizBtnEl = document.querySelector('.next-quiz-btn');
const startGameBtn = document.querySelector('.start-game-btn');
const mosabaqaContent = document.querySelector('.mosabaqa .content');
const startMosabaqa = document.querySelector('.start-mosabaqa');
const counterLineEl = document.querySelector('.timer-count-down');
const maxQuiz = 5;
const quizScore = 50;
let moneyEffectEl = `<div class="money-effect">
                                       <div class="imgBx">
                                          <img src="./Images/coin.svg">
                                       </div>
                                       <div class="imgBx">
                                          <img src="./Images/coin.svg">
                                       </div>
                                       <div class="imgBx">
                                          <img src="./Images/coin.svg">
                                       </div>
                                       <div class="imgBx">
                                          <img src="./Images/coin.svg">
                                       </div>
                                       <div class="imgBx">
                                          <img src="./Images/coin.svg">
                                       </div>
                                       <div class="imgBx">
                                          <img src="./Images/coin.svg">
                                       </div>
                                 </div>`;
let progressVal = 0;
let questionsFinished = 0;
let randNum = Math.floor(Math.random() * questionsData.length);
let questionsCorrect = 0;
let currentAnswerChosed = '';
let currentGwaez;
questionEl.textContent = questionsData[randNum].quiz;
questionsData[randNum].answers.forEach(answer => {
   resultsEl.innerHTML += `<p>${answer}</p>`;
});

window.addEventListener('click', () => {
   const answersEl = resultsEl.querySelectorAll('p');
   answersEl.forEach(answerLoop => {
      answerLoop.addEventListener('click', () => {
         currentAnswerChosed = answerLoop.textContent;
         for (r = 0; r < answersEl.length; r++) {
            answersEl[r].classList.remove('chosed-answer')
         }
         answerLoop.classList.toggle('chosed-answer');
      });
   });
   if (currentAnswerChosed == '') {
      nextQuizBtnEl.style.pointerEvents = 'none';
   } else {
      nextQuizBtnEl.style.pointerEvents = 'all';
      nextQuizBtnEl.addEventListener('click', () => {
         const answersEl = resultsEl.querySelectorAll('p');
         const trueIcon = `<i class="fa fa-check" aria-hidden="true"></i>`;
         const faseIcon = `<i class="fa fa-times" aria-hidden="true"></i>`;
         if (currentAnswerChosed != '') {
            clearInterval(counterLine);
            setTimeout(() => {
               startTimerLine(432);
            }, 2500);
            progressVal += 42;
            questionsFinished += 1;
            if (currentAnswerChosed == questionsData[randNum].answers[questionsData[randNum].answer]) {
               questionsCorrect += 1;
               answersEl.forEach(answerr2 => {
                  answerr2.style.background = 'rgba(255, 0, 0, 0.671)';
                  answerr2.style.color = '#fff';
                  answerr2.innerHTML += faseIcon;
               });
               const answerTrue = document.querySelector('.results p.chosed-answer');
               answerTrue.style.background = 'rgb(39 206 108 / 67%)';
               answerTrue.style.color = '#fff';
               answerTrue.querySelector('.fa-times').remove();
               answerTrue.innerHTML += trueIcon;
               nextQuizBtnEl.style.pointerEvents = 'none';
               setTimeout(() => {
                  nextQuizBtnEl.style.pointerEvents = 'all';
               }, 2500);
            } else {
               answersEl.forEach(answerr2 => {
                  answerr2.style.background = 'rgba(255, 0, 0, 0.671)';
                  answerr2.style.color = '#fff';
                  answerr2.innerHTML += faseIcon;
               });
               const answerTrue = document.querySelectorAll('.results p')[questionsData[randNum].answer];
               answerTrue.style.background = 'rgb(39 206 108 / 67%)';
               answerTrue.style.color = '#fff';
               answerTrue.querySelector('.fa-times').remove();
               answerTrue.innerHTML += trueIcon;
               nextQuizBtnEl.style.pointerEvents = 'none';
               setTimeout(() => {
                  nextQuizBtnEl.style.pointerEvents = 'all';
               }, 2500);
            }
            setTimeout(() => {
               answersEl.forEach(answerr => {
                  answerr.remove();
               })
               randNum += 1;
               questionEl.textContent = questionsData[randNum].quiz;
               questionsData[randNum].answers.forEach(answer => {
                  resultsEl.innerHTML += `<p>${answer}</p>`;
               });
            }, 2500);
            currentAnswerChosed = '';
         }
         document.querySelector('.bullets .spans span').style.width = `${progressVal}px`;
         document.querySelector('p.score').innerHTML = `${questionsFinished}/${maxQuiz}`;
         randNum = randNum == (questionsData.length - 1) ? 0 : randNum;
         if (questionsFinished >= maxQuiz) {
            setTimeout(() => {
               mosabaqaContent.style.transform = 'scale(0)';
               startMosabaqa.style.display = 'flex';
               startGameBtn.style.pointerEvents = 'none';
               nextQuizBtnEl.style.pointerEvents = 'none';
               setTimeout(() => {
                  mosabaqaContent.style.display = 'none';
                  startMosabaqa.style.transform = 'scale(1)';
                  startGameBtn.textContent = 'إنتهت المسابقة لليوم';
                  setTimeout(() => {
                     startMosabaqa.innerHTML += moneyEffectEl;
                  }, 500);
               }, 100);
            }, 2000);
            setTimeout(() => {
               document.querySelectorAll('.start-score span')[0].textContent = questionsCorrect * quizScore;
            }, 3000);
            setTimeout(() => {
               const gwaezBoxs = startMosabaqa.querySelectorAll('.gallary .imgBx');
               if ((questionsCorrect * quizScore) == 50) {
                  currentGwaez = 1;
               } else if ((questionsCorrect * quizScore) == 100) {
                  currentGwaez = 3;
               } else if ((questionsCorrect * quizScore) == 150) {
                  currentGwaez = [2, 5][Math.floor(Math.random() * 2)];
               } else if ((questionsCorrect * quizScore) == 200) {
                  currentGwaez = 4;
               } else if ((questionsCorrect * quizScore) == 250) {
                  currentGwaez = 0;
               }
               gwaezBoxs[currentGwaez].classList.add('chosedGwaez');
            }, 3000);

            setInterval(() => {
               const moneyEffect = document.querySelectorAll('.money-effect');
               if (moneyEffect.length > 1) {
                  for (mr = 0; mr < moneyEffect.length; mr++) {
                     moneyEffect[mr].remove();
                     moneyEffectEl = ``;
                  }
               }
            }, 2000);
         }
      });
   }
});


function startTimerLine(time) {
   counterLine = setInterval(timerLine, 29);
   function timerLine() {
      time -= 1;
      counterLineEl.style.height = time + "px";
      if (time <= 0) {
         clearInterval(counterLine);
         currentAnswerChosed = (currentAnswerChosed != '') ? currentAnswerChosed : 'false';
         document.querySelector('.clicked-one').click();
         nextQuizBtnEl.style.pointerEvents = 'all';
         nextQuizBtnEl.click();
         setTimeout(() => {
            currentAnswerChosed = '';
         }, 2500);
      }
   }
}

startGameBtn.addEventListener('click', () => {
   mosabaqaContent.style.display = 'block';
   startMosabaqa.style.transform = 'scale(0)';
   setTimeout(() => {
      mosabaqaContent.style.transform = 'scale(1)';
      startMosabaqa.style.display = 'none';
   }, 100);
   startTimerLine(432);
});
