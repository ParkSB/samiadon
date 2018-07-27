import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class LectureForm extends React.Component {
  constructor(props) {
    super(props);

    const { id } = this.props;

    this.state = {
      input: '',
      lecture: {
        key: id,
        name: '',
        professor: '',
        location: ''
      }
    };
  }

  setInput = (str) => {
    this.setState({
      input: str
    });
  }

  setLecName = (e) => {
    const { onChange } = this.props;
    const { input, lecture } = this.state;

    this.setInput(e.target.value);
    this.setState(prevState => ({
      lecture: {
        ...prevState.lecture,
        name: input
      }
    }));

    onChange(lecture);
  }

  setLecProfessor = (e) => {
    const { onChange } = this.props;
    const { input, lecture } = this.state;

    this.setInput(e.target.value);
    this.setState(prevState => ({
      lecture: {
        ...prevState.lecture,
        professor: input
      }
    }));

    onChange(lecture);
  }

  setLecLocation = (e) => {
    const { onChange } = this.props;
    const { input, lecture } = this.state;

    this.setInput(e.target.value);
    this.setState(prevState => ({
      lecture: {
        ...prevState.lecture,
        location: input
      }
    }));

    onChange(lecture);
  }

  render() {
    return (
      <li>
        <FormControl onChange={this.setLecName}>
          <InputLabel htmlFor="lec-name">
            {'과목명'}
          </InputLabel>
          <Input id="lec-name" />
        </FormControl>
        <FormControl onChange={this.setLecProfessor}>
          <InputLabel htmlFor="lec-professor">
            {'교수명'}
          </InputLabel>
          <Input id="lec-professor" />
        </FormControl>
        <FormControl onChange={this.setLecLocation}>
          <InputLabel htmlFor="lec-location">
            {'강의실'}
          </InputLabel>
          <Input id="lec-location" />
        </FormControl>
      </li>
    );
  }
}

export default LectureForm;
