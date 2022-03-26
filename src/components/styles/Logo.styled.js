import styled from 'styled-components';

export const StyledLogo = styled.div`
	
	text-align: center;

	h1 {
		font-size: 2.3rem;
		color: ${({theme}) => theme.default.text};
		margin-bottom: 0.1rem;
		display: flex;
		align-items: center;
		justify-content: center;

		span {
			color: ${({theme}) => theme.default.accent};
		}
	}


	@media (max-width: 500px) {
		h1 {
			font-size: 1.6rem;
		}
	}

`;


export const AltLogo = styled(StyledLogo)`
	
	h1 {
		color: #fff;

		span {
			color: #aaa;
		}
	}
`;