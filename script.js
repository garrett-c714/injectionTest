const title = document.querySelector('h1');
title.addEventListener('click' , () => {
    console.log('clicked');
})
/*Everything here is useless, proof of concept that 
multiple .js files can run on one document basically.*/
const navInject = document.querySelector('#inject-here');
navInject.addEventListener('click', () => {
    console.log('aha');
});
const x = `<p>Hello There</p>`;
navInject.insertAdjacentHTML('beforeend' , x);