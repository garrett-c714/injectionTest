const templates = `
<template id='test-template'>
<style>
    h1 {
        color: gray;
        background-color: blue;
    }
</style>
<div>
    <h1>Template Here</h1>
</div>
</template>`;
const house = document.querySelector('#templates-house');
house.insertAdjacentHTML('beforeend', templates);
class TestTemplate extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const template = document.querySelector('#test-template');
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        console.log('connected!');
    }
}
/*T he class creates the element by selecting a <template> element
from templates.html, and then instantiates it.The formula for the
class/structure will be identical with each template */
window.customElements.define('test-template' , TestTemplate);
//This line must be included outside of the class. ^

console.log('connection active'); //debug
