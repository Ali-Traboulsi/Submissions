var pass = document.querySelector("#password");
var confirm = document.querySelector("#confirmation");
var test = document.querySelector("button");

function misMatch(pass, confirm){

    var inputBox = document.querySelector("input");
    
    test.addEventListener("click", function(){
        if (pass.value == "" && confirm.value == ""){
            alert("Enter a password");
        }

        else if (pass.value == confirm.value){
            alert("password confirmed!");
            pass.style.border = "";
            confirm.style.border = "";
        }

        else{
            pass.style.border = "1px solid red";
            confirm.style.border = "1px solid red";
        }
    })

}

misMatch(pass, confirm);

