import axios from "axios";
export const loginHandler = async (number, password) => {
  try {
    const  {data:{accessToken:accessToken,username },} = await axios.post(      
        "https://travelo-app-8nn9.onrender.com/api/auth/login",
        {
            number: number,
            password: password,
        }
    );  
    console.log( {accessToken, username } );
    
    return {accessToken, username   };
}
  catch (err) {
    // console.log("unable to login");
    console.error("Login Error:", err.response?.data || err.message);
    throw err;
  }
  };