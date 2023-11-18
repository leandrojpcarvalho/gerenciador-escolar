import { pathImg } from '../assets/imagesPath';
import Login from '../components/login';
import './styles.css';

function ModelLogin() {
  return (
    <div>
      <div className='login-area'>
        <div className='login'>
          <Login />
        </div>
        <div>
          <img src={pathImg.sideImg} alt="man and women try logging" />
        </div>
      </div>
    </div>
  );
}

export default ModelLogin;
