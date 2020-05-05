//Make object literals for each store
  //min customers per hour
  //max customers per hour
  //avg cookie per customer
  //array that holds average

var storeLocations = [
  { 
    name: seattle,
    minCustomers: 23,
    maxCustomers: 65,
    avgCookieSale: 6.3,
    hours: 18,
    hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',],
    randomCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;},
    cookieSalesSim: function() {
      return(this.avgCookieSale * this.randomCustomer());
    }
    },
    seattle.cookieSalesSim(),
    seattle.randomCustomer(),
  }
    name: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookieSale: 1.2,
    hours: 18,
    hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',],
  },
  {
    name: 'Dubai',
    minCustomers: 11,
    maxCustomers: 20,
    avgCookieSale: 3.7,
    hours: 18,
    hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',],
  },
  {
    name: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookieSale: 2.3,
    hours: 18,
    hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',],
  },
  {
    name: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookieSale: 14.6,
    hours: 18,
    hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',],
  },
];
function arrayOfAvgCookies(){
  var avgCookieSaleArray = [];

  for(var i=0; i<storeLocations.length; i++){
    avgCookieSaleArray.push(storeLocations[i].avgCookieSale);
  }
  console.log(avgCookieSaleArray);
}



function randomSeattle(min, max) {
  min = Math.ceil(23);
  max = Math.floor(66);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomTokyo(min, max) {
  min = Math.ceil(3);
  max = Math.floor(254);
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomDubai(min, max) {
  min = Math.ceil(11);
  max = Math.floor(39);
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomParis(min, max) {
  min = Math.ceil(20);
  max = Math.floor(39);
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomLima(min, max) {
  min = Math.ceil(2);
  max = Math.floor(16);
  return Math.floor(Math.random() * (max - min)) + min;
}
//Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

arrayOfAvgCookies();
randomSeattle();
randomTokyo();
randomDubai();
randomParis();
randomLima();

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// for loops

function arrayOfRandomSeattle() {
  var ok  = [];
for(i=0; i<18; i++);
return[];
}



// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:


//Number of customers for every hour the store is open based off the min and max using math random

//array that holds the average number of cookies sold every hour at that store - multiply the random customers by the average cookie sale