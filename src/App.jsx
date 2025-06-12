import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getStockDevices, getOperationCommand } from "./requests/requests.js";
import HomePage from "./pages/HomePage/HomePage";
import NextPage from "./pages/NextPage/NextPage";  
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyData = async () => {
      const stock = await getStockDevices();
      const oc = await getOperationCommand();
      setData({ ...data, oc: oc, stock: stock });
      setLoading(false);
    };
    fetchMyData();
  }, []);

  if (loading) return <div>טוען נתונים...</div>;


  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
        
          <Route path="/next-page" element={<NextPage />} />
          {/* אפשר להוסיף כאן עוד Route's לדפים נוספים */}
        </Routes>
      </>
    </Router>
  );
}

export default App;