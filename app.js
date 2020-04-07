'use strict'

//Seattle Store Information

//Seattle Object Block

var seattle = {
  location : 'Seattle',
  minCust : 23,
  maxCust : 65,
  avgCookieSale : 6.3,
  allTotalSales : 0,
  hourlySales : [],
  picture: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Space_Needle_2011-07-04.jpg'
};

//Random Number Gen function



seattle.getRandom = function() {
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);
  return Math.floor(Math.random() * (max - min)) + min;
}


//Total Sales loop/function to get to Total Sales for the day

seattle.totalSales = function() {
  
  

  for (var i = 6; i <= 19; i++){
    var hourlyCust = this.getRandom();
    var hourlyCookieSales = (hourlyCust * this.avgCookieSale);
    this.hourlySales.push(Math.round(hourlyCookieSales))
  }

  for (i = 0; i < this.hourlySales.length; i++)  {
    this.allTotalSales = this.allTotalSales + this.hourlySales[i]
  }
  
}

//Render function to loop and print all the times and random counts of customers. 

seattle.render = function() {
  var targetUlEl = document.getElementById('seattleStore');
  var newLiEl = document.createElement('li');
  var storeCookies = 'Store ' + seattle.location + ' has ' + seattle.minCust + ' to ' + seattle.maxCust + ' customers\'s an hour with an average sales of ' + seattle.avgCookieSale + '.';
  newLiEl.textContent = storeCookies;


  var seattleImgEl = document.createElement('img');
  seattleImgEl.src = this.picture;
  newLiEl.appendChild(seattleImgEl);
  targetUlEl.appendChild(newLiEl);
 
 
  var orderedListEl = document.getElementById('randomNums');
  console.log(this.hourlySales)

  for (var i = 6; i <= 19; i++) {
  
    var newListItemEl = document.createElement('li');
    
    if (i <= 11) {
    newListItemEl.textContent = [i + 'am: ' + this.hourlySales[i-6] + ' cookies'];
    
  } else if(i > 12) {
    var newListItemEl = document.createElement('li');
    newListItemEl.textContent = [(i - 12) + 'pm: ' + this.hourlySales[i-6] + ' cookies'];
  
  } else {
    var newListItemEl = document.createElement('li');
    newListItemEl.textContent = [i + 'pm ' + this.hourlySales[i-6] + ' cookies'];
  }
  orderedListEl.appendChild(newListItemEl);
  }
  var totalSalesString = document.createElement('li');
  totalSalesString.textContent = ('Total Sales : ' + this.allTotalSales + ' cookies');
  orderedListEl.appendChild(totalSalesString);

}

seattle.totalSales();

seattle.render();


//tokyo Store Information

//tokyo Object Block

var tokyo = {
  location : 'tokyo',
  minCust : 3,
  maxCust : 24,
  avgCookieSale : 1.2,
  allTotalSales : 0,
  hourlySales : [],
  picture: 'https://lh3.googleusercontent.com/proxy/-2X5OjbEt9ov4pt8kxjX0_lK20jY-oBGkHFkqFT_9fHxLzNbEPk-oI-yQosEGqpGs-pNvh2ezp1Qzd7fj7mX679V0h8MaZLews31OHxixkVY73J0xJo'
};

//Random Number Gen function



tokyo.getRandom = function() {
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);
  return Math.floor(Math.random() * (max - min)) + min;
}


//Total Sales loop/function to get to Total Sales for the day

tokyo.totalSales = function() {
  
  

  for (var i = 6; i <= 19; i++){
    var hourlyCust = this.getRandom();
    var hourlyCookieSales = (hourlyCust * this.avgCookieSale);
    this.hourlySales.push(Math.round(hourlyCookieSales))
  }

  for (i = 0; i < this.hourlySales.length; i++)  {
    this.allTotalSales = this.allTotalSales + this.hourlySales[i]
  }
  
}

//Render function to loop and print all the times and random counts of customers. 

