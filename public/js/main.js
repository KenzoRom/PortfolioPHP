const enableTheme = document.querySelector('.theme-enable');
const disableTheme = document.querySelector('.theme-disable');
let currentMode = localStorage.getItem("darkmode");
let elements = document.querySelectorAll('.header, section, .selfie-img');
let theme = currentMode;

if(theme == 'dark'){
    for (let i = 0; i < elements.length; i++){
        elements[i].classList.add('dark');
    }
}

enableTheme.addEventListener('click', () => {
    for (let i = 0; i < elements.length; i++){
            elements[i].classList.add('dark');
        }
        theme = 'dark';
        localStorage.setItem("darkmode", theme);
})

disableTheme.addEventListener('click', () => {
    for (let i = 0; i < elements.length; i++){
        elements[i].classList.remove('dark');
    }
    theme = 'light';
    localStorage.setItem("darkmode", theme);
})