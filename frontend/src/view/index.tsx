import { useState } from 'react';
import ModelLogin from '../models/login.background';
import './styles.css';

function Index() {
  const [isLogged, setIsLogged] = useState(false);
  return <body className='container'>{isLogged ? <></>: <ModelLogin />}</body>;
}

export default Index;
