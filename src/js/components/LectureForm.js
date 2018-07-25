import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class LectureForm extends React.Component {
  render() {
    return (
      <li>
        <FormControl>
          <InputLabel htmlFor="lec-name">
            {'과목명'}
          </InputLabel>
          <Input id="lec-name" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="lec-professor">
            {'교수명'}
          </InputLabel>
          <Input id="lec-professor" />
        </FormControl>
        <FormControl>
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
