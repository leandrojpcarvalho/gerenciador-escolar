function UserInfo() {
  
  return (
    <>
      <div>
        <h2>Olá, Bem vindo!</h2>
        <p>Identificamos que é o seu primeiro acesso, vamos confirmar algumas informações, prometo que demorará menos que 3 min</p>
      </div>
      <div>
        <h2>Com relação aos seus dados pessoais...</h2>
        <form >
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
          <label htmlFor="treatment"></label>
          <select name="treatment">
            <option value="sr">senhor</option>
            <option value="sra">senhora</option>
            <option value="nf">sem formalidade</option>
          </select>
          <label htmlFor="pronouns">pronomes</label>
          <select name="pronouns" >
            <option value="ele">ele/dele</option>
            <option value="ele">ela/dela</option>
            <option value="sn">prefere nao declarar</option>
          </select>
          <label htmlFor="cpf">CPF</label>
          <input type="text" name="CPF" />
          <p>prosseguir para proxima página?</p>
          <button type="button">Próxima</button>
        </form>
      </div>
      <div>
        <h2>Nessa pagina verificaremos endereço, informações de contato e dependentes</h2>
        <form>
          <label htmlFor="address">Endereço</label>
          <input type="text" name="address" />
          <label htmlFor="number">Nº</label>
          <label htmlFor="houseOrApart">Moro em um(a)</label>
          <select name="houseOrApart">
            <option value="house">Casa</option>
            <option value="apart">apartamento</option>
          </select>
          <label htmlFor="aptNumber">Número Apt.</label>
          <input type="text" name="aptNumber" />
          <label htmlFor="phone">Telefone</label>
          <input type="text" name="phone"/>
          <label htmlFor="phoneOwner">Pertence a</label>
          <input type="text" name="phoneOwner" />
          <ul>
            <li>dependente 1</li>
            <li>dependente 2</li>
          </ul>
          <button type="button">Próximo</button>
        </form>
      </div>
      <div>
        <h2>Peço que avalie sua experiencia com o cadastro</h2>
        <textarea name="" id="" cols="30" rows="10" placeholder="sugestões"></textarea>
        <button type="button"></button>
        <button type="button"></button>
        <button type="button"></button>
        <button type="button"></button>
        <button type="button"></button>
        <button type="button">Finalizar</button>
      </div>
    </>
  );
}