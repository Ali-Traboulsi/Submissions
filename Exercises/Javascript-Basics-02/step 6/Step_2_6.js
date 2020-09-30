var imgs = document.querySelectorAll("img");


function changeImg(imgs){

    Array.from(imgs).forEach((img, i) => {
        let endOfSrc = img.src
             console.log(endOfSrc.slice(-5) , i+1)   
            console.log(endOfSrc.slice(38,-4) + "_2.jpg")
            //console.log(endOfSrc)
         img.addEventListener("mouseover", function(e) {

            e.target.src = (`images/image${i+1}` + endOfSrc.slice(38,-4) + "_2.jpg")  

         })
    }) 

}

function restoreImg(imgs){

    Array.from(imgs).forEach((img, i) => {
        let endOfSrc = img.src
             console.log(endOfSrc.slice(-5) , i+1)   
            console.log(endOfSrc.slice(38,-4) + "_2.jpg")
            //console.log(endOfSrc)
         
         img.addEventListener("mouseout", function(e){
            e.target.src = `images/image${i+1}.jpg`
        });
    }) 

}

changeImg(imgs);
restoreImg(imgs);

