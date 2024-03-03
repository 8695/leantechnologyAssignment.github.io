import Navbar from "./navbar/navbar";

import './css/app.css';

import { Feedback } from "./components/feedback";
function App() {
  return (
    <div className="App">
     <Navbar />
    <Feedback />
    </div>
  );
}

export default App;
