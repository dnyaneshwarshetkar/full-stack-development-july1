import './App.css';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Hello friendName="John Doe" gender="Male" mobile="+918912345678" email="john@gmail.com"></Hello>
      <Hello friendName="Maria Doe" gender="Female" mobile="+918912345678" email="maria@gmail.com"></Hello>
      <h1>Outside H1</h1>
    </div>
  );
}

export default App;
