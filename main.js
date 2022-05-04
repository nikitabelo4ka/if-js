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
