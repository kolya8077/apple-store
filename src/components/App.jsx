import { lazy } from 'react';
import { HeaderEl } from './header/HeaderEl';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotFound } from './NotFound/NotFound';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderEl />}>
          <Route index element={<HomePage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer theme="colored" position="top-right" autoClose={3000} />
    </>
  );
};
