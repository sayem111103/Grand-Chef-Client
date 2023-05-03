/* eslint-disable */
import { RouterProvider } from 'react-router-dom';
import './App.css'
import router from './Routes/Route/Route';
import AuthProvider from './AuthProvider/AuthProvider';

const App = () => {

  return <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>;
}

export default App;
