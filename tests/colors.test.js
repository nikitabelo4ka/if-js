/**
 * @jest-environment jsdom
 */

const counters = [0, 0, 0];
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const p1 = document.getElementById('text1');
const p2 = document.getElementById('text2');
const p3 = document.getElementById('text3');
const p = [p1, p2, p3];

function changeColor(i) {
  if (counters[i] >= colors.length) {
    counters[i] = 0;
  }
  p[i].style.color = colors[counters[i]];
  counters[i] += 1;
  return counters;
}

describe('Checkout changeColor', () => {
  document.body.innerHTML =
    '<p id="text1">Text 1</p>'
      + '<p id="text2">Text 2</p>'
      + '<p id="text3">Text 3</p>';

  const element1 = document.getElementById('text1');
  const element2 = document.getElementById('text2');
  const element3 = document.getElementById('text3');
  const elements = [element1, element2, element3];

  const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

  test('Expect color magenta', async () => {
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].click();
      changeColor(elements[i]);
      const color = colors[0];
      expect(color).toBe('magenta');
    }
  });
  test('Expect color cyan', async () => {
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].click();
      changeColor(elements[i]);
      const color = colors[1];
      expect(color).toBe('cyan');
    }
  });
  test('Expect color firebrick', async () => {
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].click();
      changeColor(elements[i]);
      const color = colors[2];
      expect(color).toBe('firebrick');
    }
  });
  test('Expect color springgreen', async () => {
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].click();
      changeColor(elements[i]);
      const color = colors[3];
      expect(color).toBe('springgreen');
    }
  });
  test('Expect color skyblue', async () => {
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].click();
      changeColor(elements[i]);
      const color = colors[4];
      expect(color).toBe('skyblue');
    }
  });
});
