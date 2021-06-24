const themeSwitch = document.querySelector('.theme-switcher');

function swapTheme(){
    const BAR = document.querySelector('#NavBar');
    BAR.classList.toggle("navbar-light");
    BAR.classList.toggle("navbar-dark");
    BAR.classList.toggle("bg-light");
    const elements = document.querySelector('.body-bg');
    if(elements){
        elements.classList.toggle('bg-color');
    }
    const elements2 = document.querySelectorAll('.p, .h2');
    for(let switcherino of elements2){
        switcherino.classList.toggle('font-color');
    }
    const button = document.querySelector('.theme-switcher');
    button.classList.toggle('button-black');
}

themeSwitch.addEventListener('click', swapTheme);