import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { setIsLogged,setAccessToken,setRefreshToken } = useContext(AuthContext);

  const FetchBackLogin= async () => {
    const data = {
      username: user,
      password: pass
    }
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (response.ok) {
      const responsejson = await response.json();
      const {accessToken,refreshToken} = responsejson.data
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setIsLogged(true);
      navigate("/");
    }else{
      console.log("Error", await response.json());
    }
  }
  const handleLogin = (e) => {
    e.preventDefault();
    FetchBackLogin();
  };

  return (
    <div>
      <form onSubmit={(e) => handleLogin(e)}>
        <label htmlFor="user">user</label>
        <input
          type="text"
          id="user"
          onChange={(e) => setUser(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
