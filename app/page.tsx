'use client';

import React, { useState } from 'react';
import { 
  Menu, X, Home, Share2, Video, 
  ShoppingBag, MessageSquare, Sun, Moon, 
  ChevronRight, CheckCircle2, ArrowRight, Zap
} from 'lucide-react';

export default function DatalinkGoApp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');
  const [darkMode, setDarkMode] = useState(true);
  
  const [selectedKit, setSelectedKit] = useState<{title: string, price: string, desc: string, features: string[]} | null>(null);

  const kitsData = [
    {
      id: 'emprendedor-pro',
      title: 'Kit Emprendedor Pro',
      price: '$29.99',
      desc: 'Herramientas, plantillas y guías especializadas para potenciar proyectos comerciales y de afiliados.',
      features: ['Plantillas de Landing Pages', 'Estrategias de tráfico orgánico', 'Guía de embudos de ventas', 'Soporte prioritario']
    },
    {
      id: 'automatizacion',
      title: 'Kit de Automatización',
      price: '$49.99',
      desc: 'Sistemas automatizados de respuesta, gestión de clientes y optimización de embudos digitales.',
      features: ['Bots de atención para WhatsApp', 'Flujos de email marketing', 'Automatización de redes sociales', 'Tutoriales en video paso a paso']
    }
  ];

  const getWhatsAppLink = (kitName: string) => {
    const message = encodeURIComponent(`Hola, estoy interesado en adquirir o recibir más información sobre el ${kitName} en DataLinkGo.`);
    return `https://wa.me/?text=${message}`;
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-[#0b0f19] text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* BARRA SUPERIOR */}
      <header className={`sticky top-0 z-40 border-b ${darkMode ? 'bg-[#111827]/90 border-gray-800' : 'bg-white/90 border-gray-200'} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2 rounded-lg transition-colors flex items-center space-x-2 ${darkMode ? 'bg-gray-800 text-orange-400 hover:bg-gray-700' : 'bg-gray-100 text-orange-600 hover:bg-gray-200'}`}
              title="Abrir Menú Lateral"
            >
              {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Menú</span>
            </button>

            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveTab('inicio')}>
              <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-black px-3 py-1.5 rounded-lg text-sm tracking-wider shadow-md">
                DLG
              </div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                DataLinkGo
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button 
              onClick={() => setActiveTab('inicio')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'inicio' ? 'bg-red-600 text-white shadow-lg' : darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => setActiveTab('kits')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'kits' ? 'bg-red-600 text-white shadow-lg' : darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Kits
            </button>
            <button 
              onClick={() => setActiveTab('afiliados')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'afiliados' ? 'bg-red-600 text-white shadow-lg' : darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Afiliados
            </button>
            <button 
              onClick={() => setActiveTab('creadores')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'creadores' ? 'bg-red-600 text-white shadow-lg' : darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Creadores
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setActiveTab('consultas')}
              className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-md hover:opacity-95 transition-all transform hover:scale-105"
            >
              Consultas
            </button>

            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-colors ${darkMode ? 'bg-gray-800 border-gray-700 text-yellow-400' : 'bg-gray-100 border-gray-200 text-gray-700'}`}
              title="Cambiar Modo"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

        </div>
      </header>

      <div className="flex">
        
        {/* MENÚ LATERAL */}
        {sidebarOpen && (
          <aside className={`w-72 fixed inset-y-0 left-0 z-30 pt-20 pb-6 px-4 border-r flex flex-col justify-between shadow-2xl transition-all duration-300 ${darkMode ? 'bg-[#111827] border-gray-800' : 'bg-white border-gray-200'}`}>
            <div className="space-y-6">
              <div className="flex items-center justify-between px-2">
                <h3 className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Guía de DataLinkGo
                </h3>
                <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-white">
                  <X size={18} />
                </button>
              </div>

              <p className={`text-xs px-2 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Todo lo que necesitas saber sobre nuestra infraestructura digital, herramientas de afiliación y modelos de consulta automatizados.
              </p>

              <nav className="space-y-1">
                <button 
                  onClick={() => { setActiveTab('inicio'); setSidebarOpen(false); }}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${activeTab === 'inicio' ? 'bg-red-600 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <Home size={18} />
                  <span>¿Qué es DataLinkGo?</span>
                </button>

                <button 
                  onClick={() => { setActiveTab('kits'); setSidebarOpen(false); }}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${activeTab === 'kits' ? 'bg-red-600 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <ShoppingBag size={18} />
                  <span>Kits Digitales y Recursos</span>
                </button>

                <button 
                  onClick={() => { setActiveTab('afiliados'); setSidebarOpen(false); }}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${activeTab === 'afiliados' ? 'bg-red-600 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <Share2 size={18} />
                  <span>Plataforma de Afiliados</span>
                </button>

                <button 
                  onClick={() => { setActiveTab('creadores'); setSidebarOpen(false); }}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${activeTab === 'creadores' ? 'bg-red-600 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <Video size={18} />
                  <span>Creadores y Publicidad</span>
                </button>

                <button 
                  onClick={() => { setActiveTab('consultas'); setSidebarOpen(false); }}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${activeTab === 'consultas' ? 'bg-red-600 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <MessageSquare size={18} />
                  <span>Tarifarios y Consultas</span>
                </button>
              </nav>
            </div>

            <div className={`p-3 rounded-xl border ${darkMode ? 'bg-gray-900 border-gray-800 text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-600'} text-xs text-center`}>
              DataLinkGo v2.5 — Todos los derechos reservados.
            </div>
          </aside>
        )}

        {/* CONTENIDO PRINCIPAL */}
        <main className={`flex-1 transition-all duration-300 px-4 sm:px-8 py-8 ${sidebarOpen ? 'md:ml-72' : 'ml-0'}`}>
          <div className="max-w-6xl mx-auto space-y-8">

            {activeTab === 'inicio' && (
              <div className="space-y-8">
                <div className={`relative overflow-hidden rounded-3xl p-8 sm:p-12 border bg-gradient-to-br ${darkMode ? 'from-gray-900 via-gray-900 to-red-950/40 border-gray-800' : 'from-white via-orange-50/50 to-red-50 border-gray-200'} shadow-2xl`}>
                  <div className="relative z-10 max-w-2xl space-y-4">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-500/10 text-red-500 border border-red-500/20">
                      <Zap size={14} /> <span>Plataforma Centralizada</span>
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
                      Bienvenido a <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">DataLinkGo</span>
                    </h1>
                    <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Tu plataforma centralizada de consultas, catálogos de kits digitales, herramientas para creadores de contenido, publicidad y alianzas estratégicas.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <button 
                        onClick={() => setActiveTab('consultas')}
                        className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:opacity-95 transition-transform transform hover:scale-105 flex items-center space-x-2"
                      >
                        <span>Acceder a Consultas y Requerimientos</span>
                        <ArrowRight size={18} />
                      </button>
                      <button 
                        onClick={() => setActiveTab('kits')}
                        className={`font-bold px-6 py-3 rounded-2xl border transition-colors ${darkMode ? 'border-gray-700 bg-gray-800/50 hover:bg-gray-800 text-gray-200' : 'border-gray-300 bg-white hover:bg-gray-100 text-gray-800'}`}
                      >
                        Ver Catálogo de Kits
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div 
                    onClick={() => setActiveTab('kits')}
                    className={`p-6 rounded-2xl border cursor-pointer transition-all transform hover:-translate-y-1 ${darkMode ? 'bg-gray-900/80 border-gray-800 hover:border-red-500/50' : 'bg-white border-gray-200 hover:border-red-400'} shadow-lg group`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <ShoppingBag size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Catálogo de Kits Digitales</h3>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Recursos, plantillas y guías especializadas para potenciar proyectos comerciales y de afiliados.
                    </p>
                    <span className="text-sm font-bold text-red-500 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>Ver catálogo</span> <ChevronRight size={16} />
                    </span>
                  </div>

                  <div 
                    onClick={() => setActiveTab('afiliados')}
                    className={`p-6 rounded-2xl border cursor-pointer transition-all transform hover:-translate-y-1 ${darkMode ? 'bg-gray-900/80 border-gray-800 hover:border-red-500/50' : 'bg-white border-gray-200 hover:border-red-400'} shadow-lg group`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Share2 size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Plataforma de Afiliados</h3>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Pasarelas, enlaces estratégicos y herramientas de monetización optimizadas para tu negocio.
                    </p>
                    <span className="text-sm font-bold text-orange-500 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>Explorador</span> <ChevronRight size={16} />
                    </span>
                  </div>

                  <div 
                    onClick={() => setActiveTab('creadores')}
                    className={`p-6 rounded-2xl border cursor-pointer transition-all transform hover:-translate-y-1 ${darkMode ? 'bg-gray-900/80 border-gray-800 hover:border-red-500/50' : 'bg-white border-gray-200 hover:border-red-400'} shadow-lg group`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Video size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Creadores y Publicidad</h3>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Herramientas, estrategias de video, storytelling y gestión publicitaria para canales digitales.
                    </p>
                    <span className="text-sm font-bold text-red-500 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>Ver detalles</span> <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'kits' && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-black tracking-tight">Catálogo de Kits Digitales</h2>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Haz clic en cualquiera de nuestros kits para ver su contenido detallado o solicitarlo directamente por WhatsApp.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {kitsData.map((kit) => (
                    <div 
                      key={kit.id}
                      className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${darkMode ? 'bg-gray-900 border-gray-800 hover:border-red-500' : 'bg-white border-gray-200 hover:border-red-400'} shadow-xl`}
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/10 text-red-500 border border-red-500/20">
                            Kit Profesional
                          </span>
                          <span className="text-xl font-extrabold text-orange-400">{kit.price}</span>
                        </div>
                        <h3 className="text-xl font-black">{kit.title}</h3>
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{kit.desc}</p>
                        
                        <ul className="space-y-2 pt-2">
                          {kit.features.map((feat, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-xs font-medium">
                              <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 flex gap-3">
                        <button 
                          onClick={() => setSelectedKit(kit)}
                          className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-colors ${darkMode ? 'border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-200' : 'border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                        >
                          Ver Detalles
                        </button>
                        <a 
                          href={getWhatsAppLink(kit.title)} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-green-600 hover:bg-green-500 text-white text-center shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center space-x-1.5"
                        >
                          <MessageSquare size={14} />
                          <span>Pedir por WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'afiliados' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-black tracking-tight">Plataforma de Afiliados</h2>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Gestiona tus enlaces estratégicos, pasarelas y programas de referidos con alta tasa de conversión.
                </p>
                <div className={`p-8 rounded-3xl border ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-lg space-y-4`}>
                  <h3 className="text-xl font-bold">Módulo de Enlaces Activos</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Aquí podrás registrar tus códigos de afiliado y conectar tus pasarelas de pago de manera automatizada.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'creadores' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-black tracking-tight">Creadores y Publicidad</h2>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Herramientas avanzadas para la gestión de contenido en YouTube, producción de videos y monetización digital.
                </p>
                <div className={`p-8 rounded-3xl border ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-lg space-y-4`}>
                  <h3 className="text-xl font-bold">Gestión de Canales y Campañas</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Optimiza tus guiones, estrategias de storytelling y despliegue publicitario.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'consultas' && (
              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-black tracking-tight">Módulo de Consultas y Tarifarios</h2>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Envía tus requerimientos a la medida o solicita cotizaciones específicas.
                  </p>
                </div>

                <div className={`p-8 rounded-3xl border ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-xl`}>
                <form action="https://formspree.io/f/tu-codigo" method="POST" className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1">Nombre Completo</label>
                      <input type="text" name="name" required className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${darkMode ? 'bg-gray-800 border-gray-700 focus:border-red-500' : 'bg-gray-50 border-gray-200 focus:border-red-500'}`} placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1">Correo Electrónico</label>
                      <input type="email" name="email" required className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${darkMode ? 'bg-gray-800 border-gray-700 focus:border-red-500' : 'bg-gray-50 border-gray-200 focus:border-red-500'}`} placeholder="correo@ejemplo.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1">Detalle de la Consulta o Requerimiento</label>
                      <textarea name="message" rows={4} required className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${darkMode ? 'bg-gray-800 border-gray-700 focus:border-red-500' : 'bg-gray-50 border-gray-200 focus:border-red-500'}`} placeholder="Escribe tus requerimientos específicos..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold py-3.5 rounded-xl shadow-lg hover:opacity-95 transition-all">
                      Enviar Requerimiento
                    </button>
                  </form>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>

      {/* MODAL DE DETALLES DEL KIT */}
      {selectedKit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className={`max-w-md w-full p-6 rounded-3xl border ${darkMode ? 'bg-gray-900 border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'} shadow-2xl relative space-y-4`}>
            <button onClick={() => setSelectedKit(null)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white">
              <X size={20} />
            </button>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/10 text-red-500 border border-red-500/20">
              Detalle del Producto
            </span>
            <h3 className="text-2xl font-black">{selectedKit.title}</h3>
            <p className="text-xl font-extrabold text-orange-400">{selectedKit.price}</p>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{selectedKit.desc}</p>
            
            <div className="space-y-2 pt-2 border-t border-gray-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Incluye:</h4>
              <ul className="space-y-2">
                {selectedKit.features.map((f, i) => (
                  <li key={i} className="flex items-center space-x-2 text-xs">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex gap-3">
              <a 
                href={getWhatsAppLink(selectedKit.title)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl text-sm font-bold bg-green-600 hover:bg-green-500 text-white text-center shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageSquare size={18} />
                <span>Comprar / Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a 
        href="https://wa.me/?text=Hola,%20vengo%20desde%20DataLinkGo%20y%20deseo%20más%20información." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-2xl transition-transform transform hover:scale-110 flex items-center justify-center"
        title="Chatea con nosotros por WhatsApp"
      >
        <MessageSquare size={26} />
      </a>

    </div>
  );
}
