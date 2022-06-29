// index
 var counter = 2;
    setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 3){
        counter = 1;
    }
}, 5000);

// product
const bigImg = document.querySelector(".product-container-left-big-img img")
const smallImg = document.querySelectorAll(".product-container-left-small-img img")
smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})