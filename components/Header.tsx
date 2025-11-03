'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, MapPin, Menu, X, Navigation } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLocationClick = () => {
    // Abre o Google Maps com a localização do Bom Lar
    const address = 'Fazenda da Armação, Governador Celso Ramos, SC';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const navLinks = [
    { href: '/', label: 'Início', icon: Home },
    { href: '/regras', label: 'Regras', icon: FileText },
    { href: '/sugestoes', label: 'Sugestões', icon: MapPin },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-[#0077BE]/20 shadow-sm overflow-x-hidden">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="text-2xl sm:text-3xl">🏠</div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#0077BE] to-[#4ECDC4] bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              Bom Lar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0077BE] text-white shadow-md'
                      : 'text-gray-700 hover:bg-[#0077BE]/10 hover:text-[#0077BE]'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
            {/* Botão de Localização */}
            <button
              onClick={handleLocationClick}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-gray-700 hover:bg-[#0077BE]/10 hover:text-[#0077BE]"
              aria-label="Ver localização no mapa"
              title="Ver localização no Google Maps"
            >
              <Navigation size={18} />
              <span className="font-medium">Localização</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-[#0077BE]/10 hover:text-[#0077BE] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[#0077BE]/20 mt-2 pt-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-[#0077BE] text-white shadow-md'
                        : 'text-gray-700 hover:bg-[#0077BE]/10 hover:text-[#0077BE]'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                );
              })}
              {/* Botão de Localização Mobile */}
              <button
                onClick={() => {
                  handleLocationClick();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-gray-700 hover:bg-[#0077BE]/10 hover:text-[#0077BE]"
                aria-label="Ver localização no mapa"
              >
                <Navigation size={20} />
                <span className="font-medium">Localização</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

