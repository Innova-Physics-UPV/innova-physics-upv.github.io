import Head from 'next/head';
import Image from 'next/image';
import TeamSection from '@/components/sections/TeamSection';
import SponsorSection from '@/components/sections/SponsorSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import { useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { GetStaticProps } from 'next';
import { Coordinadores } from '@/data/departmentData';

interface HomeProps {
  coordinadores: typeof Coordinadores;
}

export default function Home({ coordinadores }: HomeProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  function AceleronButton() {
    const [cooldownActive, setCooldownActive] = useState(false);

    const handleClick = () => {
      if (cooldownActive) return;

      console.log("...");
      const cooldown = 2000;
      const evento = new CustomEvent("Aceleron", {
        detail: { cooldown }
      });
      window.dispatchEvent(evento);

      setCooldownActive(true);
      setTimeout(() => setCooldownActive(false), cooldown);
    };

    return (
      <motion.button
        className={`px-6 py-3 font-bold rounded-full ${
          cooldownActive
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-primario-300 to-secundario-300'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, ease: "easeInOut" }}
        onClick={handleClick}
        disabled={cooldownActive}
      >
        Acelerar
      </motion.button>
    );
  }

  return (
    <>
      <Head>
        <title>Innova</title>
        <meta name="description" content="Innova Physics web" />
      </Head>
      <main className="relative z-10 space-y-10">
        {/* Hero Section */}
        <div className="relative h-screen w-full" id="logotipo">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-60 z-20">
            <Image
              src="/logos/logotipo_WHITE.svg"
              alt="Logotipo de Innova Physics UPV"
              width={300}
              height={300}
              priority // carga inmediata, importante para el logo
            />
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
            <AceleronButton />
          </div>
        </div>
        <AboutUsSection />
        {/* Pasamos los datos como props para SSG */}
        <TeamSection coordinadores={coordinadores} />
         <SponsorSection /> 
      </main>
    </>
  );
}

// SSG: genera HTML con los datos de Coordinadores
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      coordinadores: Coordinadores,
    },
  };
};
