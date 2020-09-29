// target input 
var input = document.querySelector("#name");

//target output
var output = document.querySelector("#textOutput");


// set event for printing input text in output
input.addEventListener("keypress", function(event){
    if(event.keyCode == 13){
    var textInput = input.value; 
    output.value = textInput;
}
});

