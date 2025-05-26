import React from 'react';
import LoginForm from './LoginForm';
import PortfolioManager from './PortfolioManager';
import useAdmin from './useAdmin';

const Body = () => {
  const { isAuthenticated, loginError, handleLogin, handleLogout } = useAdmin();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-7xl mx-auto">
        <h1 id="Body_3" className="text-3xl font-bold text-center text-gray-900 mb-8">
          Admin Dashboard
        </h1>
        {!isAuthenticated ? (
          <LoginForm onLogin={handleLogin} error={loginError} />
        ) : (
          <div id="Body_4">
            <div id="Body_5" className="flex justify-end mb-6">
              <button
                id="Body_6"
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
            <PortfolioManager />
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;