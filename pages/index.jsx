import * as React from "react";
import { useRouter } from "next/router";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/profound_inc/PlasmicGlobalContextsProvider";
import { PlasmicUnnamedComponent } from "../components/plasmic/profound_inc/PlasmicUnnamedComponent";

export default function Home() {
  const router = useRouter();

  return (
    <GlobalContextsProvider>
      <PageParamsProvider__ route={router?.pathname} params={router?.query}>
        <PlasmicUnnamedComponent />
      </PageParamsProvider__>
    </GlobalContextsProvider>
  );
}
