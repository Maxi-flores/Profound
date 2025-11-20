import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "ddT7wfnzx79n44ty2Sa9LN",
      token: process.env.NEXT_PUBLIC_PLASMIC_API_TOKEN,
    },
  ],
  preview: true,
});
