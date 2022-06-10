# umimecesky-solver
╰ Javascript code to solve https://umimecesky.cz for you <br>

**Initial code from https://github.com/MiftikCZ/umimecesky-solver**
<br> <br>

**⚠Not finished⚠**

# Code:
```js
function range(start,stop,step){if(stop==null){stop=start||0;start=0}if(!step){step=stop<start?-1:1}var length=Math.max(Math.ceil((stop-start)/step),0);var range=Array(length);for(var idx=0;idx<length;idx++,start+=step){range[idx]=start}return range}

function answer() {
  var correct_answer = -1
   try {
      var answers = questions.find(q => q.id == window.location.pathname.split("/")[2])
      for (i of range(parseInt(answers.options.length))) {
         console.log(i)
         if (answers.options[i].correct === 1)
            correct_answer = i
      }
      console.log("Correct answer: "  + parseInt(correct_answer + 1))
   } catch (error) {}
}

answer()
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
         console.log(i)
         if (answers.options[i].correct === 1)
            correct_answer = i
      }
      console.log("Correct answer: "  + parseInt(correct_answer + 1))
   } catch (error) {}
}

answer()
```
