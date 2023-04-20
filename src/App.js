import './global-css/index.css';
import { Routes, Route } from 'react-router-dom';
import  MainPage  from './pages/Main/index';
import Book from './pages/Book/index';
import Auth from './pages/Auth/index';
import Registration from './pages/Registration/index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage></MainPage>}></Route>  
      <Route path='/book' element={<Book></Book>}></Route>
      <Route path='/auth' element={<Auth></Auth>}></Route>
      <Route path='/registration' element={<Registration></Registration>}></Route>
    </Routes>
    
  );
}

export default App;
