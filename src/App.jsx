import { useState } from 'react';
import Login from './components/Login.jsx';
import Logo from './components/Logo.jsx';
import './App.css';

export default function App() {
    const [loginSuccess, setLoginSucess] = useState(false);

    function onLogin() {
        setLoginSucess(true);
    }

    return (
        <div className="login">
            <Logo />
            <Login loginSuccessCallback={onLogin} />
            {loginSuccess && <p>Login success, transferring you to the actual application ....</p>}
        </div>
    );
}