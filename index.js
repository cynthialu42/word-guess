var inquirer = require('inquirer');

//check if letter has been guessed. If not, put underscore. 
var arr = 'turtles';
function start(word){
    let str = '';
    for (let i = 0; i < word.length; i++){
        str += "_ ";
    }
    console.log(str);
}
inquirer.prompt([
    {
        type: 'input',
        name: 'input',
        message: 'Type a letter'
    }
]).then(function(answer){
    start(arr);
    var splitStr = arr.split('');
    //console.log(splitStr); // gets the letter typed
    var display = '';
    for(let i = 0; i < splitStr.length; i++){
        if(answer.input == splitStr[i]){
            display += answer.input + " ";
        }
        else{
            display += "_ ";
        }
    }
    console.log(display);
    // check if answer.input letter matches word. if so, show letter. Else, underscore
    // checkWord(answer.input)

});

