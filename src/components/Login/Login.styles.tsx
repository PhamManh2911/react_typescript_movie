import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	min-height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid var(--darkGrey);
	border-radius: 10px;
	box-shadow: 0px 2px 3px var(--medGrey);
	animation: animatedOpacity 1s;
`

export const Content = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 0 auto;
	max-width: 320px;
	padding: 20px;
	color: var(--darkGrey);

	label {
		font-size: var(--fontBig);
		font-weight: 500;
		margin: 10px
	}

	input {
		width: 100%;
		height: 30px;
		border: 1px solid var(--darkGrey);
		border-radius: 20px;
		margin: 10px 0;
		padding: 10px;
	}

	input:last-child {
		display: block;
		background: var(--darkGrey);
		width: 25%;
		min-width: 200px;
		height: 60px;
		border-radius: 30px;
		color: var(--white);
		border: 0;
		font-size: var(--fontBig);
		margin: 20px auto;
		transition: all 0.3s;
		outline: none;
		cursor: pointer;
		:hover {
			opacity: 0.8;
		}		
	}

	.error {
		color: red;
	}
`