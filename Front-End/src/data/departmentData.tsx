import { Department } from "@/types";
//Estructura del departamento
export const subDeptStructure: Department[] = [
  {
    name: "Tech",
    image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747265846/Tech_mxba0l.png",
    subDepartments: [
      { name: "Software", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747265845/Software_dzcfui.png" },
      { name: "Hardware", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747265842/Hardware_wopu2s.png" },
      { name: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747265841/AppliedPhysics_wofn6z.png" },
      { name: "Structures & Design", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747265846/Structures_Design_uoje04.png" },
    ],
  },
  {
    name: "Operations",
    image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747265843/Operaciones_kj15uk.png",
    subDepartments: [
      { name: "Economics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747265842/Economics_srdxl0.png" },
      { name: "Administrative", image: "/logos/departamentos/Administrative.png" }, // URL pendiente
    ],
  },
  {
    name: "Marketing",
    image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747265842/Marketing_dt8qnu.png",
    subDepartments: [
      { name: "Image & Engagement", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747265842/Imagen_Engagement_ck5xnv.png" },
      { name: "Relationships & Partners", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747265844/Relationships_Partners_qpjlzi.png" },
      { name: "Social Media", image: "/logos/departamentos/SocialMedia.png" }, // URL pendiente
    ],
  },
];
//Miembros de los departamentos
export const teamMembers = [
  { name: "Ana Maset Sola", role: "Estructuras", department: "Structures & Design" },
  { name: "Andrés Monteagudo Alcorisa", role: "Estructuras", department: "Structures & Design", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155902/Andr%C3%A9s_Monteagudo_elw9dc.png" },
  { name: "Debinamaca Ainoo Pérez", role: "Dirección", department: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155897/Debinamaca_Ainoo_P%C3%A9rez_edg76j.png" },
  { name: "Ethan Montes Benavent", role: "Desarrollador", department: "Social Media" },
  { name: "Irene Moya Gómez", role: "Desarrollador", department: "Social Media" },
  { name: "Juan Manuel Flores de la Cruz", role: "Software", department: "Software", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155899/Juan_Manuel_Flores_de_la_Cruz_qdigeq.jpg" },
  { name: "Juan Manuel Prior Sánchez", role: "Relaciones", department: "Structures & Design", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747262331/Juan_Manuel_Prior_S%C3%A1nchez_kkffyk.jpg" },
  { name: "Laura Gil Bosch", role: "Estructuras & Mecanismos", department: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155894/Laura_Gil_Bosch_aczzze.png" },
  { name: "Lucas Tarragó Mahiques", role: "Gestión", department: "Administrative", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155890/Lucas_Tarrag%C3%B3_Mahiques_rh2yws.png" },
  { name: "Marc Sanchis Llinares", role: "Hardware", department: "Hardware", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747262038/Marc_Sanchis_Llinares_rceyzb.png" },
  { name: "Marco Nieto Pérez", role: "Gestión", department: "Administrative", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155885/Marco_Nieto_P%C3%A9rez_rk9kxr.png" },
  { name: "Mari Carmen Rea Mejia", role: "Software", department: "Software", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155881/Mari_Carmen_Rea_Mejia_vvqq8v.png" },
  { name: "María Morón Romero", role: "Físico", department: "Applied Physics" },
  { name: "Marta Molés Herrero", role: "Estructuras", department: "Structures & Design", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155872/Marta_Mol%C3%A9s_Herrero_sp1ryy.png" },
  { name: "Mateo Gajić Sales", role: "Dirección", department: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155879/Mateo_Gaji%C4%87_Sales_yiw7jt.png" },
  { name: "Mireia Malondra Linares", role: "Estructuras", department: "Structures & Design" },
  { name: "Paula Almeida Guijarro", role: "Diseño", department: "Applied Physics" },
  { name: "Pau Anyó Calabuig", role: "Hardware", department: "Hardware", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155874/Pau_Any%C3%B3_Calabuig_zq4pow.jpg" },
  { name: "Pau De Miguel Pérez", role: "Imagen", department: "Image & Engagement", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155866/Pau_De_Miguel_P%C3%A9rez_tj5mal.jpg" },
  { name: "Valentina Inmaculada García Manrique", role: "Imagen", department: "Image & Engagement" },
  { name: "Víctor Martín Kruglova", role: "Gestión", department: "Administrative", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155887/V%C3%ADctor_Mart%C3%ADn_Kruglova_vhjx3z.png" },
  { name: "Víctor Martín Kruglova", role: "Gestión", department: "Economics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155887/V%C3%ADctor_Mart%C3%ADn_Kruglova_vhjx3z.png" }
];

export const Coordinadores = [
  { name: "Marc Sanchis Llinares", role: "Coordinador", department: "Tech", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747262038/Marc_Sanchis_Llinares_rceyzb.png" },
  { name: "Mateo Gajić Sales", role: "Coordinador", department: "Marketing", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155879/Mateo_Gaji%C4%87_Sales_yiw7jt.png" },
  { name: "Victor Martín Kruglova", role: "Coordinador", department: "Operations", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155887/V%C3%ADctor_Mart%C3%ADn_Kruglova_vhjx3z.png" },
];