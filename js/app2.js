'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];
var parentElement = document.getElementById('table');
var allStores = [];
var form = document.getElementById('form');

function CookieShop(name, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerPerson){
  this.name = name;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerPerson = avgCookiesPerPerson;
  this.customersHourly = [];
  this.cookiesHourly = [];
  this.totalCookiesDaily = 0;
  allStores.push(this);
}

var seattle = new CookieShop('Seattle', 23, 65, 6.3);
var tokyo = new CookieShop('Tokyo', 3, 24, 1.2);
var dubai = new CookieShop('Dubai', 23, 65, 6.3);
var paris = new CookieShop('Paris', 20, 38, 2.3);
var lima = new CookieShop('Lima', 2, 16, 4.6);


CookieShop.prototype.calcCustomersEachHour = function(){
  for(var i=0; i<hours.length; i++){
    var customerThisHour = randomNumber(this.minCustomerPerHour, this.maxCustomerPerHour);
    this.customersHourly.push(customerThisHour);
  }
};

CookieShop.prototype.calcCookiesSoldEachHour = function(){
  this.calcCustomersEachHour();
  for(var i=0; i<this.customersHourly.length; i++){
    var totalCookies = Math.round(this.avgCookiesPerPerson * this.customersHourly[i]);

    this.cookiesHourly.push(totalCookies);
  }
};

CookieShop.prototype.cookiesForTheDay = function(){
  this.calcCookiesSoldEachHour();
  for(var i=0; i<this.cookiesHourly.length; i++){
    this.totalCookiesDaily += this.cookiesHourly[i];
  }

};
// // working on double for loop
// CookieShop.prototype.cookiesByhourByLocation = function(){
//   this.cookiesHourly();
//   for(var i=0 <hours.length; i++;){
//     console.log(`${hours} + getting closer`);
//     for(var j=0; j<this.cookiesHourly; j++){
//       console.log(`+ ${this.cookiesHourly}`);
//     }
//   }
// };


function handleFormSubmit(event){
  event.preventDefault();
  var newStore = event.target.storename.value;
  var leastcookies = parseInt(event.target.leastcookies.value);
  var maxcookies = parseInt(event.target.maxcookies.value);
  var average = parseInt(event.target.average.value);
  var newStore = new CookieShop(newStore, leastcookies, maxcookies, average);
  newStore.render();

}

CookieShop.prototype.render = function(){
  this.cookiesForTheDay();
  var tableRow = document.createElement('tr');
  var tableheader = document.createElement('th');
  tableheader.textContent = this.name;
  tableRow.appendChild(tableheader);

  for(var i=0; i<this.cookiesHourly.length; i++){
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesHourly[i];
    tableRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = this.totalCookiesDaily;
  tableRow.appendChild(tableData);
  parentElement.appendChild(tableRow);
};

function randomNumber(min, max){
  return Math.floor(Math.random() * (max-min +1)) + min;
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
form.addEventListener('submit', handleFormSubmit);


