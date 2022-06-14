
import { toast } from 'react-toastify';

export const defaultToast = (message) => {
  toast(message, {
    position: "bottom-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
  });
}