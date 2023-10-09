
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {



     
       
       
     const [mode, setMode] = useState(() => {
        const storedMode = localStorage.getItem("colorMode");
        return storedMode || "Blue";
      });
    
      // Update the color mode in local storage whenever it changes
      useEffect(() => {
        localStorage.setItem("colorMode", mode);
      }, [mode]);

    const info = {
        mode,
        setMode
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;