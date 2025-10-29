'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, MapPin } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Início', icon: Home },
    { href: '/regras', label: 'Regras', icon: FileText },
    { href: '/sugestoes', label: 'Sugestões', icon: MapPin },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-[#0077BE]/20 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-3xl">🏠</div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#0077BE] to-[#4ECDC4] bg-clip-text text-transparent group-hover:scale-105 transition-transform">
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
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Link
              href="/regras"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm ${
                pathname === '/regras' 
                  ? 'bg-[#0077BE] text-white' 
                  : 'text-gray-700 hover:bg-[#0077BE]/10'
              }`}
            >
              <FileText size={18} />
              <span>Regras</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

