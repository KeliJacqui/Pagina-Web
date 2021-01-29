const right =document.querySelector('.bx-menu-alt-right');
const menu =document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(right)

right.addEventListener('click',()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click',e=>{
    if(menu.classList.contains('spread') && e.target !=menu && e.target !=right){
           
        menu.classList.toggle("spread")
    }
})