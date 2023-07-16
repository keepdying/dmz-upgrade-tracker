import Head from "next/head";
import { Fragment } from "react"; // import Fragment
import { type NextPage } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import UpgradeAccordion from "../components/accordion";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import upgrades from "../../public/upgrades.json"
import { type Upgrade } from "~/types/upgrade";

const upgradesAtom = atomWithStorage("upgrades", upgrades);

const Home : NextPage = () => {
  const [upgrades, setUpgrades] = useAtom(upgradesAtom);

  return (
    <Fragment> {/* use Fragment instead of empty tags */}
      <ChakraProvider>
        <Head>
          <title>DMZ Upgrade Tracker</title>
          <meta name="description" content="Upgrade tracker for Warzone 2.0 DMZ" />
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#670ce7] to-[#232549]">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-8">
            {Object.values(upgrades.stash).map((upgrade: Upgrade) => {
              return <UpgradeAccordion key={upgrade.name} upgrade={upgrade} />;
            })}
            </div>
          </div>
        </main>
      </ChakraProvider>
    </Fragment>
  );
};

export default Home;
