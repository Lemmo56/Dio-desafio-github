const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkModeCLASS = 'dark-mode';

function changeMode(){
    chageClasses();
    changeText();
}
function chageClasses(){
    button.classList.toggle(darkModeCLASS);
    h1.classList.toggle(darkModeCLASS);
    body.classList.toggle(darkModeCLASS);
    footer.classList.toggle(darkModeCLASS);
}
function changeText(){
    if(body.classList.contains(darkModeCLASS)){
        button.innerHTML = 'Light Mode';
        h1.innerHTML = 'Dark Mode ON';
        return;
    }

    button.innerHTML = 'Dark Mode';
    h1.innerHTML = 'Light Mode ON'
}





button.addEventListener('click', changeMode);