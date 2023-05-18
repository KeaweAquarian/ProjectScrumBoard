/**
 * @author Keawe Aquarian
 * @version 1.0
 * @since 01/01/2023
 */
import Task from "./Task"

//Tasks component
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