import React from "react";
import BaseSection from "@/components/common/BaseSection";

const sponsors = [
  // {
  //   id: "1",
  //   name: "Generación espontanea",
  //   logo: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747391948/GeneracionEspontanea_rqny7g.png",
  //   url: "https://www.upv.es/entidades/adge/",
  //   tier: "",
  // },
  {
    id: "1",
    name: "Escuela superior de telecomunicaciones",
    logo: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747391947/ETSIT_pax9tw.png",
    url: "https://www.upv.es/entidades/etsit/",
    tier: "",
  },
  {
    id: "2",
    name: "Instituto de matematica pura y aplicada",
    logo: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747391948/IUMPA_ovdz1t.png",
    url: "https://www.upv.es/entidades/IMPA/",
    tier: "",
  },
  // Más sponsors...
];

const SponsorsSection: React.FC = () => {
  return (
    <BaseSection title="SPONSORS">
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            {sponsors.map((s) => (
          <a
            key={s.id}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-800 hover:shadow-lg transition-shadow duration-300 flex items-center justify-center rounded-lg"
          >
            <img
              src={s.logo}
              alt={s.name}
              loading="lazy"
              className="max-h-16 object-contain"
            />
          </a>
        ))}
      </div>
      {/*
      <div className="mt-8 text-center">
        <button
          className="px-6 py-2 bg-foreground text-white font-semibold rounded-lg hover:bg-primario-200 transition-colors"
          onClick={() => (window.location.href = "/sponsors")}
        >
          View All Sponsors
        </button>
      </div>
      */}
    </BaseSection>
  );
};

export default SponsorsSection;
