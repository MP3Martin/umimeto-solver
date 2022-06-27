[![CodeFactor](https://www.codefactor.io/repository/github/MP3Martin/umimeto-solver/badge)](#/)
[<img src="https://img.shields.io/github/license/MP3Martin/umimeto-solver">](#/)
[<img src="https://img.shields.io/github/stars/MP3Martin/umimeto-solver">](#/)
[<img src="https://img.shields.io/github/forks/MP3Martin/umimeto-solver">](#/)
[<img src="https://img.shields.io/github/issues/MP3Martin/umimeto-solver">](#/)

<!-- ![codefactor_a+](https://user-images.githubusercontent.com/60501493/173180235-809fa83a-5bcf-4707-a079-dde00ca01349.svg) -->

# umimeto-solver
╰ Javascript code to solve https://umimeto.org for you <br>

**Initial idea from https://github.com/MiftikCZ/umimecesky-solver** ❤️
<br> <br>

**⚠For educational purposes only!⚠**
<br> <br>
🇨🇿 Click [**here**](https://github-com.translate.goog/MP3Martin/umimeto-solver?_x_tr_sl=en&_x_tr_tl=cs&_x_tr_hl=cs&_x_tr_pto=wapp) to see this webpage in Czech language 🇨🇿

## Code:
*(paste it into your browser console (`ctrl` + `shift` + `c` and select `console` tab) and press `enter`)*

```js
javascript:(function () { var script = document.createElement('script'); script.id="tmm_gdff56dgd56fs556gg"; script.src="https://mp3martin.github.io/umimeto-solver/source/main.min.js"; document.body.appendChild(script); script.onload = function () { document.getElementById("tmm_gdff56dgd56fs556gg").remove() } })();

```

*Tip: to run the code faster, type `javascript:` in the adress bar and paste the code after and press enter. **This faster way only works in Chrome! This method can be used to run the code on the phone.***


### Supported exercise types
* rozhodovačka
* doplňovačka
* závody
* týmovka
* vpisovačka
* hádanky
* diktát
* úkolovka
* otázky
* rozřazovačka
* roboti
* mluvené diktáty
* krok po kroku
* rozbory
* tvorba slov
* přesouvání
* čárky

<br>

<details>
  <summary><strong>Compressed code</strong></summary>
  
  # Compressed code:

  <!-- START [code:js] source/main.min.js -->
```js
if(window.$){function LoadCSS(e){return new Promise((function(t,n){var o=document.createElement("link");o.rel="stylesheet",o.href=e,o.classList.add("sstop-trash"),document.head.appendChild(o),o.onload=function(){t()}}))}function range(e,t,n){null==t&&(t=e||0,e=0),n||(n=t<e?-1:1);for(var o=Math.max(Math.ceil((t-e)/n),0),s=Array(o),i=0;i<o;i++,e+=n)s[i]=e;return s}window.sstop_timer&&window.sstop_btn(),window.toNodeList=function(e){var t=document.createDocumentFragment();return e.forEach((function(e){t.appendChild(e.cloneNode())})),t.childNodes},window.sstop_timer={running:!1,iv:5e3,timeout:!1,cb:function(){},start:function(e,t){var n=this;clearInterval(this.timeout),this.running=!0,e&&(this.cb=e),t&&(this.iv=t),this.timeout=setTimeout((function(){n.execute(n)}),this.iv)},execute:function(e){if(!e.running)return!1;e.cb(),e.start()},stop:function(){this.running=!1},set_interval:function(e){clearInterval(this.timeout),this.start(!1,e)}},window.sstop_paused=!1,window.sstop_alert=function(e){console.log("[umimeto-solver]: "+e),alert("[umimeto-solver]\n\n"+e)},document.body.innerHTML+='\n<div class="nav-slide" style="box-sizing: content-box;">\n  <div class="btn-slide"></div>\n  <div class="nav-body">\n      <div class="head-slide">Main Settings</div>\n      <div class="body-slide">\n          <ul class="nav">\n              <li><div style="padding-top: 1px;"><button type=\'button\' style=\'position: relative; margin: 5px auto auto; display: block;\' id=\'sstop_button\' class=\'tooltip fade\' data-title=\'Completely remove the solver\' onclick=\'window.sstop_btn()\'>STOP<br>ANSWERING</button></div></li>\n              <li><div id="sstop_slider_div" class="tooltip fade" data-title="Answering speed"><input onchange="1!=window.sstop_paused&&window.sstop_timer.set_interval(window.sstop_slider.value());" id="sstop_slider" style="margin: 5px auto auto; display: block;" type="range" min="300" max="4000" value="-700"></div></li>\n              <li><div><button type=\'button\' style=\'position: relative; margin: 5px auto auto; display: block; height: 1.5rem;\' id=\'sstop_pause_button\' onclick=\'window.sstop_pause_btn(this)\'><i class="fa fa-pause hv-black"></i></button></div></li>\n              <li><p style="text-align: center; text-align: center; display: grid;" class="cur-default" ><i style="font-size: 0.78rem;" id="sstop_status">(playing)</i></p></li>\n          </ul>\n      </div>\n  </div>\n  <div class="nav-body">\n      <div class="head-slide">Additional Settings</div>\n      <div class="body-slide">\n          <ul class="nav">\n              <li><a class="cur-default" href="javascript:void(0)">Currently none :(</a></li>\n          </ul>\n      </div>\n  </div>\n</div>\n',LoadCSS("https://netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css").then((function(){})),LoadCSS("https://mp3martin.github.io/umimeto-solver/assets/jquery-slide-menu/jquery-slide-menu.css").then((function(){}));var slide_menu_script=document.createElement("script");function resized(){document.getElementById("sstop_slider").style.width=parseInt(.95*document.getElementById("sstop_button").offsetWidth)+"px"}function answer_twoOp(){var e=-1;try{var t=questions.find((e=>e.id==window.location.pathname.split("/")[2]));for(i of range(parseInt(t.options.length)))1===t.options[i].correct&&(e=i);console.log("Correct answer: "+parseInt(e+1)),document.getElementById("option"+e).click()}catch(e){}}function answer_twoOp_zavody(){var e=-1;try{"1"===document.getElementById("option0").attributes.correct.value?e=0:"1"===document.getElementById("option1").attributes.correct.value&&(e=1),console.log("Correct answer: "+parseInt(e+1)),document.getElementById("option"+e).click()}catch(e){}}function answer_vpisovacka(){var e="";try{e=questions.find((e=>e.id==window.location.pathname.split("/")[2])).question[1][1].answer[0],console.log("Correct answer: "+e),document.getElementById("answer0").value=e,document.getElementById("evaluate").click(),nextQuestion()}catch(e){}}function answer_hadanky(){var e="";try{e=questions.find((e=>e.id==window.location.pathname.split("/")[2])).item.question[1][1].answer[0],console.log("Correct answer: "+e),document.getElementById("answer0").value=e,document.getElementById("evaluate").click(),nextQuestion()}catch(e){}}function answer_diktat(){var e="";try{for(i of range($("[answered]").length))if("0"===$("[answered]")[i].attributes.answered.value){e=$("[answered]")[i].childNodes[1],$("[answered]")[i].attributes.answered.value="1";break}e&&("1"===e.childNodes[0].attributes.correct.value?clickVariant($(e.childNodes[0])):"1"===e.childNodes[1].attributes.correct.value&&clickVariant($(e.childNodes[1]))),1===window.finished&&(nextDictate(),window.finished=0)}catch(e){}}function answer_ukolovka(){var e="";try{var t=questions.find((e=>e.id==window.location.pathname.split("/")[2]));e=t.item.question[t.item.question.length-1][1].answer[0],console.log("Correct answer: "+e),document.getElementById("answer0").value=e,document.getElementById("evaluate").click(),nextQuestion()}catch(e){}}function answer_pexeso(){try{evaluate(1),nextSet()}catch(e){}}function answer_otazky(){try{for(i of["variantjedna","variantdva","varianttri","variantctyri"])if("1"===document.getElementById(i).attributes.correct.value){i;break}console.log("Correct answer: "+document.getElementById(i).innerText),clickVariant($(document.getElementById(i))),nextQuestion()}catch(e){}}function answer_rozrazovacka(){var t=-1;try{for(i of range(document.getElementById("pool").childNodes.length)){var n=document.getElementById("word"+i);if(wordClicked($(n)),"0"===n.attributes.correctvariant.value)t=0;else{if("1"!==n.attributes.correctvariant.value){sstop_alert('This type of "rozřazovačka" is saddly not supported!'),window.sstop_btn();break}t=1}for(e of range(document.getElementById("set"+t).childNodes.length))if(e%2==0&&"-1"===document.getElementById("set"+t).childNodes[e].attributes.currentword.value&&"-1"===n.attributes.currentbox.value){wordBoxClicked($(document.getElementById("wordBox-"+t+"-"+parseInt(e/2))));break}}setTimeout((()=>{evaluate(),nextSet()}),window.sstop_timer.iv/5)}catch(e){}}function answer_roboti(){var e=-1;try{e=questions[questionOffset].options[1].correct,console.log("Correct answer: "+parseInt(e)),document.getElementById("option"+e).click(),1==finished&&document.getElementById("next").click()}catch(e){}}function answer_mluvene_diktaty(){try{window.setInterval((function(){try{document.getElementsByClassName("audio")[0].childNodes[0]?document.getElementsByClassName("audio")[0].childNodes[0].remove():document.getElementsByClassName("audio")[1].childNodes[0]&&document.getElementsByClassName("audio")[1].childNodes[0].remove()}catch(e){}}),1),document.getElementsByClassName("tlacitko large primary nextItem").length>0?document.getElementsByClassName("tlacitko large primary nextItem")[0].click():"none"!=document.getElementById("finalBoard").style.display?document.getElementById("startTyping").click():(console.log("Correct answer: "+window.sentence),document.getElementById("sentence").value=window.sentence,document.getElementById("evaluate").click(),document.getElementById("nextSentence").click())}catch(e){}}function answer_krok_po_kroku(){var e=-1;try{"1"==finished?nextQuestion():("1"===document.getElementById("option0").attributes.correct.value?e=0:"1"===document.getElementById("option1").attributes.correct.value&&(e=1),console.log("Correct answer: "+parseInt(e+1)),document.getElementById("option"+e).click(),document.getElementById("option0").scrollIntoView(),window.scrollBy(0,-70))}catch(e){}}function answer_rozbory(){try{if("1"==finished)nextSentence();else{for(i in unfiltered_chunks=Array.prototype.slice.call(document.getElementById("sentence").childNodes),filtered_chunks=Array.prototype.slice.call(unfiltered_chunks),filtered_chunks.splice(0,unfiltered_chunks.length),range(document.getElementById("sentence").childNodes.length))nodeName=Array.from(document.getElementById("sentence").childNodes)[i].nodeName,"SPAN"!==nodeName&&"DIV"!==nodeName||filtered_chunks.push(unfiltered_chunks[i]);for(marker of document.getElementById("markers").childNodes)for(chunk of(marker.click(),chunk_i=0,filtered_chunks))correctCategories[chunk_i]===marker.attributes.category.value&&chunk.click(),chunk_i+=1;document.getElementById("evaluate").click()}}catch(e){}}function answer_presouvani(){try{solution(),document.getElementById("evaluate").click(),setTimeout((function(){nextQuestion()}),200)}catch(e){}}function answer_carky(){try{for(i of(gaps=[],range(1e3)))document.getElementById("gap"+i)&&gaps.push(document.getElementById("gap"+i));for(gap of gaps)"1"==gap.attributes.correct.value&&gap.click();document.getElementById("evaluate").click(),setTimeout((function(){nextSentence()}),200)}catch(e){}}if(slide_menu_script.onload=function(){for(nav of($(".nav-slide").SlideMenu({speedLR:200,speedUD:300,expand:!0}),Array.prototype.slice.call(document.getElementsByClassName("nav"))))for(li of(nav.innerHTML+='<li><p class="cur-default nav-no-hover" ><i><br></i></p></li>',Array.prototype.slice.call($(nav).children())))el=li.childNodes[0],el.style.margin="auto",el.style.display="block",el.style.marginTop="5px";try{window.sstop_pause_btn(document.getElementById("sstop_pause_button")),window.sstop_pause_btn(document.getElementById("sstop_pause_button"))}catch(e){}},slide_menu_script.src="https://mp3martin.github.io/umimeto-solver/assets/jquery-slide-menu/jquery-slide-menu.js",slide_menu_script.classList.add("sstop-trash"),document.head.appendChild(slide_menu_script),window.sstop_slider={value:function(){return Math.abs($("#sstop_slider").val())},min:300},$("#sstop_slider").attr("min",-1*($("#sstop_slider").attr("max")-window.sstop_slider.min)),$("#sstop_slider").attr("max",0),setInterval((function(){$("#sstop_slider").attr("min",-4e3),$("#sstop_slider").attr("max",window.sstop_slider.min)}),1),window.sstop_pause_btn=function(e){if(window.sstop_paused){window.sstop_paused=!1;try{document.getElementById("sstop_slider").onchange()}catch(e){}$(e).css({"background-color":"orange",transition:"background-color 0.2s ease-out"}),$(e.childNodes[0]).addClass("fa-pause"),$(e.childNodes[0]).removeClass("fa-play"),document.getElementById("sstop_status").innerText="(running)",document.getElementById("sstop_status").style.color="darkgreen"}else{window.sstop_paused=!0;try{sstop_timer.set_interval(2147483647)}catch(e){}$(e).css({"background-color":"greenyellow",transition:"background-color 0.2s ease-out"}),$(e.childNodes[0]).removeClass("fa-pause"),$(e.childNodes[0]).addClass("fa-play"),document.getElementById("sstop_status").innerText="(paused)",document.getElementById("sstop_status").style.color="orange"}},document.body.innerHTML+="<div id='sstop' style='position:fixed; top:0; right:0; margin:5px; padding-right:4px;'></div>",document.body.innerHTML+="\n<style id=\"sstop_style\">\n#sstop_button {\n  color: #ffffff;\n  background-color: #cc0000;\n  font-size: 19px;\n  border-radius: 12px;\n  padding: 10px 15px;\n  cursor: pointer\n}\n\n#sstop_button:hover {\n  color: #000000;\n  background-color: #ef2929;\n}\n    \n#sstop_slider {\n    /* */\n}\n\n#sstop_pause_button {\n  color: #00000;\n  background-color: orange;\n  font-size: 19px;\n  border-radius: 5px;\n  padding: 10px 15px;\n  cursor: pointer\n}\n\n#sstop_pause_button:hover {\n  color: #000000;\n}\n\n.hv-black:hover {\n  color: #000000 !important;\n  background-color: revert !important;\n}\n    \n/* setup tooltips */\n  .tooltip {\n    position: relative;\n    z-index: 99 !important;\n  }\n  .tooltip:before,\n  .tooltip:after {\n    display: block;\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n  }\n  .tooltip:after {\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid rgba(51,74,62,.90);\n    z-index: 99 !important;\n    border-left: 6px solid transparent;\n    content: '';\n    height: 0;\n      top: 20px;\n      left: 20px;\n    width: 0;\n  }\n  .tooltip:before {\n    background: rgba(51,74,62,.90);\n    border-radius: 2px;\n    color: #fff;\n    font-weight: bold;\n    content: attr(data-title);\n    font-size: 14px;\n    padding: 6px 10px;\n      top: 26px;\n    white-space: nowrap;\n  }\n\n  /* the animations */\n  /* fade */\n  .tooltip.fade:after,\n  .tooltip.fade:before {\n    transform: translate3d(0,-10px,0);\n    transition: all .15s ease-in-out;\n  }\n  .tooltip.fade:hover:after,\n  .tooltip.fade:hover:before {\n    opacity: 1;\n    transform: translate3d(0,0,0);\n  }\n\n  /* expand */\n  .tooltip.expand:before {\n    transform: scale3d(.2,.2,1);\n    transition: all .2s ease-in-out;\n  }\n  .tooltip.expand:after {\n    transform: translate3d(0,6px,0);\n    transition: all .1s ease-in-out;\n  }\n  .tooltip.expand:hover:before,\n  .tooltip.expand:hover:after {\n    opacity: 1;\n    transform: scale3d(1,1,1);\n  }\n  .tooltip.expand:hover:after {\n    transition: all .2s .1s ease-in-out;\n  }\n\n  /* swing */\n  .tooltip.swing:before,\n  .tooltip.swing:after {\n    transform: translate3d(0,30px,0) rotate3d(0,0,1,60deg);\n    transform-origin: 0 0;\n    transition: transform .15s ease-in-out, opacity .2s;\n  }\n  .tooltip.swing:after {\n    transform: translate3d(0,60px,0);\n    transition: transform .15s ease-in-out, opacity .2s;\n  }\n  .tooltip.swing:hover:before,\n  .tooltip.swing:hover:after {\n    opacity: 1;\n    transform: translate3d(0,0,0) rotate3d(1,1,1,0deg);\n  }\n\n  .cur-default {\n    cursor: default;\n  }\n\n  .nav-no-hover {\n    background: #CCC !important;\n  }\n\n</style>\n",stop_div=document.getElementById("sstop"),stop_div.innerHTML="",window.sstop=function(){window.sstop_timer.stop()},window.sstop_btn=function(){window.sstop_rm(),sstop(),window.sstop_timer=null,window.sstop_alert=null,window.sstop_btn=null,window.sstop=null,window.toNodeList=null,window.sstop_rm=null,window.LoadCSS=null,window.sstop_paused=null,window.sstop_slider=null},window.sstop_rm=function(){try{for(i in document.getElementById("sstop").remove(),document.getElementById("sstop_style").remove(),document.getElementsByClassName("nav-slide")[0].remove(),range(3))for(trash of document.getElementsByClassName("sstop-trash"))trash.remove()}catch(e){}},window.addEventListener("resize",resized),resized(),window.location.hostname.includes("www.umime")){let t=window.location.pathname.split("/")[1];if(t.includes("doplnovacka")||t.includes("rozhodovacka"))console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_twoOp(),window.sstop_timer.start((function(){answer_twoOp()}),1500);else if(window.location.href.includes("?p=zavody")||window.location.href.includes("?p=tymovka"))console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_twoOp_zavody(),window.sstop_timer.start((function(){answer_twoOp_zavody()}),1500);else if(window.location.href.includes("/vpisovacka"))console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_vpisovacka(),window.sstop_timer.start((function(){answer_vpisovacka()}),1500);else if(window.location.href.includes("/hadanky"))console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_hadanky(),window.sstop_timer.start((function(){answer_hadanky()}),1500);else if(window.location.href.includes("/diktat"))console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_diktat(),window.sstop_slider.min=50,window.sstop_timer.start((function(){answer_diktat()}),1500);else if(window.location.href.includes("/ukolovka"))console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_ukolovka(),window.sstop_timer.start((function(){answer_ukolovka()}),1500);else if(window.location.href.includes("/pexeso"))console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_pexeso(),window.sstop_slider.min=50,window.sstop_timer.start((function(){answer_pexeso()}),1500);else if(window.location.href.includes("/otazky"))console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_otazky(),window.sstop_timer.start((function(){answer_otazky()}),1500);else if(window.location.href.includes("/rozrazovacka")){console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_rozrazovacka();try{window.sstop_timer.start((function(){answer_rozrazovacka()}),1500)}catch(n){}}else window.location.href.includes("/roboti")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_roboti(),window.sstop_timer.start((function(){answer_roboti()}),1500)):window.location.href.includes("/mluvene-diktaty")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_mluvene_diktaty(),window.sstop_timer.start((function(){answer_mluvene_diktaty()}),1500)):window.location.href.includes("/krok-po-kroku")||window.location.href.includes("/chat")||window.location.href.includes("/odvozovani")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_krok_po_kroku(),window.sstop_timer.start((function(){answer_krok_po_kroku()}),1500)):window.location.href.includes("/rozbory")||window.location.href.includes("/tvorba_slov")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_rozbory(),window.sstop_timer.start((function(){answer_rozbory()}),1500)):window.location.href.includes("/presouvani")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_presouvani(),window.sstop_timer.start((function(){answer_presouvani()}),1500)):window.location.href.includes("/psani-carek")||window.location.href.includes("/carky")||window.location.href.includes("/carek")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_carky(),window.sstop_timer.start((function(){answer_carky()}),1500)):(window.sstop_rm(),sstop_alert("This exercise is not supported!"),window.sstop_btn())}else window.sstop_rm(),sstop_alert("This website is not supported!"),window.sstop_btn()}else console.log("No jQuery installed on this website!");

```
<!-- END [code:js] source/main.min.js -->

</details>

<details>
  <summary><strong>Uncompressed code</strong></summary>
  
  # Uncompressed code:

  <!-- START [code:js] source/main.js -->
```js
if (window.$) {  
  // avoid multiple solvers
  if (window.sstop_timer) {
    window.sstop_btn();
  }

  function LoadCSS(e){return new Promise((function(n,t){var o=document.createElement("link");o.rel="stylesheet",o.href=e,o.classList.add("sstop-trash"),document.head.appendChild(o),o.onload=function(){n()}}))}

  window.toNodeList = function(arrayOfNodes){
    var fragment = document.createDocumentFragment();
    arrayOfNodes.forEach(function(item){
      fragment.appendChild(item.cloneNode());
    });
    return fragment.childNodes;
  };

  window.sstop_timer = {
    running: false,
    iv: 5000,
    timeout: false,
    cb : function(){},
    start : function(cb,iv){
        var elm = this;
        clearInterval(this.timeout);
        this.running = true;
        if(cb) this.cb = cb;
        if(iv) this.iv = iv;
        this.timeout = setTimeout(function(){elm.execute(elm)}, this.iv);
    },
    execute : function(e){
        if(!e.running) return false;
        e.cb();
        e.start();
    },
    stop : function(){
        this.running = false;
    },
    set_interval : function(iv){
        clearInterval(this.timeout);
        this.start(false, iv);
    }
  };
  
  window.sstop_paused = false;

  function range(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  }

  window.sstop_alert = function(message) {
    console.log("[umimeto-solver]: " + message)
    alert("[umimeto-solver]\n\n" + message)
  }

  // create slide_menu
  document.body.innerHTML += `
<div class="nav-slide" style="box-sizing: content-box;">
  <div class="btn-slide"></div>
  <div class="nav-body">
      <div class="head-slide">Main Settings</div>
      <div class="body-slide">
          <ul class="nav">
              <li><div style="padding-top: 1px;"><button type='button' style='position: relative; margin: 5px auto auto; display: block;' id='sstop_button' class='tooltip fade' data-title='Completely remove the solver' onclick='window.sstop_btn()'>STOP<br>ANSWERING</button></div></li>
              <li><div id="sstop_slider_div" class="tooltip fade" data-title="Answering speed"><input onchange="1!=window.sstop_paused&&window.sstop_timer.set_interval(window.sstop_slider.value());" id="sstop_slider" style="margin: 5px auto auto; display: block;" type="range" min="300" max="4000" value="-700"></div></li>
              <li><div><button type='button' style='position: relative; margin: 5px auto auto; display: block; height: 1.5rem;' id='sstop_pause_button' onclick='window.sstop_pause_btn(this)'><i class="fa fa-pause hv-black"></i></button></div></li>
              <li><p style="text-align: center; text-align: center; display: grid;" class="cur-default" ><i style="font-size: 0.78rem;" id="sstop_status">(playing)</i></p></li>
          </ul>
      </div>
  </div>
  <div class="nav-body">
      <div class="head-slide">Additional Settings</div>
      <div class="body-slide">
          <ul class="nav">
              <li><a class="cur-default" href="javascript:void(0)">Currently none :(</a></li>
          </ul>
      </div>
  </div>
</div>
`

  LoadCSS('https://netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css').then( function() {
    // do stuff
    return;
  } );

  LoadCSS('https://mp3martin.github.io/umimeto-solver/assets/jquery-slide-menu/jquery-slide-menu.css').then( function() {
    // do stuff
    return;
  } );


  var slide_menu_script = document.createElement('script');
  slide_menu_script.onload = function () {
    $('.nav-slide').SlideMenu({
      speedLR: 200,
      speedUD: 300,
      expand: true
    });

    // add special style to settings options
    for (nav of Array.prototype.slice.call(document.getElementsByClassName("nav"))) {
      nav.innerHTML += '<li><p class="cur-default nav-no-hover" ><i><br></i></p></li>'
      for (li of Array.prototype.slice.call($(nav).children())) {
        el = li.childNodes[0]

        el.style.margin = "auto"
        el.style.display = "block"
        el.style.marginTop = "5px"
      }
    }

    try {
      // reload pause menu
      window.sstop_pause_btn(document.getElementById("sstop_pause_button"))
      window.sstop_pause_btn(document.getElementById("sstop_pause_button"))
    } catch (e) {}

  };

  slide_menu_script.src = "https://mp3martin.github.io/umimeto-solver/assets/jquery-slide-menu/jquery-slide-menu.js";
  // slide_menu_script.src = "https://raw.githack.com/MP3Martin/public-assets/master/js/jquery-slide-menu/jquery-slide-menu.js?min=1";

  slide_menu_script.classList.add("sstop-trash")

  document.head.appendChild(slide_menu_script); //or something of the likes
  


  window.sstop_slider = {
    "value" : function() {
      var output = Math.abs($("#sstop_slider").val());
      return output;
    },

    "min" : 300
  }
  
  $("#sstop_slider").attr("min", (($("#sstop_slider").attr("max") - window.sstop_slider.min) * -1));
  $("#sstop_slider").attr("max", 0);

  // automatically update sstop_slider html values
  setInterval(function(){
    $("#sstop_slider").attr("min", (4000) * -1);
    $("#sstop_slider").attr("max", window.sstop_slider.min);
  }, 1);



  window.sstop_pause_btn = function(el){
    if(window.sstop_paused) {
      window.sstop_paused = false;
      try {
        document.getElementById("sstop_slider").onchange()
      } catch(e) {}
      $(el).css({"background-color":"orange", "transition":"background-color 0.2s ease-out"});
      $(el.childNodes[0]).addClass('fa-pause');
      $(el.childNodes[0]).removeClass('fa-play');

    document.getElementById("sstop_status").innerText = "(running)"
    document.getElementById("sstop_status").style.color = "darkgreen"
    } else {
      window.sstop_paused = true;
      try {
        sstop_timer.set_interval(2147483647)
      } catch(e) {}
      $(el).css({"background-color":"greenyellow", "transition":"background-color 0.2s ease-out"});
      $(el.childNodes[0]).removeClass('fa-pause');
      $(el.childNodes[0]).addClass('fa-play');

      document.getElementById("sstop_status").innerText = "(paused)"
      document.getElementById("sstop_status").style.color = "orange"
    }
  }

  // create stop button
  document.body.innerHTML += "<div id='sstop' style='position:fixed; top:0; right:0; margin:5px; padding-right:4px;'></div>"
  document.body.innerHTML += `
<style id="sstop_style">
#sstop_button {
  color: #ffffff;
  background-color: #cc0000;
  font-size: 19px;
  border-radius: 12px;
  padding: 10px 15px;
  cursor: pointer
}

#sstop_button:hover {
  color: #000000;
  background-color: #ef2929;
}
    
#sstop_slider {
    /* */
}

#sstop_pause_button {
  color: #00000;
  background-color: orange;
  font-size: 19px;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer
}

#sstop_pause_button:hover {
  color: #000000;
}

.hv-black:hover {
  color: #000000 !important;
  background-color: revert !important;
}
    
/* setup tooltips */
  .tooltip {
    position: relative;
    z-index: 99 !important;
  }
  .tooltip:before,
  .tooltip:after {
    display: block;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }
  .tooltip:after {
    border-right: 6px solid transparent;
    border-bottom: 6px solid rgba(51,74,62,.90);
    z-index: 99 !important;
    border-left: 6px solid transparent;
    content: '';
    height: 0;
      top: 20px;
      left: 20px;
    width: 0;
  }
  .tooltip:before {
    background: rgba(51,74,62,.90);
    border-radius: 2px;
    color: #fff;
    font-weight: bold;
    content: attr(data-title);
    font-size: 14px;
    padding: 6px 10px;
      top: 26px;
    white-space: nowrap;
  }

  /* the animations */
  /* fade */
  .tooltip.fade:after,
  .tooltip.fade:before {
    transform: translate3d(0,-10px,0);
    transition: all .15s ease-in-out;
  }
  .tooltip.fade:hover:after,
  .tooltip.fade:hover:before {
    opacity: 1;
    transform: translate3d(0,0,0);
  }

  /* expand */
  .tooltip.expand:before {
    transform: scale3d(.2,.2,1);
    transition: all .2s ease-in-out;
  }
  .tooltip.expand:after {
    transform: translate3d(0,6px,0);
    transition: all .1s ease-in-out;
  }
  .tooltip.expand:hover:before,
  .tooltip.expand:hover:after {
    opacity: 1;
    transform: scale3d(1,1,1);
  }
  .tooltip.expand:hover:after {
    transition: all .2s .1s ease-in-out;
  }

  /* swing */
  .tooltip.swing:before,
  .tooltip.swing:after {
    transform: translate3d(0,30px,0) rotate3d(0,0,1,60deg);
    transform-origin: 0 0;
    transition: transform .15s ease-in-out, opacity .2s;
  }
  .tooltip.swing:after {
    transform: translate3d(0,60px,0);
    transition: transform .15s ease-in-out, opacity .2s;
  }
  .tooltip.swing:hover:before,
  .tooltip.swing:hover:after {
    opacity: 1;
    transform: translate3d(0,0,0) rotate3d(1,1,1,0deg);
  }

  .cur-default {
    cursor: default;
  }

  .nav-no-hover {
    background: #CCC !important;
  }

</style>
`
  stop_div = document.getElementById("sstop")
  stop_div.innerHTML = ""

  // stop_div.innerHTML += "<div id='sstop_wrapper' style='position:static; margin:0;'></div>"
  // sstop_wrapper = document.getElementById("sstop_wrapper")

  // sstop_wrapper.innerHTML += "<button type='button' style='position: relative;' id='sstop_button' onclick='window.sstop_btn()'>STOP<br>ANSWERING</button>"
  // sstop_wrapper.innerHTML += "<br>"

  // sstop_wrapper.innerHTML += '<div style="position: absolute;" id="sstop_slider_div" class="tooltip fade" data-title="Answering speed"></div>'
  // document.getElementById("sstop_slider_div").innerHTML += '<input onchange="1!=window.sstop_paused&&window.sstop_timer.set_interval(this.value);" id="sstop_slider" type="range" min="300" max="5000" value="1500" style="position: absolute;">'

  window.sstop = function() {
    window.sstop_timer.stop();

  }

  window.sstop_btn = function() {
    //remove elements
    window.sstop_rm()

    //stop timer
    sstop();

    //remove variables
    window.sstop_timer = null;
    window.sstop_alert = null;
    window.sstop_btn = null;
    window.sstop = null;
    window.toNodeList = null;
    window.sstop_rm = null;
    window.LoadCSS = null;
    window.sstop_paused = null;

    window.sstop_slider = null;
  }

  window.sstop_rm = function() {
    try {
      //remove elements
      document.getElementById("sstop").remove();
      document.getElementById("sstop_style").remove();
      document.getElementsByClassName("nav-slide")[0].remove()
      for (i in range(3)) {
        for (trash of document.getElementsByClassName("sstop-trash")) {
          trash.remove()
        }
      }
    } catch (error) {}
  }

  window.addEventListener('resize', resized);

  resized();

  function resized() {
    document.getElementById("sstop_slider").style.width = parseInt((95 / 100) * document.getElementById("sstop_button").offsetWidth) + "px";
  }

  function answer_twoOp() {
    var correct_answer = -1
    try {
        var answers = questions.find(q => q.id == window.location.pathname.split("/")[2])
        for (i of range(parseInt(answers.options.length))) {
          if (answers.options[i].correct === 1)
              correct_answer = i
        }
        console.log("Correct answer: "  + parseInt(correct_answer + 1))
        document.getElementById("option" + correct_answer).click()
    } catch (error) {}
  }

  function answer_twoOp_zavody() {
    // var correct_answer = -1
    // window.sstop_question_index = 0
    // for (i of range(2)) {
    //   document.getElementById("option" + i).addEventListener("click", function() { window.sstop_question_index += 1; });
    // }
    //  try {
    //     var answers = questions[window.sstop_question_index]
    //     for (i of range(parseInt(answers.options.length))) {
    //        if (answers.options[i].correct === 1)
    //           correct_answer = i
    //     }
    //     console.log("Correct answer: "  + parseInt(correct_answer + 1))
    //     document.getElementById("option" + correct_answer).click()
    //  } catch (error) {}

    // var correct_answer = -1
    //  try {
    //     for (i of range(questions.length)) {
    //       answers = questions[i]
    //       if (answers.options[0].option[0][1] === document.getElementById("option0").firstChild.textContent && answers.options[1].option[0][1] === document.getElementById("option1").firstChild.textContent) {
    //         for (i of range(parseInt(answers.options.length))) {
    //           if (answers.options[i].correct === 1)
    //             correct_answer = i
    //           }
            
    //         console.log("Correct answer: "  + parseInt(correct_answer + 1))
    //         document.getElementById("option" + correct_answer).click()
    //       }
    //     }
        
    //  } catch (error) {}

    var correct_answer = -1
    try {
      if (document.getElementById("option0").attributes.correct.value === "1"){
        correct_answer = 0
      } else if (document.getElementById("option1").attributes.correct.value === "1"){
        correct_answer = 1
      }
      console.log("Correct answer: "  + parseInt(correct_answer + 1))
      document.getElementById("option" + correct_answer).click()
    } catch (error) {}
  }

  function answer_vpisovacka() {
    var correct_answer = ""
    try {
      var answers = questions.find(q => q.id == window.location.pathname.split("/")[2])
      correct_answer = answers.question[1][1].answer[0]
      console.log("Correct answer: "  + correct_answer)
      document.getElementById("answer0").value = correct_answer
      document.getElementById("evaluate").click()
      nextQuestion();
    } catch (error) {}
  }

  function answer_hadanky() {
    var correct_answer = ""
    try {
      var answers = questions.find(q => q.id == window.location.pathname.split("/")[2])
      correct_answer = answers.item.question[1][1].answer[0]
      console.log("Correct answer: "  + correct_answer)
      document.getElementById("answer0").value = correct_answer
      document.getElementById("evaluate").click()
      nextQuestion();
    } catch (error) {}
  }

  function answer_diktat() {
    var correct_answer = ""
    var el = ""
    try {
      for (i of range($("[answered]").length)) {
        if ($("[answered]")[i].attributes.answered.value === "0") {
          el = $("[answered]")[i].childNodes[1]
          $("[answered]")[i].attributes.answered.value = "1" 
          break
        }
      }

      // if element exists
      if (el) {
        if (el.childNodes[0].attributes.correct.value === "1") {
          clickVariant($(el.childNodes[0]));
        } else if (el.childNodes[1].attributes.correct.value === "1") {
          clickVariant($(el.childNodes[1]));
        }
      }
      
      //

      if (window.finished === 1) {
        nextDictate();
        window.finished = 0
      }
    } catch (error) {}
  }

  function answer_ukolovka() {
    var correct_answer = ""
    try {
      var answers = questions.find(q => q.id == window.location.pathname.split("/")[2])
      correct_answer = answers.item.question[answers.item.question.length - 1][1].answer[0]
      console.log("Correct answer: "  + correct_answer)
      document.getElementById("answer0").value = correct_answer
      document.getElementById("evaluate").click()
      nextQuestion();
    } catch (error) {}
  }

  function answer_pexeso() {
    var correct_answer = ""
    try {
      evaluate(1);
      nextSet();
    } catch (error) {}
  }

  function answer_otazky() {
    var correct_answer = ""
    try {
      var variants = ["variantjedna", "variantdva", "varianttri", "variantctyri"]
      for (i of variants) {
        if (document.getElementById(i).attributes.correct.value === "1") {
          correct_answer = i
          break
        }
      }
      console.log("Correct answer: "  + document.getElementById(i).innerText)
      clickVariant($(document.getElementById(i)));
      nextQuestion();
    } catch (error) {}
  }

  function answer_rozrazovacka() {
    var correct_answer = ""
    var box = -1
    try {
      for (i of range(document.getElementById("pool").childNodes.length)) {
        var el = document.getElementById("word" + i)
        wordClicked($(el));
        if (el.attributes.correctvariant.value === "0") {
          box = 0
        } else if (el.attributes.correctvariant.value === "1") {
          box = 1
        } else {
          sstop_alert('This type of "rozřazovačka" is saddly not supported!')
          window.sstop_btn();
          break;
        }
        for (e of range(document.getElementById("set" + box).childNodes.length)) {
          if (e % 2 == 0) {
            if (document.getElementById("set" + box).childNodes[e].attributes.currentword.value === "-1") {
              // console.log("box: " + box + ", set: " + e)
              if (el.attributes.currentbox.value === "-1") {
                wordBoxClicked($(document.getElementById("wordBox-" + box + "-" + parseInt(e / 2))));
                break
              }
            }
          }
        }
      }
      
      setTimeout(() => {
        evaluate();
        nextSet();
      }, window.sstop_timer.iv / 5);
    } catch (error) {}
  }

  function answer_roboti() {
    var correct_answer = -1
    try {
        correct_answer = questions[questionOffset].options[1].correct 
        console.log("Correct answer: "  + parseInt(correct_answer))
        document.getElementById("option" + correct_answer).click()
        if (finished == 1) {
          document.getElementById("next").click();
        }
    } catch (error) {}
  }

  function answer_mluvene_diktaty() {
    var correct_answer = -1
    try {
        window.setInterval(function() {
          try {
            if (document.getElementsByClassName("audio")[0].childNodes[0]) {
              document.getElementsByClassName("audio")[0].childNodes[0].remove()
            } else if (document.getElementsByClassName("audio")[1].childNodes[0]) {
              document.getElementsByClassName("audio")[1].childNodes[0].remove()
            }
          } catch (error) {}
        }, 1);

        if (document.getElementsByClassName("tlacitko large primary nextItem").length > 0) {
          document.getElementsByClassName("tlacitko large primary nextItem")[0].click()        
        } else if (document.getElementById("finalBoard").style.display != "none") {
          document.getElementById("startTyping").click()
        } else {
          console.log("Correct answer: "  + window.sentence)
          document.getElementById("sentence").value = window.sentence
          document.getElementById("evaluate").click()
          document.getElementById("nextSentence").click()
        }
    } catch (error) {}
  }

  function answer_krok_po_kroku() {

    var correct_answer = -1
    try {
      if (finished == "1") {
        nextQuestion();
      } else {
        if (document.getElementById("option0").attributes.correct.value === "1"){
          correct_answer = 0
        } else if (document.getElementById("option1").attributes.correct.value === "1"){
          correct_answer = 1
        }
        console.log("Correct answer: "  + parseInt(correct_answer + 1))
        document.getElementById("option" + correct_answer).click()
        document.getElementById("option0").scrollIntoView()
        window.scrollBy(0, -70)
      }
    } catch (error) {}
  }

  function answer_rozbory() {

    var correct_answer = -1
    try {
      if (finished == "1") {
        nextSentence();
      } else {
        // get the chunks of the sentence
        unfiltered_chunks = Array.prototype.slice.call(document.getElementById("sentence").childNodes)
        filtered_chunks = Array.prototype.slice.call(unfiltered_chunks)
        filtered_chunks.splice(0, unfiltered_chunks.length)
        for (i in range(document.getElementById("sentence").childNodes.length)) {
          nodeName = Array.from(document.getElementById("sentence").childNodes)[i].nodeName
          if (nodeName === "SPAN" || nodeName === "DIV") {
            filtered_chunks.push(unfiltered_chunks[i])
          }
        }

        for (marker of document.getElementById("markers").childNodes) {
          marker.click()

          chunk_i = 0
          for (chunk of filtered_chunks) {
            if (correctCategories[chunk_i] === marker.attributes.category.value) {
              chunk.click()
            }
            chunk_i += 1
          }
        }

        // finished marking
        document.getElementById("evaluate").click()
      }
    } catch (error) {}
  }

  function answer_presouvani() {
    var correct_answer = -1
    try {
      solution();
      document.getElementById("evaluate").click()
      setTimeout(function (){
        nextQuestion();
      }, 200);
    } catch (error) {}
  }

  function answer_carky() {
    var correct_answer = -1
    try {
      gaps = []
      for (i of range(1000)) {
        if (document.getElementById("gap" + i)) {
          gaps.push(document.getElementById("gap" + i))
        }
      }

      for (gap of gaps) {
        if (gap.attributes.correct.value == "1") {
          gap.click()
        }
      }

      document.getElementById("evaluate").click()
      setTimeout(function (){
        nextSentence();
      }, 200);
    } catch (error) {}
  }

  //check if the website is supported
  if (window.location.hostname.includes("www.umime")) {
    let ulr_ex_type = window.location.pathname.split("/")[1]
    if (ulr_ex_type.includes("doplnovacka") || ulr_ex_type.includes("rozhodovacka")) {
      console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
      // run for the first time
      answer_twoOp()
      // loop
      window.sstop_timer.start(function(){
        answer_twoOp()
      }, 1500);
    } else if (window.location.href.includes("?p=zavody") || window.location.href.includes("?p=tymovka")) {
      console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
      // run for the first time
      answer_twoOp_zavody()
      // loop
      window.sstop_timer.start(function(){
        answer_twoOp_zavody()
      }, 1500);
    } else if (window.location.href.includes("/vpisovacka")) {
      console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
      // run for the first time
      answer_vpisovacka()
      // loop
      window.sstop_timer.start(function(){
        answer_vpisovacka()
      }, 1500);
    } else if (window.location.href.includes("/hadanky")) {
      console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
      // run for the first time
      answer_hadanky()
      // loop
      window.sstop_timer.start(function(){
        answer_hadanky()
      }, 1500);
    } else if (window.location.href.includes("/diktat")) {
      console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
      // run for the first time
      answer_diktat()

      window.sstop_slider.min = 50;

      // loop
      window.sstop_timer.start(function(){
        answer_diktat()
      }, 1500);
    } else if (window.location.href.includes("/ukolovka")) {
      console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
      // run for the first time
      answer_ukolovka()
      // loop
      window.sstop_timer.start(function(){
        answer_ukolovka()
      }, 1500);
    } else if (window.location.href.includes("/pexeso")) {
      console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
      // run for the first time
      answer_pexeso()

      window.sstop_slider.min = 50;

      // loop
      window.sstop_timer.start(function(){
        answer_pexeso()
      }, 1500);
    } else if (window.location.href.includes("/otazky")) {
      console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
      // run for the first time
      answer_otazky()
      // loop
      window.sstop_timer.start(function(){
        answer_otazky()
      }, 1500);
    } else if (window.location.href.includes("/rozrazovacka")) {
      console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
      // run for the first time
      answer_rozrazovacka()
      // loop
      try {
        window.sstop_timer.start(function(){
          answer_rozrazovacka()
        }, 1500);
      } catch (error) {}
    } else if (window.location.href.includes("/roboti")) {
      console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
      // run for the first time
      answer_roboti()
      // loop
      window.sstop_timer.start(function(){
        answer_roboti()
      }, 1500);
    } else if (window.location.href.includes("/mluvene-diktaty")) {
      console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
      // run for the first time
      answer_mluvene_diktaty()
      // loop
      window.sstop_timer.start(function(){
        answer_mluvene_diktaty()
      }, 1500);
    } else if (window.location.href.includes("/krok-po-kroku") || window.location.href.includes("/chat") || window.location.href.includes("/odvozovani")) {
      console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
      // run for the first time
      answer_krok_po_kroku()
      // loop
      window.sstop_timer.start(function(){
        answer_krok_po_kroku()
      }, 1500);
    } else if (window.location.href.includes("/rozbory") || window.location.href.includes("/tvorba_slov")) {
      console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
      // run for the first time
      answer_rozbory()
      // loop
      window.sstop_timer.start(function(){
        answer_rozbory()
      }, 1500);
    } else if (window.location.href.includes("/presouvani")) {
      console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
      // run for the first time
      answer_presouvani()
      // loop
      window.sstop_timer.start(function(){
        answer_presouvani()
      }, 1500);
    } else if (window.location.href.includes("/psani-carek") || window.location.href.includes("/carky") || window.location.href.includes("/carek")) {
      console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
      // run for the first time
      answer_carky()
      // loop
      window.sstop_timer.start(function(){
        answer_carky()
      }, 1500);
    } else {
      window.sstop_rm()
      sstop_alert("This exercise is not supported!")
      window.sstop_btn()
    }
  } else {
    window.sstop_rm()
    sstop_alert("This website is not supported!")
    window.sstop_btn()
  }

} else {
  console.log("No jQuery installed on this website!")
}


```
<!-- END [code:js] source/main.js -->

</details>


# Examples
### Videos
<details>
  <summary><strong>Click to see the video</strong></summary>
	
### ⚠️ obsolete + inaccurate ⚠️
https://user-images.githubusercontent.com/60501493/173131436-96fed050-b999-46ea-89e3-83ed39955d31.mp4

</details>

### Screenshots
<img width="700wv" src="https://user-images.githubusercontent.com/60501493/175824401-e20804e2-0132-472e-bef2-fe1b4ffbfd86.png"></img>

# Contributing
* You can create a pull request to merge your fork of this project
* The file that contains the source code is [source/main.js](https://github.com/MP3Martin/umimeto-solver/blob/main/source/main.js) (other files are auto updated)

<br><br>

Thanks for **⭐** this repository. *❤️*
