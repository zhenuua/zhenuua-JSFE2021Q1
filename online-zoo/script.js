//-----------------POPUP-----------------
let popupMain = document.querySelectorAll('.popup-main')
let donateNowBtn = document.querySelector('.view-life-cam-submit-pay-feed')
let donateVolunteersBtn = document.querySelector('.donate-for-volunteers-submit')
let popupDonateWindow = document.querySelector('.popup-1')
let popupDonateWindowPrice = document.querySelector('.popup-2')
let popupDonateWindowName = document.querySelector('.popup-3')
let popupDonateCreditCard = document.querySelector('.popup-4')
let popupClose = document.querySelector('.popup-close')
let popup1Botton = document.querySelectorAll('.popup-1-botton')
let popup2Botton = document.querySelectorAll('.popup-2-botton')
let donateValue = '';
//let popup2BottonContainer = document.querySelector('.popup-2-botton-container')
let nextPpup2Botton = document.querySelector('.next-popup-1')
let nextPpup3Botton = document.querySelector('.next-popup-2')
let completeDonationBotton = document.querySelector('.complete-popup-2-botton')
let backBotton1 = document.getElementById('back-btn-1')
let backBotton2 = document.getElementById('back-btn-2')
const forSpecialPetBotton = document.querySelector('.botton-for-special-pet')
const quickDonateSubmit = document.querySelector('.Quick-donate-submit-ok')
let quickDonateInput = document.querySelector('.Quick-donate-submit')
const otherAmountInput = document.querySelector('.other-amount-input')
const OtherAmountDotton = document.querySelector('.botton-other-amount')
const forSpecialPetInput = document.querySelector('.for-special-pet-input')
let popupBody0 = document.querySelectorAll('.popup-body')[0]
let popupBody1 = document.querySelectorAll('.popup-body')[1]
let popupBody2 = document.querySelectorAll('.popup-body')[2]
let popupBody3 = document.querySelectorAll('.popup-body')[3]
//for correct inputs
const yourName = document.getElementById('1-name-popup') 
const yourMail = document.getElementById('email-popup') 
const cardNumber = document.getElementById('card-num-popup')
const cvv = document.getElementById('cvv-popup')
const cardMonth = document.getElementById('mounth')
const cardYear = document.getElementById('year')


function donatePopup() {
  popupDonateWindow.style.display = "block";
  popup1Botton.forEach(item => {
    item.addEventListener('click', openPopup2)
  })
}

function closeDonatePopup() {
  popupDonateWindow.style.display = "none";
}

popupMain.forEach(item => {item.addEventListener('mouseup', e => {
  if (e.target === popupBody0 || e.target === popupBody1 || e.target === popupBody2 || e.target === popupBody3) {
    item.style.display = "none";
    otherAmountInput.value = '';
    otherAmountInput.setAttribute('disabled',"");
    forSpecialPetBotton.classList.remove('price-active-btn');
    forSpecialPetInput.setAttribute('disabled',"");
    popup2Botton.forEach(item => {
        item.classList.remove('price-active-btn')
      })
  }
})}) 

function openPopup2(){
  
  //console.log(this.innerText);
  popupDonateWindow.style.display = "none";
  popupDonateWindowPrice.style.display = "block";
  
  popup2Botton.forEach(item => {
    if (item.value == this.innerText){
      item.classList.add('price-active-btn')
    }
  })
}

function quickopenPopup2(){
  popupDonateWindowPrice.style.display = "block";
  
  if (quickDonateInput.value === ''){
    document.querySelector('.if-quick-none').classList.add('price-active-btn') 
  } else {
    otherAmountInput.removeAttribute('disabled');
    OtherAmountDotton.classList.add('price-active-btn')
    otherAmountInput.value = quickDonateInput.value
    otherAmountInput.focus();
  }
}

function forSpecialPetToggle(){
  forSpecialPetBotton.classList.toggle('price-active-btn')
 if  (forSpecialPetBotton.classList.contains('price-active-btn')){
  forSpecialPetInput.removeAttribute('disabled');
   } else {
    forSpecialPetInput.setAttribute('disabled',"");
   }
}

function addActiveBotton(e){
  //nextPpup2Botton.removeAttribute('disabled');
  if (!e.target.classList.contains('price-active-btn')){
    popup2Botton.forEach(
      item =>{
      item.classList.remove('price-active-btn')
    })
  } e.target.classList.add('price-active-btn')
}


