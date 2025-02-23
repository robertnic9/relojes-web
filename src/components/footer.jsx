import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-[0_-4px_8px_-2px_rgba(0,0,0,0.1)]">
      <div className="max-w mx-auto py-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 px-8 md:px-24 md:grid-cols-4 gap-8 text-center">
          {/* Logo and Newsletter Column */}
          <div className="mx-auto">
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/media/whitelogo.png"
                alt="La Vie Éternelle"
                className="h-36 w-full mb-6"
              />
              <button className="px-6 py-2 border border-black text-sm hover:bg-black hover:text-white transition-colors duration-300">
                SUSCRÍBASE A NUESTRA NEWSLETTER
              </button>
              {/* Social Links */}
              <div className="flex mt-6 space-x-10">
                <a href="#" className="text-black hover:text-gray-600">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-gray-600">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-gray-600">
                  <span className="sr-only">TikTok</span>
                  <svg
                    className="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-2.64V11.9a6.33 6.33 0 00-1-.05A6.34 6.34 0 005 20.49a6.34 6.34 0 0010.86-4.43c0-.34-.02-.67-.06-1V8.73a8.16 8.16 0 004.77 1.52v-3.56a4.85 4.85 0 01-.98 0z" />
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-gray-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* La Vie Éternelle Column */}
          <div className="mt-12">
            <h3 className="text-xl font-cmu mb-4 italic font-bold tracking-wide">
              La Vie Éternelle
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline ">
                  Nuestra historia
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline ">
                  Nuestra filosofía
                </a>
              </li>
            </ul>
          </div>

          {/* Relojes Column */}
          <div className="mt-12">
            <h3 className="text-xl font-cmu mb-4 font-bold tracking-wide">
              RELOJES
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Todos Los Relojes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Nuestras Coleciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Últimas novedades
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Buscar una boutique
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios Column */}
          <div className="mt-12">
            <h3 className="text-lg font-cmu mb-4 font-bold tracking-wide">
              NUESTROS SERVICIOS
            </h3>
            <ul className="space-y-2 column">
              <li>
                <a href="#" className="hover:underline">
                  Garantía
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reparación reloj
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Todos Los Servicios
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center md:justify-end  mt-12 pt-4 border-t border-gray-200 text-center ">
          <ul className="grid grid-cols-1 md:flex md:pr-12 gap-2 md:gap-24 ">
            <li>
              <a href="#" className="hover:underline">
                Prensa
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Términos y condiciones
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Declaración de accesibilidad
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
