(()=>{"use strict";var e={528:(e,t,n)=>{n.r(t)},253:(e,t,n)=>{n.r(t)},387:(e,t,n)=>{n.r(t)},403:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0,t.BaseComponent=class{constructor(e="div",t=[]){this.element=document.createElement(e),this.element.classList.add(...t)}}},113:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;const s=n(403);n(528);class o extends s.BaseComponent{constructor(e,t=[]){super("button",["buttonStyle"].concat(t)),this.element.innerHTML=e}}t.Button=o},190:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CarControl=void 0;const s=n(403),o=n(113);n(528);const i=n(742);class r extends s.BaseComponent{constructor(e,t){super("div",["select-remove-car"]),this.buttonSelect=new o.Button("select",["button"]),this.element.appendChild(this.buttonSelect.element),this.buttonRemove=new o.Button("remove",["button"]),this.element.appendChild(this.buttonRemove.element),this.buttonRemove.element.addEventListener("click",t),this.titleCar=new i.Title(e,["title-car"]),this.element.appendChild(this.titleCar.element),this.buttonStartEngine=new o.Button("Start",["button__start-stop","disabled"]),this.element.appendChild(this.buttonStartEngine.element),this.buttonStopEngine=new o.Button("Stop",["button__start-stop","disabled"]),this.element.appendChild(this.buttonStopEngine.element)}}t.CarControl=r},537:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CarField=void 0;const s=n(403),o=n(881);n(528);class i extends s.BaseComponent{constructor(){super("div",["rece-field"]),this.cars=[],this.getCars()}getCars(){fetch("http://127.0.0.1:3000/garage").then((e=>e.json())).then((e=>{this.cars=e.map((e=>new o.Car({name:e.name,color:e.color,id:e.id},(()=>this.removeCar(e.id))))),this.renderCars(),console.log(this.cars)}))}renderCars(){for(const e of this.cars)this.element.appendChild(e.element)}removeCar(e){this.cars.splice(e,1)}}t.CarField=i},204:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ReanderCarImage=void 0;const s=n(403);class o extends s.BaseComponent{constructor(e){super("div",["engine-field"]),this.element.innerHTML=`<?xml version="1.0" encoding="iso-8859-1"?>\n    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n       width="98.967px" height="98.967px" viewBox="0 0 98.967 98.967" style="fill:${e}; transform: scale(-1, 1)"\n       xml:space="preserve">\n    <g>\n      <g>\n        <path d="M17.275,52.156c-4.124,0-7.468,3.343-7.468,7.468c0,0.318,0.026,0.631,0.066,0.938c0.463,3.681,3.596,6.528,7.401,6.528\n          c3.908,0,7.112-3.004,7.437-6.83c0.017-0.209,0.031-0.422,0.031-0.637C24.743,55.499,21.4,52.156,17.275,52.156z M13.537,56.81\n          l1.522,1.523c-0.118,0.203-0.211,0.422-0.271,0.656h-2.146C12.752,58.177,13.063,57.435,13.537,56.81z M12.632,60.282h2.163\n          c0.061,0.23,0.151,0.448,0.271,0.648l-1.526,1.525C13.067,61.835,12.749,61.093,12.632,60.282z M16.629,64.263\n          c-0.809-0.113-1.544-0.43-2.166-0.899l1.518-1.519c0.2,0.117,0.419,0.203,0.648,0.263V64.263z M16.629,57.14\n          c-0.235,0.062-0.455,0.154-0.66,0.275l-1.521-1.521c0.625-0.475,1.367-0.789,2.181-0.902V57.14z M17.922,54.99\n          c0.814,0.113,1.557,0.429,2.181,0.903l-1.52,1.521c-0.204-0.121-0.426-0.213-0.66-0.275L17.922,54.99L17.922,54.99z\n           M17.922,64.261v-2.152c0.23-0.061,0.447-0.146,0.647-0.264l1.519,1.519C19.466,63.833,18.73,64.148,17.922,64.261z\n           M21.014,62.462l-1.531-1.533c0.12-0.201,0.217-0.416,0.278-0.646h2.146C21.793,61.091,21.488,61.839,21.014,62.462z\n           M19.764,58.989c-0.061-0.234-0.153-0.453-0.271-0.656l1.524-1.523c0.471,0.625,0.782,1.367,0.894,2.18H19.764z"/>\n        <path d="M79.284,52.156c-4.124,0-7.468,3.343-7.468,7.468c0,0.318,0.026,0.631,0.066,0.938c0.463,3.681,3.596,6.528,7.4,6.528\n          c3.908,0,7.112-3.004,7.438-6.83c0.017-0.209,0.031-0.422,0.031-0.637C86.753,55.499,83.409,52.156,79.284,52.156z M75.546,56.81\n          l1.521,1.523c-0.118,0.203-0.211,0.422-0.271,0.656H74.65C74.761,58.177,75.072,57.435,75.546,56.81z M74.642,60.282h2.163\n          c0.061,0.23,0.151,0.448,0.271,0.648l-1.525,1.525C75.076,61.835,74.757,61.093,74.642,60.282z M78.638,64.263\n          c-0.809-0.113-1.544-0.43-2.166-0.899l1.518-1.519c0.2,0.117,0.419,0.203,0.648,0.263V64.263z M78.638,57.14\n          c-0.235,0.062-0.455,0.154-0.66,0.275l-1.521-1.521c0.625-0.475,1.366-0.789,2.181-0.902V57.14z M79.932,54.99\n          c0.814,0.113,1.557,0.429,2.181,0.903l-1.521,1.521c-0.204-0.121-0.426-0.215-0.66-0.275V54.99z M79.932,64.261v-2.152\n          c0.23-0.061,0.447-0.146,0.647-0.264l1.519,1.519C81.476,63.833,80.739,64.148,79.932,64.261z M83.023,62.462l-1.531-1.531\n          c0.12-0.202,0.218-0.416,0.278-0.647h2.146C83.802,61.091,83.498,61.839,83.023,62.462z M81.773,58.989\n          c-0.061-0.234-0.152-0.453-0.271-0.656l1.523-1.523c0.472,0.625,0.782,1.367,0.895,2.18H81.773z"/>\n        <path d="M97.216,48.29v-5.526c0-0.889-0.646-1.642-1.524-1.779c-2.107-0.33-5.842-0.953-7.52-1.47\n          c-2.406-0.742-11.702-4.678-14.921-5.417c-3.22-0.739-17.738-4.685-31.643,0.135c-2.353,0.815-12.938,5.875-19.162,8.506\n          c-1.833,0.04-19.976,3.822-20.942,6.414c-0.966,2.593-1.269,3.851-1.447,4.509c-0.178,0.658,0,3.807,1.348,6\n          c1.374,0.777,4.019,1.299,7.077,1.649c-0.035-0.187-0.073-0.371-0.097-0.56c-0.053-0.404-0.078-0.773-0.078-1.125\n          c0-4.945,4.022-8.969,8.968-8.969s8.968,4.023,8.968,8.969c0,0.254-0.017,0.506-0.036,0.754c-0.047,0.555-0.147,1.094-0.292,1.613\n          c0.007,0,0.024,0,0.024,0l44.516-0.896c-0.02-0.115-0.046-0.229-0.061-0.346c-0.053-0.402-0.078-0.772-0.078-1.125\n          c0-4.945,4.022-8.968,8.968-8.968c4.946,0,8.969,4.022,8.969,8.968c0,0.019-0.002,0.035-0.003,0.053l0.19-0.016l7.611-1.433\n          c0,0,2.915-1.552,2.915-5.822C98.967,49.56,97.216,48.29,97.216,48.29z M53.057,43.051L36.432,43.56\n          c0.306-2.491-1.169-3.05-1.169-3.05c6.609-5.999,19.929-6.202,19.929-6.202L53.057,43.051z M71.715,42.29l-15.15,0.509l1.373-8.49\n          c7.83-0.102,12.303,1.626,12.303,1.626l2.237,3.61L71.715,42.29z M80.256,42.238h-4.221l-4.22-5.795\n          c3.166,1.26,5.7,2.502,7.209,3.287C79.94,40.206,80.44,41.223,80.256,42.238z"/>\n      </g>\n    </g>\n    </svg>`}}t.ReanderCarImage=o},881:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Car=void 0;const s=n(403),o=n(190),i=n(204);n(528);class r extends s.BaseComponent{constructor(e,t){super("div",["car"]),this.carControl=new o.CarControl(e.name,t),this.element.appendChild(this.carControl.element),this.reanderCarImage=new i.ReanderCarImage(e.color),this.element.appendChild(this.reanderCarImage.element);const n=new s.BaseComponent("hr",["road"]);this.element.appendChild(n.element)}}t.Car=r},0:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=void 0;const s=n(403),o=n(113);class i extends s.BaseComponent{constructor(){super("footer",["footer"]),this.buttonPrev=new o.Button("prev",["button"]),this.element.appendChild(this.buttonPrev.element),this.buttonNext=new o.Button("next",["button"]),this.element.appendChild(this.buttonNext.element)}}t.Footer=i},977:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;const s=n(403),o=n(113);n(528);class i extends s.BaseComponent{constructor(){super("header",["header-field"]);const e=new o.Button("to garage",["button-menu"]);this.element.appendChild(e.element);const t=new o.Button("to winners",["button-menu"]);this.element.appendChild(t.element)}}t.Header=i},595:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Setting=void 0;const s=n(403);class o extends s.BaseComponent{constructor(){super("div",["settings-race"]),this.element.innerHTML='<div class="setting create-car">\n    <input class="input" id="create-name" type="text">\n    <input class="palette" id="create-color-car" type="color" value="#ffffff">\n    <button class="button">create</button>\n  </div>\n  <div class="setting update-car">\n    <input class="input" id="create-name-car" type="text" disabled>\n    <input class="palette" type="color" value="#ff0000" disabled>\n    <button class="button">update</button>\n  </div>\n  <div class="setting buttons-rece">\n    <button class="button">rece</button>\n    <button class="button">reset</button>\n    <button class="button button__generate">generate cars</button>\n  </div>'}}t.Setting=o},742:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Title=void 0;const s=n(403);n(253);class o extends s.BaseComponent{constructor(e,t=[]){super("h2",["title-page"].concat(t)),this.element.innerHTML=e}}t.Title=o},535:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Garage=void 0;const s=n(403),o=n(537),i=n(0),r=n(595),l=n(742);class a extends s.BaseComponent{constructor(){super("section",["garage"]),this.setting=new r.Setting,this.element.appendChild(this.setting.element),this.titleGarage=new l.Title("Garage(4)",["title-page__bigSize"]),this.element.appendChild(this.titleGarage.element),this.titlePage=new l.Title("Page #1",["title-page__smallSize"]),this.element.appendChild(this.titlePage.element),this.carField=new o.CarField,this.element.appendChild(this.carField.element);const e=new i.Footer;this.element.appendChild(e.element)}}t.Garage=a},654:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Winners=void 0;const s=n(403);class o extends s.BaseComponent{constructor(){super("section",["winners"]),this.element.innerHTML="Table of winners"}}t.Winners=o}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=n(977),t=n(535),s=n(654);n(387),window.onload=()=>{const n=document.createElement("main");document.body.appendChild(n),n.setAttribute("id","app");const o=document.getElementById("app");function i(e){if(n.innerHTML="","Garage"===e){const e=new t.Garage;n.appendChild(e.element)}else if("Winners"===e){const e=new s.Winners;n.appendChild(e.element)}}i("Garage");const r=new e.Header;document.body.insertBefore(r.element,o),document.querySelectorAll(".button-menu")[0].addEventListener("click",(()=>{i("Garage")})),document.querySelectorAll(".button-menu")[1].addEventListener("click",(()=>{i("Winners")}))}})()})();