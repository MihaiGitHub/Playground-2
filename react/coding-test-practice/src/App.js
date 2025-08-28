import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { ForecastProvider } from "./contexts/forecast.context";
import Home from "./routes/home.component";
import Other from "./routes/other.component";
import Forms from "./routes/forms.component";

import "./App.css";

function App() {
  return (
    <UserProvider>
      <ForecastProvider>
        <BrowserRouter>
          <nav>
            <Link style={{ color: "white", padding: 15 }} to="/">
              Home
            </Link>
            <Link style={{ color: "white", paddingRight: 15 }} to="/other">
              Other
            </Link>
            <Link style={{ color: "white" }} to="/forms">
              Forms
            </Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/other" element={<Other />} />
            <Route path="/forms" element={<Forms />} />
          </Routes>
        </BrowserRouter>
      </ForecastProvider>
    </UserProvider>
  );
}

export default App;
