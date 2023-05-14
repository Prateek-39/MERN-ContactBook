import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import ContactBook from './components/ContactBook';
import EditUser from './components/EditUser';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
  
    <BrowserRouter>
        <Routes>
          <Route path='/homepage' element ={<ContactBook/>} />
          <Route path='/all' element ={<AllUsers/>} />
          <Route path='/add' element ={<AddUser/>} />
          <Route path='/edit/:id' element ={<EditUser/>} />
          <Route path='/' element ={<Login/>} />
          <Route path='/signup' element ={<SignUp/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
