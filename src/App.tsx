import React from "react"
import Button from "./components/Button"
import MovieCard from "./components/MovieCard"
import Row from "./components/Row"
import Col from "./components/Col"
import poster from "./assets/posters/flash-gordon.jpeg"
import styled from "styled-components"

const Wrapper = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
`

function App() {
	return (
		<Wrapper>
			<Row gridGap="16px" rowGap="32px" columnCount={5}>
				<Col>
					<MovieCard
						title="Flash Gordon"
						details="USA, 120 min"
						image={poster}
					/>
				</Col>
				<Col>
					<MovieCard title="ET" details="USA, 120 min" image={poster} />
				</Col>
				<Col>
					<MovieCard
						title="Jurassic Park"
						details="USA, 120 min"
						image={poster}
					/>
				</Col>
				<Col>
					<MovieCard title="Jaws" details="USA, 120 min" image={poster} />
				</Col>
				<Col>
					<MovieCard
						title="Chaos in Seattle"
						details="USA, 120 min"
						image={poster}
					/>
				</Col>
			</Row>
		</Wrapper>
	)
}

export default App
