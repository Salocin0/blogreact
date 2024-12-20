import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const { setIsLogged,setAccessToken,setRefreshToken} = useContext(AuthContext);
  useEffect(() => {
    setIsLogged(false);
    setAccessToken(null);
    setRefreshToken(null);
    navigate("/");
  });
  return <></>;
};

export default Logout;
