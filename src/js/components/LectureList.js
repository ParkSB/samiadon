import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Timetable from './Timetable';

class LectureList extends React.Component {
  constructor() {
    super();

    this.state = {
      lectureForms: [0, 1, 2],
      lectures: {
        0: {
          name: '자료구조',
          professor: '최정주',
          location: '산B103',
          time: '화C'
        },
        1: {
          name: '',
          professor: '',
          location: '',
          time: ''
        },
        2: {
          name: '',
          professor: '',
          location: '',
          time: ''
        },
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

  addLectureForm = () => {
    const { lectureForms, lectures } = this.state;
    const lectureLen = lectureForms.length;

    this.setState({
      lectureForms: [...lectureForms, lectureLen],
      lectures: {
        ...lectures,
        [lectureLen]: {
          name: '',
          professor: '',
          location: '',
          time: ''
        }
      }
    });
  }

  render() {
    const { lectureForms, lectures } = this.state;

    return (
      <div id="lecture-list">
        <ul>
          {lectureForms.map((lec) => {
            const nameId = `lecture-name-${lec}`;
            const professorId = `lecture-professor-${lec}`;
            const locationId = `lecture-location-${lec}`;
            const timeId = `lecture-time-${lec}`;

            return (
              <li key={lec}>
                <TextField id={nameId} label="과목명" value={lectures[lec].name} onChange={(e) => { this.setLectureInfo(e, lec, 'name'); }} />
                <TextField id={professorId} label="교수명" value={lectures[lec].professor} onChange={(e) => { this.setLectureInfo(e, lec, 'professor'); }} />
                <TextField id={locationId} label="강의실" value={lectures[lec].location} onChange={(e) => { this.setLectureInfo(e, lec, 'location'); }} />
                <TextField id={timeId} label="시간" value={lectures[lec].time} onChange={(e) => { this.setLectureInfo(e, lec, 'time'); }} />
              </li>
            );
          })}
        </ul>

        <Button variant="contained" onClick={this.addLectureForm}>
          {'수업 추가'}
        </Button>

        <Timetable lectureForms={lectureForms} lectures={lectures} />
      </div>
    );
  }
}

export default LectureList;
