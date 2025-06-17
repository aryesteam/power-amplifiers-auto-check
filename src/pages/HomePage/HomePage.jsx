import { useNavigate } from "react-router-dom";

function HomePage(params) {
  const { data } = params;
  const navigate = useNavigate();

  return (
    <div>
      <h1>ברוכים הבאים לעמוד הבית</h1>
      <button
        onClick={() => {
          data({ test: "a" });
          navigate("/next-page");
        }}
      >
        לחץ כאן כדי לעבור לעמוד הבא
      </button>
    </div>
  );
}

export default HomePage;
