import { Routes, Route } from "react-router-dom";
import Login from './views/Login.js';
import Register from './views/Register';
import Home from './views/Home';

function App() {
  const user = localStorage.getItem('token');

  return (
    <div className="w-screen min-h-screen">
      <Routes>
        { user && <Route path="/" element={<Home />} />}
        { !user && <Route path="/" element={<Login />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
