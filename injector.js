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
/*The class creates the element by selecting a <template> element
from templates.html, and then instantiates it.The formula for the
class / structure will be identical with each template*/
window.customElements.define('test-template' , TestTemplate);
//This line must be included outside of the class. ^
console.log('connection active'); //debug