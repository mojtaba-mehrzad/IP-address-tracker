import { useState } from "react";
import "./App.css";
import InfoPanel from "./components/sections/InfoPanel";
import MapView from "./components/sections/MapView";
import useIPInfo from "./hooks/useIPInfo";

export default function App() {
  const [ ip, setIp] = useState("");
  const { data, loading, error } = useIPInfo(ip);
  return (
    <main className="w-dvw h-screen flex flex-col">
      <InfoPanel info={data} onSearch={setIp} loading={loading} error={error} />
      <MapView info={data} />
    </main>
  );
}
