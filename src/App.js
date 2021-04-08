import { useState } from 'react';
import Header from './component/Header';
import Tasks from './component/Tasks';

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Go To Supermarket',
            day: 'April 9th at 1.30pm',
            remider: true 
        },
        {
            id: 2,
            text: 'Go To Doctor',
            day: 'April 9th at 4.30pm',
            remider: true 
        },
        {
            id: 3,
            text: 'Go To Cipanas',
            day: 'April 9th at 6.30pm',
            remider: false 
        }
    ]
);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