tokyo.render = function() {
  var targetUlEl = document.getElementById('tokyoStore');
  var newLiEl = document.createElement('li');
  var storeCookies = 'Store ' + tokyo.location + ' has ' + tokyo.minCust + ' to ' + tokyo.maxCust + ' customers\'s an hour with an average sales of ' + tokyo.avgCookieSale + '.';
  newLiEl.textContent = storeCookies;


  var tokyoImgEl = document.createElement('img');
  tokyoImgEl.src = this.picture;
  newLiEl.appendChild(tokyoImgEl);
  targetUlEl.appendChild(newLiEl);
 
 
  var orderedListEl = document.getElementById('tokyoRandomNums');
  console.log(this.hourlySales)

  for (var i = 6; i <= 19; i++) {
  
    var newListItemEl = document.createElement('li');
    
    if (i <= 11) {
    newListItemEl.textContent = [i + 'am: ' + this.hourlySales[i-6] + ' cookies'];
    
  } else if(i > 12) {
    var newListItemEl = document.createElement('li');
    newListItemEl.textContent = [(i - 12) + 'pm: ' + this.hourlySales[i-6] + ' cookies'];
  
  } else {
    var newListItemEl = document.createElement('li');
    newListItemEl.textContent = [i + 'pm ' + this.hourlySales[i-6] + ' cookies'];
  }
  orderedListEl.appendChild(newListItemEl);
  }
  var totalSalesString = document.createElement('li');
  totalSalesString.textContent = ('Total Sales : ' + this.allTotalSales + ' cookies');
  orderedListEl.appendChild(totalSalesString);

}

tokyo.totalSales();

tokyo.render(); 
  
   
//Lima Store Information

//Lima Object Block

var lima = {
  location : 'Lima',
  minCust : 2,
  maxCust : 16,
  avgCookieSale : 4.6,
  allTotalSales : 0,
  hourlySales : [],
  picture: 'https://www.planetware.com/photos-large/PER/peru-lima-san-francisco.jpg'
};

//Random Number Gen function



lima.getRandom = function() {
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);
  return Math.floor(Math.random() * (max - min)) + min;
}


//Total Sales loop/function to get to Total Sales for the day

lima.totalSales = function() {
  
  

  for (var i = 6; i <= 19; i++){
    var hourlyCust = this.getRandom();
    var hourlyCookieSales = (hourlyCust * this.avgCookieSale);
    this.hourlySales.push(Math.round(hourlyCookieSales))
  }

  for (i = 0; i < this.hourlySales.length; i++)  {
    this.allTotalSales = this.allTotalSales + this.hourlySales[i]
  }
  
}

//Render function to loop and print all the times and random counts of customers. 

lima.render = function() {
  var targetUlEl = document.getElementById('limaStore');
  var newLiEl = document.createElement('li');
  var storeCookies = 'Store ' + lima.location + ' has ' + lima.minCust + ' to ' + lima.maxCust + ' customers\'s an hour with an average sales of ' + lima.avgCookieSale + '.';
  newLiEl.textContent = storeCookies;


  var limaImgEl = document.createElement('img');
  limaImgEl.src = this.picture;
  newLiEl.appendChild(limaImgEl);
  targetUlEl.appendChild(newLiEl);
 
 
  var orderedListEl = document.getElementById('limaRandomNums');
  console.log(this.hourlySales)

  for (var i = 6; i <= 19; i++) {
  
    var newListItemEl = document.createElement('li');
    
    if (i <= 11) {
    newListItemEl.textContent = [i + 'am: ' + this.hourlySales[i-6] + ' cookies'];
    
  } else if(i > 12) {
    var newListItemEl = document.createElement('li');
    newListItemEl.textContent = [(i - 12) + 'pm: ' + this.hourlySales[i-6] + ' cookies'];
  
  } else {
    var newListItemEl = document.createElement('li');
    newListItemEl.textContent = [i + 'pm ' + this.hourlySales[i-6] + ' cookies'];
  }
  orderedListEl.appendChild(newListItemEl);
  }
  var totalSalesString = document.createElement('li');
  totalSalesString.textContent = ('Total Sales : ' + this.allTotalSales + ' cookies');
  orderedListEl.appendChild(totalSalesString);

}

lima.totalSales();

lima.render();


//Dubai Store Information

//Dubai Object Block

var dubai = {
  location : 'Dubai',
  minCust : 11,
  maxCust : 38,
  avgCookieSale : 3.7,
  allTotalSales : 0,
  hourlySales : [],
  picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKOjyBtbBtkvJ5MLWFdREwE3BcT0-Z4U1NLE6x1lj0UNNI2Ysl&usqp=CAU'
};

//Random Number Gen function



dubai.getRandom = function() {
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);
  return Math.floor(Math.random() * (max - min)) + min;
}


//Total Sales loop/function to get to Total Sales for the day

