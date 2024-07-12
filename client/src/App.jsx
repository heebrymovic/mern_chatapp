import { Home, Login, Register } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="h-screen p-4 flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
