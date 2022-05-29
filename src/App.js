import "./styles.css";
import Timer from '../src/component/timer';
import Stopwatch from '../src/component/stopwatch'

export default function App() {
  return (
    <div className="App">
      <Timer/>
      <Stopwatch/>
    </div>
  );
}
