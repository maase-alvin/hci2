import React, { createContext, useContext, useState,useMemo } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUserData] = useState(null);
  
    const login = (userData) => {
      setUserData(userData);
    };
  
    const logout = () => {
      setUserData(null);
    };
    const contextValue = useMemo(() => ({ user, login, logout }), [user]);

    return (
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    );

};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export const useAuth = () => useContext(AuthContext);
