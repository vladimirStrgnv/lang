import './global-css/index.css';
import { Routes, Route } from 'react-router-dom';
import  MainPage  from './pages/Main/index';
import BookPage from './pages/BookPage/index';
import Auth from './pages/Auth/index';
import Registration from './pages/Registration/index';
import Book from './modules/Book/index';
import Glossary from './modules/Glossary/index';
import GamePage from './pages/Games/index';
import Savannah from './pages/Games/components/Savannah';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage></MainPage>}></Route>  
      <Route path='/teach' element={<BookPage></BookPage>}>
        <Route index path='book' element={<Book></Book>}></Route>
        <Route path='glossary/' element={<Glossary></Glossary>}/> 
      </Route>
      <Route path='/login' element={<Auth></Auth>}></Route>
      <Route path='/registration' element={<Registration></Registration>}></Route> 
      <Route path='/games' element={<GamePage></GamePage>}>
        <Route  path='savannah' element={<Savannah></Savannah>}></Route>
        <Route  path='audiocall' element={<Book></Book>}></Route>
      </Route>
    </Routes>
    
  );
}

export default App;
