import "./App.css";
import InfoPanel from "./components/sections/InfoPanel";
import MapView from "./components/sections/MapView";
import useIPInfo from "./hooks/useIPInfo";

export default function App() {
  const {data, loading , error} = useIPInfo()
  return (
    <main className="w-dvw h-dvh">
      <InfoPanel info={data}/>
      <MapView info={data}/>
    </main>
  );
}
