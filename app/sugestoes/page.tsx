import { MapPin, Waves, Camera, UtensilsCrossed, Ship, Mountain, Clock, Star } from 'lucide-react';

export default function Sugestoes() {
  const lugares = [
    {
      name: 'Praia de Palmas',
      category: 'Praia',
      distance: '5 km',
      duration: 'Meio dia',
      icon: Waves,
      image: '🏖️',
      description: 'A maior praia do município, com quase 3 km de extensão. Areias douradas e mar de tons verdes. Ideal para banhos de sol e prática de esportes náuticos.',
      highlights: ['Praia extensa', 'Águas cristalinas', 'Esportes náuticos', 'Areia clara']
    },
    {
      name: 'Ilha de Anhatomirim',
      category: 'História e Natureza',
      distance: '15 km',
      duration: '3-4 horas',
      icon: Ship,
      image: '🏰',
      description: 'Ilha histórica que abriga a Fortaleza de Santa Cruz de Anhatomirim, construída no século XVIII. Parte da Área de Proteção Ambiental de Anhatomirim.',
      highlights: ['Fortaleza histórica', 'Passeio de barco', 'Natureza preservada', 'Vista panorâmica']
    },
    {
      name: 'Baía dos Golfinhos',
      category: 'Natureza',
      distance: '12 km',
      duration: '2-3 horas',
      icon: Ship,
      image: '🐬',
      description: 'Uma pequena praia onde é possível observar golfinhos em alto mar. Recomenda-se fazer um passeio de barco para vê-los mais de perto.',
      highlights: ['Avistamento de golfinhos', 'Passeio de barco', 'Mar cristalino', 'Experiência única']
    },
    {
      name: 'Igreja de Nossa Senhora da Piedade',
      category: 'Arquitetura',
      distance: '3 km',
      duration: '1 hora',
      icon: Camera,
      image: '⛪',
      description: 'Localizada na Armação da Piedade, é considerada a primeira igreja de Santa Catarina, construída em 1745 em estilo colonial português.',
      highlights: ['Arquitetura histórica', 'Primeira igreja de SC', 'Estilo colonial', 'Cultura local']
    },
    {
      name: 'Mirante da Serra',
      category: 'Natureza',
      distance: '8 km',
      duration: '2 horas',
      icon: Mountain,
      image: '⛰️',
      description: 'Vista panorâmica deslumbrante da região. Perfeito para observar o pôr do sol e ter uma vista privilegiada da costa catarinense.',
      highlights: ['Vista panorâmica', 'Pôr do sol', 'Trekking leve', 'Fotografias']
    },
    {
      name: 'Centro Gastronômico',
      category: 'Gastronomia',
      distance: '6 km',
      duration: '2 horas',
      icon: UtensilsCrossed,
      image: '🍽️',
      description: 'Explore a culinária local com foco em frutos do mar frescos. Restaurantes aconchegantes com vista para o mar.',
      highlights: ['Frutos do mar', 'Culinária local', 'Ambiente praiano', 'Vista para o mar']
    }
  ];

  const dicas = [
    {
      icon: Clock,
      title: 'Horários Recomendados',
      content: 'Evite praias entre 10h e 14h no verão. O horário ideal é pela manhã (8h-10h) ou fim de tarde (16h-18h).'
    },
    {
      icon: Camera,
      title: 'O que Fazer',
      content: 'Não perca o pôr do sol na Praia de Palmas - um dos mais belos da região. Traga sua câmera!'
    },
    {
      icon: Star,
      title: 'Dicas Locais',
      content: 'Aproveite os peixes frescos do dia. Peça indicações dos pescadores locais para os melhores lugares.'
    },
    {
      icon: Ship,
      title: 'Passeios em Barco',
      content: 'Os passeios para Anhatomirim e Baía dos Golfinhos devem ser agendados com antecedência na temporada.'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0077BE] to-[#2C5282] bg-clip-text text-transparent">
            Explore Governador Celso Ramos
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Descubra os melhores lugares para visitar, desfrutar e criar memórias inesquecíveis 
            na região mais encantadora de Santa Catarina.
          </p>
        </div>

        {/* Places Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-[#0077BE] to-[#4ECDC4] bg-clip-text text-transparent">
            Lugares Imperdíveis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lugares.map((lugar, index) => {
              const Icon = lugar.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-[#0077BE]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Image/Emoji Header */}
                  <div className="h-48 bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] flex items-center justify-center relative overflow-hidden">
                    <div className="text-8xl filter drop-shadow-lg">
                      {lugar.image}
                    </div>
                    <div className="absolute top-4 right-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                      <Icon size={16} className="text-[#0077BE]" />
                      <span className="text-xs font-semibold text-gray-700">{lugar.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#0077BE] transition-colors">
                        {lugar.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {lugar.description}
                    </p>

                    {/* Info */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{lugar.distance}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{lugar.duration}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {lugar.highlights.map((highlight, highlightIndex) => (
                        <span 
                          key={highlightIndex}
                          className="px-3 py-1 bg-[#F4EBD9] text-[#0077BE] rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tips Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-[#0077BE] to-[#4ECDC4] bg-clip-text text-transparent">
            Dicas Locais
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dicas.map((dica, index) => {
              const Icon = dica.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white to-[#F4EBD9]/30 p-6 rounded-xl shadow-md border border-[#0077BE]/10 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] rounded-lg flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {dica.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {dica.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] rounded-2xl p-8 sm:p-10 shadow-xl text-white text-center">
            <MapPin className="inline-block mb-4" size={40} />
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Localização Privilegiada
            </h3>
            <p className="text-white/90 mb-6 text-lg max-w-2xl mx-auto">
              O Bom Lar está situado na Fazenda da Armação, no coração de Governador Celso Ramos. 
              Você terá fácil acesso às principais atrações da região.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-block">
              <p className="font-semibold">
                📍 Fazenda da Armação, Governador Celso Ramos - SC
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Pronto para explorar?
          </p>
          <a 
            href="https://www.airbnb.com/l/MnWw50b1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#0077BE] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-[#005a8f] transition-all duration-300 transform hover:scale-105"
          >
            <span>Faça sua Reserva</span>
            <MapPin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

