import React from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TimeBlock from './TimeBlock';

class Timetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'normal',
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

  setMode = (e) => {
    this.setState({
      mode: e.target.value
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

  setCommonTable = () => {
    const { lectureForms, lectures } = this.props;

    this.setState({ displayLectures: {} });

    for (let i = 0; i < lectureForms.length; i += 1) {
      const lecture = lectures[lectureForms[i]];

      if (lecture.time) {
        const times = lecture.time.split(',');

        for (let j = 0; j < times.length; j += 1) {
          times[j] = times[j].replace(/\s/g, '');

          const weekday = times[j].split('')[0];
          const hours = times[j].split('')[1].toUpperCase();

          if (weekday && hours) {
            const key = `${weekday}${hours}`;
            this.setState(prevState => ({
              displayLectures: {
                ...prevState.displayLectures,
                [key]: {
                  name: lecture.name,
                  professor: lecture.professor,
                  location: lecture.location,
                  weekday,
                  hours
                }
              }
            }));
          }
        }
      }
    }
  }

  render() {
    const {
      mode,
      weekday,
      timeUnitAlphabet,
      timeUnitString,
      displayLectures
    } = this.state;

    return (
      <div id="timetable">
        <div id="timetable-radios">
          <FormControl component="fieldset" required className="mode-radio-form">
            <RadioGroup
              aria-label="모드 설정"
              name="mode-radio"
              value={mode}
              onChange={this.setMode}
              className="mode-radio-form"
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

        <Button variant="contained" color="primary" onClick={this.setCommonTable}>
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
