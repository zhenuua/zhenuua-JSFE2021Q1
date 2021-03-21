//работа кнопок

window.addEventListener('keydown', playSound)

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


//работа мыши
const piano = document.querySelector('.piano');
const pianoKeys = document.querySelector('.piano-key');

piano.addEventListener('mousedown', function(event){
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

piano.addEventListener('mousedown', function(e){
  e.target.classList.add('playing')
});


//наведение мыши
const startSound = (e) => {
  e.target.classList.add('playing')
    const note = e.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);
}

const stopSound = (e) => {
  e.target.classList.remove('playing')
}

const startCorespondOver = (e) => {
  if (e.target.classList.contains('.piano-key')){
    e.target.classList.add('playing')
  }
 
  pianokeys.forEach((elem) => {
  elem.addEventListener('mouseover', startSound);
  //elem.addEventListener('mouseout', stopSound);
  })
}

const stopCorespondOver = () => {
  pianokeys.forEach((elem) => {
  elem.classList.remove('playing');
  elem.removeEventListener('mouseover', startSound);
  //elem.removeEventListener('mouseout', stopSound);
  })
}
piano.addEventListener('mousedown', startCorespondOver);
document.addEventListener('mouseup', stopCorespondOver);


//Кнопки Notes/Letters
const notes = document.querySelector('.btn-notes')
const letters = document.querySelector('.btn-letters')
const btn = document.querySelectorAll('.btn') 

const changenotes = (e) =>{    

  pianokeys.forEach(item => {
    item.classList.remove('piano-key-letter')
    item.classList.add('piano-key-note')
  })
  if (!e.target.classList.contains('btn-active')){
    btn.forEach(item =>{
      item.classList.toggle('btn-active')
    })
  }
}

const changeletters = (e) =>{
  pianokeys.forEach(item => {
    item.classList.remove('piano-key-note')
    item.classList.add('piano-key-letter')
  })
  if (!e.target.classList.contains('btn-active')){
    btn.forEach(item =>{
      item.classList.toggle('btn-active')
    })
  }
}

notes.addEventListener('click', changenotes)
letters.addEventListener('click', changeletters)


//fullscreen
document.querySelector(".fullscreen").addEventListener("click", function() {
  toggleFS()
});

function isFullScreen() {
  return (document.fullScreenElement && document.fullScreenElement !== null) ||
    (document.mozFullScreen || document.webkitIsFullScreen);
}

function enterFS() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
}

function exitFS() {                 
  if (document.exitFullScreen)          
  return document.exitFullScreen();
  else if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
}

function toggleFS() {
  if (!isFullScreen()) {
    enterFS();
  } else {
    exitFS();
  }
}
