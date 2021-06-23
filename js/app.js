'use strict';

alert('welcome to my page')

//function printing(){
let theName = prompt('What is your name?')
let score = 0;
alert('Nice to meet you '+theName)
document.write('Nice to meet you '+theName + '<img src="https://images.onlinelabels.com/images/clip-art/Firkin/Nice%20to%20meet%20you-291563.png" height="200px" width="200px" />')
//}
//printing();
//console.log()

confirm("Lets play a guessing game!");

function one(){
let question1 = prompt('Did I graduate from University of Jordan?');

switch (question1.toLowerCase()){
    case 'yes':
    case 'y':
        alert('Good guess!')
        score++;
        //console.log()
        break;
        case 'no':
        case 'n':
            alert('Wrong! Try again')
            //console.log()
            break;
            default:
                alert('You could answer with Yes or No')
}
}

one();

function two(){
let question2 = prompt('Do I hold a Masters degree?');

switch (question2.toLowerCase()){
    case 'yes':
    case 'y':
        alert('Good guess again!')
        score++;
        //console.log()
        break;
        case 'no':
        case 'n':
            alert('You missed the right answer!')
            //console.log()
            break;
            default:
                alert('You could answer with Yes or No')
}
}
two();

function three(){
let question3 = prompt('Did I graduate in 2020?');

switch (question3.toLowerCase()){
    case 'yes':
    case 'y':
        alert('You missed out the right answer this time!')
        //console.log()
        break;
        case 'no':
        case 'n':
            alert('Great guess')
            score++;
            //console.log()
            break;
            default:
                alert('You could answer with Yes or No')
}
}
three();

function four(){



let question4 = prompt('Am I a student at ASAC?');

switch (question4.toLowerCase()){
    case 'yes':
    case 'y':
        alert('You did it again, great job')
        score++;
        //console.log()
        break;
        case 'no':
        case 'n':
            alert('Unfortunately you got a wrong answer again!')
            //console.log()
            break;
            
            default:
                alert('You could answer with Yes or No')
}
}
four();

function five(){

let question5 = prompt('Did I enroll in a carpentry course at ASAC?');

switch (question5.toLowerCase()){
    case 'yes':
    case 'y':
        alert('You missed it this time')
        //console.log()
        break;
        case 'no':
        case 'n':
            alert('You nailed it, good job')
            score++;
            //console.log()
            break;
            default:
                alert('You could answer with Yes or No')
}
}
five();

function six(){
let question6 = prompt('When did I receive my bachelor\'s degree?')
question6 = Number(question6);
for(let i =0;i<3;i++){ 


    if(question6 === 2011){
        alert("Correct Answer")
        score++;
        break;
    }
    else if(question6 > 2011){
        alert("Too High")
       question6 = prompt('Please try again')
       question6 = Number(question6);  
}
else if(question6 < 2011){
    alert("Too Low")
   question6 = prompt('Please try again')
   question6 = Number(question6);}
}
alert("The correct answer is 2011 :)");
}
six();

function seven(){

let question7 = prompt('What are my favorite movies?')
let movies = ['the godfather','rocky','analyze this','forrest gump','cast away','braveheart','the lord of the rings','the green mile','the good the bad and the ugly','lethal weapon']
for(let i =0;i<5;i++){
    if(question7.toLowerCase() == movies[0].toLowerCase() || question7.toLowerCase() == movies[1].toLowerCase() || question7.toLowerCase() == movies[2].toLowerCase() || question7.toLowerCase() == movies[3].toLowerCase() || question7.toLowerCase() == movies[4].toLowerCase() || question7.toLowerCase() == movies[5].toLowerCase() || question7.toLowerCase() == movies[6].toLowerCase() || question7.toLowerCase() == movies[7].toLowerCase() || question7.toLowerCase() == movies[8].toLowerCase() || question7.toLowerCase() == movies[9].toLowerCase()){
        alert("Correct Answer")
        score++;
        break;

        
    }
    else if(question7.toLowerCase() !== movies[0].toLowerCase() || question7.toLowerCase() !== movies[1].toLowerCase() || question7.toLowerCase() !== movies[2].toLowerCase() || question7.toLowerCase() !== movies[3].toLowerCase() || question7.toLowerCase() !== movies[4].toLowerCase() || question7.toLowerCase() !== movies[5].toLowerCase() || question7.toLowerCase() !== movies[6].toLowerCase() || question7.toLowerCase() !== movies[7].toLowerCase() || question7.toLowerCase() !== movies[8].toLowerCase() || question7.toLowerCase() !== movies[9].toLowerCase()){
        alert("Wrong Answer")
        question7 = prompt('Please try again')
    }
}
alert("My favorite Movies are: The Godfather, Rocky, Analyze This, Forrest Gump, Cast Away, Braveheart, The Lord of The Rings, The Green Mile, The Good The Bad and The Ugly, Lethal Weapon.")
}
seven();
alert('Good Job ' + theName + ' and your score is ' + score + '/7')

//document.write('Nice to meet you '+theName + '<img src="https://images.onlinelabels.com/images/clip-art/Firkin/Nice%20to%20meet%20you-291563.png" height="200px" width="200px" />')
// let question7 = prompt('What is my favorite movie?')
// let movies = ['the godfather','rocky','analyze this','forrest gump','cast away','braveheart','the lord of the rings','the green mile','the Good the bad and the ugly','lethal weapon']

// let x =0;
// for( i =0;i<movies.length;i++){

//     if(question7.toLowerCase() == movies[i].toLowerCase() && x < 6){
//         alert("Correct Answer")
//         break;
//     console.log()

        
//     }
//     else if(question7.toLowerCase() != movies[i].toLowerCase() && x < 6){
//     console.log('here')
// 				alert("Wrong Answer");
//         question7 = prompt('Please try again');
//         x++;
//     }
//     else{
//             alert("end");
//     	break;
//     }
// }