class Kitakubu {
  constructor(lecture, weekday, hours, credit) {
    this.key = `${weekday}${hours}`;
    this.lecture = lecture;
    this.weekday = weekday;
    this.hours = hours;
    this.credit = credit;
  }

  // TODO: 강의 배치 로직 구현
  execute() {
    const displayLecture = {
      name: this.lecture.name,
      professor: this.lecture.professor,
      location: this.lecture.location,
      isRequired: this.lecture.isRequired,
      weekday: this.weekday,
      hours: this.hours
    };

    return displayLecture;
  }
}

export default Kitakubu;
