import logo from "./logo.svg";
import "./App.css";
import Home from "./routes/home.component";
import { UserProvider } from "./contexts/user.context";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Home />
      </div>
    </UserProvider>
  );
}

export default App;
