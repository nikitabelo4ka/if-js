/**
 * @jest-environment jsdom
 */

const { changeColor } = require('../colors');

document.body.innerHTML = `
    <p id="text1">Text 1</p>
    <p id="text2">Text 2</p>
    <p id="text3">Text 3</p>
`

describe('Checkout changeColor', () => {
    const element1 = document.getElementById('text1');
    const element2 = document.getElementById('text2');
    const element3 = document.getElementById('text3');

    test('Expect color magenta', async() => {
        for (let i = 0; i < elements.length; i += 1) {
            elements[i].click();
            changeColor(elements[i])
            const color = elements[i].style.color;
            expect(color).toBe('magenta')
        }
    })
    test('Expect color magenta', async() => {
        for (let i = 0; i < elements.length; i += 1) {
            elements[i].click();
            changeColor(elements[i])
            const color = elements[i].style.color;
            expect(color).toBe('cyan')
        }
    })
    test('Expect color magenta', async() => {
        for (let i = 0; i < elements.length; i += 1) {
            elements[i].click();
            changeColor(elements[i])
            const color = elements[i].style.color;
            expect(color).toBe('firebrick')
        }
    })
    test('Expect color magenta', async() => {
        for (let i = 0; i < elements.length; i += 1) {
            elements[i].click();
            changeColor(elements[i])
            const color = elements[i].style.color;
            expect(color).toBe('springgreen')
        }
    })
    test('Expect color magenta', async() => {
        for (let i = 0; i < elements.length; i += 1) {
            elements[i].click();
            changeColor(elements[i])
            const color = elements[i].style.color;
            expect(color).toBe('skyblue')
        }
    })
})
