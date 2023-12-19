import React, { useState } from 'react';
import './userInfoForm.css';

const INIT_STATE = {
  treatment: 'default',
  pronouns: 'default',
  name: '',
  email: '',
  cpf: 0,
};

function UserInfoForm() {
  const [form, setForm] = useState(INIT_STATE);

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = event.target.value;

    const newObj = { ...form, [key]: value };

    setForm(newObj);
  };

  const { treatment, cpf, email, name, pronouns } = form;
  return (
    <div className="form">
      <h2>Olá!</h2>
      <p>
        Identificamos que é o seu primeiro acesso, vamos confirmar algumas
        informações, prometo que demorará menos que 3 min
      </p>

      <h2>Com relação aos seus dados pessoais...</h2>
      <form>
        <div>
          <label htmlFor="treatment">título</label>
          <select
            name="treatment"
            defaultValue={'default'}
            onChange={handleOnChange}
            value={treatment}>
            <option
              value="default"
              disabled
            >
              selecione
            </option>
            <option value="sr">senhor</option>
            <option value="sra">senhora</option>
            <option value="nf">sem formalidade</option>
          </select>
          <label htmlFor="pronouns">pronomes</label>
          <select
            name="pronouns"
            value={pronouns}
            onChange={handleOnChange}
            defaultValue={'default'}
          >
            <option
              value="default"
              disabled
            >
              selecione
            </option>
            <option value="ele">ele/dele</option>
            <option value="ele">ela/dela</option>
            <option value="sn">prefere nao declarar</option>
          </select>
          <label htmlFor="name">Nome</label>
          <input
            onChange={handleOnChange}
            value={name}
            type="text"
            name="name"
          />
        </div>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={handleOnChange}
          type="text"
          name="email"
        />
        <label htmlFor="cpf">CPF</label>
        <input
          value={cpf}
          onChange={handleOnChange}
          type="text"
          name="CPF"
        />
        <p>prosseguir para proxima página?</p>
        <button
          type="button"
          className="btn">
          Próxima
        </button>
      </form>
    </div>
  );
}

export default UserInfoForm;
