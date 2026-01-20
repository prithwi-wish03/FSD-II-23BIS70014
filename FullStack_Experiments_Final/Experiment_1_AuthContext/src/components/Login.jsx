
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { isLoggedIn, userName, login, logout } = useContext(AuthContext);
  const [name, setName] = useState("");

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <input value={name} onChange={e=>setName(e.target.value)} />
          <button onClick={()=>login(name)}>Login</button>
        </>
      ) : (
        <>
          <p>Hi {userName}</p>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Login;
