//A

interface xyPointer1 {
  name?: string;
  xpoint: number;
  ypoint: number;
}

interface xyPointer2 {
  name?: string;
  ypoint: number;
  xpoint: number;
}

interface data {
  myName: string;
  yourName: string;
  distancePoint: number;
}

class student {
  name: string;
  xpoint: number;
  ypoint: number;
  static students: Array<student> = [];
  constructor(name: string, xpoint: number, ypoint: number) {
    this.name = name;
    this.xpoint = xpoint;
    this.ypoint = ypoint;
    student.students.push(this);
  }

  static distanceFromTobiToJoan(tobi: xyPointer1, joan: xyPointer2) {
    let xPoint = tobi.xpoint - joan.xpoint;
    let yPoint = tobi.ypoint - joan.ypoint;
    let sqr = Math.sqrt(Math.pow(xPoint, 2) + Math.pow(yPoint, 2));
    return `This is the distance between Tobi and Joan: ${parseFloat(
      sqr.toFixed(2)
    )}`;
  }

  static farthestStudentFromMe() {
    const myData = student.students;
    let result: data[] = [];
    for (let x of myData) {
      if (x.name === student.students[0].name) {
      } else {
        let X = student.students[0].xpoint - x.xpoint;
        let Y = student.students[0].ypoint - x.ypoint;
        let solve = Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2));
        result.push({
          myName: student.students[0].name,
          yourName: x.name,
          distancePoint: parseFloat(solve.toFixed(2)),
        });
      }
    }
    let filtered = result.filter((el: data) => el.yourName);
    filtered.sort((a, b) => b.distancePoint - a.distancePoint);
    return console.log(
      `The farthest from me is`,
      filtered[0].yourName,
      `with a distance of ${filtered[0].distancePoint}`
    );
  }

  static closestStudentToMe() {
    const myData = student.students;
    let result: data[] = [];
    for (let x of myData) {
      if (x.name === student.students[0].name) {
      } else {
        let X = student.students[0].xpoint - x.xpoint;
        let Y = student.students[0].ypoint - x.ypoint;
        let solve = Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2));
        result.push({
          myName: student.students[0].name,
          yourName: x.name,
          distancePoint: parseFloat(solve.toFixed(2)),
        });
      }
    }
    let filtered = result.filter((el: data) => el.yourName);
    filtered.sort((a, b) => b.distancePoint - a.distancePoint);
    return console.log(
      `The closest to me is`,
      filtered[4].yourName,
      `with a distance of ${filtered[4].distancePoint}`
    );
  }

  static passingAMessage() {
    const myData = student.students;
    let result: data[] = [];
    for (let x of myData) {
      if (x.name === student.students[0].name) {
      } else {
        let X = student.students[0].xpoint - x.xpoint;
        let Y = student.students[0].ypoint - x.ypoint;
        let solve = Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2));
        result.push({
          myName: student.students[0].name,
          yourName: x.name,
          distancePoint: parseFloat(solve.toFixed(2)),
        });
      }
    }
    let filtered = result.filter((el: data) => el.yourName);
    let sorted = filtered.sort((a, b) => b.distancePoint - a.distancePoint);
    return `I'd pass the message through the order of closest to the highest, which is from ${sorted[4].yourName} to ${sorted[0].yourName}`;
  }
}

let I = new student("I", 3, 8);
let tobi = new student("Tobi", 9, 5);
let Sean = new student("Sean", 6, 3);
let Ayo = new student("Ayo", 2, 6);
let Zion = new student("Zion", 1, 3);
let joan = new student("Joan", 2, 3);
console.clear();
console.log(student.distanceFromTobiToJoan(tobi, joan));
console.log(student.farthestStudentFromMe());
console.log(student.closestStudentToMe());
console.log(student.passingAMessage());
