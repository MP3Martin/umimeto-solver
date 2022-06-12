[![CodeFactor](https://user-images.githubusercontent.com/60501493/173180235-809fa83a-5bcf-4707-a079-dde00ca01349.svg)](#/)
[<img src="https://img.shields.io/github/license/MP3Martin/umimeto-solver">](#/)
[<img src="https://img.shields.io/github/stars/MP3Martin/umimeto-solver">](#/)
[<img src="https://img.shields.io/github/forks/MP3Martin/umimeto-solver">](#/)
[<img src="https://img.shields.io/github/issues/MP3Martin/umimeto-solver">](#/)

<!-- ![codefactor_a+](https://user-images.githubusercontent.com/60501493/173180235-809fa83a-5bcf-4707-a079-dde00ca01349.svg) -->

# umimeto-solver
╰ Javascript code to solve https://umimeto.org for you <br>

**Initial idea from https://github.com/MiftikCZ/umimecesky-solver**
<br> <br>

**⚠For educational purposes only!⚠**
<br> <br>
🇨🇿 Click [**here**](https://github-com.translate.goog/MP3Martin/umimeto-solver?_x_tr_sl=en&_x_tr_tl=cs&_x_tr_hl=cs&_x_tr_pto=wapp) to see this webpage in Czech language 🇨🇿

## Code:
*(paste it into your browser console (`ctrl` + `shift` + `c` and select `console` tab) and press `enter`)*

<!-- START [code:js] source/main.min.js -->
```js
function range(t,n,e){null==n&&(n=t||0,t=0),e||(e=n<t?-1:1);for(var o=Math.max(Math.ceil((n-t)/e),0),i=Array(o),r=0;r<o;r++,t+=e)i[r]=t;return i}function resized(){document.getElementById("sstop_slider").style.width=parseInt(.95*document.getElementById("sstop_button").offsetWidth)+"px"}function answer_twoOp(){var t=-1;try{var n=questions.find((t=>t.id==window.location.pathname.split("/")[2]));for(i of range(parseInt(n.options.length)))1===n.options[i].correct&&(t=i);console.log("Correct answer: "+parseInt(t+1)),document.getElementById("option"+t).click()}catch(t){}}function answer_twoOp_zavody(){var t=-1;try{"1"===document.getElementById("option0").attributes.correct.value?t=0:"1"===document.getElementById("option1").attributes.correct.value&&(t=1),console.log("Correct answer: "+parseInt(t+1)),document.getElementById("option"+t).click()}catch(t){}}function answer_vpisovacka(){var t="";try{t=questions.find((t=>t.id==window.location.pathname.split("/")[2])).question[1][1].answer[0],console.log("Correct answer: "+t),document.getElementById("answer0").value=t,document.getElementById("evaluate").click(),nextQuestion()}catch(t){}}function answer_hadanky(){var t="";try{t=questions.find((t=>t.id==window.location.pathname.split("/")[2])).item.question[1][1].answer[0],console.log("Correct answer: "+t),document.getElementById("answer0").value=t,document.getElementById("evaluate").click(),nextQuestion()}catch(t){}}function answer_diktat(){var t;try{for(i of range($("[answered]").length))if("0"===$("[answered]")[i].attributes.answered.value){t=$("[answered]")[i].childNodes[1];break}"1"===t.childNodes[0].attributes.correct.value?clickVariant($(t.childNodes[0])):"1"===t.childNodes[1].attributes.correct.value&&clickVariant($(t.childNodes[1])),1===window.finished&&nextDictate()}catch(t){}}function answer_ukolovka(){var t="";try{var n=questions.find((t=>t.id==window.location.pathname.split("/")[2]));t=n.item.question[n.item.question.length-1][1].answer[0],console.log("Correct answer: "+t),document.getElementById("answer0").value=t,document.getElementById("evaluate").click(),nextQuestion()}catch(t){}}function answer_pexeso(){try{evaluate(1),nextSet()}catch(t){}}function answer_otazky(){try{for(i of["variantjedna","variantdva","varianttri","variantctyri"])if("1"===document.getElementById(i).attributes.correct.value){i;break}console.log("Correct answer: "+document.getElementById(i).innerText),clickVariant($(document.getElementById(i))),nextQuestion()}catch(t){}}if(window.timer&&window.sstop_btn(),window.timer={running:!1,iv:5e3,timeout:!1,cb:function(){},start:function(t,n){var e=this;clearInterval(this.timeout),this.running=!0,t&&(this.cb=t),n&&(this.iv=n),this.timeout=setTimeout((function(){e.execute(e)}),this.iv)},execute:function(t){if(!t.running)return!1;t.cb(),t.start()},stop:function(){this.running=!1},set_interval:function(t){clearInterval(this.timeout),this.start(!1,t)}},window.sstop_alert=function(t){console.log("[umimeto-solver]: "+t),alert("[umimeto-solver]\n\n"+t)},document.body.innerHTML+="<div id='sstop' style='position:fixed; top:0; right:0; margin:5px;'></div>",document.body.innerHTML+='\n<style id="sstop_style">\n#sstop_button {\n  color: #ffffff;\n  background-color: #cc0000;\n  font-size: 19px;\n  border-radius: 12px;\n  padding: 10px 15px;\n  cursor: pointer\n}\n\n#sstop_button:hover {\n  color: #000000;\n  background-color: #ef2929;\n}\n    \n#sstop_slider {\n    -webkit-transform: rotate(180deg);\n    -moz-transform: rotate(180deg);\n    -o-transform: rotate(180deg);\n    -ms-transform: rotate(180deg);\n    transform: rotate(180deg);\n\n    -moz-transform: scaleX(-1);\n    -o-transform: scaleX(-1);\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n    filter: FlipH;\n    -ms-filter: "FlipH";\n}\n    \n/* setup tooltips */\n  .tooltip {\n    position: relative;\n  }\n  .tooltip:before,\n  .tooltip:after {\n    display: block;\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n  }\n  .tooltip:after {\n  \tborder-right: 6px solid transparent;\n  \tborder-bottom: 6px solid rgba(0,0,0,.75); \n    border-left: 6px solid transparent;\n    content: \'\';\n    height: 0;\n      top: 20px;\n      left: 20px;\n    width: 0;\n  }\n  .tooltip:before {\n    background: rgba(0,0,0,.75);\n    border-radius: 2px;\n    color: #fff;\n    content: attr(data-title);\n    font-size: 14px;\n    padding: 6px 10px;\n      top: 26px;\n    white-space: nowrap;\n  }\n\n  /* the animations */\n  /* fade */\n  .tooltip.fade:after,\n  .tooltip.fade:before {\n    transform: translate3d(0,-10px,0);\n    transition: all .15s ease-in-out;\n  }\n  .tooltip.fade:hover:after,\n  .tooltip.fade:hover:before {\n    opacity: 1;\n    transform: translate3d(0,0,0);\n  }\n\n  /* expand */\n  .tooltip.expand:before {\n    transform: scale3d(.2,.2,1);\n    transition: all .2s ease-in-out;\n  }\n  .tooltip.expand:after {\n    transform: translate3d(0,6px,0);\n    transition: all .1s ease-in-out;\n  }\n  .tooltip.expand:hover:before,\n  .tooltip.expand:hover:after {\n    opacity: 1;\n    transform: scale3d(1,1,1);\n  }\n  .tooltip.expand:hover:after {\n    transition: all .2s .1s ease-in-out;\n  }\n\n  /* swing */\n  .tooltip.swing:before,\n  .tooltip.swing:after {\n    transform: translate3d(0,30px,0) rotate3d(0,0,1,60deg);\n    transform-origin: 0 0;\n    transition: transform .15s ease-in-out, opacity .2s;\n  }\n  .tooltip.swing:after {\n    transform: translate3d(0,60px,0);\n    transition: transform .15s ease-in-out, opacity .2s;\n  }\n  .tooltip.swing:hover:before,\n  .tooltip.swing:hover:after {\n    opacity: 1;\n    transform: translate3d(0,0,0) rotate3d(1,1,1,0deg);\n  }\n</style>\n',stop_div=document.getElementById("sstop"),stop_div.innerHTML="",stop_div.innerHTML+="<button type='button' style='position: relative;' id='sstop_button' onclick='window.sstop_btn()'>STOP<br>ANSWERING</button>",stop_div.innerHTML+="<br>",stop_div.innerHTML+='<div style="position: absolute;" id="sstop_slider_div" class="tooltip fade" data-title="Answering speed"></div>',document.getElementById("sstop_slider_div").innerHTML+='<input onchange="window.timer.set_interval(this.value);" id="sstop_slider" type="range" min="300" max="5000" value="1500" style="position: absolute;">',window.sstop=function(){window.timer.stop()},window.sstop_btn=function(){document.getElementById("sstop").remove(),document.getElementById("sstop_style").remove(),sstop(),window.timer=null,window.sstop_alert=null,window.sstop_btn=null,window.sstop=null},$(window).resize((function(){resized()})),resized(),window.location.hostname.includes("www.umime")){let t=window.location.pathname.split("/")[1];t.includes("doplnovacka")||t.includes("rozhodovacka")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_twoOp(),window.timer.start((function(){answer_twoOp()}),1500)):window.location.href.includes("?p=zavody")||window.location.href.includes("?p=tymovka")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_twoOp_zavody(),window.timer.start((function(){answer_twoOp_zavody()}),1500)):window.location.href.includes("/vpisovacka")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_vpisovacka(),window.timer.start((function(){answer_vpisovacka()}),1500)):window.location.href.includes("/hadanky")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_hadanky(),window.timer.start((function(){answer_hadanky()}),1500)):window.location.href.includes("/diktat")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_diktat(),document.getElementById("sstop_slider").attributes.min.value="50",window.timer.start((function(){answer_diktat()}),1500)):window.location.href.includes("/ukolovka")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_ukolovka(),window.timer.start((function(){answer_ukolovka()}),1500)):window.location.href.includes("/pexeso")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_pexeso(),document.getElementById("sstop_slider").attributes.min.value="50",window.timer.start((function(){answer_pexeso()}),1500)):window.location.href.includes("/otazky")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_otazky(),window.timer.start((function(){answer_otazky()}),1500)):(window.sstop_btn(),sstop_alert("This exercise is not supported!"))}else window.sstop_btn(),sstop_alert("This website is not supported!");

```
<!-- END [code:js] source/main.min.js -->

*Tip: to run the code faster, type `javascript:` in the adress bar and paste the code after and press enter. **This faster way only works in Chrome! This method can be used to run the code on the phone.***

<br>

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

<br>

<details>
  <summary><strong>Uncompressed code</strong></summary>
  
  # Uncompressed code:

  <!-- START [code:js] source/main.js -->
```js
// avoid multiple solvers
if (window.timer) {
  window.sstop_btn();
}

window.timer = {
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

// create stop button
document.body.innerHTML += "<div id='sstop' style='position:fixed; top:0; right:0; margin:5px;'></div>"
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
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);

    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
}
    
/* setup tooltips */
  .tooltip {
    position: relative;
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
  	border-bottom: 6px solid rgba(0,0,0,.75); 
    border-left: 6px solid transparent;
    content: '';
    height: 0;
      top: 20px;
      left: 20px;
    width: 0;
  }
  .tooltip:before {
    background: rgba(0,0,0,.75);
    border-radius: 2px;
    color: #fff;
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
</style>
`
stop_div = document.getElementById("sstop")
stop_div.innerHTML = ""
stop_div.innerHTML += "<button type='button' style='position: relative;' id='sstop_button' onclick='window.sstop_btn()'>STOP<br>ANSWERING</button>"
stop_div.innerHTML += "<br>"

stop_div.innerHTML += '<div style="position: absolute;" id="sstop_slider_div" class="tooltip fade" data-title="Answering speed"></div>'
document.getElementById("sstop_slider_div").innerHTML += '<input onchange="window.timer.set_interval(this.value);" id="sstop_slider" type="range" min="300" max="5000" value="1500" style="position: absolute;">'

window.sstop = function() {
   window.timer.stop();

}

window.sstop_btn = function() {
  //remove elements
  document.getElementById("sstop").remove();
  document.getElementById("sstop_style").remove();

  //stop timer
  sstop();

  //remove variables
  window.timer = null;
  window.sstop_alert = null;
  window.sstop_btn = null;
  window.sstop = null;
}

$(window).resize(function () {
  resized()
});

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
  var el
   try {
    for (i of range($("[answered]").length)) {
      if ($("[answered]")[i].attributes.answered.value === "0") {
        el = $("[answered]")[i].childNodes[1]
        break
      }
    }

    if (el.childNodes[0].attributes.correct.value === "1") {
      clickVariant($(el.childNodes[0]));
    } else if (el.childNodes[1].attributes.correct.value === "1") {
      clickVariant($(el.childNodes[1]));
    }
    
    //

    if (window.finished === 1) {
      nextDictate();
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

//check if the website is supported
if (window.location.hostname.includes("www.umime")) {
  let ulr_ex_type = window.location.pathname.split("/")[1]
  if (ulr_ex_type.includes("doplnovacka") || ulr_ex_type.includes("rozhodovacka")) {
    console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
    // run for the first time
    answer_twoOp()
    // loop
    window.timer.start(function(){
      answer_twoOp()
    }, 1500);
  } else if (window.location.href.includes("?p=zavody") || window.location.href.includes("?p=tymovka")) {
    console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
    // run for the first time
    answer_twoOp_zavody()
    // loop
    window.timer.start(function(){
      answer_twoOp_zavody()
    }, 1500);
  } else if (window.location.href.includes("/vpisovacka")) {
    console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
    // run for the first time
    answer_vpisovacka()
    // loop
    window.timer.start(function(){
      answer_vpisovacka()
    }, 1500);
  } else if (window.location.href.includes("/hadanky")) {
    console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
    // run for the first time
    answer_hadanky()
    // loop
    window.timer.start(function(){
      answer_hadanky()
    }, 1500);
  } else if (window.location.href.includes("/diktat")) {
    console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
    // run for the first time
    answer_diktat()

    document.getElementById("sstop_slider").attributes.min.value = "50" 

    // loop
    window.timer.start(function(){
      answer_diktat()
    }, 1500);
  } else if (window.location.href.includes("/ukolovka")) {
    console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
    // run for the first time
    answer_ukolovka()
    // loop
    window.timer.start(function(){
      answer_ukolovka()
    }, 1500);
  } else if (window.location.href.includes("/pexeso")) {
    console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
    // run for the first time
    answer_pexeso()

    document.getElementById("sstop_slider").attributes.min.value = "50" 

    // loop
    window.timer.start(function(){
      answer_pexeso()
    }, 1500);
  } else if (window.location.href.includes("/otazky")) {
    console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver")
    // run for the first time
    answer_otazky()
    // loop
    window.timer.start(function(){
      answer_otazky()
    }, 1500);
  } else {
    window.sstop_btn()
    sstop_alert("This exercise is not supported!")
  }
} else {
  window.sstop_btn()
  sstop_alert("This website is not supported!")
}

```
<!-- END [code:js] source/main.js -->

</details>


## Example
<details>
  <summary><strong>Click to see the video</strong></summary>
	
https://user-images.githubusercontent.com/60501493/173131436-96fed050-b999-46ea-89e3-83ed39955d31.mp4

</details>


Thanks *❤️* for **⭐** this repository.
