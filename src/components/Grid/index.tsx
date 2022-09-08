import React from "react"
import styled from "styled-components"

interface GridProps {
	children?: React.ReactNode
	columnCount?: number
	gridGap?: string
	rowGap?: string
}

const GridStyled = styled.div<
	Pick<GridProps, "columnCount" | "gridGap" | "rowGap">
>`
	display: grid;
	grid-template-columns: repeat(${(props) => props.columnCount ?? 5}, 1fr);
	grid-gap: ${(props) => props.gridGap ?? 0};
	row-gap: ${(props) => props.rowGap ?? 0};
`

const Grid = ({ children, ...rest }: GridProps) => {
	return <GridStyled {...rest}>{children}</GridStyled>
}

export default Grid
