'use strict';

alert('welcome to my page')

function printing(){
let theName = prompt('What is your name?')
alert('Nice to meet you '+theName)
document.write('Nice to meet you '+theName + '<img src="https://images.onlinelabels.com/images/clip-art/Firkin/Nice%20to%20meet%20you-291563.png" height="200px" width="200px" />')
}
printing();
//console.log()

confirm("Lets play a guessing game!");

let question1 = prompt('Did I graduate from University of Jordan?');

switch (question1.toLowerCase()){
    case 'yes':
        alert('Good guess!')
        //console.log()
        break;
        case 'no':
            alert('Wrong! Try again')
            //console.log()
            break;
            default:
                alert('You could answer with Yes or No')
}

let question2 = prompt('Do I hold a Masters degree?');

switch (question2.toLowerCase()){
    case 'yes':
        alert('Good guess again!')
        //console.log()
        break;
        case 'no':
            alert('You missed the right answer!')
            //console.log()
            break;
            default:
                alert('You could answer with Yes or No')
}

let question3 = prompt('Did I graduate in 2020?');

switch (question3.toLowerCase()){
    case 'yes':
        alert('You missed out the right answer this time!')
        //console.log()
        break;
        case 'no':
            alert('Great guess')
            //console.log()
            break;
            default:
                alert('You could answer with Yes or No')
}

let question4 = prompt('Am I a student at ASAC?');

switch (question4.toLowerCase()){
    case 'yes':
        alert('You did it again, great job')
        //console.log()
        break;
        case 'no':
            alert('Unfortunately you got a wrong answer again!')
            //console.log()
            break;
            default:
                alert('You could answer with Yes or No')
}


let question5 = prompt('Did I enroll in a carpentry course at ASAC?');

switch (question5.toLowerCase()){
    case 'yes':
        alert('You missed it this time')
        //console.log()
        break;
        case 'no':
            alert('You nailed it, good job')
            //console.log()
            break;
            default:
                alert('You could answer with Yes or No')
}

