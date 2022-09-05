import React from "react"
import "./Button.css"

interface ButtonProps {
	children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
	return <button className="button">{props.children}</button>
}

export default Button
