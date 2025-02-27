import { useNavigate } from "react-router-dom";
import TopBanner from "../components/TopBanner";

function AboutMe() {
  const navigate = useNavigate();

  return (
    <div>
      <TopBanner onBack={() => navigate("/")} />
      <p>Aquí va la información detallada sobre mí...</p>
    </div>
  );
}

export default AboutMe;
