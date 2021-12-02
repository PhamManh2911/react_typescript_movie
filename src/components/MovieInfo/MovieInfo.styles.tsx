import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div<{backdrop: string}>`
	background: ${({ backdrop }) => backdrop 
	? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` 
	: '#000'};
	background-size: cover;
	background-position: center;
	padding: 40px 20px;
	animation: animatedOpacity 1s;
`;

export const Content = styled.div`
	display: flex;
	max-width: var(--maxWidth);
	margin: 0 auto;
	background: rgba(0, 0, 0, 0.7);
	border-radius: 20px;
	
	@media (max-width: 768px) {
		display: block;
		max-height: none;
	}

	img {
		:hover {
			opacity: 1;
		}
	}
`;

export const Text = styled.div`
	width: 100%;
	padding: 20px 40px;
	color: var(--white);
	overflow: hidden;

	.rating-directors {
		display: flex;
		justify-content: flex-start;
	}

	.score {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 35px;
		height: 35px;
		border-radius: 50%;
		background: #fff;
		color: #000;
		font-weight: 800;
		margin: 0;
	}

	.director {
		margin: 0 0 0 40px;
		p {
			margin: 0;
		}
	}

	h1 {
		@media (max-width: 768px) {
			font-size: var(--fontBig);
		}
	}
`