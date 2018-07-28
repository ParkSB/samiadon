import React from 'react';

class TimeBlock extends React.Component {
  render() {
    const { displayLecture } = this.props;
    if (displayLecture) {
      return (
        <td className="unit lecture">
          <span className="lecture-name">
            {displayLecture.name}
          </span>
          <span className="lecture-info">
            {displayLecture.professor}
            {' · '}
            {displayLecture.location}
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
