import React from 'react';
import Button from '@material-ui/core/Button';
import LectureForm from './LectureForm';

class LectureList extends React.Component {
  constructor() {
    super();

    this.state = {
      lectureNum: 3,
      lectures: [
        { key: 0 },
        { key: 1 },
        { key: 2 }
      ]
    };

    this.addLecture = this.addLecture.bind(this);
  }

  addLecture() {
    const { lectureNum, lectures } = this.state;

    this.setState({ lectures: [...lectures, { key: lectureNum }] });
    this.setState({ lectureNum: lectureNum + 1 });
  }

  render() {
    const { lectures } = this.state;

    return (
      <div id="class-list">
        <ul>
          {lectures.map((lec) => {
            return (
              <LectureForm key={lec.key} />
            );
          })}
        </ul>
        <Button variant="contained" onClick={this.addLecture}>
          {'수업 추가'}
        </Button>
      </div>
    );
  }
}

export default LectureList;
