import styled from "styled-components"

export const Image = styled.img`
	width: 100%;
	max-width: 390px;
	transition: all 0.3s;
	object-fit: cover;
	border-radius: 20px;
	cursor: pointer;
	animation: animatedOpacity 1s;
	:hover {
		opacity: 0.8;
	}
`