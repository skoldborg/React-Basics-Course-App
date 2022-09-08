import React from "react"
import styled from "styled-components"

interface RowProps {
	children?: React.ReactNode
	columnCount?: number
	gridGap?: string
	rowGap?: string
}

const RowStyled = styled.div<
	Pick<RowProps, "columnCount" | "gridGap" | "rowGap">
>`
	display: grid;
	grid-template-columns: repeat(${(props) => props.columnCount ?? 5}, 1fr);
	grid-gap: ${(props) => props.gridGap ?? 0};
	row-gap: ${(props) => props.rowGap ?? 0};
`

const Row = ({ children, ...rest }: RowProps) => {
	return <RowStyled {...rest}>{children}</RowStyled>
}

export default Row
