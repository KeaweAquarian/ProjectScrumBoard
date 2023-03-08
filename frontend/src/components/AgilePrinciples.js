import {Link} from "react-router-dom";
import image from '../Images/agile12.png';




const AgilePrinciples = () => {
    return (
      <div className="pic">
        
        <img className = "agileImg" src={image} alt="12 Agile Principles" />
        <Link to="/">Go Back</Link>
      </div>
    )
  }

  export default AgilePrinciples