// let next = document.querySelector('.next')
// let prev = document.querySelector('.prev')

// next.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').appendChild(items[0])
// })

// prev.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
// })

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}