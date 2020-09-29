var x = document.querySelector("#name");

x.addEventListener("focus", function(){
    x.style.backgroundColor = "blue";
});


x.addEventListener("blur", function(){
    x.style.backgroundColor = ""
    window.alert("Thank you for participation!");
});

