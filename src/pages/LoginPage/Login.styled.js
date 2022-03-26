import styled from 'styled-components';

export const LoginBody = styled.div`
	height: 100vh;
	overflow: hidden;
	background-color: ${({ theme }) => theme.default.body };
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const LoginContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	max-width: 80rem;
	background-color: #fff;
	animation: appear 1.5s ease forwards;

	@keyframes appear {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
`;

export const ImageContainer = styled.div`
	padding: 1rem;

	@media(max-width: 500px) {
		display: none;
	}

`;

export const LoginImage = styled.img`
	width: 28rem;
	margin: 1rem;

	@media(max-width: 790px) {
		width: 23rem;
	}
`;

export const FormContainer = styled.div`
	padding: 1rem;
`;

export const Logo = styled.h1`
	font-size: 2rem;	
	margin-bottom: 1.2rem;
	text-align: center;

	span {
		color: ${({ theme }) => theme.default.accent };
	}

	& + p {
		text-align: center;
	}
`;

export const LoginForm = styled.form`
	margin: 1.5rem 0 0.5rem;
	display: flex;
	flex-direction: column;

	input {
		width: 100%;
		padding: 0.8rem;
		border: none;
		outline: none;
		background-color: ${({ theme }) => theme.default.body };
		margin-bottom: 1.2rem;
		font-size: 1rem;
		font-family: inherit;
	}
`;

export const Button = styled.button`
	cursor: pointer;
	padding: 0.8rem;
	background-color: ${({ theme }) => theme.default.accent };
	border: none;
	outline: none;
	color: #fff;
	font-size: 1rem;
	font-family: inherit;
	font-weight: 500;

	&:hover {
		opacity: 0.8;
		transform: translateY(0.2rem);
	}

	&:disabled {
		background-color: #6379fc;
		cursor: default;
	}
`;

export const GoogleButton = styled(Button)`
	background-color: #fff;
	color: ${({ theme }) => theme.default.accent };
	border: 0.1rem solid ${({ theme }) => theme.default.accent };
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.5rem;
	width: 100%;

	svg {
		margin-right: 1rem;
	}
`;

export const Alternative = styled.p`
	font-size: 0.8rem;

	span a{
		color: ${({ theme }) => theme.default.accent };
	}
`;
