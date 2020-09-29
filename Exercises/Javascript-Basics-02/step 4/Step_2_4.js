var resetName = document.querySelector("#name");
var resetSurname = document.querySelector("#surname");
var resetCity = document.querySelector("#city");
var resetButton = document.querySelector("button");

resetButton.addEventListener("click", function(){
    var answer = window.confirm("Do You really want to proceed? \nEverything will be deleted");
    if(answer == true){
        resetName.value = "";
        resetSurname.value = "";
        resetCity.value = "";
    }
});

