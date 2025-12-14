import React from "react";
import BaseSection from "../common/BaseSection";
import Card from "../common/Card";
//import { teamMembers, subDeptStructure ,Coordinadores} from '@/data/departmentData';
// Definimos la interfaz de props
interface TeamSectionProps {
  coordinadores: {
    name: string;
    role: string;
    department: string;
    image: string;
  }[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ coordinadores }) => {  
  return (
    <BaseSection title="EQUIPO" className="relative z-10">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-8">
        {coordinadores.map(({name,role,department,image},index) => (
          <Card
            key={index}
            image={image}
            title={name}
            subtitle={`${role}\n${department}`}
          />
        ))}
      </div>
      {/* Button */}
      <div className="mt-8 text-center">
        <button
          className="px-6 py-2 bg-foreground text-white font-semibold rounded-lg hover:bg-primario-200 transition-colors"
          onClick={() => (window.location.href = "/equipo")}
        >
          Conoce Más
        </button>
      </div>
    </BaseSection>
  );
};

export default TeamSection;

