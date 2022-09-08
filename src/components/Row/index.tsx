import React from "react"
import styled from "styled-components"

interface RowProps {
	children?: React.ReactNode
	gridGap?: string
	rowGap?: string
}

const RowStyled = styled.div<Pick<RowProps, "gridGap" | "rowGap">>`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	grid-gap: ${(props) => props.gridGap ?? 0};
	row-gap: ${(props) => props.rowGap ?? 0};
`

const Row = ({ children, ...rest }: RowProps) => {
	return <RowStyled {...rest}>{children}</RowStyled>
}

export default Row
