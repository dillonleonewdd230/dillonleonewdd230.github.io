function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("hide")


}
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
 let monthName = months[d.getMonth()];
 let year = d.getFullYear();
 let lastMod=document.lastModified;

 let fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;

 document.getElementById("lastMod").textContent = lastMod;
 document.getElementById("copyright").textContent = year;