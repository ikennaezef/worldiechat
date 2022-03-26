import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export const useApp = () => {
	return useContext(AppContext);
}

export const AppContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [navOpen, setNavOpen] = useState(false);
    const [currentRoom, setCurrentRoom] = useState('');
    const [ display, setDisplay ] = useState('');

	const value = {
		currentUser,
		setCurrentUser,
		navOpen,
		setNavOpen,
		currentRoom,
		setCurrentRoom,
		display,
		setDisplay
	}

	return (
		<AppContext.Provider value={ value } >
			{children}
		</AppContext.Provider>
	)
}
