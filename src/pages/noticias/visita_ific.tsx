// src/pages/VisitaIFIC.tsx
import React from "react";

const VisitaIFIC = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center px-8 py-12">
      <div className="max-w-4xl w-full bg-white bg-opacity-80 p-10 rounded-2xl shadow-lg">
        <h1 className="text-center">Visita al IFIC</h1>
        <p className="text-center mt-6 mb-10">
          El grupo Innva Physics visitó el Instituto de Física Corpuscular (IFIC) para conocer de cerca los avances en física de partículas y nuclear.
        </p>
        <div className="w-full rounded-xl overflow-hidden">
          <img
            src="/imagenes/FOTO_IFIC.jpg" // O el formato real
            alt="Foto de la visita al IFIC"
            className="w-full h-auto rounded-xl shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default VisitaIFIC;
