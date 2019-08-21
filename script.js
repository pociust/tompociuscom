function randomFact(){
  var tomFactArray = ['Tom was born 09/23/1988', 'Tom has a twin brother named Mike', 'Tom has a doctorate in Physical Therapy', 'Tom has a dog named Evey'];
  var ri = Math.floor(Math.random() * tomFactArray.length);
  document.getElementById("factsButton").innerHTML = (tomFactArray[ri]);
}  
