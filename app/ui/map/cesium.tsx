"use client";

import React from "react";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { CesiumType } from "@/app/lib/type/cesium";
import { initViewer } from "@/app/lib/util/map";

export default function CesiumComponent({
  viewerRef,
  CesiumJs,
}: {
  viewerRef: any;
  CesiumJs: CesiumType;
}) {
  const cesiumContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (viewerRef.current === null && cesiumContainerRef.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      viewerRef.current = new CesiumJs.Viewer(cesiumContainerRef.current);
      initViewer(viewerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={cesiumContainerRef}
      id={"cesium-container"}
      className={"w-full h-full"}
    />
  );
}
