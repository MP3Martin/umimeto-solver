if (window.$) {  
  // avoid multiple solvers
  if (window.sstop_timer) {
    window.sstop_btn();
  }

  document.body.innerHTML += '<script type="text/javascript" class="sstop-trash" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js"><\/script>'
  document.body.innerHTML += "<style class='sstop-trash'> @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap'); </style>"

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
              <li><div id="sstop_slider_div" class="tooltip fade" data-title="Answering speed"><input onmouseover="sstop_fs_info_text.show();" onmouseleave="sstop_fs_info_text.hide()" oninput="sstop_fs_info_text.set(&quot;'The answering delay is ' + sstop_slider.value() + ' ms'&quot;); if (!window.sstop_paused) {window.sstop_timer.set_interval(window.sstop_slider.value());}" id="sstop_slider" style="margin: 5px auto auto; display: block;" type="range" min="300" max="4000" value="-700"></div></li>
              <li><div><button class='tooltip fade' data-title='Toggle the solver state' type='button' style='z-index: 0 !important; position: relative; margin: 5px auto auto; display: block; height: 1.5rem;' id='sstop_pause_button' onclick='window.sstop_pause_btn(this)'><i class="fa fa-pause hv-black"></i></button></div></li>
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

    setTimeout(function () {
      var sstop_slider_scroll = document.getElementById("sstop_slider");
      sstop_slider_scroll.addEventListener("wheel", function(e){
        if (e.deltaY < 0){
          this.valueAsNumber += 100;
        }else{
          this.value -= 100;
        }
        e.preventDefault();
        e.stopPropagation();
        this.oninput()
      })

      sstop_slider_scroll.addEventListener("mousedown", function(event){
        if (event.button == 1 || event.buttons == 4) {
          this.value = -700 + window.sstop_slider.min;
        }
      })
    
      sstop_slider_scroll = null;
    }, 100)
    
    setTimeout(function () {
      $("#sstop_slider").attr("value", Number($("#sstop_slider").attr("value")) + window.sstop_slider.min);
    }, 100)

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
      var output = (Math.abs($("#sstop_slider").val())) + window.sstop_slider.min;
      return output;
    },

    "min" : 300
  }


  // $("#sstop_slider").attr("min", (($("#sstop_slider").attr("max") - window.sstop_slider.min) * -1));
  // $("#sstop_slider").attr("max", 0);

  // automatically update sstop_slider html values
  window.sstop_slider_interval = setInterval(function(){
    $("#sstop_slider").attr("min", (2000 - window.sstop_slider.min) * -1);
    $("#sstop_slider").attr("max", 0);
  }, 10);

  // create info text
  document.body.innerHTML += "<div id='sstop_info_text' style='position:fixed; font-size: 1.3rem; bottom:0; left:0; margin:5px; padding-right:4px; height: 1rem; opacity: 0.9;'></div>"
  document.getElementById("sstop_info_text").innerHTML += "<p> </p>"

  // prepare info text animation
  $("#sstop_info_text").css('transition', 'transform 300ms ease-out')
  $("#sstop_info_text").css('transform', 'scale(1)')
  // $("#sstop_info_text").css('left', Number(Number(document.getElementById("sstop_info_text").offsetWidth + 1) * -1) + 'px')

  window.sstop_info_text = {
    "show" : function() {
      // $("#sstop_info_text").css('transition', 'none')
      $("#sstop_info_text").css('transform', 'scale(1.5)')
      // $("#sstop_info_text").css('left', Number(Number(document.getElementById("sstop_info_text").offsetWidth + 1) * -1) + 'px')
      // $("#sstop_info_text").effect("highlight", {}, 1000);
      $("#sstop_info_text").fadeIn()
      setTimeout(function () {
        $("#sstop_info_text").css('transform', 'scale(1)')
      }, 10)
    },

    "hide" : function() {
      $("#sstop_info_text").fadeOut(200)
      setTimeout(function () {
        $("#sstop_info_text").hide()
      }, 200)
    },

    "set" : function(text) {
      document.getElementById("sstop_info_text").innerText = text;
      if (Math.floor(Math.random() * 9) == 5) {
        $("#sstop_info_text").effect( "shake", {times:1, distance:1, direction:"up"}, 100)
      }
      // if ($("#sstop_info_text").is(":hidden")) {
      //   window.sstop_info_text.show()
      // }
    },
  }

  $("#sstop_info_text").hide()

  window.sstop_pause_btn = function(el){
    if(window.sstop_paused) {
      window.sstop_paused = false;
      try {
        document.getElementById("sstop_slider").oninput()
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


  document.body.innerHTML += '<script id="sstop_vendor_prefixes_script" src="https://cdnjs.cloudflare.com/ajax/libs/css3finalize/4.0.1/jquery.css3finalize.min.js"></script>'


  // create fs info text
  document.body.innerHTML += "<div id='sstop_fs_info_text' style='pointer-events: none; background-color: rgba(0, 0, 0, 0.15); position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 9999999999;'></div>"
  document.getElementById("sstop_fs_info_text").innerHTML += "<h1 style='margin: 0; padding: 0; text-align: center; font-family: Share Tech Mono, monospace; position: fixed; top: 45%; left: 0; right: 0; margin-top: -7vh; font-size: calc((3vw + 3vh) * 0.7); color: rgba(166, 230, 212, 0.96); text-shadow: 0.03em 0 black, 0 0.03em black, -0.03em 0 black, 0 -0.03em black, -0.03em -0.03em black, -0.03em 0.03em black, 0.03em -0.03em black, 0.03em 0.03em black, 3px 3px 8px rgba(0,0,0,0.99), rgba(0, 0, 0, 0.99) 2px 2px 8px;'>Hello World</h1>"

  // -- prepare animation --
  // $($("#sstop_fs_info_text")[0].childNodes[0]).css('transition', 'transform 300ms ease-out')
  // $($("#sstop_fs_info_text")[0].childNodes[0]).css('transform', 'scale(1)')
  $($("#sstop_fs_info_text")[0].childNodes[0]).hide()

  window.sstop_fs_info_text = {
    "show" : function() {
      $($("#sstop_fs_info_text")[0].childNodes[0]).promise().done(function(){
        $($("#sstop_fs_info_text")[0].childNodes[0]).css("top", "45%")
        // $($("#sstop_fs_info_text")[0].childNodes[0]).css('transform', 'scale(1.5)')
        $($("#sstop_fs_info_text")[0].childNodes[0]).show()
        $($("#sstop_fs_info_text")[0].childNodes[0]).animate({
          top: "+=5%",
          opacity: 1,
        }, 300, function() { /* Animation complete. */ });

        setTimeout(function () {
          // $($("#sstop_fs_info_text")[0].childNodes[0]).css('transform', 'scale(1)')
        }, 10)

        $("#sstop_fs_info_text").fadeIn({duration:400,easing:"swing"})
      });
    },

    "hide" : function() {
      $($("#sstop_fs_info_text")[0].childNodes[0]).promise().done(function(){
        $($("#sstop_fs_info_text")[0].childNodes[0]).animate({
          top: "+=5%",
          opacity: 0,
          }, 300, function() {
            setTimeout(function () {
              $($("#sstop_fs_info_text")[0].childNodes[0]).css("top", "45%")
          }, 10) });

        $("#sstop_fs_info_text").fadeOut({duration:400,easing:"swing"})
      });
    },

    "set" : function(text) {
      sstop_fs_info_text.text = text;
    },

    "text" : "'Loading...'",
  }

  $("#sstop_fs_info_text").hide()

  window.sstop_fs_info_text_interval = setInterval(function(){
    $($("#sstop_fs_info_text")[0].childNodes[0])[0].innerText = eval(window.sstop_fs_info_text.text);
  }, 10);


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
    window.sstop_info_text = null;
    clearInterval(window.sstop_slider_interval);
    clearInterval(window.sstop_fs_info_text_interval)
    window.sstop_slider_interval = null;
    window.sstop_fs_info_text = null;
  }

  window.sstop_rm = function() {
    try {
      //remove elements
      document.getElementById("sstop").remove();
      document.getElementById("sstop_style").remove();
      document.getElementById("sstop_vendor_prefixes_script").remove();
      document.getElementsByClassName("nav-slide")[0].remove()
      document.getElementById("sstop_info_text").remove();
      document.getElementById("sstop_fs_info_text").remove();
      for (i in range(20)) {
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

