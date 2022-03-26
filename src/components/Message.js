import { useState, useEffect } from 'react';
import {SentMessage, ReceivedMessage, Name, Time, AltTime} from './styles/Message.styled';
import { BiTrash } from 'react-icons/bi'
import { formatDistanceToNow } from 'date-fns';

import DeletePopup from './DeletePopup';

import { db } from '../firebase/config';

import {useApp} from '../contexts/AppContext';


const Message = ({ message, room }) => {

	const { currentUser } = useApp();
	const [ messageTime, setMessageTime ] = useState(null);
	const [ popupOpen, setPopupOpen ] = useState(false);

	const deleteMessage =() => {
		setPopupOpen(false);
		db.collection(room).doc(message.id).delete();
	}	

	useEffect(() => {
		let time = message.data.timestamp;
		time && setMessageTime(formatDistanceToNow(time.toDate()));
	}, [ message ])


	return (

		<>
			{ message.data.sender === currentUser.displayName ? (
				<>
				<SentMessage >					
					<div>
						<button onClick={ ()=> setPopupOpen(true) } > <BiTrash /> </button>
						<p>{message.data.message}</p>
						<Time>{ messageTime }</Time>
					</div>
				</SentMessage>
				{ popupOpen && <DeletePopup handleDelete={ deleteMessage } handleClose={ ()=> setPopupOpen(false) } /> }
				</>
			) : (
				<ReceivedMessage>
					<Name>{message.data.sender || 'unknown user'}</Name>
					<div>
						<p>{message.data.message}</p>
						<AltTime> { messageTime }</AltTime>
					</div>
				</ReceivedMessage>
			) }
		</>
	);
}

export default Message