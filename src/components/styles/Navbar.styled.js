import styled from 'styled-components';

export const StyledNav = styled.div`
	position: absolute;
	top: 0;
	left: ${({open}) => open ? '0' : '-100%'};
	background-color: ${({ theme }) => theme.default.nav};
	color: #fff;
	width: 15rem;
	height: 95vh;
	z-index: 100;
	padding: 0.5rem;
	padding-top: 1.4rem;
	transition: 0.5s ease;
`;

export const Logo = styled.h1`
	text-align: center;
	font-size: 1.7rem;
	margin-bottom: 1.5rem;
	color: ${({ theme }) => theme.default.logoAlt};

	& + h4 {
		font-size: 1.2rem;
		padding-bottom: 0.2rem;
		border-bottom: 0.1rem solid ${({ theme }) => theme.default.logoAlt};
	}
`;

export const NavLinks = styled.ul`
	margin: 1rem 0;
`;

export const NavLink = styled.li`
	margin: 0.3rem 0;
	padding: 0.4rem 1rem;
	font-size: 1.1rem;
	color: ${({active, theme}) => active ? theme.default.accent : '#fff'};
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.default.navHover};
	}

	a {
		color: inherit;
		text-decoration: none;
		width: 100%;
		display: inline-block;

		svg {
			margin-right: 1rem;
		}
	}
`;


export const LogOut = styled(NavLink)`
	position: absolute;
	bottom: 2rem;
	right: 1rem;
	background-color: inherit;
	font-family: inherit;
	border: none;
	outline: none;
	text-align: center;
	padding: 0.4rem 1rem;
	font-size: 1.1rem;

	svg {
		font-size: 1.2rem;
	}
`;