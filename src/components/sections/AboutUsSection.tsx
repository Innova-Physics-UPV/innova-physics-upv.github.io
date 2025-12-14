import React from "react";
import Gallery from "@/components/common/Gallery";
import BaseSection from "@/components/common/BaseSection";
import { photos } from "@/data/aboutUsData"; // Importa las fotos desde el archivo de datos

const AboutUsSection: React.FC = () => {
  return (
    <BaseSection title="¿QUIÉNES SOMOS?" >
      <div className="relative flex flex-col md:flex-row gap-4 md:gap-10">
        <div className="flex-1">
          <p className="pt-5 px-8 leading-relaxed text-base sm:text-sm md:text-xl">
            Innova Physics UPV es un equipo universitario que impulsa la innovación en física de
            aceleradores mediante proyectos de ingeniería aplicada y la organización del  <a href="https://eliac-org.github.io/" className="hover:opacity-80 transition-opacity"> European Lineal Accelerator Challenge (ELIAC)</a> , una competición en la que estudiantes de distintos países diseñan y desarrollan sus propios aceleradores lineales. Nuestra propuesta se centra en crear un LINAC accesible y modular, pensado para que cualquier universidad pueda incorporarlo como herramienta académica y de investigación. Con ello buscamos democratizar el aprendizaje de la física de aceleradores y abrir la puerta a un futuro en el que cada centro educativo disponga de su propio acelerador para formar a nuevas generaciones de científicos e ingenieros.
            Trabajamos bajo el programa Generación Espontánea, el cual
            está apoyado y financiado por la Universidad Politécnica de Valencia.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Gallery photos={photos} />
        </div>
      </div>
    </BaseSection>
  );
};

export default AboutUsSection;