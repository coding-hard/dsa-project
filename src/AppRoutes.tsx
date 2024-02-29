import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArraysPage from "./pages/ArraysPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/arrays" element={<ArraysPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
