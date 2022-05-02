let user = 'John Doe';
console.log(user);

let student = 'Nikita';
console.log(student);

user = student; // Nikita
console.log(user);

let test = 1;
test = test + 1; //2
console.log(test);

test = test + '1'; //21
console.log(test);

test = test - 1;
console.log(test); //20

Boolean(test);
console.log(test); //20

let mas = [2, 3, 5, 8];
let res = 1;
for (let i = 0; i < mas.length; i++) {
  res *= mas[i];
}
console.log(res);

let mas = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < mas.length; i++) {
  if (mas[i] > 5 && mas[i] < 10) {
    console.log(mas[i]);
  }
}

let mas = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < mas.length; i++) {
  if (mas[i] % 2 == 0) {
    console.log(mas[i]);
  }
}
