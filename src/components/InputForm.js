import { useState } from 'react'

import {useApp} from '../contexts/AppContext';

import {StyledForm} from './styles/InputForm.styled';
import Loader from './Loader';

import { db } from '../firebase/config';
import firebase from 'firebase';

import { FaPaperPlane } from 'react-icons/fa';

const InputForm = ({ room }) => {

	const { currentUser } = useApp();
	const [message, setMessage] = useState('');
	const [ loading, setLoading ] = useState(false);

	const sendMessage = (e) => {
		e.preventDefault();
		setLoading(true);

		db.collection(room).add({
			sender: currentUser.displayName,
			message: message,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		})
		setMessage('');
		setLoading(false)
	}


	return (
		<StyledForm>
			<input type="text" placeholder='Enter message...' value={message} onChange={(e) => setMessage(e.target.value)} />
			<button type='submit' disabled={!message} onClick={ sendMessage } >
				{ loading ? <Loader color="#fff" /> : <FaPaperPlane /> }				
			</button>
		</StyledForm>
	)
}

export default InputForm