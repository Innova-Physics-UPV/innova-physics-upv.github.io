import React from "react";
import { FaInstagram, FaLinkedin, FaLink } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Información de contacto */}
          <div className="mb-4 md:mb-0">
            <h3>Contacto</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:innovaphysicsupv@gmail.com"
                className="underline hover:text-gray-400"
              >
                innovaphysicsupv@gmail.com
              </a>
            </p>
            <p>Ubicación: Camí de Vera S/N, Valencia</p>
          </div>

          {/* Redes sociales */}
          <div className="mb-4 md:mb-0">
            <h3>Redes y enlaces</h3>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <FaInstagram />
                <a
                  href="https://www.instagram.com/innovaphysicsupv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-400"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin />
                <a
                  href="https://www.linkedin.com/company/innovaphyisicsupv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-400"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaLink />
                <a
                  href="https://linktr.ee/innovaphysicsupv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-400"
                >
                  Linktree
                </a>
              </li>
            </ul>
          </div>

          {/* Derechos de autor */}
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} InnovaPhysics UPV. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
