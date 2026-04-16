"use client";

import dynamic from "next/dynamic";

const UMCalculator = dynamic(() => import("./UMCalculator"), { ssr: false });

export default UMCalculator;
