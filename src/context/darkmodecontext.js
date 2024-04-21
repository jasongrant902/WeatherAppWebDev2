"use client"
import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

const useDarkMode = () => useContext(DarkModeContext);
export default useDarkMode;

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
