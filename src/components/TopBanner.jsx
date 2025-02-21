function TopBanner({ title, onBack }) {
    return (
        <div className="top-banner">
            <button onClick={onBack} className="back-button">← Regresar</button>
            <h1>{title}</h1>
        </div>
    );
}

export default TopBanner;