function openPopup3() {
  // if (OtherAmountDotton.classList.contains('price-active-btn') &&  (otherAmountInput.value === '' || otherAmountInput.value === 0)){
  //   console.log('ggg');
  //   nextPpup2Botton.setAttribute('disabled',"");
  // } else {
  //   nextPpup2Botton.removeAttribute('disabled');
  // }
  popupDonateWindowPrice.style.display = "none";
  popupDonateWindowName.style.display = "block";
}

function openPopup4() {
  popupDonateWindowName.style.display = "none";
  popupDonateCreditCard.style.display = "block";
}

function competeDonation() {
  otherAmountInput.setAttribute('disabled',"");
  popupDonateCreditCard.style.display = "none";
  alert("Thank you for your donation!")
                                      
  popup2Botton.forEach(item => {
    item.classList.remove('price-active-btn')
  })
}


function unBlockNext2(){
  const re = /\S+@\S+\.\S+/;
if (yourName.value === ''){
  yourName.classList.add('error-input-bg')
  yourName.classList.remove('correct-input-bg')
} else {
  yourName.classList.remove('error-input-bg')
  yourName.classList.add('correct-input-bg')
}
if (re.test(yourMail.value) === false){
  yourMail.classList.add('error-input-bg')
  yourMail.classList.remove('correct-input-bg')
} else {
  yourMail.classList.remove('error-input-bg')
  yourMail.classList.add('correct-input-bg')
}
  if (yourName.value !== '' && re.test(yourMail.value)){
    nextPpup3Botton.removeAttribute('disabled');
    nextPpup3Botton.classList.remove('disabled-opasity')
  } else{
    nextPpup3Botton.setAttribute('disabled',"");
    nextPpup3Botton.classList.add('disabled-opasity')
  }
}

function unBlockCompleteDonate(){

    if (cvv.value.length < 3){
      cvv.classList.add('error-input-bg')
      cvv.classList.remove('correct-input-bg')
    } else{
      cvv.classList.remove('error-input-bg')
      cvv.classList.add('correct-input-bg')
    } 
    if (cardNumber.value.length <= 10){
      cardNumber.classList.add('error-input-bg')
      cardNumber.classList.remove('correct-input-bg')
    } else{
      cardNumber.classList.remove('error-input-bg')
      cardNumber.classList.add('correct-input-bg')
    }
    if (cardMonth.value === 'none'){
      cardMonth.classList.add('error-input-bg')
      cardMonth.classList.remove('correct-input-bg')
    } else{
      cardMonth.classList.remove('error-input-bg')
      cardMonth.classList.add('correct-input-bg')
    }
    if (cardYear.value === 'none'){
      cardYear.classList.add('error-input-bg')
      cardYear.classList.remove('correct-input-bg')
    } else{
      cardYear.classList.remove('error-input-bg')
      cardYear.classList.add('correct-input-bg')
    }
   
    if (cvv.value.length > 3 || cardNumber.value.length > 10){
    cvv.value = cvv.value.slice(0, 3)
    cardNumber.value = cardNumber.value.slice(0, 16)
    }

    if (cvv.value.length === 3 && cardNumber.value.length > 10 && cardMonth.value !== 'none' && cardYear.value !== 'none'){
      completeDonationBotton.removeAttribute('disabled');
      completeDonationBotton.classList.remove('disabled-opasity')
    } else {
      completeDonationBotton.setAttribute('disabled',"");
      completeDonationBotton.classList.add('disabled-opasity')
    }
}

function unBlockInputOther(){
  if  (OtherAmountDotton.classList.contains('price-active-btn')){
    otherAmountInput.removeAttribute('disabled');
    otherAmountInput.focus();
    } else {
      otherAmountInput.setAttribute('disabled',"");
    }
}
//Btn-back
function backBtn1(){
  popupDonateWindowPrice.style.display = "block";
  popupDonateWindowName.style.display = "none";
}
function backBtn2(){
  popupDonateWindowName.style.display = "block";
  popupDonateCreditCard.style.display = "none";
}

//ограничение ввода знаков в quick donate input

function checkValueDonate(){
  if (quickDonateInput.value.length > 4){
   quickDonateInput.value = quickDonateInput.value.slice(0, 4)
  }
 }
 
 function checkValueDonatePop2(){
   if (otherAmountInput.value.length > 4){
     otherAmountInput.value = otherAmountInput.value.slice(0, 4)
   }
  }

