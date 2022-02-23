import './button.css'

const Button = ({label, backgroundColor='red', colorText='white', handleClick,children, ...rest}) => {

    return (
        <button className="myButton" style={{ backgroundColor, color: colorText }} onClick={handleClick}>{children}</button>
    )
}

export default Button