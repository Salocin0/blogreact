/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(() => {
    const storedValue = localStorage.getItem('isLogged');
    return storedValue === 'true';
  });

  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));

  useEffect(() => {
    if(accessToken){
      localStorage.setItem('accessToken', accessToken);
    }else{
      localStorage.removeItem('accessToken');
    }
  }, [accessToken]);

  useEffect(() => {
    if(refreshToken){
      localStorage.setItem('refreshToken', refreshToken);
    }else{
      localStorage.removeItem('refreshToken');
    }
  }, [refreshToken]);

  const FetchBackGetRefreshToken = async () => {
    const response = await fetch('http://localhost:3000/auth/token', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        "refreshtoken": refreshToken
       },
    });
    if(response.ok){
      const responsejson = await response.json();
      setAccessToken(responsejson.data);
      return responsejson.data
    }else{
      return null
    }
  }

  useEffect(() => {
    localStorage.setItem('isLogged', isLogged);
  }, [isLogged]);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged, accessToken, setAccessToken, refreshToken, setRefreshToken,FetchBackGetRefreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};
