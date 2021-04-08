const Task = ({ task }) => {
    return (
        <div className='task'>
            <h3 key={task.key}>{task.text}</h3>
            <p>{task.day}</p>
        </div>  
    )
}

export default Task;