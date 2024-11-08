
import { RouterProvider } from 'react-router-dom';
import {router} from './Router/Router'
import './App.css';

const App = () => {
  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;  