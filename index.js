var createComplexFile = document.getElementById('complex');
var createSimpleFile = document.getElementById('simple');

var link = document.getElementById('downloadlink');
var textFile = null; 

var isComplex = false;

createComplexFile.addEventListener("click", () => {
    buildComplexString();
    isComplex = true;
    link.href = makeTextFile(complexString);
    link.style.display = 'block';
    setDownloadAttribute(link, isComplex); 
});

createSimpleFile.addEventListener("click", () => {
    buildSimpleString();
    isComplex = false;
    link.href = makeTextFile(simpleString);
    link.style.display = 'block';
    setDownloadAttribute(link, isComplex); 
});


function makeTextFile(text) {
    var data = new Blob([text], {type: 'text/plain'});  
    
    // If we are replacing a previously generated file we need to  
    // manually revoke the object URL to avoid memory leaks.  
    if (textFile !== null) {  
    window.URL.revokeObjectURL(textFile);  
    }  

    textFile = window.URL.createObjectURL(data); 

    return textFile;
}


function getDownloadName(isComplex){

    if(isComplex == true){
        return "arquivo_complexo.txt";
    }else{
        return "arquivo_simples.txt";
    }
    
}

function setDownloadAttribute(link, isComplex) {
    link.setAttribute("download", getDownloadName(isComplex))
}











//     var createSimpleFile = document.getElementById('simple');
// createSimpleFile.addEventListener("click", () => {
//     buildComplexString();
// });
// (function () {  
//     var textFile = null,  
//     makeTextFile = function (text) {  
//         var data = new Blob([text], {type: 'text/plain'});  
    
//         // If we are replacing a previously generated file we need to  
//         // manually revoke the object URL to avoid memory leaks.  
//         if (textFile !== null) {  
//         window.URL.revokeObjectURL(textFile);  
//         }  
    
//         textFile = window.URL.createObjectURL(data);  
    
//         return textFile;  
//     };  
    
    
//     var create = document.getElementById('create'),  
//         textbox = document.getElementById('textbox');  
    
//     create.addEventListener('click', function () {  
//         var link = document.getElementById('downloadlink');  
//         link.href = makeTextFile(textbox.value);  
//         link.style.display = 'block';  
//     }, false);  
//     })(); 