popup2Botton.forEach(item => item.addEventListener('click', addActiveBotton))
donateNowBtn.addEventListener('click', donatePopup)
donateVolunteersBtn.addEventListener('click', donatePopup)
popupClose.addEventListener('click', closeDonatePopup)
nextPpup2Botton.addEventListener('click', openPopup3)
nextPpup3Botton.addEventListener('click', openPopup4)
completeDonationBotton.addEventListener('click', competeDonation)
quickDonateSubmit.addEventListener('click', quickopenPopup2)
forSpecialPetBotton.addEventListener('click', forSpecialPetToggle)

OtherAmountDotton.addEventListener('click', unBlockInputOther)
yourName.addEventListener('input', unBlockNext2)
yourMail.addEventListener('input', unBlockNext2)
cardNumber.addEventListener('input', unBlockCompleteDonate)
cvv.addEventListener('input', unBlockCompleteDonate)
cardMonth.addEventListener('input', unBlockCompleteDonate)
cardYear.addEventListener('input', unBlockCompleteDonate)

backBotton1.addEventListener('click', backBtn1)
backBotton2.addEventListener('click', backBtn2)

quickDonateInput.addEventListener('input', checkValueDonate)
otherAmountInput.addEventListener('input', checkValueDonatePop2)

//-----------------Slider meet our pets-------------------

//slider meet pets
let prevBtn = document.querySelector('.slider-to-left')
let nextBtn = document.querySelector('.slider-to-right')
let lineOneSlide = document.querySelector('.line-card-one')
let lineTwoSlide = document.querySelector('.line-card-two')
let counter = 0;

function prevSlide(){
  if (counter > 0){
    counter--;
    let value = -480*counter;
    lineOneSlide.style.transition = '0.5s';
    lineTwoSlide.style.transition = '0.5s';

    lineOneSlide.style.left = `${value}px`;
    lineTwoSlide.style.left = `${value}px`;
    //console.log(counter);
  }
}

function nextSlide(){
  if (counter < 5){
    counter++;
    let value = -480*counter;
    lineOneSlide.style.transition = '0.5s';
    lineTwoSlide.style.transition = '0.5s';

    lineOneSlide.style.left = `${value}px`;
    lineTwoSlide.style.left = `${value}px`;
    //console.log(counter);
  }
}

prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)

//-----------------Slider Comments-------------------

const nextCommentBtn = document.querySelector('.slider-to-right-comment');
const prevCommentBtn = document.querySelector('.slider-to-left-comment');
const stringComment1 = document.getElementsByClassName('string-comment-one')[0];
const stringComment2 = document.querySelector('.string-comment-two');
//все коменты
const allComments1 = document.querySelectorAll('.comment-one-str')
const allComments2 = document.querySelectorAll('.comment-two-str')

let counter2 = 0;
let Slider = []


function nextCommentSlide(){

//   const allComments1 = document.querySelectorAll('.comment-one-str')
//   const allComments2 = document.querySelectorAll('.comment-two-str')
//  //let el1and2 = Array.from(allComments1).slice(0,1)

  stringComment1.style.transform = "translate(-545px, 0%)";
  stringComment2.style.transform = "translate(-545px, 0%)";
  
  let clone1 = stringComment1.firstElementChild.cloneNode(true)
  let clone2 = stringComment2.firstElementChild.cloneNode(true)

  stringComment1.firstElementChild.remove()
  stringComment2.firstElementChild.remove()

  stringComment1.append(clone1)
  stringComment2.append(clone2)
}


function prevCommentSlide(){

  stringComment1.style.transform = "translate(+0px, 0%)";
  stringComment2.style.transform = "translate(+0px, 0%)";
  
  let clone1 = stringComment1.lastElementChild.cloneNode(true)
  let clone2 = stringComment2.lastElementChild.cloneNode(true)

  stringComment1.lastElementChild.remove()
  stringComment2.lastElementChild.remove()

  stringComment1.prepend(clone1)
  stringComment2.prepend(clone2)
}

nextCommentBtn.addEventListener('click', () => {
  clearInterval(slideTimer);
  slideTimer =  setInterval(nextCommentSlide, 45000);
});
prevCommentBtn.addEventListener('click', () => {
  clearInterval(slideTimer);
  slideTimer =  setInterval(nextCommentSlide, 45000);
});

let slideTimer =  setInterval(nextCommentSlide, 15000);

nextCommentBtn.addEventListener('click', nextCommentSlide)
prevCommentBtn.addEventListener('click', prevCommentSlide)







