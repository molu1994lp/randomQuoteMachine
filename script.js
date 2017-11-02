// tablica w ktorej bede trzymac moje cytaty
var arr=[["I love you the more in that I believe you had liked me for my own sake and for nothing else.","-John Keats"],
["You cannot shake hands with a clenched fist.","-Indira Gandhi"],
["Always remember that you are absolutely unique. Just like everyone else.","-Margaret Mead"],
["We love life, not because we are used to living but because we are used to loving.","-Friedrich Nietzsche"],
["The future belongs to those who believe in the beauty of their dreams.","-Eleanor Roosevelt"],
["Believe in your infinite potential. Your only limitations are those you set upon yourself.","-Roy T. Bennett"],
["The love of heaven makes one heavenly.","-William Shakespeare"]]
var lastRandom = 1;
var colors = ["#2445a8","#9900cc","#00cc99","#790606","#f99806","#330066","#e6e619"];

button.onclick = function change(){
  var random = getRandomArgs(0,6);
  quote.innerHTML = arr[random][0];
  sign.innerHTML = arr[random][1];
  lastRandom = random;
}

$(document).ready(function(){
    $("button").click(function(){
        $(".content").css("background-color",colors[lastRandom]);
    });
});

function getRandomArgs(min, max) {

  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  while(random === lastRandom){
    random = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return random;
}
var link = "https://twitter.com/intent/tweet?text=" + arr[lastRandom];
function tweetQuote(){
  window.open(link);
}
