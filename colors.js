const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const element1 = document.getElementById('text1');

const element2 = document.getElementById('text2');

const element3 = document.getElementById('text3');

const elements = [element1, element2, element3];

const counters = [0, 0, 0];

function changeColor(i) {
  if (counters[i] >= colors.length) {
    counters[i] = 0;
  }
  elements[i].style.color = colors[counters[i]];
  counters[i] += 1;
  return counters;
}

element1.addEventListener('click', () => changeColor(0));
element2.addEventListener('click', () => changeColor(1));
element3.addEventListener('click', () => changeColor(2));

module.exports = { changeColor };
