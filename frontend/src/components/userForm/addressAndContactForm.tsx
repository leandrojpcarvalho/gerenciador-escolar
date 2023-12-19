import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store';
import './contactForm.css';
import TelephoneInsert from '../TelephoneInsert';
import { Phone, StudentType } from '../../types';
import PhoneForm from '../TelephoneInsert/PhoneForm';
import Students from '../Students';

const INIT_FORM = {
  address: '',
  number: '',
  houseOrApart: 'default',
  aptNumber: '',
};

const INIT_PHONE = {
  phoneNumber: '',
  phoneOwner: '',
};

const INIT_DATA_PHONES: Phone[] = [
  {
    id: 1,
    phoneNumber: '80989863548',
    phoneOwner: 'fulano 1',
  },
];

const INIT_DEPENDENTS: StudentType[] = [
  {
    id: 1,
    name: 'juarez tavares',
    period: 'tarde',
    grade: 8,
    letter: 'C',
    counselor: 'Amanda',
  },
  {
    id: 5,
    name: 'julia marinho',
    period: 'tarde',
    grade: 8,
    letter: 'C',
    counselor: 'Amanda',
  },
];

const INIT_STATE: Phone = {
  phoneNumber: '',
  phoneOwner: '',
};
function AddressAndContactForm() {
  const [form, setForm] = useState(INIT_FORM);
  const [insertAPhone, setInsertAPhone] = useState(false);
  const [phone, setPhone] = useState(INIT_STATE);
  const [phones, setPhones] = useState<Phone[]>(INIT_DATA_PHONES);
  // const { auth } = useSelector((state: RootState) => state);

  const displayAptNumber = () => {
    return (
      <>
        <label htmlFor="aptNumber">Número Apt.</label>
        <input
          type="text"
          name="aptNumber"
          value={aptNumber}
          onChange={updateForm}
        />
      </>
    );
  };

  const handleAddPhone = (phone: typeof INIT_PHONE) => {
    const id = phones.length + 1;
    setPhones([...phones, { ...phone, id }]);
    setPhone(INIT_PHONE);
    cancel();
  };

  const updateForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name as keyof typeof INIT_FORM;
    const value = event.target.value;
    const newData = { ...form, [key]: value };
    setForm(newData);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name as keyof typeof INIT_STATE;
    const value = event.target.value;

    const newPhone = { ...phone, [key]: value };
    setPhone(newPhone);
  };

  const cancel = () => {
    setInsertAPhone(false);
  };

  const showFormNewPhone = () => {
    if (insertAPhone) {
      return (
        <PhoneForm
          cancel={cancel}
          onChange={onChange}
          phone={phone}
          onSubmit={handleAddPhone}
        />
      );
    } else {
      return (
        <button
          type="button"
          className='btn'
          onClick={() => setInsertAPhone(true)}>
          Mais telefones
        </button>
      );
    }
  };

  const onDelete = (id: number) => {
    setPhones(phones.filter((phone) => id !== phone.id));
  };

  const handleUpdate = (phone: Phone) => {
    if (phone.id) {
      let newArray = phones.filter(({ id }) => id !== phone.id);
      newArray = [...newArray, phone];
      setPhones(newArray);
    } else {
      setPhones([...phones, { ...phone, id: phones.length + 1 }]);
    }
  };

  const { address, aptNumber, houseOrApart, number } = form;
  return (
    <div className="form">
      <form className='gap-form'>
        <div className="section gap-form">
          <h3>endereço</h3>
          <div className="address gap-form">
            <label htmlFor="cep">CEP</label>
            <input type="text" />
            <label htmlFor="address">Endereço</label>
            <div className="second-column gap-form">
              <input
                type="text"
                name="address"
                value={address}
                onChange={updateForm}
              />
              <label htmlFor="number">Nº</label>
              <input
                type="text"
                name="number"
                value={number}
                onChange={updateForm}
              />
            </div>
            <label htmlFor="houseOrApart">Moro em um(a)</label>
            <div className="second-column gap-form">
              <select
                name="houseOrApart"
                onChange={updateForm}
                value={houseOrApart}>
                <option
                  value="default"
                  disabled={true}>
                  escolha
                </option>
                <option value="house">Casa</option>
                <option value="apart">Apartamento</option>
              </select>
              {houseOrApart === 'apart' ? displayAptNumber() : ''}
            </div>
          </div>
        </div>
        <div className="contacts section gap-form">
          <h3>contatos</h3>
          <div className="contacts gap-form">
            {showFormNewPhone()}
            {phones.map((phone) => (
              <div
                className="dependent gap-form"
                key={phone.id}>
                <TelephoneInsert
                  key={phone.id}
                  onSubmit={handleUpdate}
                  onDelete={onDelete}
                  onChange={onChange}
                  phone={phone}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="dependents section gap-form">
          <Students students={INIT_DEPENDENTS} />
        </div>
        <button
          className='btn'
          type="button">Próximo</button>
      </form>
    </div>
  );
}

export default AddressAndContactForm;
