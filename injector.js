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
/*The stuff above here is important. All of the code you want to 
reuse will live in the 'templates' variable. Copy and paste the 
entire <template> into it. Formatting is not necessary but makes 
less headache*/
const house = document.querySelector('#templates-house');
house.insertAdjacentHTML('beforeend', templates);
/*These two lines inject the entirety of the templates variable 
into an invisible div on whatever page this is attached to,
allowing them to be read by later scripts.*/

/*Constructor for TestTemplate. A class like this would be made
for each element like nav, footer, etc.*/ 
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
from <templates-house>, and then instantiates it.The formula for the
class/structure will be identical with each template */
window.customElements.define('test-template' , TestTemplate);
//This line must be included outside of the class. ^
/*The way the arguments work for that is like this: 
(name of element in html doc , class name)
here, 'test-template' becomes <test-template></test-template> and 
gains life from the class TestTemplate. */


/*To use a new element you have to create a new class for it.
to make one for navbar, just copy and paste the whole class, 
change the name, and change the querySelector('#test-template')
to #whatever-the-name-of-the-template-is

The template MUST be added into the variable at the top of this file.
After the class the next line should be window.customElements.define()
in the same format as the test one above. And thats it. */

console.log('connection active'); //debug
