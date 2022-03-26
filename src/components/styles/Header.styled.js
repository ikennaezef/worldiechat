import styled from 'styled-components';

export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.default.body};

	margin: 0 auto 1.5rem;
	padding: 1.5rem 2rem;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 10;

	display: flex;
	justify-content: space-between;
	align-items: center;

	h3 {
		font-size: 1rem;
		font-weight: 300;
		color: ${({ theme }) => theme.default.semi};
	}

	button {
		padding: 0.2rem;
		font-size: 1.4rem;
		color: inherit;
		background-color: inherit;
		border: none;
		outline: none;
		cursor: pointer;
	}

	@media (max-width: 500px) {
		padding: 0.8rem 1rem;
	}
`;