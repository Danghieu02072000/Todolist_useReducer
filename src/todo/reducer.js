// init state
import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constant";
export const initState = {
  job: "",
  jobs: []
};

const reducer = (state, action) => {
  console.log("action", action);
  console.log("new", state);
  let newState;

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
      break;
    case DELETE_JOB:
      let newJobs = [...state.jobs];
      newJobs = newJobs.filter((item, index) => index !== action.payload);
      newState = {
        ...state,
        jobs: newJobs
      };
      break;
    default:
      throw new Error("lỗi");
  }
  console.log("old", newState);
  return newState;
};

export default reducer;
