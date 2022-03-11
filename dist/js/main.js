// alert('Hello from main js');

import { namesOne, namesTwo } from './names.js';

const initApp = () => {
    //add event listener to the form
    document.getElementById("submitForm").addEventListener("submit", (event) =>{
        event.preventDefault();
    })
    //reset/clear out the suggestion
    clearSuggestions();
    //generate names
    const namesArray = generateNames()
    //display names
    displayNames(namesArray)
}

document.addEventListener("DomContentLoaded", initApp)

const clearSuggestions = () => {
    const suggestionSection = document.getElementById("suggestionSection");
    if(!suggestionSection.classList.contains("hidden")) {
        suggestionSection.classList.toggle("hidden");
    } 
    const orderedList = document.querySelector(".suggestionSection__list");
    orderedList.innerHTML = "";
}

const generateNames = () =>  {
    const randomNumArr = [];
    for(let i = 0; i< 4;) {
        let randomNumber = Math.floor(Math.random() * 10)
        if(randomNumArr.includes(randomNumber)) continue;
        randomNumArr.push(randomNumber)
        i++;
    }
    const suggestion1 = namesOne[randomNumArr[0]] + namesTwo[randomNumArr[3]];
    const suggestion2 = namesOne[randomNumArr[1]] + namesTwo[randomNumArr[2]];
    const suggestion3 = namesOne[randomNumArr[2]] + namesTwo[randomNumArr[1]];
    const suggestion4 = namesOne[randomNumArr[3]] + namesTwo[randomNumArr[0]];
    return [suggestion1, suggestion2, suggestion3, suggestion4];
}


const displayNames = (namesArray) => {
    const orderedList = document.querySelector(".suggestionSection__list");
    orderedList.innerHTML = `<li>Hi</li>` 
}

displayNames()
