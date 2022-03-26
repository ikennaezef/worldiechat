import { Link } from 'react-router-dom';

import {useApp} from '../contexts/AppContext';
import {useTheme} from '../contexts/ThemeContext';

import { Logo, StyledNav, NavLinks, NavLink, LogOut } from './styles/Navbar.styled';
import ThemeSwitcher from './ThemeSwitcher';
import { auth } from '../firebase/config'
import { theme } from '../themes';

import { BiCommentDots } from 'react-icons/bi';
import { FaLaptopCode, FaUsers } from 'react-icons/fa';
import { GiPin, GiMusicalNotes, GiChart, GiHearts, GiSoccerBall, GiEntryDoor } from 'react-icons/gi';


const Navbar = ({ room }) => {

	const { navOpen, setCurrentUser } = useApp();
	const { setCurrentTheme } = useTheme();

	const handleLogout = () => {
		sessionStorage.removeItem('user');
		auth.signOut();
		setCurrentUser(null); // clears user details from session storage
		setCurrentTheme(theme);
	}


	return (
		<StyledNav open={navOpen} >
			<Logo><span><BiCommentDots /> </span> Worldie<span>Chat</span></Logo>
			<h4>Rooms</h4>
			<NavLinks>
				<NavLink active={room==='general'} >
					<Link to="/chatroom/general"> <GiPin /> General </Link> 
				</NavLink>
				<NavLink active={room==='introductions'} >
					<Link to="/chatroom/introductions"> <FaUsers /> Introductions </Link>
				</NavLink>
				<NavLink active={room==='sports'} >
					<Link to="/chatroom/sports"> <GiSoccerBall /> Sports </Link>
				</NavLink>
				<NavLink active={room==='music'} >
					<Link to="/chatroom/music"> <GiMusicalNotes /> Music </Link>
				</NavLink>
				<NavLink active={room==='love'} >
					<Link to="/chatroom/love"> <GiHearts /> Love </Link>
				</NavLink>
				<NavLink active={room==='technology'} >
					<Link to="/chatroom/technology"> <FaLaptopCode /> Technology </Link>
				</NavLink>
				<NavLink active={room==='crypto'} >
					<Link to="/chatroom/crypto"> <GiChart /> Crypto </Link>
				</NavLink>
			</NavLinks>

			<ThemeSwitcher />
			<LogOut as="button" onClick={handleLogout} > <GiEntryDoor /> Logout</LogOut>
		</StyledNav>
	)
}

export default Navbar