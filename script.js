var bulb=document.querySelector("div")
var btn=document.querySelector("button")
var flag=0
btn.addEventListener("click",function(){
    if(flag===0){
    bulb.style.backgroundColor="gold"
    flag=1
}
    else{
        bulb.style.backgroundColor="white"
        flag=0
    }
})
