import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const backurl = import.meta.env.VITE_BACK_URL;
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
    const FetchBackRegister = async () => {
        const data = {
            username: user,
            password: pass
        }
        const response = await fetch(`${backurl}auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
        if ( response.ok){
            console.log("Register", await response.json());
            navigate("/login");
        }else{
            console.log("Error", await response.json());
        }
    }
  
    const handleRegister = (e) => {
      e.preventDefault();
      FetchBackRegister();
      //
    };
  
    return (
      <div>
        <form onSubmit={(e) => handleRegister(e)}>
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
}

export default Register