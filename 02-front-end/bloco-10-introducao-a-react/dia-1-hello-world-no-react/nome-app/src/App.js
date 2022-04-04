import './App.css';

const tasks = ['lavar a louça', 'estudar', 'jogar video-game', 'malhar']
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
  tasks.map((item) => Task(item))
  );
}

export default App;
