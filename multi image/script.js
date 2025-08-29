var element= document.querySelectorAll(".box");

element.forEach(function(ele){
    console.log(ele.childNodes[3]);
    ele.addEventListener("mouseenter",function(){
        ele.childNodes[3].style.opacity= 1;
    })
    ele.addEventListener("mouseleave",function(){
        ele.childNodes[3].style.opacity= 0;
    
    })
    ele.addEventListener("mousemove",function(a){
        ele.childNodes[3].style.left= a.x + "px";
        // ele.childNodes[3].style.top= a.y + "px";
    
    })
})


