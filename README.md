# umimecesky-solver
╰ Javascript code to solve https://umimecesky.cz for you <br>

**Initial code from https://github.com/MiftikCZ/umimecesky-solver**
<br> <br>

**⚠Not finished⚠**

# Code:
```js
function e(a,b,c){if(b==null){b=a||0;a=0}if(!c){c=b<a?-1:1}var d=Math.max(Math.ceil((b-a)/c),0);var e=Array(d);for(var f=0;f<d;f++,a+=c){e[f]=a}return e}function answer(){var a=-1 try{var b=questions.find(q=>q.id==window.location.pathname.split("/")[2])for(i of range(parseInt(b.options.length))){if(b.options[i].correct===1)a=i}console.log("Correct answer: "+parseInt(a+1))}catch(error){}}answer()
```

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

function answer() {
  var correct_answer = -1
   try {
      var answers = questions.find(q => q.id == window.location.pathname.split("/")[2])
      for (i of range(parseInt(answers.options.length))) {
         if (answers.options[i].correct === 1)
            correct_answer = i
      }
      console.log("Correct answer: "  + parseInt(correct_answer + 1))
   } catch (error) {}
}

answer()
```
