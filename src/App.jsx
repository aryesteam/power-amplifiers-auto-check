import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getOperationCommand, getStockDevices } from "./requests/requests";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  /*useEffect(() => {
    const fetchMyData = async () => {
      const stock = await getStockDevices();
      const oc = await getOperationCommand();
      setData({ ...data, oc: oc, stock: stock });
      setLoading(false);
    };
    fetchMyData();
  }, []);*/

  if (loading) return <div>Loading Data</div>;

  //getOperationCommand().then(value => console.log(value));
  if (!data) return <div>no Data</div>;
  console.log(data);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {}}>{data?.oc[0].name}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
