import React from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { isLoading, showAlert, alertText, clearAlert, loginUser } =
    useAuthContext();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password).then(() => {
      setEmail('');
      setPassword('');
      setTimeout(() => {
        navigate('/');
      }, 3000);
    });
  };

  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input
          value={email ?? ''}
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'
        />
        <input
          value={password ?? ''}
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
        ></input>
        <button type='submit'>Save</button>
        {showAlert ? <p>{alertText}</p> : null}
      </form>
    </div>
  );
};

export default Login;
