import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100px;
	background: var(--darkGrey);
	padding: 0 20px;
`;

export const Content = styled.div`
	position: relative;
	max-width: var(--maxWidth);
	width: 100%;
	height: 55px;
	background: var(--medGrey);
	margin: 0 auto;
	border-radius: 40px;

	.searching-result {
		z-index: 100;
		position: absolute;
		width: 100%;
		top: 120%;
		border-radius: 10px;
		animation: animatedSearch 1.5s;
		overflow: hidden;
		box-shadow: 0px 0px 10px var(--darkGrey);

		@keyframes animatedSearch {
			from {height: 0px ;};
			to {height: 559px ;}
		}

		.more-movie {
			text-align: center;
			background-color: var(--medGrey);
			color: var(--white);
			padding: 20px;
			font-size: var(--fontMed);
			cursor: pointer;

			:hover {
				background-color: var(--darkGrey);
			}
		}
	}

	>img {
		position: absolute;
		left: 15px;
		top: 14px;
		width: 30px;
	}

	input {
		font-size: var(--fontBig);
		position: absolute;
		left: 0;
		margin: 8px 0;
		padding: 0 0 0 60px;
		border: 0;
		width: 95%;
		background: transparent;
		height: 40px;
		color: var(--white);
		:focus {
			outline: none;
		}
	}
`