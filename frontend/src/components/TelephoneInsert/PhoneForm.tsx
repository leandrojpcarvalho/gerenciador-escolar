import { Phone } from '../../types';

type Props = {
  phone: Phone;
  onSubmit: (phone: Phone) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cancel: () => void;
};

function PhoneForm({ phone, onChange, onSubmit, cancel }: Props) {
  const { phoneNumber, phoneOwner } = phone;

  return (
    <form className="phone">
      <div>
        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="phoneOwner">Pertence a</label>
        <input
          type="text"
          name="phoneOwner"
          value={phoneOwner}
          onChange={onChange}
        />
      </div>
      <button
        type="button"
        className='btn'
        onClick={() => onSubmit(phone)}>
        Finalizar
      </button>
      <button
        type="button"
        className='btn'
        onClick={() => cancel()}>
        Cancelar
      </button>
    </form>
  );
}

export default PhoneForm;
