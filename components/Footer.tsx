import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#F4EBD9] border-t border-[#0077BE]/20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#0077BE] to-[#4ECDC4] bg-clip-text text-transparent mb-4">
              Bom Lar
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sua casa aconchegante na Fazenda da Armação, Governador Celso Ramos. 
              Onde o mar encontra o conforto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#0077BE] transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/regras" className="text-gray-600 hover:text-[#0077BE] transition-colors text-sm">
                  Regras
                </Link>
              </li>
              <li>
                <Link href="/sugestoes" className="text-gray-600 hover:text-[#0077BE] transition-colors text-sm">
                  Sugestões
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-[#0077BE]" />
                <span>Fazenda da Armação, Governador Celso Ramos - SC</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-[#0077BE]" />
                <a href="tel:+5548999999999" className="hover:text-[#0077BE] transition-colors">
                  (48) 99999-9999
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-[#0077BE]" />
                <a href="mailto:contato@bomlar.com.br" className="hover:text-[#0077BE] transition-colors">
                  contato@bomlar.com.br
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram size={18} className="text-[#0077BE]" />
                <a 
                  href="https://www.airbnb.com/l/MnWw50b1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#0077BE] transition-colors"
                >
                  @bomlar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bom Lar. Todos os direitos reservados.</p>
          <a 
            href="https://www.airbnb.com/l/MnWw50b1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 sm:mt-0 text-[#0077BE] hover:underline font-medium"
          >
            Reserve no Airbnb
          </a>
        </div>
      </div>
    </footer>
  );
}

