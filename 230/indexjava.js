let daynames = 
[ 
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thurseday",
"Friday",
"Saturday"
];
let months= 
[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December", 
];

let d = new Date();
let dayName = daynames[d.getDay()];
 let monthName = months[d.getMonth];
 let year = d.getFullYear;

 let fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;

 document.getElementById("currentdate").textContent = fulldate;

 try {
     //try
     let options = {
         weekday:"long",
         day:"numberic",
         month:"long",
         year:"numeric"
     };
     document.getElementById(
         "currentdate2"
     ).textContent=new Date().toLocaleDateString("en-US",options);
 }catch(e){
     alert("error with code or your browser does not support Locale")
 }
 