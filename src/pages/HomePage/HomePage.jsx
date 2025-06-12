import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate(); 
  function goToNextPage() {
    navigate("/next-page"); 
  }
  
  return (
    <div>
      <h1>ברוכים הבאים לעמוד הבית</h1>
      <button onClick={goToNextPage}>
        לחץ כאן כדי לעבור לעמוד הבא 
      </button>
    </div>
  );
}

export default HomePage;