import { memo } from "react";

function Content() {
  console.log("re-render");
  return <h1>hello</h1>;
}
export default memo(Content);
