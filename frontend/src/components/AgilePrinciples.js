/**
 * @author Keawe Aquarian
 * @version 1.0
 * @since 01/01/2023
 */
import {Link} from "react-router-dom";
import image from '../Images/agile12.png';



//Agile principles page
const AgilePrinciples = () => {
    return (
      <div className="pic">
        
        <img className = "agileImg" src={image} alt="12 Agile Principles" />
        <Link to="/">Go Back</Link>
      </div>
    )
  }

  export default AgilePrinciples