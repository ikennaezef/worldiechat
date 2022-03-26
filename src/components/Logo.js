import {StyledLogo} from './styles/Logo.styled';
import { BiCommentDots } from 'react-icons/bi';

const Logo = () => {

	return ( 
	<StyledLogo>
		<h1><span><BiCommentDots /> </span> Worldie<span>Chat</span></h1> 
	</StyledLogo>	)
}

export default Logo