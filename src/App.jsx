import { useEffect, useState } from "react";
import "./App.css";
import { getStockDevices, getOperationCommand } from "./requests/requests.js";
import NextPage from "./pages/NextPage/NextPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChooseAmplifierPage from "./pages/chooseAmplifierPage/chooseAmplifierPage.jsx";

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

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<ChooseAmplifierPage setAppData={setAppData} appData={appData} />} />
          <Route path="/amplifier-page" element={<NextPage setAppData={setAppData} appData={appData} />} />
          {/* אפשר להוסיף כאן עוד Route's לדפים נוספים */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
