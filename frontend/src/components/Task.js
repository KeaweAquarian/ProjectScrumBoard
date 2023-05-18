/**
 * @author Keawe Aquarian
 * @version 1.0
 * @since 01/01/2023
 */
import React, { useState } from 'react';

//Task Component
const Task = ({ task, onDelete,  testedToggle, priorityToggle, progressToggle }) => {
    const [isShown, setIsShown] = useState(false);

    return (
        
        
        <div className={`task ${task.progress}`}  onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} >
            <div className={task.priority} onClick={() => priorityToggle(task.id)} ></div>
            {/* toggle to show tested */}
            <h3 className={` ${task.tested ? "tested" : ""}`}>{task.feature} </h3>
            <p>{task.userStory}</p>
        {/* Switch to show progress */}
         <select className="progress" value={task.progress} onChange={(e) => 
                progressToggle(task.id, e.target.value)} >
          <option value="notCommited">Not Commited</option>
          <option value="toDo">To Do</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
            <div className={` ${isShown ? "icons" : "iconsNoShow"}`}   >
            {/* toggle task tested */}
            <div className="testedIcons" onClick={() =>  testedToggle(task.id)}>
            <p>Tested?</p>
             {/* <FaCheck className="check" 
            /> */}
            </div>
            
            {/* Delete button */}
            {/* <FaTrash style={{ color: "grey", cursor: "pointer"}}
            onClick={() => onDelete(task.id)}
            /> */}
            <p style={{ color: "grey", cursor: "pointer"}}
            onClick={() => onDelete(task.id)}>Delete?</p>
            </div>

        </div>
    )
}

export default Task