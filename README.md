# umimecesky-solver
╰ Javascript code to solve https://umimecesky.cz for you <br>

**Initial code from https://github.com/MiftikCZ/umimecesky-solver**
<br> <br>

**⚠For educational purposes only!⚠**
<br> <br>
🇨🇿 Click [**here**](https://github-com.translate.goog/MP3Martin/umimecesky-solver?_x_tr_sl=en&_x_tr_tl=cs&_x_tr_hl=cs&_x_tr_pto=wapp) to see this webpage in Czech 🇨🇿

# Code:
*(paste it into your browser console (`ctrl` + `shift` + `c` and select `console` tab))*
```js
function range(t,n,o){null==n&&(n=t||0,t=0),o||(o=n<t?-1:1);for(var e=Math.max(Math.ceil((n-t)/o),0),i=Array(e),r=0;r<e;r++,t+=o)i[r]=t;return i}function answer(){var t=-1;try{var n=questions.find((t=>t.id==window.location.pathname.split("/")[2]));for(i of range(parseInt(n.options.length)))1===n.options[i].correct&&(t=i);console.log("Correct answer: "+parseInt(t+1)),document.getElementById("option"+t).click()}catch(t){}}window.timer={running:!1,iv:5e3,timeout:!1,cb:function(){},start:function(t,n){var o=this;clearInterval(this.timeout),this.running=!0,t&&(this.cb=t),n&&(this.iv=n),this.timeout=setTimeout((function(){o.execute(o)}),this.iv)},execute:function(t){if(!t.running)return!1;t.cb(),t.start()},stop:function(){this.running=!1},set_interval:function(t){clearInterval(this.timeout),this.start(!1,t)}},document.body.innerHTML+="<div id='sstop' style='position:absolute; top:0; right:0; margin:5px; margin-right: 25px; '></div>",document.body.innerHTML+='\n<style id="sstop_style">\n#sstop_button {\n  color: #ffffff;\n  background-color: #cc0000;\n  font-size: 19px;\n  border-radius: 12px;\n  padding: 10px 15px;\n  cursor: pointer\n}\n\n#sstop_button:hover {\n  color: #000000;\n  background-color: #ef2929;\n}\n    \n#sstop_slider {\n    -webkit-transform: rotate(180deg);\n    -moz-transform: rotate(180deg);\n    -o-transform: rotate(180deg);\n    -ms-transform: rotate(180deg);\n    transform: rotate(180deg);\n\n    -moz-transform: scaleX(-1);\n    -o-transform: scaleX(-1);\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n    filter: FlipH;\n    -ms-filter: "FlipH";\n}\n    \n/* setup tooltips */\n  .tooltip {\n    position: relative;\n  }\n  .tooltip:before,\n  .tooltip:after {\n    display: block;\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n  }\n  .tooltip:after {\n  \tborder-right: 6px solid transparent;\n  \tborder-bottom: 6px solid rgba(0,0,0,.75); \n    border-left: 6px solid transparent;\n    content: \'\';\n    height: 0;\n      top: 20px;\n      left: 20px;\n    width: 0;\n  }\n  .tooltip:before {\n    background: rgba(0,0,0,.75);\n    border-radius: 2px;\n    color: #fff;\n    content: attr(data-title);\n    font-size: 14px;\n    padding: 6px 10px;\n      top: 26px;\n    white-space: nowrap;\n  }\n\n  /* the animations */\n  /* fade */\n  .tooltip.fade:after,\n  .tooltip.fade:before {\n    transform: translate3d(0,-10px,0);\n    transition: all .15s ease-in-out;\n  }\n  .tooltip.fade:hover:after,\n  .tooltip.fade:hover:before {\n    opacity: 1;\n    transform: translate3d(0,0,0);\n  }\n\n  /* expand */\n  .tooltip.expand:before {\n    transform: scale3d(.2,.2,1);\n    transition: all .2s ease-in-out;\n  }\n  .tooltip.expand:after {\n    transform: translate3d(0,6px,0);\n    transition: all .1s ease-in-out;\n  }\n  .tooltip.expand:hover:before,\n  .tooltip.expand:hover:after {\n    opacity: 1;\n    transform: scale3d(1,1,1);\n  }\n  .tooltip.expand:hover:after {\n    transition: all .2s .1s ease-in-out;\n  }\n\n  /* swing */\n  .tooltip.swing:before,\n  .tooltip.swing:after {\n    transform: translate3d(0,30px,0) rotate3d(0,0,1,60deg);\n    transform-origin: 0 0;\n    transition: transform .15s ease-in-out, opacity .2s;\n  }\n  .tooltip.swing:after {\n    transform: translate3d(0,60px,0);\n    transition: transform .15s ease-in-out, opacity .2s;\n  }\n  .tooltip.swing:hover:before,\n  .tooltip.swing:hover:after {\n    opacity: 1;\n    transform: translate3d(0,0,0) rotate3d(1,1,1,0deg);\n  }\n</style>\n',stop_div=document.getElementById("sstop"),stop_div.innerHTML="",stop_div.innerHTML+="<button type='button' style='position: relative;' id='sstop_button' onclick='window.sstop_btn()'>STOP<br>ANSWERING</button>",stop_div.innerHTML+="<br>",stop_div.innerHTML+='<div style="position: absolute;" id="sstop_slider_div" class="tooltip fade" data-title="Answering speed"></div>',document.getElementById("sstop_slider_div").innerHTML+='<input onchange="window.timer.set_interval(this.value);" id="sstop_slider" type="range" min="300" max="10000" value="1500" style="position: absolute;">',window.sstop=function(){window.timer.stop()},window.sstop_btn=function(){document.getElementById("sstop").remove(),document.getElementById("sstop_style").remove(),sstop()},window.location.hostname.includes("www.umime")?(console.log("Source code: https://github.com/MP3Martin/umimecesky-solver"),answer(),window.timer.start((function(){answer()}),1500)):(window.sstop_btn(),console.log("\n\nThis website is not supported!"));
```
<br>
<details>
  <summary><strong>Uncompressed code</strong></summary>
  
  # Uncompressed code:

  ```js
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
  
  // create stop button
  document.body.innerHTML += "<div id='sstop' style='position:absolute; top:0; right:0; margin:5px; margin-right: 25px; '></div>"
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
  document.getElementById("sstop_slider_div").innerHTML += '<input onchange="window.timer.set_interval(this.value);" id="sstop_slider" type="range" min="300" max="10000" value="1500" style="position: absolute;">'
  
  window.sstop = function() {
     window.timer.stop();
  }
  
  window.sstop_btn = function() {
    document.getElementById("sstop").remove()
     document.getElementById("sstop_style").remove()
     sstop()
  }
  
  function answer() {
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

  //check if the website is supported
  if (window.location.hostname.includes("www.umime")) {
    console.log("Source code: https://github.com/MP3Martin/umimecesky-solver")

    // run for the first time
    answer()

    // loop
    window.timer.start(function(){
      answer()
    }, 1500);
  } else {
    window.sstop_btn()
    console.log("\n\nThis website is not supported!")
  }
  
  ```

</details>

# Example
<details>
  <summary><strong>Click to expand!</strong></summary>
	
https://user-images.githubusercontent.com/60501493/173131436-96fed050-b999-46ea-89e3-83ed39955d31.mp4

</details>


Thanks *❤️* for **⭐** this repository.
