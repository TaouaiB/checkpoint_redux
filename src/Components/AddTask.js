import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addtask } from '../JS/Actions/TaskActions';

const AddTask = () => {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const Tasks = useSelector((state) => state.TaskReducer.Tasks);

  return (
    <div>
      <Button
        variant="success"
        onClick={handleShow}
        style={{ marginBottom: '20px' }}
      >
        Add Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                addtask({
                  id: Math.random(),
                  description: description,
                  IsDone: false,
                })
              );
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddTask;
