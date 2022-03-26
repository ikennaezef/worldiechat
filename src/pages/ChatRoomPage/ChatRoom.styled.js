import styled from 'styled-components';


export const StyledRoom = styled.div`
	/*position: relative;*/
`;

export const LoaderContainer = styled.div`
	background-color: inherit;
	padding: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
`;

export const NoMessagesContainer = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 20rem;
		margin-bottom: 2rem;
	}

	p {
		font-size: 1.2rem;
		text-align: center;
	}

	@media (max-width: 500px) {
		img {
			width: 14rem;
		}

		p {
			font-size: 1rem;
		}
	}
`;