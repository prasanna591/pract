import React from "react";
import UserList from "./UserList";
import WeatherApp from "./weather";

// import Hello from "./Hello";
// import UserCard from "./UserCard.jsx";
import Counter from "./Counter";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/Counter">counter</Link>
          <br />
          <Link to="/WeatherApp">find the weather</Link>
        </nav>
        <Routes>
          <Route path="/Counter" element={<Counter />} />
          <Route path="/WeatherApp" element={<WeatherApp />} />
        </Routes>
      </Router>
      {/* <Hello name="Prasanna" />

      <UserCard name="Prasanna" age="19" state="tamilnadu" />
      <br></br>
      <UserCard name="Alex" age="25" state="USA" /> */}

      <UserList />
    </div>
  );
}

export default App;
