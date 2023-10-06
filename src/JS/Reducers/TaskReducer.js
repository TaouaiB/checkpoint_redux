import { ADD_TASK, DONE_TASK, EDIT_TASK } from "../Action Type/ActionType";

//initialState
const initialState = {
  Tasks: [
    {
      id: Math.random(),
      description: "Task 1",
      IsDone: false,
    },
    {
      id: Math.random(),
      description: "Task 2",
      IsDone: true,
    },
    {
      id: Math.random(),
      description: "Task 3",
      IsDone: false,
    },
  ],
};
//pure function
const TaskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, Tasks: [...state.Tasks, payload] };

    case DONE_TASK:
      return {
        ...state,
        Tasks: state.Tasks.map((e) =>
          e.id == payload ? { ...e, IsDone: !e.IsDone } : e
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        Tasks: state.Tasks.map((e) =>
          e.id == payload.id ? { ...e, description: payload.newdescription } : e
        ),
      };
    default:
      return state;
  }
};
export default TaskReducer;
