import { useState } from "react";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (credentials) => {
    console.log("Login data:", credentials);
    setUser(credentials.email);
  };

  const handleLogout = () => {
    setUser(null); // clear the user → logs out
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Login loginUser={handleLogin} />
      )}
    </div>
  );
}

export default App;
