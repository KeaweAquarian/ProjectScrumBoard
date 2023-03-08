import {Link} from "react-router-dom";


const ReadMe = () => {
    return (
        <>

        <h3>Scrum Board Controls</h3>
         <ul>
             <li>Use add button to create new tasks.</li>
             <li>Describe the feature required and purpose for the user.</li>
             <li>Set task priority: Priority colors: blue = low, green = medium, red = high.</li>
             <li>Priority can be changed by clicking priority color.</li>
             <li>Product Backlog contains all tasks.</li>
             <li>Spring backlog contains tasks currently active during sprint.</li>
             <li>Once a task is completed it can be marked as tested and is ready to ship.</li>
        </ul> 


    
        <Link to="/">Go Back</Link>
      
        </>

    )
  }

  export default ReadMe