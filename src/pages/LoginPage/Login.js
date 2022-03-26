import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import firebase from 'firebase';

import {useApp} from '../../contexts/AppContext';


import { auth } from '../../firebase/config';


import Loader from '../../components/Loader';
import { LoginBody, LoginContainer, ImageContainer, LoginImage, Logo, FormContainer, LoginForm, Button, GoogleButton, Alternative } from './Login.styled';
import { BiCommentDots } from 'react-icons/bi';
import { BsGoogle } from 'react-icons/bs';

const Login = () => {

	const { setCurrentUser } = useApp();

	const navigate = useNavigate();

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ loading, setLoading ] = useState(false);

	const handleLogin = (event) => {
		setLoading(true);
		event.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password).then((authUser)=> {
				setCurrentUser(authUser.user);
				sessionStorage.setItem('user', JSON.stringify(authUser.user)); // stores user details in session storage
				setLoading(false);
				navigate("/chatroom/general");
			})
			.catch(error => {
				setLoading(false);
				alert(error.message);
			})

	}

	const handleGoogleLogin =  () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		provider.setCustomParameters({ prompt: 'select_account' });
		auth
			.signInWithPopup(provider).then(authUser => {
				setCurrentUser(authUser.user);
				sessionStorage.setItem('user', JSON.stringify(authUser.user)); // stores user details in session storage
				navigate("/chatroom/general");
			})
			.catch(error => alert(error.message))
	}


	

	return (
		<LoginBody>
			<LoginContainer>
				<ImageContainer>
					<LoginImage src="./images/People-chatting.svg" alt="People chatting" />
				</ImageContainer>
				
				<FormContainer>
					<Logo> <span> <BiCommentDots /> </span>Worldie<span>Chat</span> </Logo>
					<p>Login to continue communicating</p>
					<LoginForm onSubmit={ handleLogin } >
						<input type="email" value={email} onChange={(e)=> setEmail(e.target.value) } placeholder="Email" required />
						<input type="password" value={password} onChange={(e)=> setPassword(e.target.value) } placeholder="Password" required />	
						<Button type="submit" disabled={loading} >
							{ loading ? <Loader color="#fff" /> : 'Login' }
						</Button>
					</LoginForm>
					<GoogleButton onClick={handleGoogleLogin} > <BsGoogle /> Login with Google </GoogleButton>
					<Alternative>Not on WorldieChat yet? <span><Link to="/signup">Sign Up Here.</Link></span></Alternative>
				</FormContainer>
			</LoginContainer>
		</LoginBody>
	)
}

export default Login