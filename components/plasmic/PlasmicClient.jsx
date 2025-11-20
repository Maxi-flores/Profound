"use client";

import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../../src/plasmic-init";

export default function PlasmicClient({ component }) {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component={component} />
    </PlasmicRootProvider>
  );
}
