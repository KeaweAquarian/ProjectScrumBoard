/**
 * @author Keawe Aquarian
 * @version 1.0
 * @since 01/01/2023
 */

import {Link} from "react-router-dom";
import image from '../Images/agileFour.png';


const AgileValues = () => {
    return (
      <div className="pic">
        
        <img className = "agileImg" src={image} alt="" />
        <Link to="/">Go Back</Link>
      </div>
    )
  }

  export default AgileValues

