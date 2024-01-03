import '../App.css';
import Button from './Button';
import Clock from './Clock';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <Welcome name="Michel" />
      <Clock />
      <Button />
    </div>
  );
}

export default App;
