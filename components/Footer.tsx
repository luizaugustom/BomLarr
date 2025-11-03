import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#F4EBD9] border-t border-[#0077BE]/20 mt-12 sm:mt-20 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#0077BE] to-[#4ECDC4] bg-clip-text text-transparent mb-3 sm:mb-4">
              Bom Lar
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Sua casa aconchegante na Fazenda da Armação, Governador Celso Ramos. 
              Onde o mar encontra o conforto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#0077BE] transition-colors text-xs sm:text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/regras" className="text-gray-600 hover:text-[#0077BE] transition-colors text-xs sm:text-sm">
                  Regras
                </Link>
              </li>
              <li>
                <Link href="/sugestoes" className="text-gray-600 hover:text-[#0077BE] transition-colors text-xs sm:text-sm">
                  Sugestões
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Contato</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start sm:items-center space-x-2">
                <MapPin size={16} className="text-[#0077BE] flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="break-words">Fazenda da Armação, Governador Celso Ramos - SC</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-[#0077BE] flex-shrink-0" />
                <a href="tel:+5548991126107" className="hover:text-[#0077BE] transition-colors">
                  (48) 99112-6107
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
            <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Bom Lar. Todos os direitos reservados.</p>
            <a 
              href="https://www.airbnb.com/l/MnWw50b1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077BE] hover:underline font-medium text-center sm:text-left"
            >
              Reserve no Airbnb
            </a>
          </div>
          
          {/* MONT Tecnologia Logo */}
          <div className="flex justify-center pt-3 sm:pt-4 border-t border-gray-200">
            <a
              href="https://montsoftwares.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src="/logomont.png"
                alt="MONT Tecnologia da Informação"
                width={150}
                height={50}
                className="h-auto w-32 sm:w-[150px]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

