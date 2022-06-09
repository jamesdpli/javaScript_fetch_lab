console.log("HI");

function getCountryByName(countryName) {
    fetch("https://restcountries.com/v2/name/" + countryName)
    .then(response => response.json())
    .then(data => document.querySelector('p').innerText = data[0].name)
    
    // variable representing a section in the html with id 'my-section'
    let mySection = document.querySelector('#my-section');
    // varibale representing the creation of a p tag
    let pTag = document.createElement("p");
    // Append p tag to section in html with id 'my-section'
    mySection.append(pTag);

    console.log(mySection);
}

getCountryByName("Nepal");

