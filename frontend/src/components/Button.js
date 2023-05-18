/**
 * @author Keawe Aquarian
 * @version 1.0
 * @since 01/01/2023
 */
import PropTypes from "prop-types"

//standard button
const Button = ({color, text, onClick}) => {

    return (
    <button onClick={onClick} 
    style= {{ backgroundColor: color}}
     className="btn"
     >
        {text}
        </button>
    )
  }
  Button.defaultProps = {
    color: "steelblue"
  }

  Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
  }
  export default Button