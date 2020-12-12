const requestURL= "rental/rental.json"
const resultElement = document.getElementById('cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const rentals = jsonObject['rentals'];

    for (let i = 0; i < rentals.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');

        
        h2.textContent = rentals[i].Type;

        p.textContent = "Maximum Riders: "+ rentals[i].Max;
        p2.textContent = "Half A Day (Reserved): "+ rentals[i].reservehalf;
        p3.textContent = "Full Day (Reserved): "+ rentals[i].reservefull;
        p4.textContent = "Half A Day (Walk In): "+ rentals[i].walkhalf;
        p5.textContent = "Full Day (Walk In): "+ rentals[i].walkfull;

        let image = document.createElement('img')

       
        image.setAttribute('src', rentals[i].imgurl);
        
        card.appendChild(h2);
        card.appendChild(p)
        card.appendChild(p2)
        card.appendChild(p3)
        card.appendChild(p4)
        card.appendChild(p5)
        card.appendChild(image)
        
        resultElement.appendChild(card);
    
      }
      

  
    });
  