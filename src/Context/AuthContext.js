import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false)

    const data = {
        isLogin,
        setIsLogin
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider