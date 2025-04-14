// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>increse</button>
//       <p>count:{count}</p>
//       <button onClick={() => setCount(count - 1)}>decrese</button>
//     </>
//   );
// }

// export default Counter;
// import { useState, useEffect } from "react";

// function PageTitleChanger() {
//   const [title, setTitle] = useState("React App");

//   useEffect(() => {
//     document.title = title; // Updates page title when `title` changes
//   }, [title]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <p>Current Page Title: {title}</p>
//     </div>
//   );
// }

// export default PageTitleChanger;
import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, []);

  return <h3>Timer: {seconds} seconds</h3>;
}

export default Timer;
