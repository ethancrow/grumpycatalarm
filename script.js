

var sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav");
sound.loop = true;

var h2 = document.getElementById('clock');

// display current time by the second
var currentTime = setInterval(function(){
var date = new Date();

var hours = (12 - (date.getHours()));
// var hours = date.getHours();

var minutes = date.getMinutes();

var seconds = date.getSeconds();

var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


//convert military time to standard time

if (hours < 0) {
hours = hours * -1;
} else if (hours == 00) {
hours = 12;
} else {
hours = hours;
}


h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;

},1000);


/*functions to get hour, min, secs, 
am or pm, add zero, set alarm time and sound, clear alarm
*/

function addZero(time) {

return (time < 10) ? "0" + time : time;

}

function hoursMenu(){

var select = document.getElementById('alarmhrs');
var hrs = 12

for (i=1; i <= hrs; i++) {
select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);

}
}
hoursMenu();



function alarmSet() {

var hr = document.getElementById('alarmhrs');

var ap = document.getElementById('ampm');


var selectedHour = hr.options[hr.selectedIndex].value;
var selectedAP = ap.options[ap.selectedIndex].value;

var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
console.log('alarmTime:' + alarmTime);

document.getElementById('alarmhrs').disabled = true;
document.getElementById('ampm').disabled = true;


//when alarmtime is equal to currenttime then play a sound
var h2 = document.getElementById('clock');

/*function to calcutate the current time 
then compare it to the alarmtime and play a sound when they are equal
*/

setInterval(function(){

var date = new Date();

var hours = (12 - (date.getHours()));
// var hours = date.getHours();

var minutes = date.getMinutes();

var seconds = date.getSeconds();

var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


//convert military time to standard time

if (hours < 0) {
hours = hours * -1;
} else if (hours == 00) {
hours = 12;
} else {
hours = hours;
}

var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;


if (alarmTime == currentTime) {
sound.play();
}

},1000);


// console.log('currentTime:' + currentTime);	

}


function alarmClear() {

document.getElementById('alarmhrs').disabled = false;
document.getElementById('alarmmins').disabled = false;
document.getElementById('alarmsecs').disabled = false;
document.getElementById('ampm').disabled = false;
sound.pause();
}


