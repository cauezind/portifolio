const btn = document.getElementById('menu-btn')
const ancora1 = document.querySelector('#anchor1')
const ancora2 = document.querySelector('#anchor2')
const ancora3 = document.querySelector('#anchor3')

function toggleMenu(){

    if(event.type === 'touchstart') event.preventDefault()

    const nav = document.querySelector('nav')

    nav.classList.toggle('active')
}

btn.addEventListener('click', toggleMenu)
ancora1.addEventListener('click', toggleMenu)
ancora2.addEventListener('click', toggleMenu)
ancora3.addEventListener('click', toggleMenu)
btn.addEventListener('touchstart', toggleMenu)
ancora1.addEventListener('touchstart', toggleMenu)
ancora2.addEventListener('touchstart', toggleMenu)
ancora3.addEventListener('touchstart', toggleMenu)




let btnColor = document.querySelector('.img') 

btnColor.addEventListener('click', function changeColor() {

    
    const body = document.querySelector('body')
    body.classList.toggle('dark')
    
})
 

