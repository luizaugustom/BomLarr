import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Waves, Home as HomeIcon, MapPin, Star, Check, Camera } from 'lucide-react';

export default function Home() {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
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
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg animate-fadeInDown">
              <p className="text-sm font-medium text-[#0077BE] flex items-center justify-center space-x-2">
                <MapPin size={16} />
                <span>Fazenda da Armação, Governador Celso Ramos - SC</span>
              </p>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg animate-fadeInUp animation-delay-200">
              Bem-vindo ao Bom Lar
            </h1>
            
            <p className="text-xl sm:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md animate-fadeInUp animation-delay-400">
              Sua casa aconchegante na região mais bela de Santa Catarina. 
              Onde o mar encontra o conforto e a natureza abraça você.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-600">
              <Link
                href="https://www.airbnb.com/l/MnWw50b1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-[#0077BE] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-[#005a8f] transition-all duration-300 transform hover:scale-105"
              >
                <span>Reserve Agora</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              
              <Link
                href="/sugestoes"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/95 backdrop-blur-sm text-[#0077BE] border-2 border-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:scale-105"
              >
                <span>Descobrir Atrações</span>
                <MapPin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp animation-delay-200">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0077BE] to-[#4ECDC4] bg-clip-text text-transparent">
                Por que escolher o Bom Lar?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubra o que torna nossa hospedagem especial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-white to-[#F4EBD9]/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#0077BE]/10 animate-scaleIn"
                    style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                  >
                    <div className="inline-block p-4 bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] rounded-full mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fadeInUp">
              <div className="inline-block p-3 bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] rounded-full mb-4">
                <Camera className="text-white" size={28} />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0077BE] to-[#4ECDC4] bg-clip-text text-transparent">
                Conheça a Casa
              </h2>
              <p className="text-lg text-gray-600">
                Veja os ambientes que tornarão sua estadia inesquecível
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <div 
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer animate-scaleIn"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <Image
                    src={`/casa/${photo}`}
                    alt={`Foto ${index + 1} da casa Bom Lar`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-[#F4EBD9] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0077BE] to-[#2C5282] bg-clip-text text-transparent">
                Comodidades
              </h2>
              <p className="text-lg text-gray-600">
                Tudo que você precisa para uma estadia perfeita
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Check className="text-[#4ECDC4] flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Star className="inline-block mb-4" size={48} />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Pronto para sua experiência perfeita?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Reserve agora e garanta sua estadia no Bom Lar. 
              Descubra o melhor de Governador Celso Ramos.
            </p>
            
            <Link
              href="https://www.airbnb.com/l/MnWw50b1"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-white text-[#0077BE] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Fazer Reserva</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Antes de sua chegada
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/regras"
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
              >
                Veja as Regras da Casa
              </Link>
              <Link
                href="/sugestoes"
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
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
