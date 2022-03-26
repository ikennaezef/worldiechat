import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		transition: 0.3s ease;
	}

	body {
		background-color: ${({theme}) => theme.default.body};
		font-family: 'Rubik', 'Bahnschrift', sans-serif;
		color: ${({theme}) => theme.default.text};
	}

	html {
		scroll-behaviour: smooth;
		font-size: 16px;
	}



	@media(min-width: 1440px) {
		html {
			font-size: 20px;
		}
`;

