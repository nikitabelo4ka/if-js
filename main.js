let user = 'John Doe';
console.log(user);

let student = 'Nikita';
console.log(student);

user = student; // Nikita
console.log(user);

le test = 1;
test = test + 1; // 2
console.log(test);

test = test + '1'; // 21
console.log(test);

test = test - 1;
console.log(test); // 20

console.log(Boolean(test)) // 20

let mas = [2, 3, 5, 8];
let res = 1;
for (let i = 0; i < mas.length; i++) {
  res *= mas[i];
}
console.log(res);

let mas1 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < mas1.length; i++) {
  if (mas1[i] > 5 && mas1[i] < 10) {
    console.log(mas1[i]);
  }
}

let mas2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < mas2.length; i++) {
  if (mas2[i] % 2 == 0) {
    console.log(mas2[i]);
  }
}
