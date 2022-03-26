import { useTheme } from '../contexts/ThemeContext';
import { theme, green, dark } from '../themes';

import styled from 'styled-components'

const SwitcherContainer = styled.div`
	background-color: inherit;
	padding: 0.5rem;
	color: #fff;
	position: absolute;
	bottom: 2rem;
	left: 1rem;

	h3 {
		font-size: 1.1rem;
		margin-bottom: 0.3rem;
		color: #fff;
	}

	& >div {
		display: flex;
	}
`;

const ThemeButton = styled.span`
	display: inline-block;
	cursor: pointer;
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 50%;
	border: 0.15rem solid #fff;
	background-color: ${({ color }) => color };
	margin-right: 0.7rem;
`;



const ThemeSwitcher = () => {

	const { setCurrentTheme } = useTheme();

	return (
		<SwitcherContainer>
			<h3>Themes</h3>
			<div>
				<ThemeButton color="#3451fb" onClick={ () => setCurrentTheme(theme) }  ></ThemeButton>
				<ThemeButton color="#22d807" onClick={ () => setCurrentTheme(green) } ></ThemeButton>
				<ThemeButton color="#04011f" onClick={ () => setCurrentTheme(dark) } ></ThemeButton>
			</div>
		</SwitcherContainer>
	)
}

export default ThemeSwitcher