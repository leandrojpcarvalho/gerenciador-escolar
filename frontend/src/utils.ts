import Swal from 'sweetalert2';

const modalError = (text: string) => {
  return Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text,
    confirmButtonText: 'Ok'
  });
};


export const sweetAlertModals = {
  modalError
};