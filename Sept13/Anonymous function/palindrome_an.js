
var drome = function(words){

 words = ['foo', 'madam', 'pineapple', 'roar', 'pineenip'];

var arr = [];
var str = words.slice(0);
var pal = str.toString().split("").reverse().join("").split(",");



for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
      arr.push(words[i])
    }
  }
}


console.log(arr);
}
drome();