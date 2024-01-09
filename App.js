
import './App.css';
import { Routes, Route  } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import { Navigate } from 'react-router-dom';
import Front from './pages/Front';


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Front />}></Route>
       

        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<ProtectedRoutes><HomePage/></ProtectedRoutes>}/>

        <Route path="/register" element={<Register />}></Route>
       
      </Routes>


    </>
  );
}
export function ProtectedRoutes(props) {
  if (localStorage.getItem('user')) {
    return props.children
  } else {
    return <Navigate to="/login" />
  }
}

export default App;
