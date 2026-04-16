"use client";

import dynamic from "next/dynamic";

const SettlementVisualizer = dynamic(() => import("./SettlementVisualizer"), {
  ssr: false,
});

export default SettlementVisualizer;
