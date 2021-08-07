const navBar = () =>{
    const hamburger = document.querySelector('.hamburger')
    const navUL = document.querySelector('nav ul')
    const navLinks = document.querySelectorAll('nav ul li')


    hamburger.addEventListener('click' ,  () =>{
        console.log('clicked');
        navUL.classList.toggle('nav-active')
        hamburger.classList.toggle('active')

        navLinks.forEach((Link, index) =>{
            if (Link.style.animation) {
                Link.style.animation = ''
            }else{
                Link.style.animation = `fade 0.5s ease forwards ${index / 10 + 0.3}s`
            }

        })
    })
}

navBar()