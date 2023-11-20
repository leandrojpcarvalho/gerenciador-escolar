import React, { useEffect, useState } from 'react';
import './styles.css';
import { validationLogin } from '../validations';
import { Actions } from '../redux/actions';
import { RootState, store } from '../store';
import { Login } from '../types';
import { useSelector } from 'react-redux';

const userInfo = {
  email: '',
  password: '',
};

function Login() {
  const [formInfo, setFormInfo] = useState(userInfo);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { statusByName } = useSelector((state: RootState)=> state.auth);
  useEffect(() => {

  }, [statusByName]);

  useEffect(()=> {
    if (error === 'no errors'){
      login(formInfo);
    } 
  },[error]);

  const login = async(body: Login) => await store.dispatch(Actions.login({body, method: 'POST'}));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = event.target.value;
    
    const newObj = {...formInfo, [key]: value};
    setFormInfo(newObj);
  };
  

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    validationLogin(formInfo, setError);
  };

  return(
    <div>
      <h2>Bem vindo!</h2>
      <section className="login-form">
        <form >
          <div className='fields'>
            <label htmlFor="email">Login</label>
            <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleChange}/>
            {
              error!=='no errors' ? <p>{error}</p> : ''
            }
          </div>
          <div>
            <label htmlFor="remember">Remember-me</label>
            <input type="checkbox" name="remember"/>
            
          </div>
          <button type="button" onClick={handleClick}>Entrar</button>
        </form>
      </section>
    </div>
  );
}

export default Login;