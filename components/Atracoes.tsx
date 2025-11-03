'use client';

import { useState } from 'react';
import { 
  Waves, MapPin, ChevronDown, ChevronUp, Ship, Mountain, 
  UtensilsCrossed, Fish, Coffee, Phone, Dog, Clock, 
  Star
} from 'lucide-react';

interface Praia {
  nome: string;
  extensao: string;
  descricao: string;
  caracteristicas: string[];
  acesso: string;
  tipo: 'praia' | 'deserta' | 'urbanizada';
  destacado?: boolean;
}

interface Trilha {
  nome: string;
  origem: string;
  destino: string;
  duracao: string;
  dificuldade: 'facil' | 'media' | 'dificil';
  descricao: string;
}

interface Restaurante {
  nome: string;
  tipo: string;
  descricao?: string;
  telefone?: string;
}

export default function Atracoes() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedPraia, setExpandedPraia] = useState<number | null>(null);

  const praias: Praia[] = [
    {
      nome: 'Praia de Canto dos Ganchos',
      extensao: '800m',
      descricao: 'Praia tranquila de pescadores, com mar calmo, areia grossa e pedras onde os pescadores ancoram seus barcos. Vila colonizada por açorianos com traços portugueses.',
      caracteristicas: ['Mar calmo', 'Pescadores', 'Trilha para Praia Ponta da Cruz', 'Peixarias'],
      acesso: 'Rodovia SC-410 (acesso norte)',
      tipo: 'praia',
      destacado: true
    },
    {
      nome: 'Praia de Calheiros',
      extensao: '300m',
      descricao: 'Pequena praia com mar calmo, muitas árvores e sombra. Tem restaurantes e bares com petiscos típicos. Pequena vila de pescadores.',
      caracteristicas: ['Mar calmo', 'Muita sombra', 'Restaurantes', 'Mirante'],
      acesso: 'Rodovia SC-410',
      tipo: 'praia'
    },
    {
      nome: 'Praia de Ganchos do Meio',
      extensao: '150m',
      descricao: 'Centrinho de Governador Celso Ramos, com melhor infraestrutura da Enseada dos Ganchos. Comércio, restaurantes e peixarias. Ponto de pesca com barcos coloridos.',
      caracteristicas: ['Melhor infraestrutura', 'Centrinho', 'Restaurantes', 'Peixarias', 'Pôr do sol'],
      acesso: 'Rodovia SC-410',
      tipo: 'urbanizada',
      destacado: true
    },
    {
      nome: 'Praia de Ganchos de Fora',
      extensao: '200m',
      descricao: 'Cenário lindo com águas calmas e verdes. Próxima ao Ponta dos Ganchos Exclusive Resort. Várias trilhas para praias paradisíacas e desertas.',
      caracteristicas: ['Águas verdes', 'Trilhas', 'Passeios de barco', 'Pesca', 'Próxima ao Resort'],
      acesso: 'Rodovia SC-410, via Rua dos Navegantes',
      tipo: 'praia',
      destacado: true
    },
    {
      nome: 'Praia de Fora',
      extensao: '200m',
      descricao: 'Praia deserta e preservada, com mata nativa e mar cristalino com ondas. Ideal para trilhas e surfistas.',
      caracteristicas: ['Deserta', 'Mar com ondas', 'Trilhas', 'Mata nativa', 'Surf'],
      acesso: 'Trilha (20min) de Ganchos de Fora ou costões de Palmas',
      tipo: 'deserta'
    },
    {
      nome: 'Praia de Palmas do Arvoredo',
      extensao: '3km',
      descricao: 'A maior e principal praia do município, com melhor infraestrutura. Águas cristalinas, ondas tranquilas. Ótima para surfistas e famílias. Melhor infraestrutura do litoral.',
      caracteristicas: ['Maior praia', 'Melhor infraestrutura', 'Águas cristalinas', 'Surf', 'Esportes náuticos', 'Comércio'],
      acesso: 'Rodovia SC-410',
      tipo: 'urbanizada',
      destacado: true
    },
    {
      nome: 'Praia de Ilhéus',
      extensao: '200m',
      descricao: 'Praia deserta e tranquila, de difícil acesso. Cercada por vegetação nativa. Ideal para trilhas e contato com natureza. Boa para surf.',
      caracteristicas: ['Deserta', 'Trilhas', 'Vegetação nativa', 'Surf', 'Aventura'],
      acesso: 'Trilha de 1h da Praia de Palmas ou costão da Praia do Sissial',
      tipo: 'deserta'
    },
    {
      nome: 'Praia do Sissial',
      extensao: '350m',
      descricao: 'Praia deserta com paisagem linda, cercada por pedras, mata nativa e mar cristalino agitado. Tem valor histórico da Revolução Federalista.',
      caracteristicas: ['Deserta', 'Valor histórico', 'Mar agitado', 'Camping', 'Bica de água'],
      acesso: 'Trilha de 30min da Rodovia SC-410 ou trilhas de outras praias',
      tipo: 'deserta'
    },
    {
      nome: 'Praia Grande',
      extensao: '1,2km',
      descricao: 'Uma das favoritas, com mar aberto e cristalino, ondas divertidas. Possui certificação Bandeira Azul. Ótima para famílias e caminhadas.',
      caracteristicas: ['Bandeira Azul', 'Família', 'Caminhadas', 'Surf', 'Restaurantes', 'Trilhas'],
      acesso: 'Rodovia SC-410',
      tipo: 'urbanizada',
      destacado: true
    },
    {
      nome: 'Praia do Tinguá',
      extensao: '350m',
      descricao: 'Praia deserta com mar calmo e verde, vista das ilhas da região. Ótima para crianças e famílias.',
      caracteristicas: ['Deserta', 'Mar calmo', 'Vista das ilhas', 'Família', 'Crianças'],
      acesso: 'Trilha de 250m do Hotel Tinguá',
      tipo: 'deserta'
    },
    {
      nome: 'Praia de Bananeiras',
      extensao: '250m',
      descricao: 'Praia deserta entre Praia Grande e Praia do Defunto. Águas calmas com poucas ondas, maravilhosas para banhos.',
      caracteristicas: ['Deserta', 'Águas calmas', 'Trilhas fáceis', 'Costões'],
      acesso: 'Trilhas da Praia Grande ou Praia do Defunto, ou estrada Luiz Alexandrino Silva',
      tipo: 'deserta'
    },
    {
      nome: 'Praia das Cordas',
      extensao: '200m',
      descricao: 'Uma das mais charmosas, com mar azul turquesa e areia branca. Condomínios luxuosos ao redor. Com maré baixa, acesso a outras praias.',
      caracteristicas: ['Mar turquesa', 'Areia branca', 'Charmosa', 'Condomínios'],
      acesso: 'Estrada da Praia da Armação da Piedade',
      tipo: 'praia',
      destacado: true
    },
    {
      nome: 'Praia da Figueira',
      extensao: '100m',
      descricao: 'Praia linda com águas tranquilas e cristalinas, areias claras. Boa para famílias com crianças. Bem privada, dentro de condomínio.',
      caracteristicas: ['Águas cristalinas', 'Família', 'Privada', 'Crianças', 'Trapiche'],
      acesso: 'Através de condomínio (acesso livre)',
      tipo: 'praia'
    },
    {
      nome: 'Praia da Armação da Piedade',
      extensao: 'Pequena',
      descricao: 'Vila de pescadores com mais de 250 anos de história. Foi o maior núcleo baleeiro catarinense. No inverno, observação de baleias francas.',
      caracteristicas: ['Histórica', 'Baleias francas', 'Vila de pescadores', 'Capela de 1745'],
      acesso: 'Rodovia SC-410',
      tipo: 'praia',
      destacado: true
    },
    {
      nome: 'Praia de Fazenda da Armação',
      extensao: '2km',
      descricao: 'Famosa por ser centro gastronômico. Baía em formato de ferradura com mar calmo e ambiente bucólico. Muitos restaurantes de frutos do mar.',
      caracteristicas: ['Centro gastronômico', 'Restaurantes', 'Mar calmo', 'Barcos de pesca'],
      acesso: 'Rodovia SC-410 (Estrada Costeira da Armação)',
      tipo: 'urbanizada',
      destacado: true
    },
    {
      nome: 'Praia do Henrique Costa',
      extensao: 'Pequena',
      descricao: 'Praia particular de águas calmas e tranquilas, boa para banho.',
      caracteristicas: ['Águas calmas', 'Particular', 'Tranquila'],
      acesso: 'Trilha de 100m entre propriedades particulares',
      tipo: 'praia'
    },
    {
      nome: 'Praia do Antônio Corrêa',
      extensao: 'Pequena',
      descricao: 'Pequena praia praticamente particular, com boa faixa de areia e águas cristalinas e calmas.',
      caracteristicas: ['Águas cristalinas', 'Particular', 'Tranquila'],
      acesso: 'Acesso por carro, estacionamento debaixo das árvores',
      tipo: 'praia'
    },
    {
      nome: 'Praia do Magalhães',
      extensao: '1km',
      descricao: 'Praia com águas cristalinas, mar tranquilo e areia grossa. Linda paisagem na orla.',
      caracteristicas: ['Águas cristalinas', 'Mar tranquilo', 'Boa para nadar'],
      acesso: 'Estrada Costeira da Armação',
      tipo: 'praia'
    },
    {
      nome: 'Praia Costeira da Armação',
      extensao: '300m',
      descricao: 'Enseada com barquinhos ancorados. Infraestrutura boa com restaurantes e bares. Ponto de partida para passeios à Ilha do Anhatomirim.',
      caracteristicas: ['Passeios de barco', 'Restaurantes', 'Ilha do Anhatomirim', 'Golfinhos'],
      acesso: 'Estrada Costeira da Armação, Rua Atílio de Carvalho',
      tipo: 'praia',
      destacado: true
    },
    {
      nome: 'Praia do Porto',
      extensao: 'Pequena',
      descricao: 'Praia deserta sem infraestrutura, boa para banhos. Localizada em frente à Baía dos Golfinhos. Roteiro de escunas.',
      caracteristicas: ['Deserta', 'Baía dos Golfinhos', 'Passeios de escuna'],
      acesso: 'Estrada Areias de Baixo',
      tipo: 'deserta'
    },
    {
      nome: 'Praia do Antenor',
      extensao: '250m',
      descricao: 'Praia próxima da Ilha de Anhatomirim (500m). Mar calmo e cristalino. Partem escunas para passeios à fortaleza.',
      caracteristicas: ['Próxima à Ilha', 'Passeios de escuna', 'Mar calmo', 'Infraestrutura'],
      acesso: 'Estrada Areias de Baixo',
      tipo: 'praia'
    },
    {
      nome: 'Praia da Caieira',
      extensao: '150m',
      descricao: 'Praia tranquila de mar calmo, em área rural. Praticamente exclusiva de pescadores e moradores locais.',
      caracteristicas: ['Rural', 'Pescadores', 'Mar calmo', 'Tranquila'],
      acesso: 'Estrada Areias de Baixo (acesso sul)',
      tipo: 'praia'
    }
  ];

  const trilhas: Trilha[] = [
    {
      nome: 'Canto dos Ganchos → Praia Ponta da Cruz',
      origem: 'Praia de Canto dos Ganchos',
      destino: 'Praia Ponta da Cruz',
      duracao: 'Curta',
      dificuldade: 'facil',
      descricao: 'Trilha pelo costão de pedras até praia deserta de 150m.'
    },
    {
      nome: 'Ganchos de Fora → Praias Desertas',
      origem: 'Praia de Ganchos de Fora',
      destino: 'Praia do Tomás, Engenho, Prainha, Praia da Velha',
      duracao: 'Média',
      dificuldade: 'media',
      descricao: 'Trilha para 4 lindas prainhas entre pedras, quase desertas.'
    },
    {
      nome: 'Ganchos de Fora → Praia de Fora',
      origem: 'Praia de Ganchos de Fora',
      destino: 'Praia de Fora',
      duracao: '20min',
      dificuldade: 'facil',
      descricao: 'Trilha tranquila com vistas lindas de cima do morro.'
    },
    {
      nome: 'Palmas → Praia de Fora',
      origem: 'Praia de Palmas (canto esquerdo)',
      destino: 'Praia de Fora',
      duracao: 'Média',
      dificuldade: 'dificil',
      descricao: 'Trilha difícil pelos costões de pedras.'
    },
    {
      nome: 'Palmas → Praia do Cipó e Ilhéus',
      origem: 'Praia de Palmas (canto direito)',
      destino: 'Praia do Cipó e Praia de Ilhéus',
      duracao: '1h',
      dificuldade: 'media',
      descricao: 'Trilha para praias desertas.'
    },
    {
      nome: 'Ilhéus → Praia do Sissial',
      origem: 'Praia de Ilhéus',
      destino: 'Praia do Sissial',
      duracao: 'Média',
      dificuldade: 'media',
      descricao: 'Trilha entre praias desertas.'
    },
    {
      nome: 'Praia Grande → Praias Desertas',
      origem: 'Praia Grande (canto direito)',
      destino: 'Praia das Bananeiras, Defunto e Cordas',
      duracao: 'Curta',
      dificuldade: 'facil',
      descricao: 'Trilhas fáceis passando por costões com piscininhas naturais.'
    },
    {
      nome: 'Rodovia → Praia do Sissial',
      origem: 'Rodovia SC-410',
      destino: 'Praia do Sissial',
      duracao: '30min',
      dificuldade: 'facil',
      descricao: 'Trilha sinalizada, grande parte na sombra da mata.'
    }
  ];

  const restaurantes: Restaurante[] = [
    { nome: 'Restaurante Edu', tipo: 'Restaurante' },
    { nome: 'Restaurante Raízes', tipo: 'Restaurante' },
    { nome: 'Illa Gastrobar', tipo: 'Gastrobar' },
    { nome: 'Restaurante Mar à Vista', tipo: 'Restaurante' },
    { nome: 'O Porto Da Pirataria', tipo: 'Restaurante temático' },
    { nome: 'Restaurante do Tonho', tipo: 'Restaurante' },
    { nome: 'Restaurante Roda Viva', tipo: 'Restaurante' },
    { nome: 'Restaurante Arvoredo', tipo: 'Restaurante' },
    { nome: 'Burger Box', tipo: 'Hamburgueria' },
    { nome: 'Restaurante & Pizzaria Arco Íris', tipo: 'Pizzaria' },
    { nome: 'La Bonna Pizza', tipo: 'Pizzaria' },
    { nome: 'Beach House', tipo: 'Bar/Restaurante' },
    { nome: 'ADN', tipo: 'Restaurante' },
    { nome: 'Birutas', tipo: 'Bar' },
    { nome: 'Rancho Bar', tipo: 'Bar' },
    { nome: 'Villa dos Ganchos', tipo: 'Restaurante', descricao: 'Na Praia de Canto dos Ganchos' }
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const togglePraia = (index: number) => {
    setExpandedPraia(expandedPraia === index ? null : index);
  };

  const getDificuldadeColor = (dificuldade: string) => {
    switch (dificuldade) {
      case 'facil': return 'bg-green-100 text-green-700';
      case 'media': return 'bg-yellow-100 text-yellow-700';
      case 'dificil': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTipoBadge = (tipo: string) => {
    switch (tipo) {
      case 'urbanizada': return { text: 'Urbanizada', color: 'bg-blue-100 text-blue-700' };
      case 'deserta': return { text: 'Deserta', color: 'bg-amber-100 text-amber-700' };
      default: return { text: 'Praia', color: 'bg-cyan-100 text-cyan-700' };
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-[#F4EBD9]/30 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block p-3 bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] rounded-full mb-4">
              <Waves className="text-white" size={28} />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#0077BE] to-[#4ECDC4] bg-clip-text text-transparent px-4">
              Atrações da Região
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Descubra as melhores praias, trilhas, restaurantes e experiências em Governador Celso Ramos
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 px-4">
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <Dog size={16} className="text-[#0077BE] flex-shrink-0" />
                <span className="text-center">Cachorros são bem-vindos!</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <Phone size={16} className="text-[#0077BE] flex-shrink-0" />
                <a href="tel:+5548991126107" className="hover:text-[#0077BE] transition-colors whitespace-nowrap">
                  (48) 99112-6107
                </a>
              </div>
            </div>
          </div>

          {/* Praias Section */}
          <div className="mb-6 sm:mb-8">
            <button
              onClick={() => toggleSection('praias')}
              className="w-full flex items-center justify-between p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] rounded-lg flex-shrink-0">
                  <Waves className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">22 Praias Incríveis</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Descubra as melhores praias da região</p>
                </div>
              </div>
              {expandedSection === 'praias' ? (
                <ChevronUp className="text-[#0077BE] group-hover:scale-110 transition-transform flex-shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-[#0077BE] group-hover:scale-110 transition-transform flex-shrink-0" size={20} />
              )}
            </button>

            {expandedSection === 'praias' && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-h-[600px] overflow-y-auto overflow-x-hidden pr-2">
                {praias.map((praia, index) => {
                  const tipoBadge = getTipoBadge(praia.tipo);
                  const isExpanded = expandedPraia === index;
                  
                  return (
                    <div
                      key={index}
                      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border ${
                        praia.destacado ? 'border-[#0077BE] border-2' : 'border-gray-200'
                      }`}
                    >
                      <button
                        onClick={() => togglePraia(index)}
                        className="w-full p-4 text-left"
                      >
                        <div className="flex items-start justify-between mb-2 gap-2">
                          <h4 className="font-bold text-gray-800 text-sm flex-1 break-words">{praia.nome}</h4>
                          {praia.destacado && (
                            <Star size={16} className="text-yellow-500 flex-shrink-0" fill="currentColor" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${tipoBadge.color}`}>
                            {tipoBadge.text}
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                            {praia.extensao}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2 mb-2 break-words">
                          {praia.descricao}
                        </p>
                        <div className="flex items-center text-xs text-[#0077BE] mt-2">
                          {isExpanded ? (
                            <>
                              <span>Menos</span>
                              <ChevronUp size={14} className="ml-1" />
                            </>
                          ) : (
                            <>
                              <span>Ver mais</span>
                              <ChevronDown size={14} className="ml-1" />
                            </>
                          )}
                        </div>
                      </button>
                      
                      {isExpanded && (
                        <div className="px-4 pb-4 space-y-3 border-t border-gray-100 pt-3">
                          <div>
                            <p className="text-sm text-gray-700 mb-2">{praia.descricao}</p>
                            <div className="flex items-start gap-2 text-xs text-gray-600 mb-2">
                              <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                              <span className="break-words">{praia.acesso}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-700 mb-1">Características:</p>
                            <div className="flex flex-wrap gap-1">
                              {praia.caracteristicas.map((caracteristica, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-[#F4EBD9] text-[#0077BE] rounded text-xs"
                                >
                                  {caracteristica}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Trilhas Section */}
          <div className="mb-6 sm:mb-8">
            <button
              onClick={() => toggleSection('trilhas')}
              className="w-full flex items-center justify-between p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-[#4ECDC4] to-[#0077BE] rounded-lg flex-shrink-0">
                  <Mountain className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Trilhas e Aventuras</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Explore caminhos para praias desertas</p>
                </div>
              </div>
              {expandedSection === 'trilhas' ? (
                <ChevronUp className="text-[#0077BE] group-hover:scale-110 transition-transform flex-shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-[#0077BE] group-hover:scale-110 transition-transform flex-shrink-0" size={20} />
              )}
            </button>

            {expandedSection === 'trilhas' && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {trilhas.map((trilha, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-200"
                  >
                    <div className="flex items-start justify-between mb-2 gap-2">
                      <h4 className="font-bold text-gray-800 text-sm flex-1 break-words">{trilha.nome}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${getDificuldadeColor(trilha.dificuldade)}`}>
                        {trilha.dificuldade === 'facil' ? 'Fácil' : trilha.dificuldade === 'media' ? 'Média' : 'Difícil'}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{trilha.duracao}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-2 break-words">
                      <span className="font-semibold">De:</span> {trilha.origem}
                    </p>
                    <p className="text-xs text-gray-600 mb-2 break-words">
                      <span className="font-semibold">Para:</span> {trilha.destino}
                    </p>
                    <p className="text-xs text-gray-700 break-words">{trilha.descricao}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Passeio de Barco Section */}
          <div className="mb-6 sm:mb-8">
            <button
              onClick={() => toggleSection('passeios')}
              className="w-full flex items-center justify-between p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-[#0077BE] to-[#2C5282] rounded-lg flex-shrink-0">
                  <Ship className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Passeio de Barco do Vamber</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Experiência única pelo litoral</p>
                </div>
              </div>
              {expandedSection === 'passeios' ? (
                <ChevronUp className="text-[#0077BE] group-hover:scale-110 transition-transform flex-shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-[#0077BE] group-hover:scale-110 transition-transform flex-shrink-0" size={20} />
              )}
            </button>

            {expandedSection === 'passeios' && (
              <div className="mt-4 bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Ship className="text-[#0077BE] flex-shrink-0" size={28} />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-base sm:text-lg mb-2">Passeio de Barco do Vamber</h4>
                    <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                      Explore o litoral de Governador Celso Ramos em um passeio de barco inesquecível com pescaria. 
                      Navegue pelas águas cristalinas, visite ilhas históricas e aproveite a beleza natural da região enquanto pratica pesca esportiva.
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 flex-wrap">
                      <a
                        href="tel:+5548984138861"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077BE] text-white rounded-lg hover:bg-[#005a8f] transition-colors text-sm sm:text-base"
                      >
                        <Phone size={16} />
                        <span>Agendar</span>
                      </a>
                      <span className="text-xs sm:text-sm text-gray-600">
                        <strong>Contato:</strong> (48) 98413-8861
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Restaurantes Section */}
          <div className="mb-6 sm:mb-8">
            <button
              onClick={() => toggleSection('restaurantes')}
              className="w-full flex items-center justify-between p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-lg flex-shrink-0">
                  <UtensilsCrossed className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Restaurantes e Bares</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Sabor local e gastronomia de qualidade</p>
                </div>
              </div>
              {expandedSection === 'restaurantes' ? (
                <ChevronUp className="text-[#0077BE] group-hover:scale-110 transition-transform flex-shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-[#0077BE] group-hover:scale-110 transition-transform flex-shrink-0" size={20} />
              )}
            </button>

            {expandedSection === 'restaurantes' && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {restaurantes.map((restaurante, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-200"
                  >
                    <div className="flex items-start gap-3">
                      <UtensilsCrossed className="text-[#0077BE] flex-shrink-0 mt-1" size={20} />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-sm mb-1">{restaurante.nome}</h4>
                        <p className="text-xs text-gray-600 mb-1">{restaurante.tipo}</p>
                        {restaurante.descricao && (
                          <p className="text-xs text-gray-500">{restaurante.descricao}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Serviços Especiais Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {/* Peixaria do Nei */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 sm:p-6 border border-gray-200">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-[#4ECDC4] to-[#0077BE] rounded-lg flex-shrink-0">
                  <Fish className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-base sm:text-lg mb-2">Peixaria do Nei</h4>
                  <p className="text-gray-700 text-xs sm:text-sm mb-3">
                    Frutos do mar frescos direto do pescador. Entrega disponível!
                  </p>
                  <a
                    href="tel:+5548991912448"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#0077BE] text-white rounded-lg hover:bg-[#005a8f] transition-colors text-xs sm:text-sm"
                  >
                    <Phone size={14} />
                    <span>Pedir</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Cesta de Café da Manhã */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 sm:p-6 border border-gray-200">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-lg flex-shrink-0">
                  <Coffee className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-base sm:text-lg mb-2">Cesta de Café da Manhã</h4>
                  <p className="text-gray-700 text-xs sm:text-sm mb-3">
                    Comece o dia com o melhor! Cesta preparada pela Shayshay.
                  </p>
                  <a
                    href="tel:+5548991126107"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#0077BE] text-white rounded-lg hover:bg-[#005a8f] transition-colors text-xs sm:text-sm"
                  >
                    <Phone size={14} />
                    <span>Encomendar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Informações Importantes */}
          <div className="mt-6 sm:mt-8 bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] rounded-xl shadow-lg p-5 sm:p-6 text-white">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                <Star size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-base sm:text-lg mb-2">Informações Importantes</h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    <Dog size={14} />
                    <span>Cachorros são bem-vindos no Bom Lar!</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={14} />
                    <span>Contato: <a href="tel:+5548991126107" className="underline">(48) 99112-6107</a></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>Cancelamento: Negado (conforme política de reservas)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

