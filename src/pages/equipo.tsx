import Head from 'next/head';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import DepartmentCircles from '@/components/sections/DepartmentCircles';
import { teamMembers, subDeptStructure, Coordinadores } from '@/data/departmentData';
import { ExpandedDepts } from '@/types';
import BaseSection from '@/components/common/BaseSection';

const DEFAULT_AVATAR = 'https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747262948/avatar_xubp5u.webp';
const allSubDepartments = subDeptStructure.flatMap(dept => dept.subDepartments);

export default function Equipo() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', current => {
      setShowSidebar(current > 0.1);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const [expandedDepts, setExpandedDepts] = useState<ExpandedDepts>({
    Tech: false,
    Operations: false,
    Marketing: false,
  });

  const toggleDepartment = (deptName: string): void => {
    setExpandedDepts(prev => {
      const allClosed = Object.keys(prev).reduce((acc, dept) => {
        acc[dept] = false;
        return acc;
      }, {} as ExpandedDepts);

      return { ...allClosed, [deptName]: !prev[deptName] };
    });
  };

  const scrollToSection = (name: string) => {
    const element = document.getElementById(name);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (target.src !== DEFAULT_AVATAR) {
      target.src = DEFAULT_AVATAR;
    }
  };

  return (
    <>
      <Head>
        <title>Equipo - Innova</title>
        <meta name="description" content="Conoce al equipo de Innova Physics" />
      </Head>

      <main className="relative flex flex-col min-h-screen p-8 overflow-y-auto">
        <AnimatePresence>
          {showSidebar && (
            <motion.div
              className="hidden md:block fixed left-4 top-20 z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="flex flex-col space-y-2 bg-background bg-opacity-70 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="text-button">
                  <button onClick={() => scrollToSection('DEPARTAMENTOS')}>
                    <span style={{ fontSize: '1em', fontWeight: 'bold' }}>DEPARTAMENTOS</span>
                  </button>
                </div>

                {subDeptStructure.map(dept => (
                  <div key={dept.name} className="border-b border-gray-200 text-button pb-1 last:border-b-0 last:pb-0">
                    <button
                      className="w-full flex justify-between items-center font-medium py-1"
                      onClick={() => toggleDepartment(dept.name)}
                    >
                      <span>{dept.name}</span>
                      {expandedDepts[dept.name] ? '^' : '-'}
                    </button>

                    <AnimatePresence>
                      {expandedDepts[dept.name] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-4"
                        >
                          <div className="flex text-button flex-col space-y-2 pt-1">
                            {dept.subDepartments.map(subDept => (
                              <button key={subDept.name} className="flex items-center" onClick={() => scrollToSection(subDept.name)}>
                                {subDept.name}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col items-center w-full max-w-screen-xl mx-auto mt-20">
          <section id="DEPARTAMENTOS" className="py-20">
            <h1 className="text-white text-3xl font-bold text-center mb-12">NUESTROS MIEMBROS</h1>
          </section>

          <div className="hidden md:block">
            <DepartmentCircles scrollToSection={scrollToSection} />
          </div>

          <div className="p-10">
            <BaseSection title="Coordinadores" key="Coordinadores" id="Coordinadores">
              <section key="Coordinadores" className="w-full max-w-5xl my-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
                  {Coordinadores.map(({ name, role, department, image }, index) => (
                    <div
                      key={`${name || role}-${index}`}
                      className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                    >
                      <div className="w-32 h-32 flex justify-center transition-all duration-300 ease-in-out hover:scale-110">
                        <img
                          src={image || DEFAULT_AVATAR}
                          alt={name || role}
                          className="w-full h-full object-cover rounded-full"
                          onError={handleImageError}
                        />
                      </div>
                      <h3>{name || 'Sin asignar'}</h3>
                      <p className="text-sm opacity-80">
                        {role}
                        <br />
                        {department}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </BaseSection>

            {allSubDepartments.map(subDept => {
              const membersInDept = teamMembers.filter(member => member.department === subDept.name);
              if (membersInDept.length === 0) return null;

              return (
                <BaseSection title={subDept.name} key={subDept.name} id={subDept.name}>
                  <section key={subDept.name} className="w-full max-w-5xl my-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
                      {membersInDept.map(({ name, role, image }, index) => (
                        <div
                          key={`${name || role}-${index}`}
                          className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                        >
                          <div className="w-32 h-32 flex justify-center transition-all duration-300 ease-in-out hover:scale-110">
                            <img
                              src={image || DEFAULT_AVATAR}
                              alt={name || role}
                              className="w-full h-full object-cover rounded-full"
                              onError={handleImageError}
                            />
                          </div>
                          <h3>{name || 'Sin asignar'}</h3>
                        </div>
                      ))}
                    </div>
                  </section>
                </BaseSection>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}