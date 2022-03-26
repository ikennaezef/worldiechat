import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import {useApp} from '../contexts/AppContext';

import { auth } from '../firebase/config';


const ProtectedRoute = ({ redirectPath="/", children }) => {

	const { currentUser, setCurrentUser } = useApp();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(authUser => {
			if (authUser) {
				setCurrentUser(authUser);
			} else {
				setCurrentUser(null);
				return <Navigate to="/" replace />;
			}
		})
		unsubscribe(); 
	}, [ currentUser ])

	return children;
}

export default ProtectedRoute