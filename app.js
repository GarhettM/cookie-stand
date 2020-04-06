var seattle = {
  location : 'Seattle' ,
  open : 6 ,
  minCust : 23 ,
  maxCust : 65 ,
  avgCookieSale : 6.3 ,
  picture: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Space_Needle_2011-07-04.jpg'



};
var seattleRandom = (seattle.minCust, seattle.maxCust);
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// console.log(getRandomInt(seattleRandom));

var tokyo = {
  location : 'Tokyo' ,
  minCust : 3 ,
  maxCust : 24 ,
  avgCookieSale : 1.2 ,
  picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNXMrcpm4bZhwYeh1LVPtd70vJPvbgeYrfgRbDrgMdrvgvSZqX&usqp=CAU'

};


seattle.render = function() {
  var targetUlEl = document.getElementById('store');
  var newLiEl = document.createElement('li');
  var storeCookies = 'Store ' + seattle.location + ' has ' + seattle.minCust + ' to ' + seattle.maxCust + ' customers\'s an hour with an average sales of ' + seattle.avgCookieSale + '.'
}

var h1Target = document.getElementById('pageTitle');
 
var newText = 'Welcome to DOM Manipulation!';
 
h1Target.textContent = newText;

for (var i = 6; i < 20; i++) {
  var orderedListEl = document.getElementById('randomNums');
  console.log(orderedListEl);

  var newListItemEl = document.createElement('li');
  newListItemEl.textContent = i;

  orderedListEl.appendChild(newListItemEl);
}



