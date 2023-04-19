import './global-css/index.css';
import { Routes, Route } from 'react-router-dom';
import  MainPage  from './pages/main/index';
import Book from './pages/book/index';
import Auth from './pages/auth/index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage></MainPage>}></Route>  
      <Route path='/book' element={<Book></Book>}></Route>
      <Route path='/auth' element={<Auth></Auth>}></Route>
    </Routes>
    
  );
}

export default App;
