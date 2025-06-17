const stackList = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
const student = {
  level: 1,
  stack: stackList.slice(0, 1),
  improveLevel() {
    this.level++;
    if (this.level > stackList.length) {
      alert("Студент выучил все технологии!");
    } else {
      this.stack = stackList.slice(0, this.level);
    }
    return this;
  },
};

console.log(
  student.improveLevel().improveLevel().improveLevel().improveLevel()
);
