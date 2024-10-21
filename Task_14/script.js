/* 14. Create a timestamp for following cases
-> dd/mm/yyyy
-> hh.mm.ss
->create a format saying min ago , month ago , seconds ago ( 1 min ago , 2
months ago ) ( real time such as in social media saying after posting
anything you can see the timestamp of that post ). */

// Ex: 1
let date = new Date();
console.log(date.toLocaleDateString()); 
console.log(typeof(date)); 

// Ex: 2
function getCurrentTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();
    return hour + "." + minute + "." + seconds;
}
// call the getCurrentTime() function and store the result in a variable
let currentTime = getCurrentTime();

// display the current time
console.log(currentTime);


// Ex: 3 (Method - 1)
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // formatting
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'right now';
    } else if (diffMin < 1) {
      return `${diffSec} sec. ago`
    } else if (diffHour < 1) {
      return `${diffMin} min. ago`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}
console.log( formatDate(new Date(new Date - 1)) ); // "right now"
  
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
  
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
  


// Ex: 3 (Method - 2)
function formatDate(date) {
    let diff = new Date() - date; // the difference in milliseconds
  
    if (diff < 1000) { // less than 1 second
      return 'right now';
    }
  
    let sec = Math.floor(diff / 1000); // convert diff to seconds
  
    if (sec < 60) {
      return sec + ' sec. ago';
    }
  
    let min = Math.floor(diff / 60000); // convert diff to minutes
    if (min < 60) {
      return min + ' min. ago';
    }
  
    // format the date
    // add leading zeroes to single-digit day/month/hours/minutes
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // take last 2 digits of every component
  
    // join the components into date
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}
  
console.log( formatDate(new Date(new Date - 1)) ); // "right now"
  
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
  
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
  
// yesterday's date like 31.12.2016 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
