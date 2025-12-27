import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CategoryProvider,DateProvider,AuthProvider,WishlistProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <DateProvider>
          <AuthProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </AuthProvider>
        </DateProvider>
      </CategoryProvider>
    </Router>
    
  </React.StrictMode>
);
