function doInputOutput(){
    var temperature = parseFloat(document.getElementById("temp").innerText);
    var windSpeed = parseFloat(document.getElementById("speed").innerText);
    
    var chill= windChill(temperature , windSpeed);
    if(temperature>50 && windSpeed>2){
    document.getElementById('chilly').innerText= "";
    }
    else{
    document.getElementById('chilly').innerText= chill;
    }

    
    }
    function windChill(t, s){
        
    var power = Math.pow(s,.16);
    var chillWind= 35.75 + 0.6215 * t - 35.75 * power + .4275 * t * power;
    //makes the decimal only in the tenths place 
    let digits = 0;
    let mult = Math.pow(10, digits);
    fin = Math.round(chillWind*mult) / mult;
    
    return fin;
        }
       
   
doInputOutput();