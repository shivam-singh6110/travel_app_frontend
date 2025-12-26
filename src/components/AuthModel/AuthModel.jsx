import { AuthLogin, AuthSignup } from "../index";
import "./AuthModel.css";
import { useAuth } from "../../context";
export const AuthModel = () => {
  const { authDispatch, selectedTab } = useAuth();

  const handleLoginClick = () => {
    authDispatch({
      type: "SET_TO_LOGIN",
    });
  };

  const handleSignupClick = () => {
    authDispatch({
      type: "SET_TO_SIGNUP",
    });
  };

  const handleModelCloseClick = () => {
    authDispatch({
      type: "SHOW_AUTH_MODEL",
    });
  };

  return (
    <div className="auth-model-container fixed">
      <div className="auth-model absolute shadow right-0">
        <div className="d-flex align-center shadow">
          <button
            className={`button btn-auth grow-shrink-basis cursor-pointer ${
              selectedTab === "login" ? "btn-auth-selected" : ""
            }`}
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className={`button btn-auth grow-shrink-basis cursor-pointer ${
              selectedTab === "signup" ? "btn-auth-selected" : ""
            }`}
            onClick={handleSignupClick}
          >
            Signup
          </button> 
          <button
            className="button btn-auth btn-close d-flex align-center justify-center cursor-pointer"
            onClick={handleModelCloseClick}
          >
            {/* <span className="material-icons-outlined">close</span> */}
            ✕
          </button>
        </div>
        <div>
          {selectedTab === "login" ? (
            <AuthLogin />
          ) : selectedTab === "signup" ? (
            <AuthSignup />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
