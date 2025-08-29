var box= document.querySelector('.container')
var love= document.querySelector("#heart")


box.addEventListener("dblclick", function(){
 love.style.transform = 'translate(-50%,-50%) scale(2)'
 love.style.color= "red"

 love.style.opacity= "0.8"
})
addEventListener("dblclick", function(){
   
    setTimeout(function(){
        love.style.opacity= "0";
        
    },1000)
    setTimeout(function(){
        love.style.transform= " translate(-50%,-50%) scale(0)"
    },2000)
})