import styled from 'styled-components'
import { BiTrash } from 'react-icons/bi'

const PopupContainer = styled.div`
	position: fixed;
	top: 30%;
	left: 0;
	z-index: 100;
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	animation: appear 0.3s linear forwards;

	@keyframes appear {
		from {
			opacity: 0.5;
			transform: scale(0)
		}

		to {
			opacity: 1;
			transform: scale(1);
		}
}
`;



const Popup = styled.div`
	padding: 1.5rem;
	background-color: #fff;
	border-radius: 0.4rem;
	z-index: 100;
	transition: 0.5s ease;

	h3 {
		font-size: 1.2rem;
		margin-bottom: 1rem;
		color: ${({ theme }) => theme.default.textAlt};
		text-align: center;
	}

	div{
		display: flex;
		align-items: center;
		justify-content: center;
	}

	button {
		padding: 0.4rem 0.8rem;
		margin: 0 1rem;
		border-radius: 0.4rem;
		font-family: inherit;
		font-size: 0.9rem;
		cursor: pointer;
		border: none;
		outline: none;
	}

	button:first-child {
		background: #fff;
		color: ${({ theme }) => theme.default.accent};
		border: 0.1rem solid ${({ theme }) => theme.default.accent};
	}

	button:nth-child(2) {
		background: ${({ theme }) => theme.default.accent};
		color: #fff;
		border: 0.1rem solid ${({ theme }) => theme.default.accent};
		display: flex;

		svg {
			margin-right: 0.2rem;
		}
	}

`;


const DeletePopup = ({ handleClose, handleDelete }) => {
	return (
		<PopupContainer>
			<Popup>
				<h3>Delete this message?</h3>
				<div>
					<button onClick={handleClose} >Cancel</button>
					<button onClick={handleDelete}><BiTrash /> Delete</button>
				</div>
			</Popup>
		</PopupContainer>
	)
}

export default DeletePopup