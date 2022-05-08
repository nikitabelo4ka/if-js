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

function zamena(num) {
  const result = [];

  for (let i = 0; i < num.length; i += 1) {
    if (!String(num[i]).includes('0')) {
      result.push(num[i]);
    } else {
      result.push(String(num[i]).replaceAll('0', 'zero'));
    }
  }

  return result;
}

zamena(mas3);
