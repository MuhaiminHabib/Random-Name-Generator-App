// alert('Hello from main js');

import { namesOne, namesTwo } from './names.js';

const initApp = () => {
    //add event listener to the form

    document.getElementById("submitForm").addEventListener("submit", (event) =>{
        event.preventDefault();
        //reset/clear out the suggestion
        clearSuggestions();
        //generate names
        const namesArray = generateNames()
        //display names
        displayNames(namesArray)
    })
    
}

document.addEventListener("DomContentLoaded", initApp())

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
    const rawUserName = document.getElementById("submitForm__text").value;
    // console.log(rawUserName)
    const userName = sanitizeInput(rawUserName);
    // console.log(userName);
    const orderedList = document.getElementById("suggestionSection__list");
    namesArray.map(name => {
        orderedList.innerHTML += `<li><a href="http://youtube.com/${name}" target="_blank">${name}</a></li>`;
        orderedList.innerHTML += `<ul>
            <li><a href="http://youtube.com/${userName}s${name}" target="_blank">${userName}s${name}</a></li>
            <li><a href="http://youtube.com/${name}with${userName}" target="_blank">${name}with${userName}</a></li>
        </ul>`
    })
    if(suggestionSection.classList.contains("hidden")) {
        suggestionSection.classList.toggle("hidden");
    } 
}

const sanitizeInput = (inputValue) => {
    const div = document.createElement('div');
    div.textContent = inputValue;
    return div.innerHTML;
}


