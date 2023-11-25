import { useEffect, useState } from 'react';
import ModelLogin from '../models/login.background';
import './styles.css';
import { useSelector } from 'react-redux';
import {RootState} from '../store';
import Header from '../components/header';


function Index() {
  const [isLogged, setIsLogged] = useState(false);
  const { token } = useSelector((state:RootState)=> state.auth);

  useEffect(() => {
    if(token !== '') {
      setIsLogged(true);
    }
  }, [token]);
  return <div className='container'>{isLogged ? <Header/>: <ModelLogin />}</div>;
}

export default Index;
