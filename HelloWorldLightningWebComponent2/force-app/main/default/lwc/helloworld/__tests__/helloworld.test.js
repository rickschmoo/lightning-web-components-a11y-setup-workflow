// hello.test.js
import { createElement } from 'lwc';
import Helloworld from 'c/helloworld';

describe('c-helloworld', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays greeting', () => {
        // Create element
        const element = createElement('c-helloworld', {
            is: Helloworld
        });
        document.body.appendChild(element);

        // Verify displayed greeting
        const div = element.shadowRoot.querySelector('p');
        expect(div.textContent).toMatch(/Hello/);
    });


});