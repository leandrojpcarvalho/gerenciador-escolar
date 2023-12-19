import { useEffect, useState } from 'react';
import ModelLogin from '../models/login.background';
import './styles.css';
import { useSelector } from 'react-redux';
import {RootState} from '../store';
import Header from '../components/header';
import AddressAndContactForm from '../components/userForm/addressAndContactForm';
import Modal from '../components/modal';
import UserInfoForm from '../components/userForm/userInfoForm';

const obj = {
  info : UserInfoForm,
  address : AddressAndContactForm, 
};


function Index() {
  const [isLogged, setIsLogged] = useState(false);
  const { token } = useSelector((state:RootState)=> state.auth);

  useEffect(() => {
    if(token !== '') {
      setIsLogged(true);
    }
  }, [token]);
  // return isLogged ? 
  return <Modal modalContent={obj} ModalHeader={ { title: '', subTitle: ''} } />
  // : <ModelLogin />;
}

export default Index;
