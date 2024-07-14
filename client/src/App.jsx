import { Home, Login, Register } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

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
      <Toaster
        position="top-right"
        containerStyle={{ margin: '10px' }}
        gutter={10}
        toastOptions={{
          duration: 5000,
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px'
            /* background: 'var(--color-main--0)',
            color: 'var(--color-white)'*/
          },
          success: {
            duration: 3000
          },
          error: {
            duration: 3000
          }
        }}
      />
    </div>
  );
}

export default App;
