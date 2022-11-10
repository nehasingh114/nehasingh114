import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setAuth] = useState(false);

  const handleToggle = () => {
    setAuth(!isAuth);
  };

  return (
    <AppContext.Provider value={{ isAuth, handleToggle }}>
      {children}
    </AppContext.Provider>
  );
}
