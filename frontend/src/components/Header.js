import PropTypes from "prop-types"
import { useLocation, Link } from "react-router-dom"
import Button from "./Button"


const Header = ({title, onAdd, showAdd}) => {
  
  const location = useLocation()
  return (
          <div>
    <header className="header">

      <h1>{title}</h1>
      {location.pathname ==="/" && <Button color={showAdd ? "red": "navy"} text={showAdd ? "close": "Add"} onClick={onAdd} ></Button>}
    </header>
     <div className="links" >
        <Link to="/" className="linkStyle">Product Backlog</Link>
        <Link to="/springBacklog" className="linkStyle">Spring Backlog</Link>
        <Link to="/toDo" className="linkStyle">Tasks To Do</Link>
        <Link to="/inProgress" className="linkStyle">Tasks In Progress</Link>
        <Link to="/completed" className="linkStyle">Tasks Completed</Link>
      </div>       

      </div> 

  )

}
Header.defaultProps = {
    title: "Product Backlog",
  }
  Header.propsTypes = {
    title: PropTypes.string,
  }

export default Header
