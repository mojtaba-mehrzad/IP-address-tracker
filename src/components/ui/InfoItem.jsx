export default function InfoItem({ infoName, infoValue }) {
  return (
    <>
      <div className="info-item">
        <h2 className="info-item-name">{infoName}</h2>
        <p className="info-item-value">{infoValue}</p>
      </div>
    </>
  );
}
