// Lesson-2

let user = 'John Doe';
console.log(user);

const student = 'Nikita';
console.log(student);

user = student; // Nikita
console.log(user);

let test = 1;
test += 1; // 2
console.log(test);

test += '1'; // 21
console.log(test);

test -= 1;
console.log(test); // 20

console.log(Boolean(test)); // 20

const mas = [2, 3, 5, 8];
let res = 1;
for (let i = 0; i < mas.length; i += 1) {
  res *= mas[i];
}
console.log(res);

const mas1 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < mas1.length; i += 1) {
  if (mas1[i] > 5 && mas1[i] < 10) {
    console.log(mas1[i]);
  }
}

const mas2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < mas2.length; i += 1) {
  if (mas2[i] % 2 === 0) {
    console.log(mas2[i]);
  }
}

// Lesson-3

function palindrome(str) {
  const arr = str.split('');
  const arrReverse = arr.reverse();
  const strReverse = arrReverse.join('');

  if (str === strReverse) {
    return true;
  }

  return false;
}

palindrome('шалаш');
palindrome('дом');

function min(a, b) {
  if (a > b) {
    return b;
  }
  return a;
}

min(2, 5);

function max(a, y) {
  if (a > y) {
    return a;
  }
  return y;
}

max(2, 5);

function min2(a, b) {
  const minNumber = a > b ? b : a;

  return minNumber;
}

min2(2, 5);
min2(5, 2);

function max2(a, y) {
  const maxNumber = a > y ? a : y;

  return maxNumber;
}

max2(2, 5);
max2(5, 2);

const mas3 = [];
for (let i = 0; i < 10; i += 1) {
  mas3[i] = Math.round(Math.random() * 100);
}

function zamena(arrNumber) {
  const result = [];

  for (let i = 0; i < arrNumber.length; i += 1) {
    if (!String(arrNumber[i]).includes('0')) {
      result.push(arrNumber[i]);
    } else {
      result.push(String(arrNumber[i]).replaceAll('0', 'zero'));
    }
  }

  return result;
}

zamena(mas3);

// Lesson-4

function sum(a) {
  let currentSum = a;

  function secondSum(b) {
    currentSum += b;
    return secondSum;
  }
  secondSum.getResult = function returnSum() {
    return currentSum;
  };
  return secondSum;
}
console.log(sum(5)(2)(3).getResult());

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const counters = [0, 0, 0];

const element1 = document.getElementById('text1');
const element2 = document.getElementById('text2');
const element3 = document.getElementById('text3');
const elements = [element1, element2, element3];

function changeColor(i) {
  if (counters[i] >= colors.length) {
    counters[i] = 0;
  }
  elements[i].style.color = colors[counters[i]];
  counters[i] += 1;
  console.log(counters);
}

element1.addEventListener('click', () => changeColor(0));
element2.addEventListener('click', () => changeColor(1));
element3.addEventListener('click', () => changeColor(2));
