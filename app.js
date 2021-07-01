//press on secret number button, and generate a number when pressed.
// store the number generated in the button itself and change the text to number is generated or may be give a alert message
// press "enter your number button " to enter the number
// match the number
// if match then hurraaah, if not,prompt the messege that number do not match, enter again.


// Selectors
const secretNumberBtn = document.querySelector('.secret-btn'
);

//Events
secretNumberBtn.addEventListener('click', randomNumber);

//Functions
function hide() {
    secretNumberBtn.innerHTML= '<h1> Number is selected </h1>';
    secretNumberBtn.classList.add('secret-btn-styling2');
    }


//Random number generator function

function randomNumber() {
    let randomNum = Math.random()*100;
    let fixedNum = Math.floor(randomNum);
    console.log(fixedNum);
}
