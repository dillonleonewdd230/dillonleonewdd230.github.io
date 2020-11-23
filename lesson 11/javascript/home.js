const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
const resultElement = document.getElementById('data');



fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);  // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];
        let card = document.createElement('section');
        for (let i = 0; i < towns.length; i++) {





            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let image = document.createElement('img')


                let h2 = document.createElement('h2');
                let div=document.createElement("div")
                h2.setAttribute('class', "town-name")
                let h5 = document.createElement('h5')
                h5.setAttribute('class', "motto")
                let article = document.createElement('article');
                article.setAttribute('class', "found")
                let p1= document.createElement('p');
                p1.setAttribute('class', "rain")
                let p2 = document.createElement('p');
                p2.setAttribute('class', "pop")
                let p3 = document.createElement('p');



                image.setAttribute('src', 'images/' + towns[i].photo);
                image.apphend = towns[i].photo

                h2.textContent = towns[i].name;
                h5.textContent = towns[i].motto;
                p1.textContent = "Founded in: " + towns[i].yearFounded;
                p2.textContent = "Average RainFall: " + towns[i].averageRainfall;
                p3.textContent = "Population: " + towns[i].currentPopulation;


                article.appendChild(image)
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