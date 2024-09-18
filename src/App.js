import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import User_todos from './components/User_todos';
import Home from './components/Home';
import Create_todos from './components/Create_todos';
import Update_todo from './components/Update_todo'
import Footer from './components/Footer'
import Error from './components/Error'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Home />} />
        <Route path='/create_todos' element={<Create_todos />} />
        <Route path='/your_todos' element={<User_todos />} />
        <Route path='/update_todo/:id' element={<Update_todo />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