dubai.totalSales = function() {
  
  

  for (var i = 6; i <= 19; i++){
    var hourlyCust = this.getRandom();
    var hourlyCookieSales = (hourlyCust * this.avgCookieSale);
    this.hourlySales.push(Math.round(hourlyCookieSales))
  }

  for (i = 0; i < this.hourlySales.length; i++)  {
    this.allTotalSales = this.allTotalSales + this.hourlySales[i]
  }
  
}

//Render function to loop and print all the times and random counts of customers. 

dubai.render = function() {
  var targetUlEl = document.getElementById('dubaiStore');
  var newLiEl = document.createElement('li');
  var storeCookies = 'Store ' + dubai.location + ' has ' + dubai.minCust + ' to ' + dubai.maxCust + ' customers\'s an hour with an average sales of ' + dubai.avgCookieSale + '.';
  newLiEl.textContent = storeCookies;


  var dubaiImgEl = document.createElement('img');
  dubaiImgEl.src = this.picture;
  newLiEl.appendChild(dubaiImgEl);
  targetUlEl.appendChild(newLiEl);
 
 
  var orderedListEl = document.getElementById('dubaiRandomNums');
  console.log(this.hourlySales)

  for (var i = 6; i <= 19; i++) {
  
    var newListItemEl = document.createElement('li');
    
    if (i <= 11) {
    newListItemEl.textContent = [i + 'am: ' + this.hourlySales[i-6] + ' cookies'];
    
  } else if(i > 12) {
    var newListItemEl = document.createElement('li');
    newListItemEl.textContent = [(i - 12) + 'pm: ' + this.hourlySales[i-6] + ' cookies'];
  
  } else {
    var newListItemEl = document.createElement('li');
    newListItemEl.textContent = [i + 'pm ' + this.hourlySales[i-6] + ' cookies'];
  }
  orderedListEl.appendChild(newListItemEl);
  }
  var totalSalesString = document.createElement('li');
  totalSalesString.textContent = ('Total Sales : ' + this.allTotalSales + ' cookies');
  orderedListEl.appendChild(totalSalesString);

}

dubai.totalSales();

dubai.render();


//paris Store Information

//paris Object Block

var paris = {
  location : 'Paris',
  minCust : 20,
  maxCust : 38,
  avgCookieSale : 2.3,
  allTotalSales : 0,
  hourlySales : [],
  picture: 'https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg'
};



//Random Number Gen function

paris.getRandom = function() {
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);
  return Math.floor(Math.random() * (max - min)) + min;
}


//Total Sales loop/function to get to Total Sales for the day

paris.totalSales = function() {
  
  

  for (var i = 6; i <= 19; i++){
    var hourlyCust = this.getRandom();
    var hourlyCookieSales = (hourlyCust * this.avgCookieSale);
    this.hourlySales.push(Math.round(hourlyCookieSales))
  }

  for (i = 0; i < this.hourlySales.length; i++)  {
    this.allTotalSales = this.allTotalSales + this.hourlySales[i]
  }
  
}

//Render function to loop and print all the times and random counts of customers.  

paris.render = function() {
  var targetUlEl = document.getElementById('parisStore');
  var newLiEl = document.createElement('li');
  var storeCookies = 'Store ' + paris.location + ' has ' + paris.minCust + ' to ' + paris.maxCust + ' customers\'s an hour with an average sales of ' + paris.avgCookieSale + '.';
  newLiEl.textContent = storeCookies;


  var parisImgEl = document.createElement('img');
  parisImgEl.src = this.picture;
  newLiEl.appendChild(parisImgEl);
  targetUlEl.appendChild(newLiEl);
 
 
  var orderedListEl = document.getElementById('parisRandomNums');
  console.log(this.hourlySales)

  for (var i = 6; i <= 19; i++) {
  
    var newListItemEl = document.createElement('li');
    
    if (i <= 11) {
    newListItemEl.textContent = [i + 'am: ' + this.hourlySales[i-6] + ' cookies'];
    
  } else if(i > 12) {
    var newListItemEl = document.createElement('li');
    newListItemEl.textContent = [(i - 12) + 'pm: ' + this.hourlySales[i-6] + ' cookies'];
  
  } else {
    var newListItemEl = document.createElement('li');
    newListItemEl.textContent = [i + 'pm ' + this.hourlySales[i-6] + ' cookies'];
  }
  orderedListEl.appendChild(newListItemEl);
  }
  var totalSalesString = document.createElement('li');
  totalSalesString.textContent = ('Total Sales : ' + this.allTotalSales + ' cookies');
  orderedListEl.appendChild(totalSalesString);

}

paris.totalSales();

paris.render();