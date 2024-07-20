import { Home, Login, Register } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { AuthProvider } from './context/AuthContext';
import { ConversationProvider } from './context/ConversationContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <ConversationProvider>
        <div className="h-screen flex items-center justify-center">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                index
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/:conversationId"
                index
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
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
      </ConversationProvider>
    </AuthProvider>
  );
}

export default App;
