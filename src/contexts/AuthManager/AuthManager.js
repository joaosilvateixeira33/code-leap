import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ModalLogin from '../../components/Login/ModalLogin';
import HomePage from '../../pages/HomePage';

export default function AuthManager() {
  const [loggedInUser, setLoggedInUser] = useState(() => localStorage.getItem('username') || null);
  const [showLoginModal, setShowLoginModal] = useState(!loggedInUser);

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem('username', loggedInUser);
      setShowLoginModal(false);
    } else {
      localStorage.removeItem('username');
      setShowLoginModal(true);
    }
  }, [loggedInUser]);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            loggedInUser ? (
              <HomePage username={loggedInUser} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/login"
          element={
            loggedInUser ? (
              <Navigate to="/" replace />
            ) : (
              showLoginModal && <ModalLogin onLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </Router>
  );
}