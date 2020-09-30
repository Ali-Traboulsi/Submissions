var image = document.querySelector("#image1");

image.addEventListener("mouseover", function(){
    image.style.border="2px solid red";
})

image.addEventListener("mouseout", function(){
    image.style.border="";
})