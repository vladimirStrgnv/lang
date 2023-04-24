import './global-css/index.css';
import { Routes, Route } from 'react-router-dom';
import  MainPage  from './pages/Main/index';
import BookPage from './pages/BookPage/index';
import Auth from './pages/Auth/index';
import Registration from './pages/Registration/index';
import Book from './modules/Book/index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage></MainPage>}></Route>  
      <Route path='/teach' element={<BookPage></BookPage>}>
        <Route index path='book' element={<Book></Book>}/>
        <Route path='glossary' /> 
      </Route>
      <Route path='/login' element={<Auth></Auth>}></Route>
      <Route path='/registration' element={<Registration></Registration>}></Route>
    </Routes>
    
  );
}

export default App;
