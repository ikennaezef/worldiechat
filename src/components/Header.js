import { StyledHeader } from './styles/Header.styled';

import {useApp} from '../contexts/AppContext';

import { FaTimes, FaBars } from 'react-icons/fa';

import Logo from './Logo';
import Navbar from './Navbar';


const Header = () => {

	const { navOpen, setNavOpen, currentRoom, currentUser, display } = useApp();

	const name = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).displayName : display ;

	return (
		<StyledHeader>
			<Navbar room={currentRoom}  />
			<div>
				<Logo />
				<h3>Welcome, {currentUser?.displayName || name}</h3>
			</div>		
			<button onClick={ ()=> setNavOpen(!navOpen)} >
			 	{navOpen ? <FaTimes /> : <FaBars />}
			 </button>
		</StyledHeader>
	)
}

export default Header