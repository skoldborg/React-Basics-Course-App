import React from "react"
import styled from "styled-components"

interface ColProps {
	children?: React.ReactNode
	width?: number
}

const ColStyled = styled.div<Pick<ColProps, "width">>`
	width: ${(props) => (props.width ? props.width * 100 : "100")}%;
`

const Col = (props: ColProps) => {
	return <ColStyled width={props.width}>{props.children}</ColStyled>
}

export default Col
