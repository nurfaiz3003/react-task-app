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
            remider: true, 
        },
        {
            id: 2,
            text: 'Go To Doctor',
            day: 'April 9th at 4.30pm',
            remider: true, 
        },
        {
            id: 3,
            text: 'Go To Cipanas',
            day: 'April 9th at 6.30pm',
            remider: false, 
        }
    ]
  );
  
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks') }
    </div>
  );
}

export default App;
