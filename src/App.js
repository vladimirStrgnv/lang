import './global-css/index.css';
import { Routes, Route } from 'react-router-dom';
import  MainPage  from './pages/Main/index';
import BookPage from './pages/Book/index';
import Auth from './pages/Auth/index';
import Registration from './pages/Registration/index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage></MainPage>}></Route>  
      <Route path='/teach' element={<BookPage></BookPage>}>
        <Route index path='book' />
        <Route path='glossary' /> 
      </Route>
      <Route path='/login' element={<Auth></Auth>}></Route>
      <Route path='/registration' element={<Registration></Registration>}></Route>
    </Routes>
    
  );
}

export default App;
