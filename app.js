console.log("HI");

const getCountryByName = (countryName) => {
    fetch("https://restcountries.com/v2/name/" + countryName)
    .then(response => response.json())
    .then(data => document.querySelector('p').innerText = "The country is " + data[0].name 
    + " and the population is " + data[0].population + "!")

    // variable representing a section in the html with id 'my-section'
    let mySection = document.querySelector('#my-section');
    // varibale representing the creation of a p tag
    let pTag = document.createElement("p");
    // Append p tag to section in html with id 'my-section'
    mySection.append(pTag);
}
// getCountryByName("kon")

const getAllCountries = () => {
    fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(function(data) { 
        data.forEach(
            function(country){
                let countryName = country.name;
                let countryPopulation = country.population;
                let mySection = document.querySelector("#my-section");
                let pTag = document.createElement("p");
                pTag.innerText = `The country is ${countryName} its population is ${countryPopulation}` 
                mySection.appendChild(pTag);
            })
    })
}

document.querySelector("#searchTxt").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
      console.log(document.getElementById("searchTxt").value);
      getCountryByName(document.getElementById("searchTxt").value)
    }
});
// document.getElementById("searchTxt").value