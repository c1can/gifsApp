import { Routes } from "./Routes/App.routing";
import { AuthContextProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
