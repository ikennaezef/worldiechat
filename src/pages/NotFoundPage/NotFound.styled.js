import styled from 'styled-components';

export const NotFoundBody = styled.div`
	padding : 1rem;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const NotFoundImage = styled.img`
	width: 30rem;
	margin-bottom: 2rem;
	max-width: 100%;
`;

export const Text = styled.h3`
	font-size: 1.5rem;
	text-align: center;
	margin-bottom: 1rem;
`;

export const Button = styled.button`
	cursor: pointer;
	padding: 0.8rem 2rem;
	background-color: ${({ theme }) => theme.default.accent };
	border: none;
	outline: none;
	color: #fff;
	font-size: 1rem;
	font-family: inherit;
	font-weight: 500;

	a {
		color: inherit;
		text-decoration: none;
	}

	&:hover {
		opacity: 0.8;
	}
`;