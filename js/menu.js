const camara = document.querySelector('.camara')
const menu = document.querySelector('.menu-navegacion')

// console.log(menu)
// console.log(camara)


camara.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})


window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != camara    ){
            menu.classList.toggle("spread")

    }
})