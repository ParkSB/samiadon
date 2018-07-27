import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Timetable from './Timetable';

class LectureList extends React.Component {
  constructor() {
    super();

    this.state = {
      lectureFormNum: 3,
      lectureForms: [{ key: 0 }, { key: 1 }, { key: 2 }],
      lectures: {
        0: { name: '', professor: '', location: '' },
        1: { name: '', professor: '', location: '' },
        2: { name: '', professor: '', location: '' }
      }
    };
  }

  setLectureInfo = (e, key, type) => {
    const input = e.target.value;
    this.setState(prevState => ({
      lectures: {
        ...prevState.lectures,
        [key]: {
          ...prevState.lectures[key],
          [type]: input
        }
      }
    }));
  }

  getResult = () => {
    const { lectures } = this.state;

    console.table(lectures);
  }

  addLectureForm = () => {
    const { lectureFormNum, lectureForms, lectures } = this.state;

    this.setState({
      lectureForms: [...lectureForms, { key: lectureFormNum }],
      lectureFormNum: lectureFormNum + 1,
      lectures: {
        ...lectures,
        [lectureFormNum]: {
          name: '',
          professor: '',
          location: ''
        }
      }
    });
  }

  render() {
    const { lectureForms, lectures } = this.state;

    return (
      <div id="lecture-list">
        <form>
          <ul>
            {lectureForms.map((lec) => {
              const nameId = `lecture-name-${lec.key}`;
              const professorId = `lecture-professor-${lec.key}`;
              const locationId = `lecture-location-${lec.key}`;

              return (
                <li key={lec.key}>
                  <TextField id={nameId} label="과목명" value={lectures[lec.key].name} onChange={(e) => { this.setLectureInfo(e, lec.key, 'name'); }} />
                  <TextField id={professorId} label="교수명" value={lectures[lec.key].professor} onChange={(e) => { this.setLectureInfo(e, lec.key, 'professor'); }} />
                  <TextField id={locationId} label="강의실" value={lectures[lec.key].location} onChange={(e) => { this.setLectureInfo(e, lec.key, 'location'); }} />
                </li>
              );
            })}
          </ul>
        </form>
        <Button variant="contained" onClick={this.addLectureForm}>
          {'수업 추가'}
        </Button>
        <Button variant="contained" color="primary" onClick={this.getResult}>
          {'카피카피 룸룸!'}
        </Button>
        <Timetable />
      </div>
    );
  }
}

export default LectureList;
