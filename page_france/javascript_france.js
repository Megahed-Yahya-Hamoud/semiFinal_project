let btn=document.querySelector("#bt")
window.onscroll=function(){
    if(window.scrollY >= 400){
        btn.style.display="block";
        if(window.scrollY >= 4800){
        btn.style.color="white";
        }
        else{
            btn.style.color="#1d1c45";
        }
    }else{
        btn.style.display="none";
    }
}

btn.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

//====================================




//====================================

let btnHome=document.querySelector(".btn-home")
btnHome.addEventListener("click" , ()=>{
    location.href="../index.html";
})