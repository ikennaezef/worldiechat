import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './components/styles/Global';

import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/LoginPage/Login';
import SignUp from './pages/SignUpPage/SignUp';
import ChatRoom from './pages/ChatRoomPage/ChatRoom';
import NotFound from './pages/NotFoundPage/NotFound';

import { AppContextProvider } from './contexts/AppContext'
import { ThemeContextProvider } from './contexts/ThemeContext'




function App() {

  return (
    <Router>
      <AppContextProvider>  
        <ThemeContextProvider >
          <GlobalStyles />  
          <Routes>
            <Route path="/" exact element={ <Login /> } />
            <Route path="/signup" element={ <SignUp /> } />
            <Route
                path="/chatroom/general" 
                element = {
                  <ProtectedRoute>
                    <ChatRoom room="general" />
                  </ProtectedRoute>
                }
             />
             <Route
                path="/chatroom/introductions" 
                element = {
                  <ProtectedRoute>
                    <ChatRoom room="introductions" />
                  </ProtectedRoute>
                }
             />
             <Route
                path="/chatroom/sports" 
                element = {
                  <ProtectedRoute>
                    <ChatRoom room="sports" />
                  </ProtectedRoute>
                }
             />
             <Route
                path="/chatroom/music" 
                element = {
                  <ProtectedRoute>
                    <ChatRoom room="music" />
                  </ProtectedRoute>
                }
             />
             <Route
                path="/chatroom/love" 
                element = {
                  <ProtectedRoute>
                    <ChatRoom room="love" />
                  </ProtectedRoute>
                }
             />
             <Route
                path="/chatroom/technology" 
                element = {
                  <ProtectedRoute>
                    <ChatRoom room="technology" />
                  </ProtectedRoute>
                }
             />
             <Route
                path="/chatroom/crypto" 
                element = {
                  <ProtectedRoute>
                    <ChatRoom room="crypto" />
                  </ProtectedRoute>
                }
             />
             <Route path="/*" exact element={ <NotFound /> } />
          </Routes>               
        </ThemeContextProvider>
      </AppContextProvider> 
    </Router>
    
  );
}

export default App;
