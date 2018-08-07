import React from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TimeBlock from './TimeBlock';
import Normal from '../options/Normal';
import Kitakubu from '../options/Kitakubu';

class Timetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 'normal',
      weekday: ['월', '화', '수', '목', '금', '토', '일'],
      timeUnitAlphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      timeUnitString: [
        'A 9:00 ~ 10:00',
        'B 10:30 ~ 11:30',
        'C 12:00 ~ 13:00',
        'D 13:30 ~ 14:30',
        'E 15:00 ~ 16:00',
        'F 16:30 ~ 17:30',
        'G 18:00 ~ 19:00',
        'H 19:30 ~ 20:30'
      ],
      displayLectures: {}
    };
  }

  setOption = (e) => {
    this.setState({
      option: e.target.value
    });
  }

  getWeekdayIndex(target) {
    const { weekday } = this.state;

    for (let i = 0; i < weekday.length; i += 1) {
      if (target === weekday[i]) {
        return i;
      }
    }

    return -1;
  }

  setTable = () => {
    const { credit, lectureForms, lectures } = this.props;
    const { option } = this.state;

    this.setState({ displayLectures: {} });

    lectureForms.forEach((lectureForm) => {
      const lecture = lectures[lectureForm];

      if (lecture.time) {
        const times = lecture.time.split(',');

        times.forEach((time) => {
          const weekday = time.replace(/\s/g, '').split('')[0];
          const hours = time.replace(/\s/g, '').split('')[1].toUpperCase();
          let displayLecture = null;

          // TODO: option 값에 따라 인스턴스 생성하도록 개선.
          if (option === 'normal') {
            displayLecture = new Normal(lecture, weekday, hours).execute();
          } else if (option === 'kitakubu') {
            displayLecture = new Kitakubu(lecture, weekday, hours, credit).execute();
          }

          if (weekday && hours) {
            const key = `${weekday}${hours}`;
            this.setState(prevState => ({
              displayLectures: {
                ...prevState.displayLectures,
                [key]: displayLecture
              }
            }));
          }
        });
      }
    });
  }

  render() {
    const {
      option,
      weekday,
      timeUnitAlphabet,
      timeUnitString,
      displayLectures
    } = this.state;

    return (
      <div id="timetable">
        <div id="timetable-radios">
          <FormControl component="fieldset" required className="option-radio-form">
            <RadioGroup
              aria-label="옵션 설정"
              name="option-radio"
              value={option}
              onChange={this.setOption}
              className="option-radio-form"
            >
              <FormControlLabel value="normal" control={<Radio />} label="일반" />
              <FormControlLabel value="kitakubu" control={<Radio />} label="칼퇴" />
              <FormControlLabel value="snorlax" control={<Radio />} label="잠만보" />
              <FormControlLabel value="hermione" control={<Radio />} label="헤르미온느" />
              <FormControlLabel value="astronaut" control={<Radio />} label="우주인" />
              <FormControlLabel value="nl" control={<Radio />} label="학교가기 싫어요" />
              <FormControlLabel value="lucky" control={<Radio />} label="I'm feeling lucky" />
            </RadioGroup>
          </FormControl>
        </div>

        <Button variant="contained" color="primary" onClick={this.setTable}>
          {'카피카피 룸룸!'}
        </Button>

        <table>
          <thead>
            <tr>
              <th>
                {'시간'}
              </th>
              {weekday.map((w) => {
                return (
                  <th key={w}>
                    {w}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {timeUnitString.map((time, t) => {
              return (
                <tr key={time} id={time.split('')[0]} className="block">
                  <td className="block-time">
                    {time}
                  </td>
                  {Array.from(Array(7).keys()).map((w) => {
                    const displayLectureKey = `${weekday[w]}${timeUnitAlphabet[t]}`;
                    return (
                      <TimeBlock
                        key={w}
                        displayLecture={displayLectures[displayLectureKey]}
                      />);
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Timetable;
