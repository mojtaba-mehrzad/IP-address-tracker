import getInfoField from "../../hooks/getInfoField";
import InfoItem from "./InfoItem";

export default function Card({ info }) {
  return (
    <section 
      className=" info-container" 
      aria-label="IP Address Information Results"
      role="region"
    >
      <InfoItem infoName={"IP ADDRESS"} infoValue={getInfoField(info, 'ip')}/>
      <InfoItem infoName={"LOCATION"} infoValue={getInfoField(info, 'location.city') + ", " + getInfoField(info, 'location.region') + ", " + getInfoField(info, 'location.country')}/>
      <InfoItem infoName={"TIMEZONE"} infoValue={"UTC "+ getInfoField(info, 'location.timezone')}/>
      <InfoItem infoName={"ISP"} infoValue={getInfoField(info, 'isp')}/>
    </section>
  );
}
