import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotFound } from './NotFound/NotFound';

export const App = () => {
  return (
    <>
      <NotFound />
      <ToastContainer theme="colored" position="top-right" autoClose={3000} />
    </>
  );
};
