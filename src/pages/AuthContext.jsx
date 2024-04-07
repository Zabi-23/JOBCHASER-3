


import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {


    const [user, setUser] = useState(null) 

    const signIn = (mockUser) => {
        setUser(mockUser);
    };

    useEffect(() =>{
        const mockUser = { name: 'Zabi Sideqi', email: 'Zabi@text.com'};
        signIn(mockUser);
      }, []);
       

   

    return (
        <AuthContext.Provider value ={user}>
            {children}
        </AuthContext.Provider>
    )
    


}