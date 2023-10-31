import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { addJob, deleteJob, setJob } from "./action";

// action

//action dưới dạng function
//payload là dữ liệu input truyền vào e.target.value
//setJob dùng để tạo 1 object chứa dự liệu input
//và phương thức set_job

// reducer
//mỗi lần sử dụng dispat, click => reducer sẽ được gọi

// dispatch
function App() {
  const inputRef = useRef();

  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <h1>To Do </h1>
      <input
        ref={inputRef}
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
          //setJob() return về 1 object
          //dispatch nhận 1 action dưới dạng object
          // action tên là SET_JOB mà còn mang theo đc giá trị input
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((item, index) => (
          <li key={index}>
            {item}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
