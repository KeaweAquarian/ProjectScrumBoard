
import Task from "./Task"

const Tasks = ({tasks, onDelete, testedToggle, priorityToggle, progressToggle}) => {
    
    return (
        <>

        {tasks.map((task) => (
        <Task key={task.id} 
        task={task} 
        onDelete= {onDelete}
        testedToggle={ testedToggle}
        priorityToggle={priorityToggle}
        progressToggle={progressToggle}
        />
        ))}
        </>
    )
}

export default Tasks