var show = document.querySelector("#show");
var hide = document.querySelector("#hide");
var txt = document.querySelector("#text");


function showHide(txt){
    
    show.addEventListener("click", function(){
        txt.style.display = "block";
        });

    hide.addEventListener("click", function(){
        txt.style.display = "none";
    });
}


showHide(txt);



