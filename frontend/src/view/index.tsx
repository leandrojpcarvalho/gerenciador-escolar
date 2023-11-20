import { useState } from 'react';
import ModelLogin from '../models/login.background';
import './styles.css';

function Index() {
  const [isLogged, setIsLogged] = useState(false);
  return <div className='container'>{isLogged ? <></>: <ModelLogin />}</div>;
}

export default Index;
