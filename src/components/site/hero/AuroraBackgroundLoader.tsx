"use client";

import dynamic from "next/dynamic";

const AuroraBackground = dynamic(
  () => import("@/components/site/hero/AuroraBackground").then((mod) => mod.AuroraBackground),
  { ssr: false }
);

export function AuroraBackgroundLoader() {
  return <AuroraBackground />;
}
