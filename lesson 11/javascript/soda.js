const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
const resultElement = document.getElementById('anno');



fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);  // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];
        let card = document.createElement('section');
        for (let i = 0; i < towns.length; i++) {





            if (towns[i].name == "Soda Springs") {
                let image = document.createElement('img')


                
               
                

                let x = towns[i].events[0];
                document.getElementById('p1').innerHTML=x;
                let y = towns[i].events[1];
                document.getElementById('p2').innerHTML=y;
                let z = towns[i].events[2];
                document.getElementById('p3').innerHTML=z;

                   


                h2.textContent = towns[i].name;

                document.getElementById('title').innerHTML=towns[i].name;

                
                
                
                
                div.appendChild(h2);
                div.appendChild(h5);


                div.appendChild(p2)
                div.appendChild(p3)
                article.appendChild(div)
               
                card.appendChild(article);
            }

        }

        resultElement.appendChild(card)

    });