'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Waves, Home as HomeIcon, MapPin, Star, Check, Camera, X, ZoomIn, Navigation, ExternalLink } from 'lucide-react';
import Atracoes from '@/components/Atracoes';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const features = [
    { icon: HomeIcon, title: 'Ambiente Aconchegante', description: 'Casa completa com todos os confortos para sua família' },
    { icon: MapPin, title: 'Localização Privilegiada', description: 'Na Fazenda da Armação, próxima às melhores praias' },
    { icon: Waves, title: 'Experiência Praiana', description: 'Desfrute do melhor que Governador Celso Ramos oferece' },
  ];

  const highlights = [
    'Wi-Fi gratuito',
    'Cozinha completa',
    'Área de lazer',
    'Estacionamento',
    'Ar condicionado',
    'Localização privilegiada',
  ];

  const photos = [
    '194bc020-1e73-45a6-b2f6-1b40571fccbc.avif',
    '21657c13-765c-41ee-8494-d573339f050c.avif',
    '2bebebeb-a021-4ea7-ab0d-24efe6385b5b.avif',
    '49ddf087-bf02-457a-9c71-b938b88c99d7.avif',
    '52dc334e-e302-4b4e-9505-9e375c906e63.avif',
    '757272ef-4ac4-4679-8291-ee5d4a3f2acf.avif',
    '7ea7ee65-6829-4f78-b638-b10f107259ae.avif',
    '8d1e1788-1b31-4801-8b60-8a88a5ebbcca.avif',
    'a82a60bf-7ed0-4399-921c-65b5b775d3fc.avif',
    'bed18f0b-206f-402f-88c2-f869599db7ce.avif',
  ];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage(selectedImage > 0 ? selectedImage - 1 : photos.length - 1);
      } else if (e.key === 'ArrowRight') {
        setSelectedImage(selectedImage < photos.length - 1 ? selectedImage + 1 : 0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, photos.length]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden w-full">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/fazenda-da-armacao.webp)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-0 w-full">
          <div className="max-w-4xl mx-auto text-center w-full">
            <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg animate-fadeInDown max-w-[95vw]">
              <p className="text-xs sm:text-sm font-medium text-[#0077BE] flex items-center justify-center space-x-2 flex-wrap gap-1">
                <MapPin size={14} className="flex-shrink-0" />
                <span className="break-words text-center">Fazenda da Armação, Governador Celso Ramos - SC</span>
              </p>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg animate-fadeInUp animation-delay-200 px-2">
              Bem-vindo ao Bom Lar
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md animate-fadeInUp animation-delay-400 px-4">
              Sua casa aconchegante na região mais bela de Santa Catarina. 
              Onde o mar encontra o conforto e a natureza abraça você.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fadeInUp animation-delay-600 px-4">
              <Link
                href="https://www.airbnb.com/l/MnWw50b1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#0077BE] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-[#005a8f] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
              >
                <span>Reserve Agora</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              
              <Link
                href="/sugestoes"
                className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/95 backdrop-blur-sm text-[#0077BE] border-2 border-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
              >
                <span>Descobrir Atrações</span>
                <MapPin size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fadeInUp animation-delay-200">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#0077BE] to-[#4ECDC4] bg-clip-text text-transparent px-4">
                Por que escolher o Bom Lar?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Descubra o que torna nossa hospedagem especial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-white to-[#F4EBD9]/30 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#0077BE]/10 animate-scaleIn"
                    style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                  >
                    <div className="inline-block p-3 sm:p-4 bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] rounded-full mb-4">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white w-full overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-8 sm:mb-12 animate-fadeInUp">
              <div className="inline-block p-3 bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] rounded-full mb-4">
                <Camera className="text-white" size={24} />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#0077BE] to-[#4ECDC4] bg-clip-text text-transparent px-4">
                Conheça a Casa
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Veja os ambientes que tornarão sua estadia inesquecível
              </p>
            </div>

            {/* Horizontal Scroll Gallery */}
            <div className="relative w-full overflow-hidden">
              <div className="photo-gallery-scroll overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex gap-3 sm:gap-4 px-4 sm:px-0" style={{ width: 'max-content' }}>
                  {photos.map((photo, index) => (
                    <div 
                      key={index}
                      className="relative flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer animate-scaleIn"
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={`/casa/${photo}`}
                        alt={`Foto ${index + 1} da casa Bom Lar`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex items-center gap-2 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-2">
                          <ZoomIn size={20} />
                          <span className="font-semibold text-sm sm:text-base">Clique para ampliar</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4 animate-fadeIn overflow-hidden"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition-colors z-10 p-2 bg-black/50 rounded-full"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
          
          <div className="relative max-w-full max-h-[90vh] w-full h-full flex items-center justify-center px-2">
            <Image
              src={`/casa/${photos[selectedImage]}`}
              alt={`Foto ${selectedImage + 1} da casa Bom Lar`}
              width={1920}
              height={1080}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
              priority
            />
          </div>

          {/* Navigation arrows */}
          {photos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage > 0 ? selectedImage - 1 : photos.length - 1);
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2 sm:p-3 bg-black/50 rounded-full hover:bg-black/70"
                aria-label="Imagem anterior"
              >
                <ArrowRight size={24} className="rotate-180" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage < photos.length - 1 ? selectedImage + 1 : 0);
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2 sm:p-3 bg-black/50 rounded-full hover:bg-black/70"
                aria-label="Próxima imagem"
              >
                <ArrowRight size={24} />
              </button>
            </>
          )}

          {/* Image counter */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
            {selectedImage + 1} / {photos.length}
          </div>
        </div>
      )}

      {/* Highlights Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F4EBD9] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#0077BE] to-[#2C5282] bg-clip-text text-transparent px-4">
                Comodidades
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Tudo que você precisa para uma estadia perfeita
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Check className="text-[#4ECDC4] flex-shrink-0" size={20} />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 animate-fadeInUp">
              <div className="inline-block p-3 bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] rounded-full mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#0077BE] to-[#4ECDC4] bg-clip-text text-transparent px-4">
                Como Chegar
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Encontre facilmente o Bom Lar na Fazenda da Armação, Governador Celso Ramos
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Map Card */}
              <a
                href="https://maps.app.goo.gl/9Zq4E1edpknmbZGm7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#0077BE]/10 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] group block w-full"
              >
                <div className="relative h-64 sm:h-80 lg:h-96 w-full bg-gradient-to-br from-[#0077BE]/20 to-[#4ECDC4]/20 overflow-hidden">
                  {/* Map Preview */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4 sm:p-8">
                      <div className="inline-block p-4 sm:p-6 bg-white/90 backdrop-blur-sm rounded-full mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="text-[#0077BE]" size={36} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Bom Lar</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                        Fazenda da Armação<br />
                        Governador Celso Ramos - SC
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#0077BE] text-white rounded-lg shadow-md group-hover:bg-[#005a8f] transition-colors text-xs sm:text-sm md:text-base">
                        <Navigation size={16} className="flex-shrink-0" />
                        <span className="whitespace-nowrap">Ver no Google Maps</span>
                        <ExternalLink size={14} className="flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative waves */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0077BE]/30 to-transparent"></div>
                  
                  {/* Click indicator */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-[#0077BE] flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={14} />
                    <span>Clique para abrir</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-[#F4EBD9]/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] rounded-lg">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Localização Interativa</p>
                        <p className="text-sm text-gray-600">Clique no card para ver rotas e direções</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Info Card */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] rounded-2xl p-6 sm:p-8 text-white shadow-xl">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Localização Privilegiada</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                        <Waves size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-sm sm:text-base">Próximo às Melhores Praias</h4>
                        <p className="text-white/90 text-xs sm:text-sm">
                          A apenas alguns minutos das praias mais belas de Governador Celso Ramos
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                        <Navigation size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-sm sm:text-base">Fácil Acesso</h4>
                        <p className="text-white/90 text-xs sm:text-sm">
                          Localizado na Rodovia SC-410, com fácil acesso e estacionamento
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                        <Star size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-sm sm:text-base">Região Tranquila</h4>
                        <p className="text-white/90 text-xs sm:text-sm">
                          Ambiente tranquilo e seguro, ideal para descanso e relaxamento
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border border-[#0077BE]/10">
                  <h4 className="font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
                    <MapPin className="text-[#0077BE]" size={18} />
                    Informações de Acesso
                  </h4>
                  <ul className="space-y-2 sm:space-y-3 text-gray-600 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="text-[#4ECDC4] flex-shrink-0 mt-0.5" size={16} />
                      <span>Acesso pela <strong>Rodovia SC-410</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-[#4ECDC4] flex-shrink-0 mt-0.5" size={16} />
                      <span>Localizado na <strong>Fazenda da Armação</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-[#4ECDC4] flex-shrink-0 mt-0.5" size={16} />
                      <span>Estacionamento disponível</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-[#4ECDC4] flex-shrink-0 mt-0.5" size={16} />
                      <span>Próximo a restaurantes e comércios</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atrações Section */}
      <Atracoes />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Star className="inline-block mb-3 sm:mb-4" size={36} />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Pronto para sua experiência perfeita?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed px-4">
              Reserve agora e garanta sua estadia no Bom Lar. 
              Descubra o melhor de Governador Celso Ramos.
            </p>
            
            <Link
              href="https://www.airbnb.com/l/MnWw50b1"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0077BE] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto max-w-xs mx-auto"
            >
              <span>Fazer Reserva</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 px-4">
              Antes de sua chegada
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/regras"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 text-sm sm:text-base"
              >
                Veja as Regras da Casa
              </Link>
              <Link
                href="/sugestoes"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 text-sm sm:text-base"
              >
                Explore as Atrações
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
