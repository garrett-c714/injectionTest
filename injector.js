const templates = `
<template id='template-one'>
<style>
    h1 {
        color: gray;
        background-color: blue;
    }
</style>
<div>
    <h1>Template Here</h1>
</div>
</template>

<template id = 'template-two'>
<style>
    div {
        background-color: orange;
        display: flex;
        justify-content: space-around;
    }
    p {
        color: white;
        background-color: black;
    }
</style>
<div>
    <p>This is the second template.</p>
</div>
</template>`;

const house = document.querySelector('#templates-house');
house.insertAdjacentHTML('beforeend', templates);
//Do not modify these two lines.


class FirstTemplate extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const template = document.querySelector('#template-one');
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        console.log('connected!');
    }
}
window.customElements.define('element-one' , TestTemplate);



class SecondTemplate extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const template = document.querySelector('#template-two');
        shadowRoot.appendChild(template.content.cloneNode(true));
    };
    connectedCallback() {
        console.log('2 is connected');
    };
}
window.customElements.define('element-two' , TemplateTwo);

