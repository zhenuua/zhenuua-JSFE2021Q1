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
const OtherAmountDotton = document.querySelector('.botton-other-amount')
let quickDonateInput = document.querySelector('.Quick-donate-submit')
const otherAmountInput = document.querySelector('.other-amount-input')
const forSpecialPetInput = document.querySelector('.for-special-pet-input')
let popupBody0 = document.querySelectorAll('.popup-body')[0]
let popupBody1 = document.querySelectorAll('.popup-body')[1]
let popupBody2 = document.querySelectorAll('.popup-body')[2]
let popupBody3 = document.querySelectorAll('.popup-body')[3]

let prevBtn = document.querySelector('.slider-to-left')
let nextBtn = document.querySelector('.slider-to-right')
let lineOneSlide = document.querySelector('.line-card-one')
let lineTwoSlide = document.querySelector('.line-card-two')
let counter = 0;
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
    forSpecialPetBotton.classList.remove('price-active-btn');
    forSpecialPetInput.setAttribute('disabled',"");
    popup2Botton.forEach(item => {
        item.classList.remove('price-active-btn')
      })
  }
})}) 

function openPopup2(){
  console.log(this.innerText);
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
  OtherAmountDotton.classList.add('price-active-btn')
  otherAmountInput.value = quickDonateInput.value
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
  if (!e.target.classList.contains('price-active-btn')){
    popup2Botton.forEach(
      item =>{
      item.classList.remove('price-active-btn')
    })
  } e.target.classList.add('price-active-btn')
}


function openPopup3() {
  popupDonateWindowPrice.style.display = "none";
  popupDonateWindowName.style.display = "block";
}

function openPopup4() {
  popupDonateWindowName.style.display = "none";
  popupDonateCreditCard.style.display = "block";
}
function competeDonation() {
  popupDonateCreditCard.style.display = "none";
  alert("Thank you for your donation!")


  popup2Botton.forEach(item => {
    item.classList.remove('price-active-btn')
  })
}



//-----------------Slider meet our pets

function prevSlide(){
  lineOneSlide.style.transition = '0.5s';
  lineOneSlide.style.left = '-480px';
console.log('prev');
}

function nextSlide(){
  counter++;
  let value = -480*counter;
  lineOneSlide.style.transition = '0.5s';
  lineOneSlide.style.left =   `${value}px`;

  console.log(counter);
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




const namecard = document.getElementById('name-popup')
const email = document.getElementById('email-popup')
const cvv = document.getElementById('cvv-popup')
const card = document.getElementById('card-num-popup')


cvv.addEventListener('input', function(){

if (cvv.value.length === 3){
completeDonationBotton.disabled = true
}else {
  completeDonationBotton.disabled = false
}

}
)



// completeDonationBotton.addEventListener('mouseover', function(){
//   console.log('comlete');
// const namecard = document.getElementById('name-popup')
// const email = document.getElementById('email-popup')
// const cvv = document.getElementById('cvv-popup')
// const card = document.getElementById('card-num-popup')
  
//   if (namecard.value !== '' && email.value !== '' && cvv.value.length === 3 && card.length >= 10 && card.length <= 16){
//     completeDonationBotton.disabled = false
//   } else {
//     completeDonationBotton.disabled = true
//   }
// })


prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)




//Btn-back
function backBtn1(){
  popupDonateWindowPrice.style.display = "block";
  popupDonateWindowName.style.display = "none";
}
function backBtn2(){
  popupDonateWindowName.style.display = "block";
  popupDonateCreditCard.style.display = "none";
}
backBotton1.addEventListener('click', backBtn1)
backBotton2.addEventListener('click', backBtn2)
//popup1Botton[0].addEventListener('click', openPopup2)






//ограничение ввода знаков в input

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
function checkCvv(){
  if (cvv.value.length > 3){
    cvv.value = cvv.value.slice(0, 3)
   }
}


quickDonateInput.addEventListener('input', checkValueDonate)
cvv.addEventListener('input', checkCvv)
otherAmountInput.addEventListener('input', checkValueDonatePop2)