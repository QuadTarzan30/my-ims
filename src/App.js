import './App.css';

import Login from "./components/login";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <AuthContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              {/* <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/files" element={<ProtectedRoute><Files /></ProtectedRoute>} />
              <Route path="/files/:teamName" element={<ProtectedRoute><Files /></ProtectedRoute>} />
              <Route path="/team" element={<ProtectedRoute><Team /></ProtectedRoute>} />
              <Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/avatar" element={<ProtectedRoute><AvatarUpload /></ProtectedRoute>} />
              <Route path="/invite" element={<ProtectedRoute><Invite /></ProtectedRoute>} /> */}
            </Routes>
          </AuthContextProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
