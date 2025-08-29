const friendstatus = document.querySelector("h4")
const friend= document.querySelector(".add")
var check = 0; 

friend.addEventListener("click",function(){
if(check == 0){friendstatus.innerHTML="friends"
friendstatus.style.color= "green"
friend.innerHTML = "unfriends"
check = 1 ;
}else{
    friendstatus.innerHTML="stranger"
friendstatus.style.color= "red"
friend.innerHTML = "friends"
check = 0;
}
})
