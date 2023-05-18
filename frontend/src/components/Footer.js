/**
 * @author Keawe Aquarian
 * @version 1.0
 * @since 01/01/2023
 */
import {  Link } from "react-router-dom"

//Site Footer
const Footer = () => {
    return (
       <footer>
        
<Link to="/agileValues" className="linkStyle">Agile Values</Link>
<Link to="/agile12" className="linkStyle">Agile Principles</Link>
<Link to="/about" className="linkStyle">About</Link>
<Link to="/readMe" className="linkStyle">Read Me</Link>
        <h5>Copytight &copy; 2023</h5>
       </footer>
    )
    }

export default Footer
