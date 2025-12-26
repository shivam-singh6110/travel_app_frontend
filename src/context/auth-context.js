import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const initialValue = {
  isAuthModelOpen: false,
  username: "",          // ✅ correct key
  number: "",
  email: "",
  password: "",
  confirmPassword: "",
  accessToken: "",
  selectedTab: "login",
};

const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {
  const [
    {
      isAuthModelOpen,
      username,
      email,
      password,
      number,
      accessToken,
      selectedTab,
      confirmPassword,
    },
    authDispatch,
  ] = useReducer(authReducer, initialValue);

  return (
    <AuthContext.Provider
      value={{
        isAuthModelOpen,
        username,
        email,
        password,
        number,
        accessToken,        // ✅ IMPORTANT
        selectedTab,
        confirmPassword,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
