const requestURL= "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json"
const resultElement = document.getElementById('cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

        p.textContent = "Birth Date: "+ prophets[i].birthdate;
        p2.textContent = "Birth Place: "+ prophets[i].birthplace;

        let image = document.createElement('img')

       
        image.setAttribute('src', prophets[i].imageurl);
        
        card.appendChild(h2);
        card.appendChild(p)
        card.appendChild(p2)
        card.appendChild(image)
        
        resultElement.appendChild(card);
    
      }
      

  
    });
  

 