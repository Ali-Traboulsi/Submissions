// var target = document.querySelector("#image1");

// target.addEventListener("mouseover",function(v){
//     if(v == "image1"){
//         target.src = "images/image1_2.jpg";
//     }
//     else if(v == "image2"){
//         target.src = "images/image2_2.jpg";
//     }
//     else if (v == "image3"){
//         target.src = "images/image3_2.jpg";
//     }
//     else if (v == "image4"){
//         target.src = "images/image4_2.jpg";
//     }
//     else if (v == "image5"){
//         target.src = "images/image5_2.jpg";
//     } 
//     else{
//         target.src = "";
//     }
// }

// );
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
         img.addEventListener("mouseout", function(e){
            e.target.src = `images/image${i+1}.jpg`
        });
    }) 

}

changeImg(imgs)
