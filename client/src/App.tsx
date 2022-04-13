import { Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login.jsx';
import SignUp from './components/SignUp';
import Home from './components/Home';

function App() {
  const user = localStorage.getItem('token');

  return (
    <div className="w-screen min-h-screen">
      <Routes>
        { user && <Route path="/" element={<Home />} />}
        { !user && <Route path="/" element={<Login />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
