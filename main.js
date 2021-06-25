const themeButton = document.querySelector('.switch');

let darkMode = 0;

const swapTheme = function(){
    const elements = document.querySelectorAll('.header, section, .selfie-img');
        for (let i = 0; i < elements.length; i++){
            elements[i].classList.add('dark');
            console.log('jmor')
        }

    
}

themeButton.addEventListener('click', swapTheme)

