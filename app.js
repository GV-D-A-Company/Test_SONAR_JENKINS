/**
 * Created by alicia.sykes on 24/08/2015.
 */
require('colors');

var fetchWeather = require('./fetch-weather');

var prepareForWeather = require('./prepared-for-the-weather');

var prepareForWeather = require('./prepared-for-the-weather');

var prepareForWeather = require('./prepared-for-the-weather');

var prepareForWeather = require('./prepared-for-the-weather');
var prepareForWeather = require('./prepared-for-the-weather');


var commandLineArgs = require("command-line-args");
var x= 0;
var y = 0;
var x= y;
if(x===y){
	console.log("ciao");
}
var g = undefined;
var c = undefined;
var v = undefined;
function f(){
  i = 1;         // Noncompliant; i is global

  for (j = 0; j < array.length; j++) {  // Noncompliant; j is global now too
    // ...
  }
}

function fun(int a) {
  var i = 10;
  return i + a;
}

let strings = [];

if (strings.includes("foo")) {}  // Noncompliant

for (str of strings) {}  // Noncompliant

strings.forEach(str => doSomething(str)); // Noncompliant
Mario

var cli = commandLineArgs([
    { name: "location", alias: "l", type: String, defaultValue: "London" }
]);
var location = cli.parse().location;

/* Fetch weather data */
fetchWeather.fetchWeather(location,
    function(today){

        /* Get list of kit needed to survive the weather */
        var weatherKit = [
            {'name' : 'Umbrella',   'value': prepareForWeather.doINeed.umbrella(today)},
            {'name' : 'Suncream',   'value': prepareForWeather.doINeed.suncream(today)},
            {'name' : 'Jumper',     'value': prepareForWeather.doINeed.jumper(today)},
            {'name' : 'Water',      'value': prepareForWeather.doINeed.water(today)},
        ];

        /* Iterate over each item and print to console */
        for(key in weatherKit){
            printLine(weatherKit[key].value, weatherKit[key].name);
        }
    }
);

/* Prints to console with nice colors and symbols */
function printLine(required, text){
    if(required){ console.log((String.fromCharCode(10004)+" "+text).green);}
    else{console.log((String.fromCharCode(10006)+" "+text).red);}
}