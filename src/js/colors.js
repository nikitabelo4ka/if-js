const p1 = document.getElementById('text1');
const p2 = document.getElementById('text2');
const p3 = document.getElementById('text3');
const p = [p1, p2, p3];
const counters = [0, 0, 0];

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

function changeColor(i) {
  if (counters[i] >= colors.length) {
    counters[i] = 0;
  }
  p[i].style.color = colors[counters[i]];
  counters[i] += 1;
  return counters;
}

p1.addEventListener('click', () => changeColor(0));
p2.addEventListener('click', () => changeColor(1));
p3.addEventListener('click', () => changeColor(2));
