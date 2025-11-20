import dynamic from "next/dynamic";

const PlasmicClient = dynamic(
  () => import("../components/plasmic/PlasmicClient"),
  { ssr: false }
);

export default function CatchAllPage({ query }) {
  const comp = query?.slug?.join("/") || "Home";
  return <PlasmicClient component={comp} />;
}

export async function getServerSideProps({ query }) {
  return { props: { query } };
}
