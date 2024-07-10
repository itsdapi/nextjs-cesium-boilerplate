"use client";

import useMap from "@/app/lib/hook/use-map";
import Map from "@/app/ui/map/map-wrapper";
import polygon from "@/app/ui/map/entity/polygon";
import { addEntities } from "@/app/lib/util/map";

export default function App() {
  const { viewerRef, CesiumJs, isReady } = useMap();

  const handleAddPolygon = async () => {
    const polygonEntity = await polygon();
    addEntities(viewerRef.current, [polygonEntity]);
  };

  return (
    <div>
      <div className={"z-10 fixed bg-white p-5 bottom-0 right-0 w-fit h-fit"}>
        <p>{isReady ? "Ready!" : "Not ready.."}</p>
        <button onClick={handleAddPolygon}>Add polygon</button>
      </div>
      <Map viewerRef={viewerRef} CesiumJs={CesiumJs}/>
    </div>
  );
}
