

let header = document.getElementById('header');
let headerH = header.clientHeight;

let buttonToStart = document.querySelector('.main__btn')

let rootElement = document.documentElement;



window.onscroll = () => {
    let scroll = window.scrollY;

    if (scroll >= headerH) {
        buttonToStart.classList.add('fixed')



    } else {
        buttonToStart.classList.remove('fixed')

    }


}

buttonToStart.addEventListener("click", scrollToTop)

function scrollToTop() {

    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}