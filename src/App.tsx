import React from "react"
import MovieCard from "./components/MovieCard"
import Grid from "./components/Grid"
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
			<Grid gridGap="16px" rowGap="32px" columnCount={5}>
				<MovieCard title="Flash Gordon" details="USA, 120 min" image={poster} />
				<MovieCard title="Flash Gordon" details="USA, 120 min" image={poster} />
				<MovieCard title="Flash Gordon" details="USA, 120 min" image={poster} />
				<MovieCard title="Flash Gordon" details="USA, 120 min" image={poster} />
				<MovieCard title="Flash Gordon" details="USA, 120 min" image={poster} />
			</Grid>
		</Wrapper>
	)
}

export default App
