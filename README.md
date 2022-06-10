# umimecesky-solver
╰ Javascript code to solve https://umimecesky.cz for you <br>

**Initial code from https://github.com/MiftikCZ/umimecesky-solver**
<br> <br>

**⚠Not finished⚠**

# Code:
```js
function range(n,r,a){null==r&&(r=n||0,n=0),a||(a=r<n?-1:1);for(var o=Math.max(Math.ceil((r-n)/a),0),t=Array(o),e=0;e<o;e++,n+=a)t[e]=n;return t}function answer(){var n=-1;try{var r=questions.find((n=>n.id==window.location.pathname.split("/")[2]));for(i of range(parseInt(r.options.length)))1===r.options[i].correct&&(n=i);console.log("Correct answer: "+parseInt(n+1))}catch(n){}}answer();
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
