import React, { useState } from "react";
import "./ChooseAmplifierPage.css"; // ← קריאה לקובץ ה־CSS
import { useNavigate } from "react-router-dom";

const isValidIP = ip => {
  const parts = ip.split(".");
  return (
    parts.length === 4 &&
    parts.every(part => /^\d+$/.test(part) && !(part.length > 1 && part.startsWith("0")) && +part >= 0 && +part <= 255)
  );
};

export default function ChooseAmplifierPage(params) {
  const { appData, setAppData } = params;
  const [formData, setFormData] = useState({ ip: "", power: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { ip, power } = formData;

    if (!isValidIP(ip)) {
      setError("כתובת לא חוקית ");
      setSaved(null);
      return;
    }

    if (!power || isNaN(power) || +power < 30 || +power > 60) {
      setError("יש להזין הספק .");
      setSaved(null);
      return;
    }
    console.log(appData);
    setError("");
    //TODO add amplifier connection tset
    setAppData({ ...appData, amplifier: { ip: ip, power: power } });
    navigate("amplifier-page");
  };

  return (
    <div className="amplifier-form-container">
      <h2>הזן פרטי מגבר</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="ip"
          type="text"
          value={formData.ip}
          placeholder="בחר כתובת מגבר! "
          onChange={handleChange}
          className="amplifier-input"
        />
        <input
          name="power"
          type="number"
          value={formData.power}
          placeholder="בחר הספק מגבר (dBm)"
          step="0.1"
          min="40"
          max="60"
          onChange={handleChange}
          className="amplifier-input"
        />

        <button type="submit" className="amplifier-button">
          הבא
        </button>
      </form>
      {error && <p className="amplifier-error">{error}</p>}
    </div>
  );
}
