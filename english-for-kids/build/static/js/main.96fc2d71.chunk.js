(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(a,e,t){},28:function(a,e,t){},29:function(a,e,t){},30:function(a,e,t){},31:function(a,e,t){},32:function(a,e,t){},33:function(a,e,t){},39:function(a,e,t){"use strict";t.r(e);var i=t(1),r=t.n(i),n=t(19),o=t.n(n),s=t(2),c=t(3),d=t(5),g=t(4),m=(t(17),t(0)),p=function(a){Object(d.a)(t,a);var e=Object(g.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var a=this;return Object(m.jsx)("div",{className:"burger",onClick:function(){return a.props.clickHandler()},children:Object(m.jsx)("span",{className:"burger__line ".concat(this.props.isShow?"burger__line__active":"")})})}}]),t}(r.a.Component),u=(t(28),function(a){Object(d.a)(t,a);var e=Object(g.a)(t);function t(){var a;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(a=e.call.apply(e,[this].concat(r))).state={gameModeCheckBox:"train"},a}return Object(c.a)(t,[{key:"changeGameMode",value:function(){"train"===this.props.gameModeName?this.props.changeGameModeApp("play"):this.props.changeGameModeApp("train")}},{key:"render",value:function(){var a=this;return Object(m.jsxs)("label",{className:"switch",children:[Object(m.jsx)("input",{type:"checkbox",onChange:function(){return a.changeGameMode()}}),Object(m.jsx)("span",{className:"slider round train",children:Object(m.jsx)("p",{className:"game-mode",children:this.props.gameModeName})})]})}}]),t}(r.a.Component)),l=t(22),j=[{nameCategory:"Action (set A)",image:"img/dance.jpg"},{nameCategory:"Action (set B)",image:"img/open.jpg"},{nameCategory:"Animal (set A)",image:"img/cat.jpg"},{nameCategory:"Animal (set B)",image:"img/bird.jpg"},{nameCategory:"Clothes",image:"img/skirt.jpg"},{nameCategory:"Emotions",image:"img/happy.jpg"},{nameCategory:"Insects",image:"img/butterfly.jpg"},{nameCategory:"\u0421utlery",image:"img/cup.jpg"}],h=[[{word:"cry",translation:"\u043f\u043b\u0430\u043a\u0430\u0442\u044c",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"\u0442\u0430\u043d\u0446\u0435\u0432\u0430\u0442\u044c",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"\u043d\u044b\u0440\u044f\u0442\u044c",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"\u043b\u043e\u0432\u0438\u0442\u044c \u0440\u044b\u0431\u0443",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"\u043b\u0435\u0442\u0430\u0442\u044c",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"\u043e\u0431\u043d\u0438\u043c\u0430\u0442\u044c",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"\u043f\u0440\u044b\u0433\u0430\u0442\u044c",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"open",translation:"\u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"\u0438\u0433\u0440\u0430\u0442\u044c",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"\u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"\u0435\u0437\u0434\u0438\u0442\u044c",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"\u0431\u0435\u0433\u0430\u0442\u044c",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"\u043f\u0435\u0442\u044c",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0442\u044c, \u043f\u0440\u044b\u0433\u0430\u0442\u044c",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"\u043f\u043b\u0430\u0432\u0430\u0442\u044c",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"cat",translation:"\u043a\u043e\u0442",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"\u0446\u044b\u043f\u043b\u0451\u043d\u043e\u043a",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"\u043a\u0443\u0440\u0438\u0446\u0430",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"\u0441\u043e\u0431\u0430\u043a\u0430",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"\u043b\u043e\u0448\u0430\u0434\u044c",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"\u0441\u0432\u0438\u043d\u044c\u044f",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"\u043a\u0440\u043e\u043b\u0438\u043a",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"\u043e\u0432\u0446\u0430",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"\u043f\u0442\u0438\u0446\u0430",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"\u0440\u044b\u0431\u0430",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"\u0436\u0430\u0431\u0430",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"\u0436\u0438\u0440\u0430\u0444\u0430",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"\u043b\u0435\u0432",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"\u043c\u044b\u0448\u044c",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"\u0447\u0435\u0440\u0435\u043f\u0430\u0445\u0430",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"\u0434\u0435\u043b\u044c\u0444\u0438\u043d",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"skirt",translation:"\u044e\u0431\u043a\u0430",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"\u0431\u0440\u044e\u043a\u0438",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"\u0431\u043b\u0443\u0437\u043a\u0430",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"\u043f\u043b\u0430\u0442\u044c\u0435",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"\u0431\u043e\u0442\u0438\u043d\u043e\u043a",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"\u0440\u0443\u0431\u0430\u0448\u043a\u0430",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"\u043f\u0430\u043b\u044c\u0442\u043e",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"\u0442\u0443\u0444\u043b\u0438",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"sad",translation:"\u0433\u0440\u0443\u0441\u0442\u043d\u044b\u0439",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"\u0441\u0435\u0440\u0434\u0438\u0442\u044b\u0439",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"\u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u0439",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"\u0443\u0441\u0442\u0430\u0432\u0448\u0438\u0439",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"\u0443\u0434\u0438\u0432\u043b\u0451\u043d\u043d\u044b\u0439",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"\u0438\u0441\u043f\u0443\u0433\u0430\u043d\u043d\u044b\u0439",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"\u0443\u043b\u044b\u0431\u043a\u0430",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"\u0441\u043c\u0435\u0445",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}],[{word:"spider",translation:"\u043f\u0430\u0443\u043a",image:"img/spider.jpg",audioSrc:"audio/spider.mp3"},{word:"wasp",translation:"\u043e\u0441\u0430",image:"img/wasp.jpg",audioSrc:"audio/wasp.mp3"},{word:"butterfly",translation:"\u0431\u0430\u0431\u043e\u0447\u043a\u0430",image:"img/butterfly.jpg",audioSrc:"audio/butterfly.mp3"},{word:"beetle",translation:"\u0436\u0443\u043a",image:"img/beetle.jpg",audioSrc:"audio/beetle.mp3"},{word:"caterpillar",translation:"\u0433\u0443\u0441\u0435\u043d\u0438\u0446\u0430",image:"img/caterpillar.jpg",audioSrc:"audio/caterpillar.mp3"},{word:"ladybird",translation:"\u0431\u043e\u0436\u044c\u044f \u043a\u043e\u0440\u043e\u0432\u043a\u0430",image:"img/ladybird.jpg",audioSrc:"audio/ladybird.mp3"},{word:"ant",translation:"\u043c\u0443\u0440\u0430\u0432\u0435\u0439",image:"img/ant.jpg",audioSrc:"audio/ant.mp3"},{word:"bee",translation:"\u043f\u0447\u0435\u043b\u0430",image:"img/bee.jpg",audioSrc:"audio/bee.mp3"}],[{word:"spoon",translation:"\u043b\u043e\u0436\u043a\u0430",image:"img/spoon.jpg",audioSrc:"audio/spoon.mp3"},{word:"fork",translation:"\u0432\u0438\u043b\u043a\u0430",image:"img/fork.jpg",audioSrc:"audio/fork.mp3"},{word:"knife",translation:"\u043d\u043e\u0436",image:"img/knife.jpg",audioSrc:"audio/knife.mp3"},{word:"plate",translation:"\u0442\u0430\u0440\u0435\u043b\u043a\u0430",image:"img/plate.jpg",audioSrc:"audio/plate.mp3"},{word:"glass",translation:"\u0441\u0442\u0430\u043a\u0430\u043d",image:"img/glass.jpg",audioSrc:"audio/glass.mp3"},{word:"kettle",translation:"\u0447\u0430\u0439\u043d\u0438\u043a",image:"img/kettle.jpg",audioSrc:"audio/kettle.mp3"},{word:"saltcellar",translation:"\u0441\u043e\u043b\u043e\u043d\u043a\u0430",image:"img/saltcellar.jpg",audioSrc:"audio/saltcellar.mp3"},{word:"cup",translation:"\u0447\u0430\u0448\u043a\u0430",image:"img/cup.jpg",audioSrc:"audio/cup.mp3"}]],b=function(a){Object(d.a)(t,a);var e=Object(g.a)(t);function t(){var a;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(a=e.call.apply(e,[this].concat(r))).state={activePage:"MainPage"},a}return Object(c.a)(t,[{key:"toggleClass",value:function(a){this.props.changeCategory(a),this.setState({activePage:a})}},{key:"render",value:function(){var a=this,e=[{nameCategory:"MainPage",image:"img/home.jpg"}].concat(Object(l.a)(j),[{nameCategory:"Stats",image:"img/stats.jpg"}]);return Object(m.jsx)("ul",{className:"menu ".concat(this.props.isShow?"menu__translate":""),children:e.map((function(e){return Object(m.jsxs)("li",{className:"menu__link ".concat(e.nameCategory===a.state.activePage?"active":""),onClick:function(){return a.toggleClass(e.nameCategory)},children:[Object(m.jsx)("img",{className:"menu__icon",src:e.image}),e.nameCategory]},e.nameCategory)}))})}}]),t}(r.a.Component),f=(t(29),function(a){Object(d.a)(t,a);var e=Object(g.a)(t);function t(a){var i;return Object(s.a)(this,t),(i=e.call(this,a)).state={isShow:!1},i}return Object(c.a)(t,[{key:"openCloseMenu",value:function(){this.state.isShow?this.setState({isShow:!1}):this.setState({isShow:!0})}},{key:"menuItemsHandler",value:function(a){this.props.changeCategory(a),this.openCloseMenu()}},{key:"render",value:function(){var a=this;return Object(m.jsxs)("section",{className:"header-field",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{clickHandler:function(){return a.openCloseMenu()},isShow:this.state.isShow}),Object(m.jsx)(b,{isShow:this.state.isShow,changeCategory:function(e){a.menuItemsHandler(e)}})]}),Object(m.jsx)("h1",{children:"English for kids"}),Object(m.jsx)(u,{changeGameModeApp:function(e){a.props.changeGameModeApp(e)},gameModeName:this.props.gameModeName})]})}}]),t}(r.a.Component)),y=function(a){Object(d.a)(t,a);var e=Object(g.a)(t);function t(){var a;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(a=e.call.apply(e,[this].concat(r))).state={playMode:!1,isFlipped:!1},a}return Object(c.a)(t,[{key:"clickCard",value:function(a){this.props.audioSrc?this.playAudio(this.props.audioSrc):this.props.changeCategory(a)}},{key:"playAudio",value:function(a){var e=new Audio;e.src=a,e.currentTime=0,e.play()}},{key:"render",value:function(){var a=this,e=Object(m.jsx)("div",{});this.props.audioSrc&&(e=Object(m.jsx)("img",{className:"flipped-button ".concat(this.state.isFlipped||"play"===this.props.activeGameMode?"display-none":""),onClick:function(){a.setState({isFlipped:!0})},src:"./img/rotate.svg"}));var t=this.props.title,i="",r="";return this.state.isFlipped&&this.props.translation&&(t=this.props.translation),"play"===this.props.activeGameMode&&this.props.translation?(r="card__image__play",i="display-none"):(i="",r=""),Object(m.jsx)("div",{className:"card-container ".concat(this.state.isFlipped?"flipped":""),onMouseLeave:function(){a.setState({isFlipped:!1})},onClick:function(){return a.clickCard(a.props.title)},children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{className:"".concat(r," card__image ").concat(this.state.isFlipped?"card__image__flipped":""),src:this.props.imgSrc}),Object(m.jsx)("hr",{className:"".concat(i," card__").concat("train"===this.props.activeGameMode?"hr-train":"hr-play")}),Object(m.jsx)("p",{className:"".concat(i," card__name ").concat(this.state.isFlipped?"scale":""),children:t}),e]})})}}]),t}(r.a.Component),O=(t(30),function(a){Object(d.a)(t,a);var e=Object(g.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var a=this;return Object(m.jsx)("section",{className:"cards-field",children:this.props.itemsCategories.map((function(e){return Object(m.jsx)(y,{activeGameMode:a.props.activeGameMode,title:e.title,imgSrc:e.imgSrc,translation:e.translation,audioSrc:e.audioSrc,changeCategory:function(e){a.props.changeCategory(e)}},e.title)}))})}}]),t}(r.a.Component)),w=(t(31),function(a){Object(d.a)(t,a);var e=Object(g.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("section",{className:"footer-container",children:[Object(m.jsx)("a",{className:"github",href:"https://github.com/zhenuua",target:"_blank",rel:"noopener noreferrer",children:"github"}),Object(m.jsx)("a",{className:"rss",href:"https://rs.school/js/",target:"_blank",rel:"noopener",children:Object(m.jsx)("span",{className:"rss-year",children:"'21"})})]})}}]),t}(r.a.Component)),S=t(20),v=(t(32),function(a){Object(d.a)(t,a);var e=Object(g.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var a,e,t=[],i=0,r=Object(S.a)(j);try{var n=function(){var r=e.value;i=j.findIndex((function(a){if(r.nameCategory===a.nameCategory)return!0}));for(var n=h.length,o=0;o<n;o++)a={nameCat:r.nameCategory,word:h[i][o].word,translation:h[i][o].translation,DEFAULT:0},t.push(a)};for(r.s();!(e=r.n()).done;)n()}catch(o){r.e(o)}finally{r.f()}return Object(m.jsxs)("section",{className:"stats",children:[Object(m.jsxs)("div",{className:"stats__control",children:[Object(m.jsx)("button",{className:"stats__control__button",children:"Repeat difficult words"}),Object(m.jsx)("button",{className:"stats__control__button",children:"Reset"})]}),Object(m.jsxs)("table",{className:"table__stats",children:[Object(m.jsxs)("tr",{className:"table__title",children:[Object(m.jsx)("th",{children:"Category"}),Object(m.jsx)("th",{children:"Word"}),Object(m.jsx)("th",{children:"Translation"}),Object(m.jsx)("th",{children:"Trained"}),Object(m.jsx)("th",{children:"Correct"}),Object(m.jsx)("th",{children:"InCorrect"}),Object(m.jsx)("th",{children:"%"})]}),t.map((function(a){return Object(m.jsxs)("tr",{className:"table__string",children:[Object(m.jsx)("th",{children:a.nameCat}),Object(m.jsx)("th",{children:a.word}),Object(m.jsx)("th",{children:a.translation}),Object(m.jsx)("th",{children:0}),Object(m.jsx)("th",{children:0}),Object(m.jsx)("th",{children:0}),Object(m.jsx)("th",{children:0})]},a.nameCat)}))]})]})}}]),t}(r.a.Component)),C=(t(33),"train"),x="MainPage",k=function(a){Object(d.a)(t,a);var e=Object(g.a)(t);function t(){var a;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(a=e.call.apply(e,[this].concat(r))).state={activePage:x,activeGameMode:C},a}return Object(c.a)(t,[{key:"getItems",value:function(){return j.map((function(a){return{title:a.nameCategory,imgSrc:a.image}}))}},{key:"getCards",value:function(a){return h[a].sort((function(){return Math.random()-.5})),h[a].map((function(a){return{title:a.word,imgSrc:a.image,translation:a.translation,audioSrc:a.audioSrc}}))}},{key:"changeCategory",value:function(a){this.setState({activePage:a})}},{key:"changeGameModeApp",value:function(a){this.setState({activeGameMode:a})}},{key:"render",value:function(){var a=this,e=j.findIndex((function(e){if(a.state.activePage===e.nameCategory)return!0})),t=Object(m.jsx)(O,{itemsCategories:this.getItems(),changeCategory:function(e){a.changeCategory(e)}});return t=this.state.activePage===x?Object(m.jsx)(O,{itemsCategories:this.getItems(),changeCategory:function(e){a.changeCategory(e)},activeGameMode:this.state.activeGameMode}):"Stats"===this.state.activePage?Object(m.jsx)(v,{}):this.state.activePage===j[e].nameCategory?Object(m.jsx)(O,{itemsCategories:this.getCards(e),changeCategory:function(){},activeGameMode:this.state.activeGameMode}):Object(m.jsx)("div",{children:this.state.activePage}),console.log(this.state.activePage,this.state.activeGameMode),Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(f,{changeCategory:function(e){a.changeCategory(e)},changeGameModeApp:function(e){a.changeGameModeApp(e)},gameModeName:this.state.activeGameMode}),t,Object(m.jsx)(w,{})]})}}]),t}(r.a.Component),_=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,n=e.getLCP,o=e.getTTFB;t(a),i(a),r(a),n(a),o(a)}))},M=t(41),N=t(8),G=Object(N.a)();o.a.render(Object(m.jsx)(M.a,{history:G,children:Object(m.jsx)(k,{})}),document.getElementById("root")),_()}},[[39,1,2]]]);
//# sourceMappingURL=main.96fc2d71.chunk.js.map