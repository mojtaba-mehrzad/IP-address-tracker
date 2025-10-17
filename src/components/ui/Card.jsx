import getInfoField from "../../hooks/getInfoField";
import InfoItem from "./InfoItem";

export default function Card({ info }) {

  return (
    <section className=" absolute z-10 -bottom-1/2 text-center info-container bg-white w-10/12 sm:w-10/12 rounded-2xl">
      <InfoItem infoName={"IP ADDRESS"} infoValue={getInfoField(info, 'ip')}/>
      <InfoItem infoName={"LOCATION"} infoValue={getInfoField(info, 'location.city') + ", " + getInfoField(info, 'location.country')}/>
      <InfoItem infoName={"TIMEZONE"} infoValue={"UTC "+ getInfoField(info, 'location.timezone')}/>
      <InfoItem infoName={"ISP"} infoValue={getInfoField(info, 'isp')}/>
    </section>
  );
}
