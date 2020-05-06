'use strict';

// alert('im alive');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

var seattle = {
  name: 'seattle',
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesSoldPerCustomer: 6.3,
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesForTheDay: 0,

  calcCustomersEachHour: function(){
    for(var i=0; i<hours.length; i++){
      var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
      this.customersEachHour.push(customersThisHours);
    }
  },

  calcCookiesSoldEachHour: function(){
    for(var i=0; i<this.customersEachHour.length; i++){
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);
      this.totalCookiesForTheDay += wholeCookiesSoldForOneHour;
    }
  },

  render: function(){
    seattle.calcCustomersEachHour();
    seattle.calcCookiesSoldEachHour();
    var seattleElement = document.getElementById('seattle');

    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    seattleElement.appendChild(listItem);

    for(var i=0; i<hours.length; i++){
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies.`;
      seattleElement.appendChild(listItem);
    }

    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesForTheDay;
    seattleElement.appendChild(listItem);
  }
};
var tokyo = {
  name: 'tokyo',
  minCustomersEachHour: 3,
  maxCustomersEachHour: 24,
  averageCookiesSoldPerCustomer: 1.2,
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesForTheDay: 0,

  calcCustomersEachHour: function(){
    for(var i=0; i<hours.length; i++){
      var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
      this.customersEachHour.push(customersThisHours);
    }
  },

  calcCookiesSoldEachHour: function(){
    for(var i=0; i<this.customersEachHour.length; i++){
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);
      this.totalCookiesForTheDay += wholeCookiesSoldForOneHour;
    }
  },

  render: function(){
    tokyo.calcCustomersEachHour();
    tokyo.calcCookiesSoldEachHour();
    var tokyoElement = document.getElementById('tokyo');

    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    tokyoElement.appendChild(listItem);

    for(var i=0; i<hours.length; i++){
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies.`;
      tokyoElement.appendChild(listItem);
    }

    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesForTheDay;
    tokyoElement.appendChild(listItem);
  }
};
var dubai = {
  name: 'dubai',
  minCustomersEachHour: 11,
  maxCustomersEachHour: 20,
  averageCookiesSoldPerCustomer: 3.7,
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesForTheDay: 0,

  calcCustomersEachHour: function(){
    for(var i=0; i<hours.length; i++){
      var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
      this.customersEachHour.push(customersThisHours);
    }
  },

  calcCookiesSoldEachHour: function(){
    for(var i=0; i<this.customersEachHour.length; i++){
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);
      this.totalCookiesForTheDay += wholeCookiesSoldForOneHour;
    }
  },

  render: function(){
    dubai.calcCustomersEachHour();
    dubai.calcCookiesSoldEachHour();
    var dubaiElement = document.getElementById('dubai');

    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    dubaiElement.appendChild(listItem);

    for(var i=0; i<hours.length; i++){
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies.`;
      dubaiElement.appendChild(listItem);
    }

    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesForTheDay;
    dubaiElement.appendChild(listItem);
  }
};
var paris = {
  name: 'paris',
  minCustomersEachHour: 20,
  maxCustomersEachHour: 38,
  averageCookiesSoldPerCustomer: 2.3,
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesForTheDay: 0,

  calcCustomersEachHour: function(){
    for(var i=0; i<hours.length; i++){
      var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
      this.customersEachHour.push(customersThisHours);
    }
  },
  calcCookiesSoldEachHour: function(){
    for(var i=0; i<this.customersEachHour.length; i++){
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);
      this.totalCookiesForTheDay += wholeCookiesSoldForOneHour;
    }
  },
  render: function(){
    paris.calcCustomersEachHour();
    paris.calcCookiesSoldEachHour();
    var parisElement = document.getElementById('paris');

    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    parisElement.appendChild(listItem);

    for(var i=0; i<hours.length; i++){
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies.`;
      parisElement.appendChild(listItem);
    }

    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesForTheDay;
    parisElement.appendChild(listItem);
  }
};
var lima = {
  name: 'lima',
  minCustomersEachHour: 2,
  maxCustomersEachHour: 16,
  averageCookiesSoldPerCustomer: 14.6,
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesForTheDay: 0,

  calcCustomersEachHour: function(){
    for(var i=0; i<hours.length; i++){
      var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
      this.customersEachHour.push(customersThisHours);
    }
  },

  calcCookiesSoldEachHour: function(){
    for(var i=0; i<this.customersEachHour.length; i++){
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);
      this.totalCookiesForTheDay += wholeCookiesSoldForOneHour;
    }
  },

  render: function(){
    lima.calcCustomersEachHour();
    lima.calcCookiesSoldEachHour();
    var limaElement = document.getElementById('lima');

    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    limaElement.appendChild(listItem);

    for(var i=0; i<hours.length; i++){
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies.`;
      limaElement.appendChild(listItem);
    }

    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesForTheDay;
    limaElement.appendChild(listItem);


  }
};


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function Location(name, minCustomersEachHour,maxCustomersEachHour, averageCookiesSoldPerCustomer, customersEachHour, cookiesSoldEachHour, totalCookiesForTheDay){
//   this.name = name;
//   this.minCustomersEachHour = minCustomersEachHour;
//   this.maxCustomersEachHour = maxCustomersEachHour;
//   this.averageCookiesSoldPerCustomer = averageCookiesSoldPerCustomer;
//   this.customersEachHour = customersEachHour;
//   this.cookiesSoldEachHour = cookiesSoldEachHour;
//   this.totalCookiesForTheDay = totalCookiesForTheDay;
// }
// var tokyoNew = new Location ( 'tokyo', 11, 20, 3.7, [], [], []);
// var dubaiNew = new Location ( 'dubai', 11, 20, 37, [], [], []);
// var parisNew = new Location ( 'seattle', 23, 65, 6.3, [], [], []);
// var limaNew = new Location ( 'seattle', 23, 65, 6.3, [], [], []);

// Location.prototype.storeSales = function(){(
//   `${this.name} sales are, ${this.totalCookiesForTheDay}`);
// };

// seattle.storeSales();
// tokyoNew.storeSales();
// dubaiNew.storeSales();
// parisNew.storeSales();
// limaNew.storeSales();

// var parentElement = document.getElementById('table');
// var tableRow = document.createElement('tr');
// var tableHeader = document.createElement('th');
// tableRow.header.textContent = 'time';
// var array=['6.00am', '7.00am', '8.00am', '9.00am', '10.00am', '11.00am', '12.00pm','1.00pm','2.00pm','3.00pm', '4.00pm', '5.00pm', '6.00pm'];

// render : function(){
// for (var i=0; i<array.length; i++){
//   tableHeader = document.createElement('td');
//   tableHeader.textContent = array[i];
//   tableRow.appendChild(tableHeader);
//   parentElement.appendChild(tableRow);
// };

// var seattleTable = [i];
// tableRow = document.createElement('seattle');

// for (var i=0; i<seattle.cookiesSoldEachHour.length; i++){
//   var tableData = document.createElement('seattle');
//   tableData.textContent = seattleTable[i];
//   tableRow.appendChild(tableData);
// }
// };
// parentElement;

// var tokyoTable = [i];
// tableRow = document.createElement('tokyo');

// for (var i=0; i<tokyo.cookiesSoldEachHour.length; i++){
//   var tableData = document.createElement('tokyo');
//   tableData.textContent = tokyoTable[i];
//   tableRow.appendChild(tableData);
// }
// parentElement;

// for (var i=0; i<array.length; i++){
//   tableHeader = document.createElement('td');
//   tableHeader.textContent = array[i];
//   tableRow.appendChild(tableHeader);
//   parentElement.appendChild(tableRow);
// }
// var dubaiTable = [i];
// tableRow = document.createElement('dubai');

// for (var i=0; i<dubai.cookiesSoldEachHour.length; i++){
//   var tableData = document.createElement('dubai');
//   tableData.textContent = dubaiTable[i];
//   tableRow.appendChild(tableData);
// }

// parentElement;
// for (var i=0; i<array.length; i++){
//   tableHeader = document.createElement('paris');
//   tableHeader.textContent = array[i];
//   tableRow.appendChild(tableHeader);
//   parentElement.appendChild(tableRow);
// }
// var parisTable = [i];
// tableRow = document.createElement('paris');

// for (var i=0; i<paris.cookiesSoldEachHour.length; i++){
//   var tableData = document.createElement('paris');
//   tableData.textContent = parisTable[i];
//   tableRow.appendChild(tableData);
// }
// parentElement;
// {

// for (var i=0; i<array.length; i++){
//     tableHeader = document.createElement('th');
//     tableHeader.textContent = array[i];
//     tableRow.appendChild(tableHeader);
//     parentElement.appendChild(tableRow);
// }
//   var lima = [i];
//   tableRow = document.createElement('th');

//   for (var i=0; i<lima.cookiesSoldEachHour.length; i++){
//     var tableData = document.createElement('th');
//     tableData.textContent = limaTable[i];
//     tableRow.appendChild(tableData);
// }
// parentElement
// }
