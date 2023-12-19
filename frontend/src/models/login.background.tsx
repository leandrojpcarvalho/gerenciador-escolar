import { pathImg } from '../assets/imagesPath';
import Login from '../components/login';
import './styles.css';


function ModelLogin() {
  // const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="login-area">
        <div className="login">
          <Login />
        </div>
        <div>
          <img
            src={pathImg.sideImg}
            alt="man and women try logging"
          />
        </div>
      </div>
    </div>
  );
}

export default ModelLogin;
