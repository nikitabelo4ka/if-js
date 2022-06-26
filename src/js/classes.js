const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

studentsData.sort((prev, next) => next.admissionYear - prev.admissionYear);

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return `${new Date().getFullYear() - this.admissionYear}`;
  }
}

class Students {
  constructor(students) {
    this.students = studentsData;
  }

  getInfo() {
    return this.students.map((student) => `${student.firstName} ${student.lastName} - ${student.courseName}, ${new Date().getFullYear() - student.admissionYear} курс`);
  }
}

const students = new Students(studentsData);
console.log(students.getInfo());
