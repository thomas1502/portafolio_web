import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import profilePhoto from "../assets/thomas.jpg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DownloadIcon from "@mui/icons-material/Download";
import CardComponent from "../components/CardComponent";
import CloseIcon from "@mui/icons-material/Close";
import {
    FaInfoCircle,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
    FaAward,
    FaClipboardList,
} from "react-icons/fa";

function Home() {
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        if (selectedCard !== null) {
            document.body.style.overflow = "hidden"; // Bloquea el scroll
        } else {
            document.body.style.overflow = "auto"; // Restaura el scroll
        };

        return () => {
            document.body.style.overflow = "auto"; // Asegura que se restablezca al desmontar
        };
    }, [selectedCard]);

    const cardData = [
        { icon: <FaInfoCircle />, title: "Sobre mí", summary: "Aquí va un resumen más detallado sobre mí..." },
        { icon: <FaBriefcase />, title: "Experiencia laboral", summary: "Aquí va un resumen más detallado sobre mi experiencia laboral..." },
        { icon: <FaGraduationCap />, title: "Educación", summary: "Aquí va un resumen más detallado sobre mi educación..." },
        { icon: <FaCode />, title: "Habilidades", summary: "Aquí va un resumen más detallado sobre mis habilidades..." },
        { icon: <FaAward />, title: "Extracurricular", summary: "Aquí va un resumen más detallado sobre mis actividades extracurriculares..." },
        { icon: <FaClipboardList />, title: "Otros", summary: "Aquí va un resumen más detallado sobre otros aspectos..." },
    ];

    const handleCardClick = (index) => {
        setSelectedCard(index);
    };

    const handleCloseModal = () => {
        setSelectedCard(null);
    };

    return (
        <div className="container">
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
                            <span className="clickable" onClick={() => navigator.clipboard.writeText("t.l.bollen@proton.me")}>
                                t.l.bollen@proton.me
                            </span>
                        </div>
                        <div className="profile-detail">
                            <PhoneIcon className="icon" />
                            <span className="clickable" onClick={() => navigator.clipboard.writeText("+502 40393590")}>
                                +502 40393590
                            </span>
                        </div>
                        <div className="profile-detail">
                            <LocationOnIcon className="icon" />
                            <span>Quetzaltenango, Guatemala</span>
                        </div>
                        <div className="profile-detail">
                            <DownloadIcon className="icon" />
                            <a href="/portafolio_web/cv.pdf" download="Thomas Bollen Chuc CV.pdf" className="clickable">
                                Descargar CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-column">
                <div className="grid">
                    {cardData.map((card, index) => (
                        <CardComponent key={index} icon={card.icon} title={card.title} onClick={() => handleCardClick(index)} />
                    ))}
                </div>
            </div>

            {selectedCard !== null && (
                <div className="fullscreen-modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleCloseModal}><CloseIcon /></button>
                        <div className="modal-icon">{cardData[selectedCard].icon}</div>
                        <h3>{cardData[selectedCard].title}</h3>
                        <p>{cardData[selectedCard].summary}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
