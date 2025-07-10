import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { ForecastProvider } from "./contexts/forecast.context";
import Home from "./routes/home.component";
import Other from "./routes/other.component";

import "./App.css";

function App() {
  return (
    <UserProvider>
      <ForecastProvider>
        <BrowserRouter>
          <nav>
            <Link style={{ color: "white", padding: 10 }} to="/">
              Home
            </Link>
            <Link style={{ color: "white" }} to="/other">
              Other
            </Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/other" element={<Other />} />
          </Routes>
        </BrowserRouter>
      </ForecastProvider>
    </UserProvider>
  );
}

export default App;
