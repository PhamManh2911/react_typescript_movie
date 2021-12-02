import styled from "styled-components"

export const Wrapper = styled.div`
	background-color: var(--white);
	width: 100%;
	height: 100px;
	padding: 10px 50px;
	border-bottom: 1px solid var(--darkGrey);

	:hover {
		background-color: var(--lightGrey);
	}

	a {
		color: black;
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		cursor: pointer;
	}
`

export const Image = styled.img`
	object-fit: cover;
	width: 55px;
	height: 80px;
	border-radius: 5px;

`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	margin-left: 10px;

	div:first-child {
		font-size: 1.3em;
		font-weight: 500;
	}

	div:last-child {
		span:first-child{
			margin-right: 1.1rem;
		}
	}
`