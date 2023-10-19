let studentNames: string =
  "Rufai Samuel Tobi Prince-John Isaac Victor Francis Habeeb Joan Daniel Ekene Zion Wisdom Delight Stanyley Jessica Ayomide Regina Jemima Khalid Franklin Dennis Emmanuel Chinedu";

// interface data {
//     student: string
//     score: number
//     school: string
// }

class school {
  branch: string;
  score?: number;
  name?: string;
  static mySchool: Array<school> = [];
  constructor(branch: string) {
    this.branch = branch;
    school.mySchool.push(this);
  }
  getStudentWithScore(): any {
    let split = studentNames.split(" ");
    let rand = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

    return Array.from({ length: rand }, () => {
      let randNum = Math.floor(Math.random() * split.length);
      let score = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      return { name: split[randNum], score };
    });
  }
  static getAverageStudent(...args: any) {
    let ave: any = [];
    for (let i of args) {
      let average =
        i.student.map((el) => el.score).reduce((a, b) => a + b) /
        i.student.length;
      ave.push({ school: i.school, average: Math.floor(average) });
    }
    // console.log(ave);

    const goodSchools = ave.filter((el) => el.average > 50);
    const badSchools = ave.filter((el) => el.average < 50);
    return { goodSchools, badSchools };
  }
  //     }
  //      getBestStudent(...para:data[]){
  //         let flatted = para.flat()
  //     return flatted.sort((a,b)=> {
  //         return b.score - a.score
  //     })[0]

  // }
  // static getTopStudentsInEachSchool(...para: school[][]){
  //     let mty: data[] = []
  //     for (let i of para){
  //         let x: any = i.sort((a:any,b: any)=> {
  //             return b.score - a.score
  //         })[0]
  //         mty.push(x)
  //     }
  //     return mty.sort((a,b)=> b.score - a.score);
  // }
}

let schoolA = new school("Wilma");
let schoolB = new school("Tolu");
let schoolC = new school("Ojo");
// console.log(schoolA);

// console.log(school.getTopStudentsInEachSchool(
//     schoolA.getStudentWithScore().name,
//     schoolB.getStudentWithScore(),
//     schoolC.getStudentWithScore()
// ));

console.log(
  school.getAverageStudent(
    { school: schoolA.branch, student: schoolA.getStudentWithScore() },
    { school: schoolB.branch, student: schoolB.getStudentWithScore() },
    { school: schoolC.branch, student: schoolC.getStudentWithScore() }
  )
);
