import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [screen, setScreen] = useState("landing");

  return (
    <div style={{ padding: 20 }}>
      <h2>Experiment 2 — Responsive UI with Material UI</h2>

      <button onClick={() => setScreen("landing")}>Landing Page</button>
      <button onClick={() => setScreen("dashboard")}>Dashboard</button>
      <button onClick={() => setScreen("admin")}>Admin Panel</button>

      <div style={{ marginTop: 30 }}>
        {screen === "landing" && <LandingPage />}
        {screen === "dashboard" && <Dashboard />}
        {screen === "admin" && <AdminPanel />}
      </div>
    </div>
  );
}

export default App;