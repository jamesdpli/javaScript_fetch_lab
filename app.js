console.log("HI");

function getCountryByName(countryName) {
    fetch("https://restcountries.com/v2/name/" + countryName)
    .then(response => response.json())
    .then(data => addToAnElement(data))
}

function addToAnElement(data){
    // variable representing a section in the html with id 'my-section'
    let mySection = document.querySelector('#my-section');
    // varibale representing the creation of a p tag
    let pTag = document.createElement("p");
    // Append p tag to section in html with id 'my-section'
    mySection.append(pTag);
    
    document.querySelector('p').innerText = "The country is " + data[0].name 
    + " and the population is " + data[0].population + "!"

}

getCountryByName("kon")








// function getAllCountries() {
//     fetch("https://restcountries.com/v2/all")
//     .then(response => response.json())
//     .then(function(data) { 
//         for(i = 0; i <= data.length; i++){
//             return document.querySelector('p').innerText = "The country is " + data[i].name
//     + " and the population is " + data[i].population + "!";
//         }
//     })

//     let mySection = document.querySelector('#my-section');

//     let pTag = document.createElement("p");
//     mySection.append(pTag);
// }

// getAllCountries();