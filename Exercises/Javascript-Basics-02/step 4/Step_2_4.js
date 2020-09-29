var resetName = document.querySelector("#name");
var resetSurname = document.querySelector("#surname");
var resetCity = document.querySelector("#city");
var resetButton = document.querySelector("button");

resetButton.addEventListener("click", function(){
     resetName.value = "";
     resetSurname.value = "";
     resetCity.value = "";

});

