(()=>{"use strict";var e={6557:(e,t,n)=>{n.r(t)},7319:(e,t,n)=>{n.r(t)},76:(e,t,n)=>{n.r(t)},5080:(e,t,n)=>{n.r(t)},5528:(e,t,n)=>{n.r(t)},5121:(e,t,n)=>{n.r(t)},3149:(e,t,n)=>{n.r(t)},1344:(e,t,n)=>{n.r(t)},2580:(e,t,n)=>{n.r(t)},8387:(e,t,n)=>{n.r(t)},8278:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AboutItem=void 0;const s=n(2403),o=n(3296),i=n(2434);class r extends s.BaseComponent{constructor(e){super("div",["about-point"]);const t=new s.BaseComponent("div",["instruction","Roboto-14-21"].concat(e.style));this.element.appendChild(t.element),this.numberStep=new o.NumberStep(""),t.element.appendChild(this.numberStep.element),this.textStep=new i.TextStep(""),t.element.appendChild(this.textStep.element),this.textStep.element.innerHTML=e.textStepInner,this.numberStep.element.innerHTML=e.numberStepInner.toString();const n=new s.BaseComponent("img",["image-instruction"]);n.element.setAttribute("src",e.image),this.element.appendChild(n.element)}}t.AboutItem=r},4563:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AboutItems=void 0;const s=n(2403),o=n(8278);class i extends s.BaseComponent{constructor(){super("div",["all-steps-instructions"]),this.aboutItems=[new o.AboutItem({image:"./about-images/about-image-1.png",textStepInner:"Register new player in game",numberStepInner:1,style:["-medium-height"]}),new o.AboutItem({image:"./about-images/about-image-2.png",textStepInner:"Configure your game settings",numberStepInner:2,style:["-small-height"]}),new o.AboutItem({image:"./about-images/about-image-3.png",textStepInner:"Start you new game! Remember card positions and match it before times up.",numberStepInner:3,style:["-big-height"]})];for(const e of this.aboutItems)this.element.appendChild(e.element)}}t.AboutItems=i},6973:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.About=void 0;const s=n(2403),o=n(9742),i=n(4563);n(6557);class r extends s.BaseComponent{constructor(){super("section",["how-to-play-field"]),this.title=new o.Title("How to play?",["title-about"]),this.element.appendChild(this.title.element),this.aboutItems=new i.AboutItems,this.element.appendChild(this.aboutItems.element)}}t.About=r},3296:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NumberStep=void 0;const s=n(2403);class o extends s.BaseComponent{constructor(e){super("p",["step-number"]),this.element.innerHTML=e}}t.NumberStep=o},2434:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TextStep=void 0;const s=n(2403);class o extends s.BaseComponent{constructor(e){super("p",["text-instruction"]),this.element.innerHTML=e}}t.TextStep=o},6077:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,i){function r(e){try{a(s.next(e))}catch(e){i(e)}}function l(e){try{a(s.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const o=n(6973),i=n(2655),r=n(8229),l=n(5687),a=n(1801),d=n(6223),c=n(5628);t.App=class{constructor(e){this.rootElement=e}refreshPage(e){this.rootElement.innerHTML="",e===c.Views.About?(this.about=new o.About,this.rootElement.appendChild(this.about.element)):e===c.Views.Game?(this.game=new r.Game,this.rootElement.appendChild(this.game.element),this.start()):e===c.Views.Score?(this.bestscore=new l.BestScore,this.rootElement.appendChild(this.bestscore.element)):e===c.Views.Settings&&(this.settings=new i.Settings,this.rootElement.appendChild(this.settings.element))}start(){return s(this,void 0,void 0,(function*(){const e=yield fetch("./images.json"),t=(yield e.json())[d.typeCards.cardsCount],n=t.images.slice(0,a.difficulty.cardsCount).map((e=>`${t.category}/${e}`));this.game&&this.game.newGame(n)}))}}},2403:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0,t.BaseComponent=class{constructor(e="div",t=[]){this.element=document.createElement(e),this.element.classList.add(...t)}}},5687:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BestScore=void 0;const s=n(2403),o=n(9742);n(7319);const i=n(7715);class r extends s.BaseComponent{constructor(){super("section",["best-score"]),this.title=new o.Title("Best players",["title-score"]),this.element.appendChild(this.title.element),this.players=new i.Players,this.element.appendChild(this.players.element)}}t.BestScore=r},2999:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EmailPlayer=void 0;const s=n(2403);class o extends s.BaseComponent{constructor(e){super("p",["mail-of-player","Roboto-12-15"]),this.element.innerHTML=e}}t.EmailPlayer=o},3451:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NamePlayer=void 0;const s=n(2403);class o extends s.BaseComponent{constructor(e){super("p",["name-of-player","Roboto-500-14"]),this.element.innerHTML=e}}t.NamePlayer=o},1496:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Player=void 0;const s=n(2403),o=n(2999),i=n(3451),r=n(8425);class l extends s.BaseComponent{constructor(e){super("div",["player-score"]);const t=new s.BaseComponent("div",["score-block"]);this.element.appendChild(t.element);const n=new s.BaseComponent("p",["score","Roboto-500-14"]);t.element.appendChild(n.element);const l=new s.BaseComponent("img",["image-of-player"]);l.element.setAttribute("src","./users-images/logo-profile-without-photo.svg"),t.element.appendChild(l.element);const a=new s.BaseComponent("div",["info-about-player"]);t.element.appendChild(a.element);const d=e.name;this.namePlayer=new i.NamePlayer(d),a.element.appendChild(this.namePlayer.element);const c=e.email;this.emailPlayer=new o.EmailPlayer(c),a.element.appendChild(this.emailPlayer.element);const p=new s.BaseComponent("div",["score-block"]);this.element.appendChild(p.element);const m=new s.BaseComponent("p",["score","Roboto-500-14"]);m.element.innerHTML="Score",p.element.appendChild(m.element),this.score=new r.Score(e.score),p.element.appendChild(this.score.element)}}t.Player=l},7715:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Players=void 0;const s=n(2403),o=n(1496);class i extends s.BaseComponent{constructor(){super("div",["all-players-score"]),this.players=[];const e=window.localStorage.getItem("scores");if(e){const t=JSON.parse(e).sort(((e,t)=>e.score<t.score?1:-1)).slice(0,10).map((e=>new o.Player({name:e.name,email:e.email,score:+e.score})));for(const e of t)this.element.appendChild(e.element)}}}t.Players=i},8425:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Score=void 0;const s=n(2403);class o extends s.BaseComponent{constructor(e){super("p",["score-points","Roboto-500-14"]),this.element.innerHTML=e.toString()}}t.Score=o},9113:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;const s=n(2403);n(5528);class o extends s.BaseComponent{constructor(e,t=[]){super("button",["Roboto-500-14"].concat(t)),this.element.innerHTML=e}}t.Button=o},4977:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0,n(76);const s=n(2403);class o extends s.BaseComponent{constructor(e){super("div",["card-container"]),this.image=e,this.isFlipped=!1,this.element.innerHTML=`\n              <div class="card">\n                <div class="card__front" style="background-image: url('./images/${e}')"></div>\n                <div class="card__back"></div>\n              </div>\n            `}flipToBack(){return this.isFlipped=!0,this.flip(!0)}flipToFront(){return this.isFlipped=!1,this.flip(!1)}flip(e=!1){return new Promise((t=>{this.element.classList.toggle("flipped",e),this.element.addEventListener("transitionend",(()=>t()),{once:!0})}))}}t.Card=o},7610:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardsField=void 0,n(5080);const s=n(2403),o=n(5628);class i extends s.BaseComponent{constructor(){super("div",["cards-field"]),this.cards=[]}openCards(){this.cards.forEach((e=>{e.flipToFront()}))}clear(){this.cards=[],this.element.innerHTML=""}addCards(e){this.cards=e,this.cards.forEach((e=>this.element.appendChild(e.element))),setTimeout((()=>{this.cards.forEach((e=>e.flipToBack()))}),o.Time.SHOW_TIME)}}t.CardsField=i},8229:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,i){function r(e){try{a(s.next(e))}catch(e){i(e)}}function l(e){try{a(s.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0;const o=n(4680),i=n(2403),r=n(4977),l=n(7610),a=n(2610),d=n(5628),c=n(5617),p=n(1801),m=n(2295);class u extends i.BaseComponent{constructor(){super("section",["background-play-zone"]),this.isAnimation=!1,this.countOpenCards=0,this.timer=new a.Timer,this.popup=new c.PopUp,this.element.appendChild(this.popup.element),this.element.appendChild(this.timer.element),this.cardsField=new l.CardsField,this.element.appendChild(this.cardsField.element)}stopGame(){window.clearInterval(this.timerId),this.timer.stopTimer(),this.cardsField.openCards();const e=document.querySelector(".button-game");e&&(e.textContent=d.ButtonsNames.startGame)}newGame(e){this.timerId=window.setTimeout((()=>this.timer.startTimer()),d.Time.SHOW_TIME),this.cardsField.clear(),this.cards=e.concat(e).map((e=>new r.Card(e))).sort((()=>Math.random()-.5)),this.cards.forEach((e=>{e.element.addEventListener("click",(()=>this.cardHandler(e)))})),this.cardsField.addCards(this.cards)}checkGameOver(){var e;(null===(e=this.cards)||void 0===e?void 0:e.every((e=>!1===e.isFlipped)))&&(this.stopGame(),this.countScore(),this.popup.showPopUp())}cardHandler(e){return s(this,void 0,void 0,(function*(){if(!this.isAnimation&&e.isFlipped){if(this.isAnimation=!0,yield e.flipToFront(),this.countOpenCards++,!this.activeCard)return this.activeCard=e,void(this.isAnimation=!1);this.activeCard.image!==e.image?(yield o.delay(d.Time.FLIP_DELAY),yield Promise.all([this.activeCard.flipToBack(),e.flipToBack()])):this.checkGameOver(),this.activeCard=void 0,this.isAnimation=!1}}))}countScore(){const e=600*Number(this.timer.getTime().substr(0,0))+60*Number(this.timer.getTime().substr(1,1))+Number(this.timer.getTime().substr(3));return m.scoreGame.score=(100*(this.countOpenCards/2-(this.countOpenCards/2-p.difficulty.cardsCount))-10*e)*(p.difficulty.cardsCount/2),m.scoreGame.score<0&&(m.scoreGame.score=0),m.scoreGame.score}}t.Game=u},9896:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ControlGame=void 0;const s=n(2403),o=n(3170),i=n(9113),r=n(5628);n(5528);class l extends s.BaseComponent{constructor(){super("div",["header-stop-game","Roboto-500-14"]),this.button=new i.Button(r.ButtonsNames.startGame,["button-game"]),this.element.appendChild(this.button.element),this.logoPofile=new o.LogoProfile,this.element.appendChild(this.logoPofile.element)}}t.ControlGame=l},7770:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderMenuItem=void 0;const s=n(2403);n(5528);class o extends s.BaseComponent{constructor(e,t,n=[],o){super("li",["header-item"].concat(n));const i=new s.BaseComponent("img",["logo-about-game"]);i.element.setAttribute("src",e),this.element.appendChild(i.element);const r=new s.BaseComponent("a",["no-class"]);this.element.appendChild(r.element),r.element.innerHTML=t,this.element.addEventListener("click",o)}}t.HeaderMenuItem=o},1460:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderMenuItems=void 0;const s=n(7770),o=n(2403),i=n(5628);n(5528);class r extends o.BaseComponent{constructor(e){super("nav",["header-nav"]);const t=new o.BaseComponent("ul",["header-list","Roboto-12-15"]);function n(t){return n=>{document.querySelectorAll(".header-item").forEach((e=>{e.classList.remove("active-botton-menu")})),n.target.classList.add("active-botton-menu"),e(t)}}this.element.appendChild(t.element),this.headerMenuItems=[new s.HeaderMenuItem("./head-images/question.svg","About Game",["active-botton-menu"],n(i.Views.About)),new s.HeaderMenuItem("./head-images/star.svg","Best Score",[],n(i.Views.Score)),new s.HeaderMenuItem("./head-images/gear.svg","Game Settings",[],n(i.Views.Settings))];for(const e of this.headerMenuItems)t.element.appendChild(e.element)}}t.HeaderMenuItems=r},1274:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderMenu=void 0;const s=n(1460),o=n(2403);n(5528);class i extends o.BaseComponent{constructor(e){super("div",["header-menu"]),this.headerMenuItems=new s.HeaderMenuItems(e),this.element.appendChild(this.headerMenuItems.element)}}t.HeaderMenu=i},1366:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;const s=n(5018),o=n(9896),i=n(2403),r=n(1274);n(5528);class l extends i.BaseComponent{constructor(e){super("header",["background-header"]);const t=new i.BaseComponent("div",["header-article"]);this.element.appendChild(t.element),this.logo=new s.Logo,t.element.appendChild(this.logo.element),this.headerMenu=new r.HeaderMenu(e),t.element.appendChild(this.headerMenu.element),this.controlGame=new o.ControlGame,t.element.appendChild(this.controlGame.element)}}t.Header=l},3170:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LogoProfile=void 0;const s=n(2403);n(5528);class o extends s.BaseComponent{constructor(){super("img",["image-profile"]),this.element.setAttribute("src","./head-images/logo-profile-without-photo.svg")}}t.LogoProfile=o},5018:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Logo=void 0;const s=n(2403);n(5528);class o extends s.BaseComponent{constructor(){super("img",["logo-header"]),this.element.setAttribute("src","./head-images/logo.svg")}}t.Logo=o},7192:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HrElement=void 0;const s=n(2403);n(5121);class o extends s.BaseComponent{constructor(e=[]){super("hr",["hr-default"].concat(e))}}t.HrElement=o},4420:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InputCheckBox=void 0;const s=n(2403);class o extends s.BaseComponent{constructor(){super("input",["checkbox-input","checkbox-name"]),this.element.setAttribute("type","checkbox"),this.element.setAttribute("autocomplete","off")}}t.InputCheckBox=o},5879:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InputText=void 0;const s=n(2403);class o extends s.BaseComponent{constructor(e,t){super("input",["input-field","Roboto-16-24"]),this.element.setAttribute("type","text"),this.element.setAttribute("placeHolder",e),this.element.addEventListener("input",(()=>{var e,n,s,o,i,r;const l=this.element;if(l.value||""===l.value){const a=t(l.value),d=null===(n=null===(e=null==l?void 0:l.parentElement)||void 0===e?void 0:e.parentElement)||void 0===n?void 0:n.querySelector(".error-field"),c=null===(o=null===(s=null==l?void 0:l.parentElement)||void 0===s?void 0:s.parentElement)||void 0===o?void 0:o.querySelector(".checkbox-name");if(d){const e=document.querySelectorAll(".checkbox-name")[0],t=document.querySelectorAll(".checkbox-name")[1],n=document.querySelectorAll(".checkbox-name")[2];d.textContent=a,""===a?null==c||c.setAttribute("checked",""):null==c||c.removeAttribute("checked"),e.hasAttribute("checked")&&t.hasAttribute("checked")&&n.hasAttribute("checked")?null===(i=document.querySelector(".add-user-botton"))||void 0===i||i.classList.remove("disabled"):null===(r=document.querySelector(".add-user-botton"))||void 0===r||r.classList.add("disabled")}}}))}}t.InputText=o},2991:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InputTitle=void 0;const s=n(2403);class o extends s.BaseComponent{constructor(e){super("p",["popup-name-block","Roboto-12-16"]),this.element.innerHTML=e}}t.InputTitle=o},9057:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PopUpContent=void 0;const s=n(2403),o=n(5014),i=n(9742),r=n(2295);n(3149);class l extends s.BaseComponent{constructor(){super("div",["popup-content"]),this.title=new i.Title(`Congratulations, you won! You can add your score: ${r.scoreGame.score}`,["popup-title"]),this.element.appendChild(this.title.element),this.popUpField=new o.PopUpField,this.element.appendChild(this.popUpField.element)}refreshScore(){this.title.element.innerHTML=`Congratulations, you won! You can add your score: ${r.scoreGame.score}`}}t.PopUpContent=l},5014:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PopUpField=void 0;const s=n(2403),o=n(9113),i=n(5298),r=n(2295);class l extends s.BaseComponent{constructor(){super("div",["pop-up-field"]),this.addScore=()=>{const e=this.PopUpInputs[0].element.querySelector(".input-field"),t=this.PopUpInputs[1].element.querySelector(".input-field"),n=this.PopUpInputs[2].element.querySelector(".input-field"),s={name:`${e.value} ${t.value}`,email:n.value,score:r.scoreGame.score},o=document.querySelector(".showPopUp"),i=window.localStorage.getItem("scores");if(i){const e=JSON.parse(i);e.push(s),window.localStorage.setItem("scores",JSON.stringify(e)),o&&o.classList.remove("showPopUp")}else window.localStorage.setItem("scores",JSON.stringify([s])),o&&o.classList.remove("showPopUp")},this.Сancel=()=>{const e=document.querySelector(".showPopUp");e&&e.classList.remove("showPopUp")};const e=new s.BaseComponent("div",["pop-up-part-field","pop-up-part-1"]);this.element.appendChild(e.element);const t=e=>0===e.length?"Поле не может быть пустым.":/^[ ]+$/.test(e)?"Поле не может состоять только из пробелов.":e.length>30?"Количество символов не должно превышать 30.":/^[0-9]+$/.test(e)?"Поле не может состоять только из цифр.":/[~!@#$%*()_—+=|:;"'`<>,.?/^]+/.test(e)?"Поле не может содержать служебные символы.":"";this.PopUpInputs=[new i.PopUpInput({inputTitleText:"First Name",placeHolder:"Jessie",validate:t}),new i.PopUpInput({inputTitleText:"Last Name",placeHolder:"Doe",validate:t}),new i.PopUpInput({inputTitleText:"E-mail",placeHolder:"Jessie.Doe@gmail.com",validate:e=>/\S+@\S+\.\S+/.test(e)?0===e.length?"Поле не может быть пустым.":e.length>30?"Количество символов не должно превышать 30.":"":"Вы ввели некорректный email."})];for(const t of this.PopUpInputs)e.element.appendChild(t.element);const n=new s.BaseComponent("div",["pop-up-part-field","pop-up-part-2"]);this.element.appendChild(n.element);const l=new s.BaseComponent("img",["add-photo"]);l.element.setAttribute("src","./about-images/logo-profile-without-photo-plus.svg"),n.element.appendChild(l.element);const a=new s.BaseComponent("div",["botton-pop-up-field"]);n.element.appendChild(a.element),this.buttonAddUser=new o.Button("Add score",["botton-pop-up","add-user-botton","disabled"]),a.element.appendChild(this.buttonAddUser.element),this.buttonAddUser.element.addEventListener("click",this.addScore),this.buttonCancel=new o.Button("Сancel",["botton-pop-up","add-user-cancel"]),a.element.appendChild(this.buttonCancel.element),this.buttonCancel.element.addEventListener("click",this.Сancel)}}t.PopUpField=l},5298:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PopUpInput=void 0;const s=n(2403),o=n(2991),i=n(5879),r=n(4420);class l extends s.BaseComponent{constructor(e){super("div",["pop-up-input"]);const t=new s.BaseComponent("div",["name-block"]);this.element.appendChild(t.element),this.inputTitle=new o.InputTitle(e.inputTitleText),t.element.appendChild(this.inputTitle.element),this.inputText=new i.InputText(e.placeHolder,e.validate),t.element.appendChild(this.inputText.element);const n=new s.BaseComponent("div",["backgroung-checkbox"]);this.element.appendChild(n.element),this.inputCheckBox=new r.InputCheckBox,n.element.appendChild(this.inputCheckBox.element);const l=new s.BaseComponent("p",["error-field"]);this.element.appendChild(l.element)}}t.PopUpInput=l},5617:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PopUp=void 0;const s=n(2403),o=n(9057);n(3149);class i extends s.BaseComponent{constructor(){super("div",["popup-main"]);const e=new s.BaseComponent("div",["popup-body"]);this.element.appendChild(e.element),this.PopUpcontent=new o.PopUpContent,e.element.appendChild(this.PopUpcontent.element)}showPopUp(){this.PopUpcontent.refreshScore(),this.element.classList.add("showPopUp")}closePopUp(){this.element.classList.remove("showPopUp")}}t.PopUp=i},2295:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.scoreGame=void 0,t.scoreGame={score:0}},8788:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Option=void 0;const s=n(2403);class o extends s.BaseComponent{constructor(e,t){super("option",["option"]),this.element.innerHTML=e,this.element.setAttribute("value",t)}}t.Option=o},1801:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SelectDifficulty=t.difficulty=void 0;const s=n(2403),o=n(8788);n(1344),t.difficulty={cardsCount:4};class i extends s.BaseComponent{constructor(){super("select",["select-type","Roboto-14-21"]);const e=this.element;this.options=[new o.Option("4x2","4"),new o.Option("4x3","6"),new o.Option("4x4","8")];for(const e of this.options)this.element.appendChild(e.element);e.value=t.difficulty.cardsCount.toString(),this.element.addEventListener("input",(()=>{"4"===e.value?t.difficulty.cardsCount=4:"6"===e.value?t.difficulty.cardsCount=6:"8"===e.value&&(t.difficulty.cardsCount=8)}))}}t.SelectDifficulty=i},6223:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SelectCards=t.typeCards=void 0;const s=n(2403),o=n(8788);n(1344),t.typeCards={cardsCount:0};class i extends s.BaseComponent{constructor(){super("select",["select-type","Roboto-14-21"]);const e=this.element;this.options=[new o.Option("animals","0"),new o.Option("flags","1"),new o.Option("nature","2")];for(const e of this.options)this.element.appendChild(e.element);e.value=t.typeCards.cardsCount.toString(),this.element.addEventListener("input",(()=>{"0"===e.value?t.typeCards.cardsCount=0:"1"===e.value?t.typeCards.cardsCount=1:"2"===e.value&&(t.typeCards.cardsCount=2)}))}}t.SelectCards=i},697:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsItemCards=void 0;const s=n(2403),o=n(6223),i=n(7192),r=n(9742);class l extends s.BaseComponent{constructor(){super("div",["setting-field"]),this.title=new r.Title("Game cards"),this.element.appendChild(this.title.element),this.selectCards=new o.SelectCards,this.element.appendChild(this.selectCards.element),this.hr=new i.HrElement(["demarcation-line-setting"]),this.element.appendChild(this.hr.element)}}t.SettingsItemCards=l},7131:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SelectItemDifficulty=void 0;const s=n(2403),o=n(1801),i=n(7192),r=n(9742);class l extends s.BaseComponent{constructor(){super("div",["setting-field"]),this.title=new r.Title("Difficulty"),this.element.appendChild(this.title.element),this.selectDifficulty=new o.SelectDifficulty,this.element.appendChild(this.selectDifficulty.element),this.hr=new i.HrElement(["demarcation-line-setting"]),this.element.appendChild(this.hr.element)}}t.SelectItemDifficulty=l},2655:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Settings=void 0;const s=n(2403),o=n(697),i=n(7131);n(1344);class r extends s.BaseComponent{constructor(){super("section",["game-settings"]),this.settingsItemCards=new o.SettingsItemCards,this.element.appendChild(this.settingsItemCards.element),this.selectItemDifficulty=new i.SelectItemDifficulty,this.element.appendChild(this.selectItemDifficulty.element)}}t.Settings=r},2610:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=void 0;const s=n(2403);n(2580);class o extends s.BaseComponent{constructor(){super("div",["timer"]),this.timerText=new s.BaseComponent("div",["timer-text"]),this.element.appendChild(this.timerText.element),this.sec=0,this.timerText.element.innerHTML=this.getTime()}getTime(){const e=this.sec%60,t=Math.floor(this.sec/60);return e<10&&t<10?`0${t}:0${e}`:e>=10&&t<10?`0${t}:${e}`:e<10&&t>=10?`${t}:0${e}`:`${t}:${e}`}startTimer(){this.timeId=window.setInterval((()=>{this.sec+=1,this.timerText.element.innerHTML=this.getTime()}),1e3)}stopTimer(){window.clearInterval(this.timeId)}}t.Timer=o},9742:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Title=void 0;const s=n(2403);class o extends s.BaseComponent{constructor(e,t=[]){super("h2",["Roboto-500-20"].concat(t)),this.element.innerHTML=e}}t.Title=o},5628:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.Time=t.ButtonsNames=t.Views=void 0,(n=t.Views||(t.Views={})).Settings="Settings",n.Score="Score",n.Game="Game",n.About="About",t.ButtonsNames={startGame:"Start Game",stopGame:"Stop Game"},t.Time={FLIP_DELAY:1e3,SHOW_TIME:5e3}},4680:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise((t=>{setTimeout(t,e)}))}}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,n),i.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(8387);const e=n(6077),t=n(1366),s=n(5628);let o,i="About";window.onload=()=>{const n=document.createElement("main");document.body.appendChild(n),n.setAttribute("id","app");const r=document.getElementById("app"),l=new t.Header((function(t){var n;i=t,r&&(i!==s.Views.Game&&(null===(n=null==o?void 0:o.game)||void 0===n||n.stopGame()),o=new e.App(r),o.refreshPage(i))}));document.body.insertBefore(l.element,r);const a=document.querySelector(".button-game");if(!a)throw Error("mainButton not found");if(a.addEventListener("click",(()=>{(null==o?void 0:o.game)?(o.game.stopGame(),a.textContent=s.ButtonsNames.startGame,r&&(o=new e.App(r)),o.refreshPage(s.Views.Score)):r&&(o=new e.App(r),o.refreshPage(s.Views.Game),a.textContent=s.ButtonsNames.stopGame)})),!r)throw Error("App root element not found");o=new e.App(r),o.refreshPage(i)}})()})();