import React from 'react';

class TimeBlock extends React.Component {
  render() {
    const { displayLecture } = this.props;

    if (displayLecture) {
      const {
        name,
        professor,
        location,
        isRequired
      } = displayLecture;

      return (
        <td className={isRequired ? 'unit lecture-required' : 'unit lecture-unrequired'}>
          <span className="lecture-name">
            {name}
          </span>
          <span className="lecture-info">
            {professor}
            {professor && location ? ' · ' : ''}
            {location}
          </span>
        </td>
      );
    }

    return (
      <td className="unit" />
    );
  }
}

export default TimeBlock;
