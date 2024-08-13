// 2-hbtn_course.js

// Define the HolbertonCourse class
export default class HolbertonCourse {
  // Constructor for initializing attributes
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(value) {
    if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
