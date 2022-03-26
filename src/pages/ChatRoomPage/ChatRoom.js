import { useState, useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';

import {useApp} from '../../contexts/AppContext';

import { StyledRoom, NoMessagesContainer, LoaderContainer } from './ChatRoom.styled';
import { MessagesContainer } from '../../components/styles/MessagesContainer.styled';

import Message from '../../components/Message';
import Header from '../../components/Header';
import InputForm from '../../components/InputForm';
import Loader from '../../components/Loader';

import { db } from '../../firebase/config';


const ChatRoom = ({ room }) => {

	const { setCurrentRoom, setNavOpen, currentUser, setCurrentUser } = useApp();

	const [ loading, setLoading ] = useState(false);
	const [ messages, setMessages ] = useState([ ]);
	const messagesRef = useRef(null);

	useEffect(() => {
		setCurrentRoom(room);
		setTimeout(()=> setNavOpen(false), 500);
	}, [ room ]);

	useEffect(() => {
		setLoading(true);
	    db.collection(room).orderBy('timestamp', 'asc').onSnapshot(snapshot => {
	      setMessages(snapshot.docs.map(doc => ({
		       id: doc.id,
		       data: doc.data()
	       })));
	    })
	     setLoading(false);
 	 }, [ room ])


	//For scrolling to the bottom of the messages when a message is sent
	  useEffect(() => {
	    window.scroll(0, messagesRef.current.scrollHeight);
	  }, [messages])


		if (sessionStorage.getItem('user')===null) {
			return <Navigate to="/" replace />
		} else {
			if (currentUser===null) {
				setCurrentUser(JSON.parse(sessionStorage.getItem('user')));
			}
		}

	return (
		<StyledRoom>
			<Header />
			<MessagesContainer ref={ messagesRef } >
				{
					loading ? (
							<LoaderContainer>
								<Loader />
							</LoaderContainer>
							) : (
								<>
									{ messages.length > 0 ? 
										messages.map((message) => (<Message key={message.id} message={message} room={ room } />)) : 
										<NoMessagesContainer>
											<img src="../../images/No-messages.svg" alt="No messages yet" />
											<p>It seems there are no messages here yet...Be the first to send a message</p>
										</NoMessagesContainer> 
									}
								</>
							)				

				}				
			</MessagesContainer>	
			<InputForm room={room} />		

		</StyledRoom>
	)
}

export default ChatRoom