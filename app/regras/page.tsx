import { CheckCircle, XCircle, Clock, Users, Dog, Music2, Cigarette, Heart } from 'lucide-react';

export default function Regras() {
  const regras = [
    {
      category: 'Horários',
      icon: Clock,
      items: [
        {
          rule: 'Check-in após 15h',
          allowed: true,
          description: 'A partir das 15h você pode fazer check-in na propriedade'
        },
        {
          rule: 'Check-out até 11h',
          allowed: true,
          description: 'Por favor, deixe a casa até às 11h para permitir a preparação para os próximos hóspedes'
        },
        {
          rule: 'Música alta após 22h',
          allowed: false,
          description: 'Respeite o silêncio dos vizinhos após às 22h'
        }
      ]
    },
    {
      category: 'Visitantes',
      icon: Users,
      items: [
        {
          rule: 'Número máximo de pessoas',
          allowed: true,
          description: 'Respeite o limite máximo de hóspedes indicado na reserva'
        },
        {
          rule: 'Visitantes não registrados',
          allowed: false,
          description: 'Não é permitido receber visitantes não registrados na reserva'
        }
      ]
    },
    {
      category: 'Animais',
      icon: Dog,
      items: [
        {
          rule: 'Animais de estimação',
          allowed: true,
          description: 'Cachorros e outros animais de estimação são bem-vindos! Pedimos apenas que mantenham os animais supervisionados e que recolham suas necessidades.'
        },
        {
          rule: 'Responsabilidade pelos animais',
          allowed: true,
          description: 'O hóspede é responsável por qualquer dano causado pelo animal. Mantenha seu pet seguro e respeite os outros hóspedes.'
        }
      ]
    },
    {
      category: 'Substâncias',
      icon: Cigarette,
      items: [
        {
          rule: 'Fumar dentro da propriedade',
          allowed: false,
          description: 'Proibido fumar dentro da casa'
        },
        {
          rule: 'Bebidas alcoólicas em excesso',
          allowed: false,
          description: 'Pedimos moderação no consumo de álcool'
        }
      ]
    },
    {
      category: 'Cuidados com a Propriedade',
      icon: Heart,
      items: [
        {
          rule: 'Limpeza da cozinha',
          allowed: true,
          description: 'Lave a louça utilizada e mantenha a cozinha organizada'
        },
        {
          rule: 'Economia de água e energia',
          allowed: true,
          description: 'Ajude a preservar o meio ambiente'
        },
        {
          rule: 'Uso de equipamentos e móveis',
          allowed: true,
          description: 'Trate os móveis e equipamentos com cuidado'
        },
        {
          rule: 'Danos à propriedade',
          allowed: false,
          description: 'Qualquer dano causado será cobrado do hóspede'
        }
      ]
    }
  ];

  const politicas = [
    {
      title: 'Cancelamento',
      content: 'Não há política de cancelamento. A reserva não pode ser cancelada. Por favor, confirme sua disponibilidade antes de fazer a reserva.'
    },
    {
      title: 'Segurança',
      content: 'Mantemos todas as áreas da casa seguras e limpas para sua tranquilidade.'
    },
    {
      title: 'Suporte',
      content: 'Estamos disponíveis 24/7 para qualquer necessidade durante sua estadia.'
    },
    {
      title: 'Reposição',
      content: 'Produtos de higiene básicos são fornecidos, mas sugerimos trazer itens pessoais.'
    }
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#0077BE] to-[#2C5282] bg-clip-text text-transparent px-4">
            Regras da Casa
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
            Para garantir uma experiência agradável para todos, pedimos que você siga estas regras simples. 
            Elas estão aqui para criar um ambiente respeitoso e acolhedor para todos os nossos hóspedes.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          {regras.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div 
                key={categoryIndex}
                className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8 border border-[#0077BE]/10 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] rounded-lg flex-shrink-0">
                    <Icon className="text-white" size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {category.category}
                  </h2>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const StatusIcon = item.allowed ? CheckCircle : XCircle;
                    return (
                      <div 
                        key={itemIndex}
                        className={`p-3 sm:p-4 rounded-xl border-2 ${
                          item.allowed 
                            ? 'bg-green-50 border-green-200' 
                            : 'bg-red-50 border-red-200'
                        } transition-all duration-200 hover:shadow-md`}
                      >
                        <div className="flex items-start space-x-3">
                          <StatusIcon 
                            className={`${item.allowed ? 'text-green-600' : 'text-red-600'} flex-shrink-0 mt-0.5`} 
                            size={20} 
                          />
                          <div className="flex-1">
                            <h3 className={`font-semibold mb-1 text-sm sm:text-base ${
                              item.allowed ? 'text-green-800' : 'text-red-800'
                            }`}>
                              {item.rule}
                            </h3>
                            <p className={`text-xs sm:text-sm ${
                              item.allowed ? 'text-green-700' : 'text-red-700'
                            }`}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Policies Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-[#0077BE] to-[#4ECDC4] bg-clip-text text-transparent px-4">
            Políticas e Informações
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {politicas.map((policy, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-[#F4EBD9]/30 p-5 sm:p-6 rounded-xl shadow-md border border-[#0077BE]/10 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                  {policy.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {policy.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto mt-12 sm:mt-16 text-center px-4">
          <div className="bg-gradient-to-br from-[#0077BE] to-[#4ECDC4] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
            <Heart className="inline-block mb-3 sm:mb-4 text-white" size={32} />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Dúvidas?
            </h3>
            <p className="text-white/90 mb-5 sm:mb-6 text-base sm:text-lg">
              Se tiver qualquer dúvida sobre as regras ou precisar de mais informações, 
              não hesite em nos contatar.
            </p>
            <a 
              href="https://wa.me/5548991126107"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-[#0077BE] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

