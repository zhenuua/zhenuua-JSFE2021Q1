document.addEventListener("DOMContentLoaded", function (){drawImage('./assets/img/img.jpg')} );
const canvas = document.querySelector('canvas');
const allBtn = document.querySelectorAll('.btn') 
let imageSrc = '' 


// --------- Filters --------

let currentFilters = {
    blur: '0px',
    invert: '0%',
    sepia: '0%',
    saturate: '100%',
    hue: '0deg'
}

const defaults = {
    blur: 0,
    invert: 0,
    sepia: 0,
    saturate: 100,
    hue: 0
}
const btnSave = document.querySelector('.btn-save')
const inputs = document.querySelectorAll('.filters input')

function handleInputUpdate(e){
  const canvas = document.querySelector('canvas');
    const elem = e.target
    const suffix = elem.dataset.sizing || '';
    const ctx = canvas.getContext('2d');
    // ctx.filter = 'contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)';
   // console.log(e.target.name);
    //console.log(`${this.name(this.value + suffix)}`);

    let filter = `${elem.name}(${elem.value + suffix})`
    currentFilters[elem.name] = elem.value + suffix
  
    //let changeFilter = `blur(${currentFilters.blur}) invert(${currentFilters.invert}) sepia(${currentFilters.sepia}) saturate(${currentFilters.saturate}) hue(${currentFilters.hue})`
    let changeFilter = `blur(${currentFilters.blur}) invert(${currentFilters.invert}) sepia(${currentFilters.sepia}) saturate(${currentFilters.saturate}) hue-rotate(${currentFilters.hue})`
    console.log(changeFilter);
    
    drawImage(imageSrc, changeFilter)



    //ctx.filter = `${elem.name}(${elem.value + suffix})`
    
    //console.log(e.target.value);
    //console.log(e.target.dataset);
   // document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
   
    this.nextElementSibling.innerHTML = this.value;
}

inputs.forEach(input => input.addEventListener('change', handleInputUpdate))  //mousemove
//inputs.forEach(input => input.addEventListener('mousemove', handleInputUpdate))

// --------- Reset --------

const bottonReset = document.querySelector('.btn-reset')

function resetFilters(e){
    inputs.forEach(input => { 
        input.value = defaults[input.name]
        input.nextElementSibling.innerHTML = defaults[input.name];
        let filter = ''
        currentFilters = {
          blur: '0px',
          invert: '0%',
          sepia: '0%',
          saturate: '100%',
          hue: '0deg'
      }
        drawImage(imageSrc, filter)  
//document.documentElement.style.removeProperty(`--${input.name}`)


    })
    if (!e.target.classList.contains('btn-active')){
        allBtn.forEach(
          item =>{
          item.classList.remove('btn-active')
        })
      } e.target.classList.add('btn-active')
}

bottonReset.addEventListener('click', resetFilters)


//--------- Next picture --------
let now = new Date().getHours()

if (now >= 0 && now <= 5){
  now ='night/' 
} if (now >= 6 && now <= 11){
  now ='morning/'
} if (now >= 12 && now <= 17){
  now ='day/'
} else {
  now ='evening/'
}
//console.log(now);

const base = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;

const btn = document.querySelector('.btn-next');

/*function viewBgImage(src) {  
  const img = new Image();
  img.src = src;
  img.onload = () => {  
     // document.getElementById('image').src = src
  }; 
}*/

function getImage(e) {
  
  //fileInput.remove(document.getElementById('image'))
  const index = i % images.length;
  const currentSrc = base + now + images[index];
  let changeFilter = `blur(${currentFilters.blur}) invert(${currentFilters.invert}) sepia(${currentFilters.sepia}) saturate(${currentFilters.saturate}) hue-rotate(${currentFilters.hue})`

  drawImage(currentSrc, changeFilter)
  /*viewBgImage(imageSrc);*/
  imageSrc = currentSrc
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);

  if (!e.target.classList.contains('btn-active')){
    allBtn.forEach(
      item =>{
      item.classList.remove('btn-active')
    })
  } e.target.classList.add('btn-active')
} 
btn.addEventListener('click', getImage);


//-------- Load picture --------

const fileInput = document.querySelector('.btn-load--input');

/* FIXXXX     изменение цвета btn load
function chancheColorBottonLoad(e){
  if (!e.target.classList.contains('btn-active')){
    allBtn.forEach(
      item =>{
      item.classList.remove('btn-active')
    })
  } e.target.classList.add('btn-active')
}
*/
//const btnload = document.querySelector('.btn-load')
//btnload.addEventListener('click', chancheColorBottonLoad)

 function loadImage() {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      imageSrc = reader.result
      let changeFilter = `blur(${currentFilters.blur}) invert(${currentFilters.invert}) sepia(${currentFilters.sepia}) saturate(${currentFilters.saturate}) hue-rotate(${currentFilters.hue})`
      drawImage(reader.result, changeFilter)
      fileInput.value = ''
    }
    reader.readAsDataURL(file);

    
  };
  fileInput.addEventListener('change', loadImage)




//-------- Save picture --------


  function drawImage(src, filter = '') {

    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous')
    img.src = src;
    img.onload = function(){    
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.filter = filter;
  
      ctx.drawImage(img, 0, 0);
    };
  }

  function saveImage(e) {
    let link = document.createElement("a");
    link.download = 'image.jpg';   
    link.href = canvas.toDataURL(); 
    link.click(); 
    link.delete;



    if (!e.target.classList.contains('btn-active')){
      allBtn.forEach(item =>{
        item.classList.remove('btn-active')
      })
    } e.target.classList.add('btn-active')
  }


btnSave.addEventListener('click', saveImage);




//-------- Fullscreen --------

document.querySelector('.fullscreen').addEventListener('click', toogleScreen);

function toogleScreen() {
    if (document.fullscreenElement == null) {
        document.documentElement.requestFullscreen();
    }
    else {
        if (document.fullscreenEnabled == true) {
            document.exitFullscreen();
        }
    }    
}