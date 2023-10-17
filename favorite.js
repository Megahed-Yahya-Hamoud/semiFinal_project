let  favoriteNav=JSON.parse(localStorage.getItem("favoriteNav")) || [];
const favorite=document.querySelector(".cart tbody") 
let removeAll=document.querySelector(".remove-all")
let removeEle=document.querySelectorAll(".remove")

element();
    favoriteNav.forEach( country => {
        favorite.innerHTML+=`
        
        <tr class="cart-country p-3" data-id="${country.id}">
            <td class="pb-3 ps-3 ">
                <div class="d-flex gap-3 align-item-center">
                    <img class="cart-product-img img-fluid w-50" src="${country.img}">
                    <h5 class="mt-3">${country.title}<h5>
                </div>
            </td>
            <td>
            <div class="mb-2 p-3  d-flex flex-column text-end justify-content-end align-item-end">
            <button class="remove ms-4">Remove</button>
            </div>
            </td>
        </tr>
        
        `
    });

    function element(){

           removeEle.forEach((btn)=>{
            btn.addEventListener("click" , function(){
                const parent=this.closest(".country")
                const id=parent.dataset.id;
                favoriteNav=favoriteNav.filter(ele=>ele.id != id);
                parent.remove();
            
           })
        })
            removeAll.addEventListener("click" , ()=>{
                favoriteNav=[];
                localStorage.setItem("favoriteNav" ,JSON.stringify(favoriteNav));
                favorite.innerHTML+=``;
            })  
    }


  
let logIn=document.querySelector(".login")
let signIn=document.querySelector(".signin")
let userInfo=document.querySelector(".user-info")
let myUser=document.querySelector(".my-user")
let user=JSON.parse(localStorage.getItem("userobj"))
let logOut=document.querySelector(".logout")
userInfo.style.display="none"

if(user){
    logIn.remove();
    signIn.remove();
    userInfo.style.display="block"

    myUser.innerHTML +=`
    ${user.username}
    `
}else{
    
    logOut.remove();
    userInfo.remove();

}
logOut.addEventListener("click" , ()=>{
    localStorage.clear();
    setTimeout(()=>{
        window.open("page_login/page_login.html" ,"_self")
    },1000)
})
