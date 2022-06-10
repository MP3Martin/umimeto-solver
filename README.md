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
  document.body.innerHTML += "<div id='sstop' style='position:absolute; top:0; right:0; margin:5px; margin-right: 8px;'></div>"
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
  </style>
  `
  stop_div = document.getElementById("sstop")
  stop_div.innerHTML += "<button type='button' id='sstop_button' onclick='window.sstop_btn()'>STOP<br>ANSWERING</button>"
  
  window.sstop = function() {
     clearInterval(window.intervalId) 
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
  window.intervalId = window.setInterval(function(){
     answer()
  }, 1500);
  ```

</details>
