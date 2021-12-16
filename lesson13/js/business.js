const requestURL = 'https://github.com/AndrewJBedford/wdd230/blob/master/lesson13/directory/business-cards.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businessess = jsonObject['businesses'];      
    console.table(jsonObject);  
    for (let i = 0; i < businesses.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let email = document.createElement('p');
        let website = document.createElement('p');
        let image = document.createElement('img');
        h2.textContent = businessess[i].name;
        email.textContent = "Email: "+ businessess[i].email;
        website.textContent = ": "+ businessess[i].website;
        card.appendChild(h2);
        card.appendChild(email);
        card.appendChild(website);
        card.appendChild(image); 
        image.setAttribute('src', businessess[i].imageurl);
        document.querySelector('.cards').appendChild(card)
      }
  });