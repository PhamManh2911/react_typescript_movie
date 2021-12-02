import styled from "styled-components"

export const Wrapper = styled.div`
	background: var(--darkGrey);
	padding: 0 10px;
`
export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: var(--maxWidth);
	padding: 20px 0;
	margin: 0 auto;
	color: white;

	div {
		display: flex;
		align-items: center;

		div {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		span {			
			cursor: pointer;
		}
	};

	a {
		color: white;
		text-decoration: none;
	}
`
export const LogoImg = styled.img`
	width: 200px;

	@media (max-width: 500px) {
		width: 130px;
	}
`
export const TMDBLogoImg = styled.img`
	width: 100px;
	margin-left: 5px;

	@media (max-width: 500px) {
		width: 70px
	}
`