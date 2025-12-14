import { Department } from "@/types";
//Estructura del departamento
export const subDeptStructure: Department[] = [
  {
    name: "Tech",
    image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470415/Tech_mxba0l.webp",
    subDepartments: [
      { name: "Software", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470417/Software_dzcfui.webp" },
      { name: "Hardware", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470658/Hardware_wopu2s.webp" },
      { name: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470121/AppliedPhysics_wofn6z.webp" },
      { name: "Structures & Design", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470416/Structures_Design_uoje04.webp" },
    ],
  },
  {
    name: "Operations",
    image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758468421/Operaciones_kj15uk.webp",
    subDepartments: [
      { name: "Economics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470120/Economics_srdxl0.webp" },
      { name: "Administrative", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470123/Administrative_dvwz5a.webp" },
    ],
  },
  {
    name: "Marketing",
    image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470116/Marketing_dt8qnu.webp",
    subDepartments: [
      { name: "Image & Engagement", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470117/Imagen_Engagement_ck5xnv.webp" },
      { name: "Relationships & Partners", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758468420/Relationships_Partners_qpjlzi.webp" },
      { name: "Social Media", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758468419/SocialMedia_s2kw3m.webp" },
    ],
  },
];
//Miembros de los departamentos
export const teamMembers = [
  { name: "Ana Maset Sola", role: "Estructuras", department: "Structures & Design" },
  { name: "Andrés Monteagudo Alcorisa", role: "Estructuras", department: "Structures & Design", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470667/Andr%C3%A9s_Monteagudo_elw9dc.webp" },
  { name: "Debinamaca Ainoo Pérez", role: "Dirección", department: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470138/Debinamaca_Ainoo_P%C3%A9rez_edg76j.webp" },
  { name: "Ethan Montes Benavent", role: "Desarrollador", department: "Social Media" },
  { name: "Irene Moya Gómez", role: "Desarrollador", department: "Social Media" },
  { name: "Juan Manuel Flores de la Cruz", role: "Software", department: "Software", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470129/Juan_Manuel_Flores_de_la_Cruz_qdigeq.webp" },
  { name: "Juan Manuel Prior Sánchez", role: "Relaciones", department: "Structures & Design", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470124/Juan_Manuel_Prior_S%C3%A1nchez_kkffyk.webp" },
  { name: "Laura Gil Bosch", role: "Estructuras & Mecanismos", department: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470681/Laura_Gil_Bosch_aczzze.webp" },
  { name: "Lucas Tarragó Mahiques", role: "Gestión", department: "Administrative", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470146/Lucas_Tarrag%C3%B3_Mahiques_rh2yws.webp" },
  { name: "Marc Sanchis Llinares", role: "Hardware", department: "Hardware", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470125/Marc_Sanchis_Llinares_rceyzb.webp" },
  { name: "Marco Nieto Pérez", role: "Gestión", department: "Administrative", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470157/Marco_Nieto_P%C3%A9rez_rk9kxr.webp" },
  { name: "Mari Carmen Rea Mejia", role: "Software", department: "Software", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470161/Mari_Carmen_Rea_Mejia_vvqq8v.webp" },
  { name: "María Morón Romero", role: "Físico", department: "Applied Physics" },
  { name: "Marta Molés Herrero", role: "Estructuras", department: "Structures & Design", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470173/Marta_Mol%C3%A9s_Herrero_sp1ryy.webp" },
  { name: "Mateo Gajić Sales", role: "Dirección", department: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470169/Mateo_Gaji%C4%87_Sales_yiw7jt.webp" },
  { name: "Mireia Malondra Linares", role: "Estructuras", department: "Structures & Design" },
  { name: "Paula Almeida Guijarro", role: "Diseño", department: "Applied Physics" },
  { name: "Pau Anyó Calabuig", role: "Hardware", department: "Hardware", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470170/Pau_Any%C3%B3_Calabuig_zq4pow.webp" },
  { name: "Pau De Miguel Pérez", role: "Imagen", department: "Image & Engagement", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470175/Pau_De_Miguel_P%C3%A9rez_tj5mal.webp" },
  { name: "Valentina Inmaculada García Manrique", role: "Imagen", department: "Image & Engagement" },
  { name: "Víctor Martín Kruglova", role: "Gestión", department: "Administrative", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470152/V%C3%ADctor_Mart%C3%ADn_Kruglova_vhjx3z.webp" },
  { name: "Víctor Martín Kruglova", role: "Gestión", department: "Economics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470152/V%C3%ADctor_Mart%C3%ADn_Kruglova_vhjx3z.webp" },
];

export const Coordinadores = [
  { name: "Marc Sanchis Llinares", role: "Coordinador", department: "Tech", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470125/Marc_Sanchis_Llinares_rceyzb.webp" },
  { name: "Mateo Gajić Sales", role: "Coordinador", department: "Marketing", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470169/Mateo_Gaji%C4%87_Sales_yiw7jt.webp" },
  { name: "Victor Martín Kruglova", role: "Coordinador", department: "Operations", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1758470152/V%C3%ADctor_Mart%C3%ADn_Kruglova_vhjx3z.webp" },
];