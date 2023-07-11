import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import UpgradeAccordion from "../components/accordion";

export default function Home() {
  return (
    <>
      <ChakraProvider>
      <Head>
        <title>DMZ Upgrade Tracker</title>
        <meta name="description" content="Upgrade tracker for Warzone 2.0 DMZ" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <UpgradeAccordion />
          </div>
        </div>
      </main>
      </ChakraProvider>
    </>
  );
}
