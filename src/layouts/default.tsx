import Head from "next/head";
import { NextSeo } from "next-seo";
import Header from "@/components/Header";
import logo from "../../public/images/Logo.svg";
import Footer from "@/components/Footer";

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { truncate } from "fs";


interface Props {
  title?: string;
  description?: string;
  children: React.ReactElement | React.ReactElement[];
}

export default function Layout({ title, description, children }: Props) {

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <>
      <NextSeo title={title} description={description} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={logo.src} type="image/svg" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
