var txt = document.querySelector("#text");

function changeCol(text){

    var green = document.querySelector(".green");
    var red = document.querySelector(".red");
    var blue = document.querySelector(".blue");

    green.addEventListener("click", function(){
        txt.style.color = "green";
    });

    red.addEventListener("click", function(){
        txt.style.color = "red";
    });

    blue.addEventListener("click", function(){
        txt.style.color = "blue";
    });
}

changeCol(txt);






