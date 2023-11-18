import './styles.css';

function Login() {
  return(
    <div>
      <h2>Bem vindo!</h2>
      <section className="login-form">
        <form>
          <div className='fields'>
            <label htmlFor="email">Login</label>
            <input type="email" name="email" placeholder="Email"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password"/>
          </div>
          <div>
            <label htmlFor="remember">Remember-me</label>
            <input type="checkbox" name="remember"/>
            
          </div>
          <button type="button">Entrar</button>
        </form>
      </section>
    </div>
  );
}

export default Login;