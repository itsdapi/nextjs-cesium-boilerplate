"use client";

import dynamic from "next/dynamic";
import React, { RefObject } from "react";
import { CesiumType } from "@/app/lib/type/cesium";
import type { Viewer } from "cesium";

const CesiumDynamicComponent = dynamic(() => import("./cesium"), {
  ssr: false,
});

export default function Map({
  viewerRef,
  CesiumJs
}: {
  viewerRef: RefObject<Viewer | null>;
  CesiumJs: CesiumType | null
}) {
  return CesiumJs ? (
    <CesiumDynamicComponent CesiumJs={CesiumJs} viewerRef={viewerRef} />
  ) : null;
}