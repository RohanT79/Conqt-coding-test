import React, { useState, useEffect } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log(`Count is: ${count}`);
    }, 1000);
  }, [count]); // count added in the dependency array
  return (
    <div>
      {" "}
      <p>Count: {count}</p>{" "}
      <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
    </div>
  );
};
export default Counter;


/* explaination: The count in the log was not incrementing when we press increment button.
setTimeout is an async operation so will not get evoked/executed immediately as it has some delay.
 So the issue was that use effect was only rendering once as it had empty brackets dependency.
 Empty brackets dependency runs only once when the component is mounted.
 So if we add count in the dependency array, the count will be incremented after every 1000ms*/
