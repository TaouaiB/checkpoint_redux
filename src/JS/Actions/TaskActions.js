import { ADD_TASK, DONE_TASK, EDIT_TASK } from "../Action Type/ActionType";

export const addtask = (NewTask) => {
  return {
    type: ADD_TASK,
    payload: NewTask,
  };
};

export const donetask = (id) => {
  return {
    type: DONE_TASK,
    payload: id,
  };
};
export const edittask = (id, newdescription) => {
  return {
    type: EDIT_TASK,
    payload: { id, newdescription },
  };
};
