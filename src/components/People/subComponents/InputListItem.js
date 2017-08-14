import React from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';

let input;
const InputListItem = ({ event, people, index }) =>
  <FormGroup>
    <FormControl
      style={{
        marginTop: '-10%',
        width: '90%',
        marginLeft: '5%',
        textAlign: 'center',
      }}
      type="text"
      inputRef={ref => { input = ref; }}
      placeholder="Type the name here"
    />
    <FormControl.Feedback />
    <Button
      bsStyle="success"
      style={{
        marginTop: '37%',
        padding: '7%',
        width: '100%',

      }}
      onClick={
        () => {
          event(
            input.value,
            people[index].key
          );
          input.value = null;
        }
      }
    >
      OK
    </Button>
  </FormGroup>
;

InputListItem.propTypes = {
  people: React.PropTypes.array.isRequired,
  event: React.PropTypes.func.isRequired,
  index: React.PropTypes.number,
};

export default InputListItem;
