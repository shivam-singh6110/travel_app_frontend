import axios from "axios";

export const signupHandler = async (username, email, password, number) => {
  try {
    const response = await axios.post(
      "https://travelo-app-8nn9.onrender.com/api/auth/register",
      {
        username,
        email,
        password,
        number,
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
    throw error;
  }
};
