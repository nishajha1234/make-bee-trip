import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Results from "./pages/Results";
import Layout from "./components/Layout";

/* Application routes */
function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />

        {/* fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;