function randomFact(){
  var tomFactArray = ['Tom was born 09/23/1988', 'Tom has a twin brother named Mike', 'Tom has a doctorate in Physical Therapy', 'Tom has a dog named Evey'];
  var ri = Math.floor(Math.random() * tomFactArray.length);
  document.getElementById("factsButton").innerHTML = (tomFactArray[ri]);
}  

/*var iframe = document.getElementById("iframe");
var div = document.getElementById("sailing");
div.innerHTML = iframe.contentWindow.document.getElementById("").innerHTML;*/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}