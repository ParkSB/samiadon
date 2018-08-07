class Normal {
  constructor(lecture, weekday, hours) {
    this.key = `${weekday}${hours}`;
    this.lecture = lecture;
    this.weekday = weekday;
    this.hours = hours;
  }

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

export default Normal;
