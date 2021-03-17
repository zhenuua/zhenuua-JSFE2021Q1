document.addEventListener('keydown', playSound)

function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const pianokey = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`)
  if (!audio) return; //stop from running all together
  audio.currentTime = 0;
  audio.play();
  pianokey.classList.add('playing');
}

function removeTransitions(e) {
//if (e.propertyName !== 'transition') return; //skip it if it's not transorm
 this.classList.remove('playing')
}

const pianokeys = document.querySelectorAll('.piano-key');
pianokeys.forEach(pianokey => pianokey.addEventListener('transitionend', removeTransitions))


/* мышка одиночное нажатие
const piano = document.querySelector('.piano');
const pianoKeys = document.querySelector('.piano-key');

piano.addEventListener('click', function(event){
    if(event.target.classList.contains('piano-key')) {
      const note = event.target.dataset.note;
      const src = `assets/audio/${note}.mp3`;
      playAudio(src);
    }   
  });

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }


/* подсвечивание клавиш
  piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')) {
      pianoКeys.forEach((el) => {
        if(el.classList.contains('active')) {
          el.classList.remove('active');
        }
      });
      event.target.classList.add('active');
    }
  });*/


  /* ИЗ ВИДЕО епам
  function playAudio(){
    console.log(event.target);
}
pianoKeys.addEventListener('click', playAudio);

function playAudio(){
    console.log(event.target);
}
piano.addEventListener('click', playAudio);

const pianoKeys = docoment.querySelector('.piano-key');
pianoKeys.addEventListener('click', changecolor)
function changecolor(){
    console.log(event.target.classList);
    event.target.classList.toggle('testcolor');
}
*/