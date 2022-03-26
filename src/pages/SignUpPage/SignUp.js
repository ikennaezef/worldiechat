import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from 'firebase';

import {useApp} from '../../contexts/AppContext';

import { auth } from '../../firebase/config';

import Loader from '../../components/Loader';
import { LoginBody, LoginContainer, ImageContainer, LoginImage, Logo, FormContainer, LoginForm, Button, GoogleButton, Alternative } from '../LoginPage/Login.styled';
import { BiCommentDots } from 'react-icons/bi';
import { BsGoogle } from 'react-icons/bs';

const SignUp = () => {

	const { setCurrentUser, setDisplay } = useApp();

	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ loading, setLoading ] = useState(false);

	const navigate = useNavigate();

	const handleSignUp =  (event) => {
		setLoading(true);
		event.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then(authUser => {
				authUser.user.updateProfile({
					displayName: username // sets the user's username
				})
				setDisplay(username);
				setCurrentUser(authUser.user);
				sessionStorage.setItem('user', JSON.stringify(authUser.user)); // stores user details in session storage
				setLoading(false);
				return navigate("/chatroom/general");
			})
			.catch(error => {
				setLoading(false);
				alert(error.message);
			});


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
					<p>Sign Up to start communicating</p>
					<LoginForm onSubmit={ handleSignUp } >
						<input type="text" value={username} onChange={(e)=> setUsername(e.target.value) } placeholder="Username" required />
						<input type="email" value={email} onChange={(e)=> setEmail(e.target.value) } placeholder="Email Address" required />
						<input type="password" onChange={(e)=> setPassword(e.target.value) } placeholder="Password" required />
						<Button type="submit" disabled={loading} >
							{ loading ? <Loader color="#fff" /> : 'Sign Up' }
						</Button>
					</LoginForm>
					<GoogleButton onClick={ handleGoogleLogin } > <BsGoogle /> Login with Google </GoogleButton>
					<Alternative>Already have an account? <span><Link to="/">Login Here.</Link></span></Alternative>
				</FormContainer>
			</LoginContainer>
		</LoginBody>
	)
}

export default SignUp