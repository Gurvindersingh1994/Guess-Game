// Selectors
const headingClass= document.querySelector('.heading'
);
const secretNumberBtn = document.querySelector('.secret-btn'
);
const  enterUserValueBtn = document.querySelector('.userNumber-btn'
);
//Events
secretNumberBtn.addEventListener('click', randomNumber);
enterUserValueBtn.addEventListener('click', userValue);

let userInput;

//Functions
// Function to get user value
function userValue()
{
    userInput = prompt('Enter the number between 1-100');
    var regex=/^[0-9]+$/;
    if(userInput.match(regex) && userInput <=100)
    {
        enterUserValueBtn.innerHTML= `<h2>number selected is  ${userInput} </h2>`;
    }
    else{
        enterUserValueBtn.innerHTML= `<h2> Number is not valid. Enter again </h2>`;

    }    
}

//Random number generator function
function randomNumber() {
    let randomNum = Math.random()*11;
    let fixedNum = Math.floor(randomNum);
    secretNumberBtn.innerHTML= `<h2>Secret number is ${fixedNum}</h2>` ;

    if(fixedNum === userInput)
    {
        console.log('Number Match. Hurrah!!');
    }
    else{
        console.log(`Number doesn't Match. Try again`);
    }
}