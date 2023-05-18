/**
 * @author Keawe Aquarian
 * @version 1.0
 * @since 01/01/2023
 */
import { useState } from "react"


//Form to add task to list
const AddTask = ({onAdd}) => {
    const [feature, setFeature] = useState("")
    const [userStory, setUserStory] = useState("")
    const [tested, setTested] = useState(false)
    const [priority, setPriority] = useState("low")
    const [color, setColor] = useState("#FCFE7C")
    const [progress, setProgress] = useState("notCommited")
    
    const onSubmit = (e => {
        e.preventDefault()
//check feature and user story added by user
        if(!feature){
            alert("Please add feature")
            return
        }
        if(!userStory){
            alert("Please add user story")
            return
        }
        
        onAdd ({feature, userStory, priority, color, progress, tested})

        setFeature("")
        setUserStory("")
        setPriority("low")
        setColor("#FCFE7C")
        setTested(false)
        setProgress("notCommited")

    })
    return (
        //add form
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Feature</label>
            <input type="text" placeholder="Create a..." 
            value={feature} onChange={(e) => 
            setFeature(e.target.value)} />
        </div>
        <div className="form-control">
            <label>User Story</label>
            <input type="text" placeholder="User needs to be able to..."
            value={userStory} onChange={(e) => 
                setUserStory(e.target.value)} />
        </div>
    
        <h5>Priority</h5>
      {/* To set priority */}
         <select id="priority" value={priority} onChange={(e) => 
                setPriority(e.target.value)} >
          
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <input type="submit" value ="Save Task"  className="btn btn-block"/>
        
      </form>
    )
  }


export default AddTask
