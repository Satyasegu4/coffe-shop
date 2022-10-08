let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let orderP= document.getElementById("order"){
    let amount=0;
    function orderd(){
        amount=amount+1;
        
    }
}



let olist= document.getElementById("list-btn");
let list=0;
function oditems(){
    list=list+1;
    olist.innerText=list;
}





window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}









