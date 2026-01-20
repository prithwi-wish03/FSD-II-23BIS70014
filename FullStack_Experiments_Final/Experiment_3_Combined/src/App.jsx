
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import ProductManager from "./components/ProductManager";

export default function App() {
  const { login, role } = useContext(AuthContext);
  const [username, setUsername] = useState("");

  return (
    <div>
      <h2>Experiment 3 — Combined</h2>

      <input value={username} onChange={e=>setUsername(e.target.value)} />
      <button onClick={()=>login(username)}>Login</button>

      <p>Current Role: {role}</p>

      <ProductManager />
    </div>
  );
}
