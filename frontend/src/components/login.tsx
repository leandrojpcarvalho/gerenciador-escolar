import React, { useEffect, useState } from 'react';
import './styles.css';
import { validationLogin } from '../validations';
import { Actions } from '../redux/actions';
import { store } from '../store';

const userInfo = {
  email: '',
  password: '',
};

function Login() {
  const [formInfo, setFormInfo] = useState(userInfo);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const dispatch = useDispatch();

  useEffect(()=> {
    if (error === ''){
      setIsError(false);
    } else {
      setIsError(true);
    }
  },[error]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = event.target.value;
    
    const newObj = {...formInfo, [key]: value};
    setFormInfo(newObj);
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    validationLogin(formInfo, setError);
    setIsError(false);
    const test = await store.dispatch(Actions.login({body:formInfo, method: 'POST'}));
    console.log(test);
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
              isError ? <p>{error}</p> : ''
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