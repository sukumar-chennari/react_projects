import { ToastContainer, toast } from 'react-toastify';

export function successToast(message){
    toast.success(message, {
        position: "top-center"
      });
}

export function errorToast(message){
    toast.error("Error Notification !", {
        position: "top-left"
      });

}

export function warnToast(message){
    toast.warn("Warning Notification !", {
        position: "bottom-left"
      });
}

export function infoToast(message){
    toast.info("Info Notification !", {
        position: "bottom-center"
      });
}



