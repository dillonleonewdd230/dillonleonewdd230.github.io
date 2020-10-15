function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("hide")


}
const dow = 
[ 
'Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thurseday',
'Friday',
'Saturday'
];
const months= 
[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December' 
];

let date = new Date();
let output = dow[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ' '+ date.getFullYear();







 document.getElementById('current-date').innerText = output;

if (date.getDay()==5){
    document.getElementById("banner").style.display="block";
}
