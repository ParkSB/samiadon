import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class LectureList extends React.Component {
  constructor() {
    super();

    this.state = {
      lectureFormNum: 3,
      lectureForms: [{ key: 0 }, { key: 1 }, { key: 2 }],
      lectures: {
        0: {},
        1: {},
        2: {}
      }
    };
  }

  setLecName = (e, key) => {
    const input = e.target.value;
    this.setState(prevState => ({
      lectures: {
        ...prevState.lectures,
        [key]: {
          ...prevState.lectures[key],
          name: input
        }
      }
    }));
  }

  setLecProfessor = (e, key) => {
    const input = e.target.value;

    this.setState(prevState => ({
      lectures: {
        ...prevState.lectures,
        [key]: {
          ...prevState.lectures[key],
          professor: input
        }
      }
    }));
  }

  setLecLocation = (e, key) => {
    const input = e.target.value;

    this.setState(prevState => ({
      lectures: {
        ...prevState.lectures,
        [key]: {
          ...prevState.lectures[key],
          location: input
        }
      }
    }));
  }

  addLectureForm = () => {
    const { lectureFormNum, lectureForms, lectures } = this.state;

    this.setState({
      lectureForms: [...lectureForms, { key: lectureFormNum }],
      lectureFormNum: lectureFormNum + 1,
      lectures: { ...lectures, [lectureFormNum]: {} }
    });

    console.log(lectures);
  }

  render() {
    const { lectureForms, lectures } = this.state;

    return (
      <div id="class-list">
        <form>
          <ul>
            {lectureForms.map((lec) => {
              const nameId = `lecture-name-${lec.key}`;
              const professorId = `lecture-professor-${lec.key}`;
              const locationId = `lecture-location-${lec.key}`;

              return (
                <li key={lec.key}>
                  <TextField id={nameId} label="과목명" value={lectures[lec.key].name} onChange={(e) => { this.setLecName(e, lec.key); }} />
                  <TextField id={professorId} label="교수명" value={lectures[lec.key].professor} onChange={(e) => { this.setLecProfessor(e, lec.key); }} />
                  <TextField id={locationId} label="강의실" value={lectures[lec.key].location} onChange={(e) => { this.setLecLocation(e, lec.key); }} />
                </li>
              );
            })}
          </ul>
        </form>
        <Button variant="contained" onClick={this.addLectureForm}>
          {'수업 추가'}
        </Button>
        <Button variant="contained" color="primary">
          {'카피카피 룸룸!'}
        </Button>
      </div>
    );
  }
}

export default LectureList;
