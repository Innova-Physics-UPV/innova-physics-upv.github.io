export interface SubDepartment {
    name: string;
    image: string;
 }
  export interface Department {
    name: string;
    image:string;
    subDepartments: SubDepartment[];
  }
  export interface ExpandedDepts {
    [key: string]: boolean;
  }
  
  export interface SidebarProps {
    showSidebar: boolean;
    scrollToSection: (sectionName: string) => void;
  }