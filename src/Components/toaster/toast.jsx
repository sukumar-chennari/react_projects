import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { successToast,errorToast,warnToast,infoToast } from './toast-helpers';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export function CustomToast(){
  const onClick = () =>{ {
        successToast('Order placed successfully!!')

      };
  };

  return (
    <div>
      <button onClick={onClick}>Order Now !</button>
      <ToastContainer />
    </div>
  );
}