import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
	:root {
		--maxWidth: 80%;
		--white: #fff;
		--lightGrey: #eee;
		--medGrey: #353535;
		--darkGrey: #1c1c1c;
		--fontSuperBig: 2.5rem;
		--fontBig: 1.5rem;
		--fontMed: 1.2rem;
		--fontSmall: 1rem;
	}

	* {
		box-sizing: border-box;
		font-family: "Able", san-serif;
		user-select: none;
	}

	body {
		margin: 0;
		padding: 0;
		
		h1 {
			font-size: 2rem;
			font-weight: 600;
			color: var(--white);
		}

		h3 {
			font-size: 1.1rem;
			fonr-wight: 600;
		}

		p {
			font-size: 1rem;
			color: var(--white);
		}

		@keyframes animatedOpacity {
			from {opacity: 0};
			to {opacity: 1,0}
		}
	}
`