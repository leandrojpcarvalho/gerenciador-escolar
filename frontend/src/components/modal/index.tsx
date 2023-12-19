import { useEffect, useState } from 'react';
import './style.css';

type ModalContent = {
  [key: string] : () => JSX.Element,
}


type ModalProps = {
  ModalHeader: {
    title: string;
    subTitle: string;
  };
  modalContent: ModalContent
};

function Modal({
  ModalHeader: { subTitle, title },
  modalContent,
}: ModalProps) {
  const menu = Object.keys(modalContent);
  const form = menu.map((newForm) => modalContent[newForm]());
  const [selectedForm, setSelectedForm] = useState(0);

  const handleChangeForm = (form: number) => {
    setSelectedForm(form);
  };

  const menuGenerator = () => {
    return (
      <div className="nav">
        {menu.map((item, index) => (
          <div
            key={item}
            onClick={() => handleChangeForm(index)}
            aria-hidden={true}
            className="nav-item btn">
            {item}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='modal'>
      <div className='modal-wrapper'>
        <div className="header">{menuGenerator()}</div>
        <div className="container">
          <div className="title">
            <h2>{title}</h2>
            <p>{subTitle}</p>
          </div>
          <div className="content">{form[selectedForm]}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
