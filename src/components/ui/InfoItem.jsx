export default function InfoItem({ infoName, infoValue }) {
  return (
    <div className="info-item" role="group" aria-labelledby={`label-${infoName.toLowerCase().replace(/\s+/g, '-')}`}>
      <h3 
        id={`label-${infoName.toLowerCase().replace(/\s+/g, '-')}`}
        className="info-item-name"
        aria-label={`${infoName} Label`}
      >
        {infoName}
      </h3>
      <p 
        className="info-item-value"
        aria-label={`${infoName}: ${infoValue || 'Not available'}`}
      >
        {infoValue}
      </p>
    </div>
  );
}
