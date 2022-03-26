import styled from 'styled-components';

import { FaSpinner } from 'react-icons/fa';

const StyledLoader = styled.span`
	max-width: 100%;
	display: inline-block;
	color: ${({color, theme}) => color || theme.default.text};

	svg {
		animation: spin 1.2s infinite linear;
	}
	

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
`;

const Loader = ({ color }) => {
	return (
		<StyledLoader color={color} >
			<FaSpinner />
		</StyledLoader>
	)
}

export default Loader