import express from 'express';
import routes from './routes';

class App {
  public app: express.Express;

  constructor(){
    this.app = express();

    this.app.use(express.json());

    this.routes();
  }

  private routes():void {
    this.app.use('/login', routes.login);
    this.app.use('/users', routes.users);
    this.app.use('/', (req, res) =>  res.status(200).send('Bem Vindo'))
  }

  public start(port:string|number):void {
    this.app.listen(port, () => {
      console.log('rodando na porta:', port)
    });
  }

}

export default App;