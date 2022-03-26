import { useState, createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components'; 

import { theme, green, dark } from '../themes';

const ThemeContext = createContext();


export const useTheme = () => {
	return useContext(ThemeContext);
}

export const ThemeContextProvider = ({children}) => {

	const [ currentTheme, setCurrentTheme ] = useState(theme);

	return (
		<ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
			<ThemeProvider theme= { currentTheme } >
				{ children }
			</ThemeProvider>
		</ThemeContext.Provider>

	)
}