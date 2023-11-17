export default class Service {
  constructor(
    private Model: IModel = new Model(),
  ) { }

  public async getAllcoisas(): Promise<ServiceResponse<ICoisas[]>> {
    const allCoisas = await this.Model.findAll();
    return { status: 'SUCCESSFUL', data: allCoisas };
  }
}

const Controller = new Controller();

const router = Router();


router.post('/', Validations.validateToken, (req: Request, res: Response) => {
  Controller.createAlgumaCois(req, res);
});