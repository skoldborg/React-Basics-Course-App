import React from "react"
import styled from "styled-components"

interface ColProps {
	children?: React.ReactNode
}

const ColStyled = styled.div`
	width: 100%;
`

const Col = (props: ColProps) => {
	return <ColStyled>{props.children}</ColStyled>
}

export default Col
