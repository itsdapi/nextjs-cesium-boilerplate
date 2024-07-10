"use client";

import React, { useRef, useState } from "react";
import type { CesiumType } from "@/app/lib/type/cesium";
import type { Viewer } from "cesium";

export default function useMap() {
  const viewerRef = useRef<Viewer | null>(null);
  const [CesiumJs, setCesiumJs] = React.useState<CesiumType | null>(null);
  const [isReady, setIsReady] = useState(false);

  React.useEffect(() => {
    console.log("Init CesiumJS");
    if (CesiumJs !== null) {
      console.log("Cesium Ready");
      setIsReady(true);
      return;
    }
    const CesiumImportPromise = import("cesium");
    Promise.all([CesiumImportPromise]).then((promiseResults) => {
      const { ...Cesium } = promiseResults[0];
      setCesiumJs(Cesium);
    });
  }, [CesiumJs]);

  return {
    isReady,
    viewerRef,
    CesiumJs,
  };
}
