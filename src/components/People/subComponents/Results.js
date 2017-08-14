// @flow
import React, { PropTypes } from 'react';
import { Button, Modal } from 'react-bootstrap';

const commentResults = (num, total) => {
  switch (num / total) {
    case 0:
      return (
        'You have no idea about your team-mates, leave your desk and talk to them!'
      );
    case 1:
      return (
        'Wow you know the name of all your team-mates, Good Work!'
      );
    default:
      return (
        `Well, you know the ${num / total * 100}% of your team-mates.`
      );
  }
};

const Results = ({ mark, total, reset }) => {
  let close = () => ({ show: false });
  return (
    <Modal
      style={{ marginTop: '20%' }}
      show
      onHide={close}
      container={this}
      aria-labelledby="contained-modal-title"
      autoFocus={false}
      animation
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title" style={{ textAlign: 'center' }}>
          {mark} / {total}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{commentResults(mark, total)}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          bsStyle="success"
          onClick={reset}
        >
          RESTART
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

Results.propTypes = {
  mark: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Results;
