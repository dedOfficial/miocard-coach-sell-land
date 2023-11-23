import Head from "next/head";

import EngageSection from "../components/EngageSection";
import Header from "../components/Header";
import PromoSection from "../components/PromoSection";
import WhatDoWeDoSection from "../components/WhatDoWeDoSection";
import WhoItsForSection from "../components/WhoItsForSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>HTN Companion</title>
        <meta name="description" content="HTN Companion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <PromoSection />
        <EngageSection />
        <WhoItsForSection />
        <WhatDoWeDoSection />
        <footer className="p-10 text-center text-gray-400">
          {new Date().getFullYear()} &copy; HTN Companion. Project of SensoAI
          Systems Inc.
        </footer>
      </main>
    </>
  );
}
