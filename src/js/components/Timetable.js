import React from 'react';

class Timetable extends React.Component {
  render() {
    return (
      <div id="timetable">
        <table>
          <thead>
            <tr>
              <th>
                {'시간'}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr id="block-a" className="block">
              <td>
                {'9:00 ~ 10:00'}
              </td>
            </tr>
            <tr id="block-b" className="block">
              <td>
                {'10:30 ~ 11:30'}
              </td>
            </tr>
            <tr id="block-c" className="block">
              <td>
                {'12:00 ~ 13:00'}
              </td>
            </tr>
            <tr id="block-d" className="block">
              <td>
                {'13:30 ~ 14:30'}
              </td>
            </tr>
            <tr id="block-e" className="block">
              <td>
                {'15:00 ~ 16:00'}
              </td>
            </tr>
            <tr id="block-f" className="block">
              <td>
                {'16:30 ~ 17:30'}
              </td>
            </tr>
            <tr id="block-g" className="block">
              <td>
                {'18:00 ~ 19:00'}
              </td>
            </tr>
            <tr id="block-h" className="block">
              <td>
                {'19:30 ~ 20:30'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Timetable;
