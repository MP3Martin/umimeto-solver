# umimecesky-solver
╰ Javascript code to solve https://umimecesky.cz for you <br>

**Initial code from https://github.com/MiftikCZ/umimecesky-solver**
<br> <br>

**⚠Not finished⚠**

# Code:
*(paste it into your browser console (`ctrl` + `shift` + `c` and select `console` tab))*
```js
function range(t,n,o){null==n&&(n=t||0,t=0),o||(o=n<t?-1:1);for(var e=Math.max(Math.ceil((n-t)/o),0),r=Array(e),s=0;s<e;s++,t+=o)r[s]=t;return r}function answer(){var t=-1;try{var n=questions.find((t=>t.id==window.location.pathname.split("/")[2]));for(i of range(parseInt(n.options.length)))1===n.options[i].correct&&(t=i);console.log("Correct answer: "+parseInt(t+1)),document.getElementById("option"+t).click()}catch(t){}}document.body.innerHTML+="<div id='sstop' style='position:absolute; top:0; right:0; margin:5px; margin-right: 8px;'></div>",document.body.innerHTML+='\n  <style id="sstop_style">\n  #sstop_button {\n\t\tcolor: #ffffff;\n\t\tbackground-color: #cc0000;\n\t\tfont-size: 19px;\n\t\tborder-radius: 12px;\n\t\tpadding: 10px 15px;\n\t\tcursor: pointer\n\t}\n    \n\t#sstop_button:hover {\n\t\tcolor: #000000;\n\t\tbackground-color: #ef2929;\n\t}\n  </style>\n  ',stop_div=document.getElementById("sstop"),stop_div.innerHTML+="<button type='button' id='sstop_button' onclick='window.sstop_btn()'>STOP<br>ANSWERING</button>",window.sstop=function(){clearInterval(window.intervalId)},window.sstop_btn=function(){document.getElementById("sstop").remove(),document.getElementById("sstop_style").remove(),sstop()},answer(),window.intervalId=window.setInterval((function(){answer()}),1500);
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
	  
  .sstop_slider {
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
  stop_div.innerHTML += "<button type='button' style='position: relative;' id='sstop_button' onclick='window.sstop_btn()'>STOP<br>ANSWERING</button>"
  stop_div.innerHTML += "<br>"

  stop_div.innerHTML += '<div style="position: absolute;" id="sstop_slider_div" class="tooltip fade" data-title="Answering speed"></div>'
  document.getElementById("sstop_slider_div").innerHTML += '<input onchange="console.log(this.value)" type="range" min="100" max="20000" value="1500" style="position: absolute;">'
  
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

  // run for the first time
  answer()

  // loop
  window.timer.start(function(){
     answer()
  }, 1500);
  ```

</details>
