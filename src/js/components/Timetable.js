import React from 'react';
import Button from '@material-ui/core/Button';
import TimeBlock from './TimeBlock';

class Timetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekday: ['월', '화', '수', '목', '금', '토', '일'],
      timeUnit: [
        'A 9:00 ~ 10:00',
        'B 10:30 ~ 11:30',
        'C 12:00 ~ 13:00',
        'D 13:30 ~ 14:30',
        'E 15:00 ~ 16:00',
        'F 16:30 ~ 17:30',
        'G 18:00 ~ 19:00',
        'H 19:30 ~ 20:30'
      ],
      displayLectures: []
    };
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
    const lecture = [];

    for (let i = 0; i < lectureForms.length; i += 1) {
      const times = lectures[lectureForms[i]].time.split(',');

      for (let j = 0; j < times.length; j += 1) {
        times[j] = times[j].replace(/\s/g, '');

        const weekday = times[j].split('')[0];
        const hours = times[j].split('')[1];

        if (weekday && hours) {
          lecture.push({
            name: lectures.name,
            weekday: this.getWeekdayIndex(weekday),
            hours: hours.toUpperCase()
          });
        }
      }
    }

    this.setState({
      displayLectures: [...lecture]
    });
  }

  render() {
    const { weekday, timeUnit, displayLectures } = this.state;
    return (
      <div id="timetable">
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
            {timeUnit.map((time, t) => {
              return (
                <tr key={time} id={time.split('')[0]} className="block">
                  <td className="block-time">
                    {time}
                  </td>
                  {Array.from(Array(7).keys()).map((w) => {
                    return (
                      <TimeBlock
                        key={w}
                        displayLectures={displayLectures}
                        weekday={w}
                        period={t}
                      />);
                  })}
                </tr>
              );
            })
            }
          </tbody>
        </table>

        <Button variant="contained" color="primary" onClick={this.setCommonTable}>
          {'카피카피 룸룸!'}
        </Button>
      </div>
    );
  }
}

export default Timetable;
