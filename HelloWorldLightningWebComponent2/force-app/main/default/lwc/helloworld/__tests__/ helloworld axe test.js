// helloworld axe test.js
import { createElement } from 'lwc';
import Helloworld from 'c/helloworld';
const { axe, toHaveNoViolations } = require('jest-axe')
expect.extend(toHaveNoViolations)

// https://github.com/nickcolley/jest-axe
// const { axe, toHaveNoViolations } = require('jest-axe')
// expect.extend(toHaveNoViolations)

// it('should demonstrate this matcher`s usage', async () => {
//   const render = () => '<img src="#"/>'

//   // pass anything that outputs html to axe
//   const html = render()

//   expect(await axe(html)).toHaveNoViolations()
// })


describe('c-helloworld AXE test', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });
    
    // it('should be accessible', (done) => {

    //     // Create element
    //     const element = createElement('c-helloworld', {
    //         is: Helloworld
    //     });

    //     document.body.appendChild(element);
    //     console.log('>>>>> axe ' + axe);
    //     console.log('>>>>> run ' + run);
    //     let _div = element.shadowRoot.querySelector('p');
    //     console.log('>>> print _div.toString ' + _div.toString());
    //     console.dir('>>> print _div ' + _div);
    //     console.dir('>>> print _div.toString ' + _div.innerHTML);
    //     // const _div = document; // element.shadowRoot.querySelector('p');

    //     const isAccessible = (div) => {
    //         axe().run(_, _, (err, { violations }) => {
    //             console.log(violations);
    //             expect(err).toBe(null);
    //             expect(violations).toHaveLength(0);
    //             done();
    //         });
    //     }
    //     // _div = '<p>hello</p>';
    //     isAccessible(_div);

    //     // expect(await axe(testdoc)).toHaveNoViolations();
    // });

    it('should demonstrate this matcher`s usage', async () => {
    // const render = () => '<img src="#"/>'
        // Create element
    const element = createElement('c-helloworld', {
        is: Helloworld
    });
    document.body.appendChild(element);

    console.log('>>>>>> element. ' + element);
    console.log('>>>>>> element.querySelector ' + element.querySelector('div'));
    // const _element = element.shadowRoot.querySelector('div');
    // const _element = element.getElementById('testexample');


    // const div = element.shadowRoot.querySelector('#testexample1');
    // expect(div.textContent).toMatch(/Hello/);


        // pass anything that outputs html to axe
        // const html = render

        expect(await axe(document.body)).toHaveNoViolations();
        // expect(await axe(div)).toHaveNoViolations();
    })

})


