import "../styles/TopBanner.css";
import profilePhoto from "../assets/thomas.jpg";

function TopBanner({ onBack }) {
    return (
        <div className="top-banner">
            <div className="profile-container-banner" onClick={onBack}>
                <img src={profilePhoto} alt="Profile" className="profile-photo-banner" />
                <span className="profile-name-banner">Thomas Lamert Bollen Chuc</span>
            </div>
        </div>
    );
}

export default TopBanner;
