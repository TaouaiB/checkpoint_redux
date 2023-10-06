import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { donetask, edittask } from '../JS/Actions/TaskActions';

const TaskCard = ({ task }) => {
  const [edit, setEdit] = useState(false);
  const [newDescription, setNewDescription] = useState('');
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setEdit(true);
    setNewDescription(task.description);
  };

  const handleSaveClick = () => {
    dispatch(edittask(task.id, newDescription));
    setEdit(false);
  };

  return (
    <div className="task-card">
      <p className={task.IsDone ? 'task-done' : ''}>{task.description}</p>

      <div className="button-group">
        {edit ? (
          <div className="edit-form">
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="form-control"
            />
            <Button variant="success" onClick={handleSaveClick}>
              Save
            </Button>
          </div>
        ) : (
          <Button variant="primary" onClick={handleEditClick}>
            Edit
          </Button>
        )}
        <Button
          variant={task.IsDone ? 'secondary' : 'success'}
          onClick={() => dispatch(donetask(task.id))}
        >
          {task.IsDone ? 'Make it Undone' : 'Mark as Done'}
        </Button>
      </div>
    </div>
  );
};

export default TaskCard;
