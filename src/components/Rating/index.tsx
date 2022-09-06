import React from "react"
import styled from "styled-components"
import { ReactComponent as StarSVG } from "./assets/star.svg"
import { ReactComponent as StarFilledSVG } from "./assets/star-filled.svg"

interface RatingProps {
	name: string
}

const RatingStyled = styled.div`
	display: flex;
`

const RatingLabel = styled.label`
	margin-right: 8px;

	input,
	span {
		border: 0;
		clip: rect(0, 0, 0, 0);
		height: 1px;
		margin: 0;
		overflow: hidden;
		padding: 0;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
`

const Rating = (props: RatingProps) => {
	const [rating, setRating] = React.useState(0)

	return (
		<RatingStyled>
			{[...Array(5)].map((star, i) => {
				const ratingIndex = i + 1
				const isChecked = rating >= ratingIndex
				const id = `${props.name}-${ratingIndex}`

				return (
					<RatingLabel
						htmlFor={id}
						key={ratingIndex}
						onClick={() => setRating(ratingIndex)}
					>
						{isChecked ? <StarFilledSVG /> : <StarSVG />}
						<input
							value={ratingIndex}
							id={id}
							type="radio"
							name={props.name}
							defaultChecked={rating >= ratingIndex}
						/>
						<span className="visuallyhidden">{`${ratingIndex} Stars`}</span>
					</RatingLabel>
				)
			})}
		</RatingStyled>
	)
}

export default Rating
