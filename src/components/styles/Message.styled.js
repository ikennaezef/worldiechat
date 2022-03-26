import styled from 'styled-components';

export const ReceivedMessage = styled.div`

	width: fit-content;
	max-width: 75vw;
	margin-bottom: 0.4rem;	
	margin-left: none;
	display: flex;
	flex-direction: column;
	animation: slide 0.5s forwards;

	div {
		padding: 0.5rem 0.7rem;
		background-color: #fff;
		color: ${({ theme }) => theme.default.textAlt};
		border-radius: 0.4rem;
		overflow-wrap: break-word;
	}

	p {
		font-size: 1rem;
		margin-bottom: 0.2rem;
		max-width: 100%;
	}


	@media(min-width: 450px)  {		
		max-width: 45vw;
	}

	@media(min-width: 1400px)  {		
		max-width: 40rem;
	}


	@keyframes slide {
		from {
			transform: scale(0.6);
			opacity: 0.7;
		}

		to {
			transform: scale(1);
			opacity: 1;
		}
	}
`;

export const SentMessage = styled(ReceivedMessage)`
	margin-left: auto;

	span {
		margin-left: auto;
	}

	div {
		background-color: ${({ theme }) => theme.default.accent};
		color: #fff;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	button {
		width: fit-content;
		padding: 0.1rem;
		text-align: right;
		align-self: flex-end;
		cursor: pointer;
		background-color: inherit;
		border: none;
		outline: none;
		color: #fff;
		font-size: 1.1rem;
	}
`;

export const Time = styled.span`
	font-size: 0.8rem;
	font-weight: 300;
	color: ${({ theme }) => theme.default.body};
`;

export const AltTime = styled(Time)`
	color: ${({ theme }) => theme.default.timeAlt};
`;

export const Name = styled.span`
	font-size: 0.8rem;
	font-weight: 300;
	margin-bottom: 0.1rem;
	color: ${({ theme }) => theme.default.semi};

	@media(max-width: 450px)  {		
		font-size: 0.8rem;
	}
`;


