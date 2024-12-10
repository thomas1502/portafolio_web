import React from "react";
import "./App.css";
import profilePhoto from "./assets/thomas.jpg";
import cvDocument from "./assets/Thomas Bollen Chuc CV.pdf";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DownloadIcon from "@mui/icons-material/Download";
import CardComponent from "../src/components/CardComponent";

import {
  FaInfoCircle,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaAward,
  FaClipboardList,
} from "react-icons/fa";

function App() {
  const cardData = [
    {
      icon: <FaInfoCircle />, // Icono para "Sobre mi"
      title: "Sobre mi",
      description: "Conoce un poco más sobre mi",
    },
    {
      icon: <FaBriefcase />, // Icono para "Experiencia laboral"
      title: "Experiencia laboral",
      description: "Mi experiencia laburando",
    },
    {
      icon: <FaGraduationCap />, // Icono para "Educación"
      title: "Educación",
      description: "Mi trayectoria como estudiante",
    },
    {
      icon: <FaCode />, // Icono para "Habilidades"
      title: "Habilidades",
      description: "En lo que me destaco",
    },
    {
      icon: <FaAward />, // Icono para "Extracurricular"
      title: "Extracurricular",
      description: "No todo es programar",
    },
    {
      icon: <FaClipboardList />, // Icono para "Otros"
      title: "Otros",
      description: "Puede aportar un extra que sepas esto",
    },
  ];

  return (
    <div className="container">
      {/* Columna izquierda */}
      <div className="left-column">
        <div className="profile">
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
          <div className="profile-info">
            <h2>Thomas Lambert Bollen Chuc</h2>
            <div className="profile-detail">
              <span>
                Ingeniero en sistemas, informática y ciencias de la computación
              </span>
            </div>
            <div className="profile-detail">
              <EmailIcon className="icon" />
              <span
                className="clickable"
                onClick={() =>
                  navigator.clipboard.writeText("t.l.bollen@proton.me")
                }
                title="Copiar correo"
              >
                t.l.bollen@proton.me
              </span>
            </div>
            <div className="profile-detail">
              <PhoneIcon className="icon" />
              <span
                className="clickable"
                onClick={() => navigator.clipboard.writeText("+502 40393590")}
                title="Copiar número"
              >
                +502 40393590
              </span>
            </div>

            <div className="profile-detail">
              <LocationOnIcon className="icon" />
              <span>Quetzaltenango, Guatemala</span>
            </div>

            {/* Nueva sección para el CV */}
            <div className="profile-detail">
              <DownloadIcon className="icon" />
              <a
                href={cvDocument}
                download="Thomas Bollen Chuc CV.pdf"
                title="Descargar CV"
                className="clickable"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="right-column">
        <div className="grid">
          {cardData.map((card, index) => (
            <CardComponent
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
