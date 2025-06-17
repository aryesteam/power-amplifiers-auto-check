import { useEffect, useState } from "react";
import "./App.css";
import { getStockDevices, getOperationCommand } from "./requests/requests.js";
import HomePage from "./pages/HomePage/HomePage";
import NextPage from "./pages/NextPage/NextPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [appData, setAppData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyData = async () => {
      const stock = await getStockDevices();
      const oc = await getOperationCommand();
      setAppData({ ...appData, oc: oc, stock: stock });
      setLoading(false);
    };
    fetchMyData();
  }, []);

  if (loading) return <div>loading data...</div>;

  console.log(appData);

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<HomePage data={setAppData} />} />
          <Route path="/next-page" element={<NextPage />} />
          {/* אפשר להוסיף כאן עוד Route's לדפים נוספים */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
