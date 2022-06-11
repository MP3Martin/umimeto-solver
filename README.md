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
function range(t,n,o){null==n&&(n=t||0,t=0),o||(o=n<t?-1:1);for(var e=Math.max(Math.ceil((n-t)/o),0),i=Array(e),r=0;r<e;r++,t+=o)i[r]=t;return i}function answer_twoOp(){var t=-1;try{var n=questions.find((t=>t.id==window.location.pathname.split("/")[2]));for(i of range(parseInt(n.options.length)))1===n.options[i].correct&&(t=i);console.log("Correct answer: "+parseInt(t+1)),document.getElementById("option"+t).click()}catch(t){}}function answer_twoOp_zavody(){var t=-1;try{"1"===document.getElementById("option0").attributes.correct.value?t=0:"1"===document.getElementById("option1").attributes.correct.value&&(t=1),console.log("Correct answer: "+parseInt(t+1)),document.getElementById("option"+t).click()}catch(t){}}if(window.timer={running:!1,iv:5e3,timeout:!1,cb:function(){},start:function(t,n){var o=this;clearInterval(this.timeout),this.running=!0,t&&(this.cb=t),n&&(this.iv=n),this.timeout=setTimeout((function(){o.execute(o)}),this.iv)},execute:function(t){if(!t.running)return!1;t.cb(),t.start()},stop:function(){this.running=!1},set_interval:function(t){clearInterval(this.timeout),this.start(!1,t)}},window.sstop_alert=function(t){console.log("[umimeto-solver]: "+t),alert("[umimeto-solver]\n\n"+t)},document.body.innerHTML+="<div id='sstop' style='position:absolute; top:0; right:0; margin:5px; margin-right: 25px; '></div>",document.body.innerHTML+='\n<style id="sstop_style">\n#sstop_button {\n  color: #ffffff;\n  background-color: #cc0000;\n  font-size: 19px;\n  border-radius: 12px;\n  padding: 10px 15px;\n  cursor: pointer\n}\n\n#sstop_button:hover {\n  color: #000000;\n  background-color: #ef2929;\n}\n    \n#sstop_slider {\n    -webkit-transform: rotate(180deg);\n    -moz-transform: rotate(180deg);\n    -o-transform: rotate(180deg);\n    -ms-transform: rotate(180deg);\n    transform: rotate(180deg);\n\n    -moz-transform: scaleX(-1);\n    -o-transform: scaleX(-1);\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n    filter: FlipH;\n    -ms-filter: "FlipH";\n}\n    \n/* setup tooltips */\n  .tooltip {\n    position: relative;\n  }\n  .tooltip:before,\n  .tooltip:after {\n    display: block;\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n  }\n  .tooltip:after {\n  \tborder-right: 6px solid transparent;\n  \tborder-bottom: 6px solid rgba(0,0,0,.75); \n    border-left: 6px solid transparent;\n    content: \'\';\n    height: 0;\n      top: 20px;\n      left: 20px;\n    width: 0;\n  }\n  .tooltip:before {\n    background: rgba(0,0,0,.75);\n    border-radius: 2px;\n    color: #fff;\n    content: attr(data-title);\n    font-size: 14px;\n    padding: 6px 10px;\n      top: 26px;\n    white-space: nowrap;\n  }\n\n  /* the animations */\n  /* fade */\n  .tooltip.fade:after,\n  .tooltip.fade:before {\n    transform: translate3d(0,-10px,0);\n    transition: all .15s ease-in-out;\n  }\n  .tooltip.fade:hover:after,\n  .tooltip.fade:hover:before {\n    opacity: 1;\n    transform: translate3d(0,0,0);\n  }\n\n  /* expand */\n  .tooltip.expand:before {\n    transform: scale3d(.2,.2,1);\n    transition: all .2s ease-in-out;\n  }\n  .tooltip.expand:after {\n    transform: translate3d(0,6px,0);\n    transition: all .1s ease-in-out;\n  }\n  .tooltip.expand:hover:before,\n  .tooltip.expand:hover:after {\n    opacity: 1;\n    transform: scale3d(1,1,1);\n  }\n  .tooltip.expand:hover:after {\n    transition: all .2s .1s ease-in-out;\n  }\n\n  /* swing */\n  .tooltip.swing:before,\n  .tooltip.swing:after {\n    transform: translate3d(0,30px,0) rotate3d(0,0,1,60deg);\n    transform-origin: 0 0;\n    transition: transform .15s ease-in-out, opacity .2s;\n  }\n  .tooltip.swing:after {\n    transform: translate3d(0,60px,0);\n    transition: transform .15s ease-in-out, opacity .2s;\n  }\n  .tooltip.swing:hover:before,\n  .tooltip.swing:hover:after {\n    opacity: 1;\n    transform: translate3d(0,0,0) rotate3d(1,1,1,0deg);\n  }\n</style>\n',stop_div=document.getElementById("sstop"),stop_div.innerHTML="",stop_div.innerHTML+="<button type='button' style='position: relative;' id='sstop_button' onclick='window.sstop_btn()'>STOP<br>ANSWERING</button>",stop_div.innerHTML+="<br>",stop_div.innerHTML+='<div style="position: absolute;" id="sstop_slider_div" class="tooltip fade" data-title="Answering speed"></div>',document.getElementById("sstop_slider_div").innerHTML+='<input onchange="window.timer.set_interval(this.value);" id="sstop_slider" type="range" min="300" max="5000" value="1500" style="position: absolute;">',window.sstop=function(){window.timer.stop()},window.sstop_btn=function(){document.getElementById("sstop").remove(),document.getElementById("sstop_style").remove(),sstop()},window.location.hostname.includes("www.umime")){let t=window.location.pathname.split("/")[1];t.includes("doplnovacka")||t.includes("rozhodovacka")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_twoOp(),window.timer.start((function(){answer_twoOp()}),1500)):window.location.href.includes("?p=zavody")||window.location.href.includes("?p=tymovka")?(console.log("\n\nSource code: https://github.com/MP3Martin/umimeto-solver"),answer_twoOp_zavody(),window.timer.start((function(){answer_twoOp_zavody()}),1500)):(window.sstop_btn(),sstop_alert("This exercise is not supported!"))}else window.sstop_btn(),sstop_alert("This website is not supported!");

```
<!-- END [code:js] source/main.min.js -->

*Tip: to run the code faster, type `javascript:` in the adress bar and paste the code after and press enter. **This faster way only works in Chrome! This method can be used to run the code on the phone.***

<br>

### Supported exercise types
* rozhodovačka
* doplňovačka
* závody
* týmovka

<br>

<details>
  <summary><strong>Uncompressed code</strong></summary>
  
  # Uncompressed code:

  <!-- START [code:js] source/main.js -->
  
  <!-- END [code:js] source/main.js -->

</details>

## Example
<details>
  <summary><strong>Click to see the video</strong></summary>
	
https://user-images.githubusercontent.com/60501493/173131436-96fed050-b999-46ea-89e3-83ed39955d31.mp4

</details>


Thanks *❤️* for **⭐** this repository.
