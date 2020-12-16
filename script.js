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

/*Same goes for everything down here. This is where my "aha" 
moment occured so i'm leaving it in*/
const x = `<p>Hello There</p>`;
navInject.insertAdjacentHTML('beforeend' , x);