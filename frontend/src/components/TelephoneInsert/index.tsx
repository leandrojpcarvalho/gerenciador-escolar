import { useState } from 'react';
import { Phone } from '../../types';
import PhoneForm from './PhoneForm';

type Send = {
  phone: Phone;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (phone: Phone) => void;
  onDelete: (id: number)   => void;
};

function TelephoneInsert({ onSubmit, onChange, onDelete, phone }: Send) {
  const [isEditing, setIsEditing] = useState(false);

  const submit = (phone: Phone) => {
    onSubmit(phone);
    setIsEditing(false);
  };

  const cancel = () => {
    setIsEditing(false);
  };

  const phoneFromData = (phone: Phone) => {
    const { id, phoneNumber, phoneOwner } = phone;
    return (
      <>
        <p>{`${phoneNumber} contato de ${phoneOwner}`}</p>
        <button
          key={`edit ${id}`}
          className='btn'
          type="button"
          onClick={() => setIsEditing(true)}>
          Editar
        </button>
        <button
          key={`remove ${id}`}
          className='btn'
          type="button"
          onClick={() => onDelete(id ? id : 0)}
        >
          remove
        </button>
      </>
    );
  };

  return isEditing  ? <PhoneForm phone={phone} cancel={cancel} onChange={onChange} onSubmit={submit}/> : phoneFromData(phone);
}

export default TelephoneInsert;
