var complexString = '';
var simpleString = '';
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


function generateRandomLetter() {
    var char;

    var charactersLength = characters.length;

    char = characters.charAt(Math.floor(Math.random() * charactersLength));

    return char;
}


function buildComplexString() {
    for ( var i = 0; i < 10000; i++){
        complexString += generateRandomLetter();
    }
    console.log(complexString);
    return complexString;
}

function buildSimpleString() {
    for ( var i = 0; i < 10000; i++){
        simpleString += 'ab';
    }
    console.log(simpleString);
    return simpleString;
}