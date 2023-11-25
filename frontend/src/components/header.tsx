import { useSelector } from 'react-redux';
import { RootState } from '../store';
import jwt from 'jsonwebtoken';
import { useEffect } from 'react';

let secret = 'algumacoisa.com'; 
const { SECRET } = import.meta.env;
if (SECRET) secret = SECRET;

function Header() {
  const { token } = useSelector((state: RootState) => state.auth);
  useEffect(()=> {
    const valid = token;
    console.log(valid);
    // console.log(jwt.verify(valid, secret));
  }, []);
  return <p>Logado</p>;
}

export default Header;
