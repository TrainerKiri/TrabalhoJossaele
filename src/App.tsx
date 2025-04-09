import React, { useState } from 'react';
import { Search, Briefcase, Clock, Star, Shield, Users, ChevronRight, CheckCircle, Filter, MapPin, DollarSign, Award, MessageSquare } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const professionals = [
    {
      id: 1,
      name: 'Frias Gamer',
      profession: 'Medico Ginecologista',
      rating: 4.9,
      reviews: 127,
      price: 'R$ 120/hora',
      image: 'assets/1.png',
      verified: true,
      experience: '8 anos',
      completedJobs: 342
    },
    {
      id: 2,
      name: 'Lebronha James',
      profession: 'Influencer Aquiliano',
      rating: 4.8,
      reviews: 98,
      price: 'R$ 90/hora',
      image: 'assets/2.png',
      verified: true,
      experience: '5 anos',
      completedJobs: 187
    },
    {
      id: 3,
      name: 'Mestre Isac',
      profession: 'Garoto de Programa',
      rating: 4.9,
      reviews: 156,
      price: 'R$ 150/hora',
      image: 'assets/3.jpg',
      verified: true,
      experience: '6 anos',
      completedJobs: 234
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8" />
            <h1 className="text-2xl font-bold">SkillConnect</h1>
          </div>
          <div className="space-x-6">
            <button className="hover:text-indigo-200">Para Empresas</button>
            <button className="hover:text-indigo-200">Para Profissionais</button>
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50">
              Cadastre-se
            </button>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Conectando você aos melhores profissionais verificados
              </h2>
              <p className="text-xl mb-8">
                Encontre profissionais qualificados e confiáveis para qualquer serviço. 
                Sistema de verificação rigoroso e avaliações autenticadas.
              </p>
              <div className="bg-white rounded-lg p-2 mb-8">
                <div className="flex items-center">
                  <div className="flex-1 flex items-center bg-gray-100 rounded-lg p-2">
                    <Search className="w-5 h-5 text-gray-500 mr-2" />
                    <input
                      type="text"
                      placeholder="Qual serviço você precisa?"
                      className="bg-transparent w-full focus:outline-none text-gray-800"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <button className="ml-2 bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700">
                    Buscar
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-500 bg-opacity-50 px-3 py-1 rounded-full text-sm">Eletricista</span>
                <span className="bg-indigo-500 bg-opacity-50 px-3 py-1 rounded-full text-sm">Designer</span>
                <span className="bg-indigo-500 bg-opacity-50 px-3 py-1 rounded-full text-sm">Desenvolvedor</span>
                <span className="bg-indigo-500 bg-opacity-50 px-3 py-1 rounded-full text-sm">Encanador</span>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Profissionais trabalhando"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Professional Search Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16">Profissionais Verificados</h3>
          
          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-4">
            <button 
              className={`px-4 py-2 rounded-lg flex items-center ${selectedCategory === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
              onClick={() => setSelectedCategory('all')}
            >
              <Filter className="w-4 h-4 mr-2" />
              Todos
            </button>
            <button 
              className={`px-4 py-2 rounded-lg flex items-center ${selectedCategory === 'verified' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
              onClick={() => setSelectedCategory('verified')}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Verificados
            </button>
            <button 
              className={`px-4 py-2 rounded-lg flex items-center ${selectedCategory === 'nearby' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
              onClick={() => setSelectedCategory('nearby')}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Próximos
            </button>
          </div>

          {/* Professional Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {professionals.map(professional => (
              <div key={professional.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="relative">
                  <img 
                    src={professional.image} 
                    alt={professional.name}
                    className="w-full h-48 object-cover"
                  />
                  {professional.verified && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Verificado
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">{professional.name}</h4>
                      <p className="text-gray-600">{professional.profession}</p>
                    </div>
                    <div className="flex items-center bg-indigo-50 px-2 py-1 rounded">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-semibold">{professional.rating}</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Award className="w-4 h-4 mr-2" />
                      <span>{professional.experience} de experiência</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>{professional.reviews} avaliações</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span>{professional.completedJobs} trabalhos concluídos</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span>{professional.price}</span>
                    </div>
                  </div>
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Contratar Profissional
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16">Como funciona</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Busque Profissionais</h4>
              <p className="text-gray-600">
                Encontre profissionais verificados e qualificados para seu projeto ou serviço.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Verifique Credenciais</h4>
              <p className="text-gray-600">
                Avalie experiência, portfólio e feedback de clientes anteriores.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Contrate com Segurança</h4>
              <p className="text-gray-600">
                Pagamento seguro e garantia de satisfação em todos os serviços.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16">Por que escolher o SkillConnect?</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Verificação Rigorosa</h4>
                <p className="text-gray-600">
                  Todos os profissionais passam por um processo de verificação detalhado.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Avaliações Autênticas</h4>
                <p className="text-gray-600">
                  Sistema de feedback verificado apenas de clientes reais.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <DollarSign className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Pagamento Seguro</h4>
                <p className="text-gray-600">
                  Intermediação de pagamentos e garantia de satisfação.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Profissionais Premium</h4>
                <p className="text-gray-600">
                  Acesso aos melhores profissionais com experiência comprovada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">Comece a usar hoje mesmo</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já encontraram os melhores profissionais através do SkillConnect.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-medium hover:bg-indigo-50 text-lg">
              Contratar Profissional
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-700 text-lg">
              Seja um Profissional
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6" />
                <h4 className="text-lg font-semibold">SkillConnect</h4>
              </div>
              <p className="text-gray-400">
                A plataforma mais segura para encontrar profissionais qualificados.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tecnologia</li>
                <li>Design</li>
                <li>Construção</li>
                <li>Consultoria</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre nós</li>
                <li>Como funciona</li>
                <li>Blog</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Termos de Uso</li>
                <li>Privacidade</li>
                <li>Segurança</li>
                <li>Verificação</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SkillConnect. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;