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

{/* DIRECTORIO DE ENLACES Y MÓDULOS */}
<section className="my-12 p-8 bg-gray-900 rounded-2xl border border-gray-800">
  <h2 className="text-2xl font-bold text-white mb-6">Directorio de Enlaces y Módulos</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
      <h3 className="text-lg font-bold text-white mb-2">Canales y Contenido</h3>
      <p className="text-gray-400 text-sm mb-4">Acceso directo a producción de videos, historias y material multimedia.</p>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2 rounded-lg text-sm transition">Ir a Canales</a>
    </div>
    <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
      <h3 className="text-lg font-bold text-white mb-2">Gestión de Dominios</h3>
      <p className="text-gray-400 text-sm mb-4">Panel de control de plataformas, enlaces web y configuraciones.</p>
      <a href="https://www.namecheap.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold px-4 py-2 rounded-lg text-sm transition">Ver Dominios</a>
    </div>
    <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
      <h3 className="text-lg font-bold text-white mb-2">Plataforma Digital</h3>
      <p className="text-gray-400 text-sm mb-4">Monitoreo de despliegues, sistemas activos y automatización.</p>
      <a href="https://datalinkgo.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2 rounded-lg text-sm transition">Abrir Plataforma</a>
    </div>
  </div>
 </section>

<aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-800 transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
  <div className="h-full flex flex-col">
    <div className="h-16 flex items-center justify-between px-6 border-b border-gray-800">
      <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">DatalinkGo</span>
      <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
        <X size={24} />
      </button>
    </div>
    
    <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
      <button onClick={() => { setActiveTab('afiliados'); setSidebarOpen(false); }} className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-gray-300 hover:bg-gray-800/60 hover:text-white">
        <Share2 size={18} />
        <span>Plataforma de Afiliados</span>
      </button>
      <button onClick={() => { setActiveTab('creadores'); setSidebarOpen(false); }} className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-gray-300 hover:bg-gray-800/60 hover:text-white">
        <Video size={18} />
        <span>Creadores y Publicidad</span>
      </button>
    </nav>
  </div>
</aside>
      
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
            
{/* SECCIÓN FUNCIONAL: AFILIADOS Y MONETIZACIÓN GLOBAL */}
{activeTab === 'afiliados' && (
  <div className="space-y-8 animate-fadeIn">
    <div className="text-center space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">Plataforma de Afiliados y Monetización</h2>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
        Conectamos con las mejores pasarelas, herramientas de infraestructura web y programas globales sin restricciones geográficas.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Opción 1: Namecheap Partner */}
      <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white border-gray-200'} space-y-4`}>
        <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-xl">
          🌐
        </div>
        <h3 className="text-xl font-bold">Infraestructura y Dominios (Namecheap)</h3>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Recomienda servicios de registro de dominios y seguridad web de nivel global con alta tasa de conversión y pagos seguros.
        </p>
        <div className="pt-2">
          <a 
            href="https://www.namecheap.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-bold text-orange-500 hover:text-orange-400"
          >
            <span>Ir al Programa Global</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Opción 2: Consultoría y Enlace Directo WhatsApp */}
      <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white border-gray-200'} space-y-4`}>
        <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center font-bold text-xl">
          💬
        </div>
        <h3 className="text-xl font-bold">Asesoría y Alianzas Directas</h3>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Establece comunicación directa con clientes y socios comerciales a través de canales de mensajería instantánea optimizados.
        </p>
        <div className="pt-2">
          <a 
            href="https://wa.me/58XXXXXXXXXX?text=Hola,%20quiero%20informacion%20sobre%20alianzas%20y%20afiliaciones%20en%20DataLinkGo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-bold text-green-500 hover:text-green-400"
          >
            <span>Contactar por WhatsApp</span>
            <span>→</span>
          </a>
        </div>
      </div>

    </div>
  </div>
)}

       {/* SECCIÓN FUNCIONAL: CREADORES Y PUBLICIDAD */}
{activeTab === 'creadores' && (
  <div className="space-y-8 animate-fadeIn pt-6">
    <div className="text-center space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">Creadores y Publicidad Digital</h2>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
        Recursos para la producción de contenido, estrategias de video, storytelling y gestión de audiencias.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Opción 1: Estrategias de Video */}
      <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white border-gray-200'} space-y-4`}>
        <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-xl">
          🎬
        </div>
        <h3 className="text-xl font-bold">Estrategias de Storytelling y Video</h3>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Optimización para plataformas de contenido, retención de audiencias y producción enfocada en impacto digital.
        </p>
        <div className="pt-2">
          <a 
            href="https://wa.me/58XXXXXXXXXX?text=Hola,%20quiero%20asesoria%20para%20creadores%20de%20contenido%20en%20DataLinkGo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-bold text-red-500 hover:text-red-400"
          >
            <span>Consultar Estrategia</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Opción 2: Gestión Publicitaria */}
      <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white border-gray-200'} space-y-4`}>
        <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold text-xl">
          📈
        </div>
        <h3 className="text-xl font-bold">Gestión Publicitaria</h3>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Canales de distribución, optimización de tráfico y automatizaciones orientadas a proyectos de creadores.
        </p>
        <div className="pt-2">
          <a 
            href="https://wa.me/58XXXXXXXXXX?text=Hola,%20quiero%20saber%20sobre%20gestion%20publicitaria%20y%20canales" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-bold text-purple-500 hover:text-purple-400"
          >
            <span>Conectar Canal</span>
            <span>→</span>
          </a>
        </div>
      </div>

    </div>
  </div>
)}     
            
          {/* SECCIÓN NUEVA: KITS Y AFILIADOS DIRECTOS */}
<div className="mt-8">
  <div className="text-center mb-6">
    <h3 className="text-2xl font-bold tracking-tight">Kits y Herramientas Estratégicas</h3>
    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
      Recursos optimizados para impulsar tus proyectos y negocios digitales sin restricciones.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Tarjeta 1: Kit Emprendedor Pro */}
    <div className={`p-6 rounded-2xl border transition-all transform hover:-translate-y-1 ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white border-gray-200'} group`}>
      <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
        <span className="text-2xl">⚡</span>
      </div>
      <h4 className="font-bold text-lg mb-2">Kit Emprendedor Pro</h4>
      <p className={`text-xs md:text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        Herramientas, plantillas y guías especializadas para potenciar proyectos comerciales y de afiliación.
      </p>
      <a 
        href="https://wa.me/58XXXXXXXXXX?text=Hola,%20estoy%20interesado%20en%20el%20Kit%20Emprendedor%20Pro"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-bold text-red-500 group-hover:text-red-400 space-x-1"
      >
        <span>Adquirir Kit</span>
        <span>→</span>
      </a>
    </div>

    {/* Tarjeta 2: Kit de Automatización */}
    <div className={`p-6 rounded-2xl border transition-all transform hover:-translate-y-1 ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white border-gray-200'} group`}>
      <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
        <span className="text-2xl">🚀</span>
      </div>
      <h4 className="font-bold text-lg mb-2">Kit de Automatización</h4>
      <p className={`text-xs md:text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        Sistemas automáticos de respuesta, gestión de clientes y optimización de embudos digitales.
      </p>
      <a 
        href="https://wa.me/58XXXXXXXXXX?text=Hola,%20estoy%20interesado%20en%20el%20Kit%20de%20Automatizacion"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-bold text-red-500 group-hover:text-red-400 space-x-1"
      >
        <span>Explorar Sistema</span>
        <span>→</span>
      </a>
    </div>

    {/* Tarjeta 3: Dominios y Hosting (Namecheap) */}
    <div className={`p-6 rounded-2xl border transition-all transform hover:-translate-y-1 ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white border-gray-200'} group`}>
      <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
        <span className="text-2xl">🌐</span>
      </div>
      <h4 className="font-bold text-lg mb-2">Registro de Dominios</h4>
      <p className={`text-xs md:text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        Asegura tu presencia en internet con dominios propios de forma rápida, segura y confiable.
      </p>
      <a 
        href="https://www.namecheap.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-bold text-red-500 group-hover:text-red-400 space-x-1"
      >
        <span>Registrar Dominio</span>
        <span>→</span>
      </a>
    </div>

  </div>
</div>
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
                <form action="https://formspree.io/f/mljeypjv" method="POST" className="space-y-4">
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
      </div>
    </main>
  </div>
</div>

{selectedKit && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
    <div className="max-w-md w-full p-6 bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl relative">
      <button onClick={() => setSelectedKit(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
        <X size={20} />
      </button>
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
        Detalle del Producto
      </span>
      <h3 className="text-2xl font-bold text-white mt-3 mb-1">{selectedKit.title}</h3>
      <p className="text-gray-400 text-sm mb-6">{selectedKit.description}</p>
    </div>
  </div>
)}

  {selectedKit && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="max-w-md w-full p-6 bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl relative"> 
  </div>
</div>

{selectedKit && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
    <div className="max-w-md w-full p-6 bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl relative">
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
    <div className="max-w-md w-full p-6 bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl relative">
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
{/* SECCIÓN DE AFILIADOS Y PRODUCTOS RECOMENDADOS */}
<section className="py-12 px-6 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
        Recursos y Herramientas Recomendadas
      </h2>
      <p className="text-sm md:text-base opacity-80 max-w-2xl mx-auto">
        Herramientas digitales, plataformas y kits seleccionados estratégicamente para impulsar tus proyectos y potenciar tus resultados.
      </p>
    </div>

    {/* Cuadrícula de productos de afiliado */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Tarjeta 1 */}
      <div className="p-6 rounded-2xl border bg-gray-950 border-gray-800 transition-all duration-300 hover:shadow-xl">
        <div className="text-3xl mb-4">⚡</div>
        <h3 className="text-lg font-bold mb-2">Kit de Herramientas Digitales</h3>
        <p className="text-xs md:text-sm opacity-80 mb-6">
          Accede a recursos listos para usar, optimizados para creadores y emprendedores digitales.
        </p>
        <a 
          href="TU_ENLACE_DE_AFILIADO_AQUI" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-center w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md hover:opacity-95 transition-opacity"
        >
          Ver Producto
        </a>
      </div>

      {/* Tarjeta 2 */}
      <div className="p-6 rounded-2xl border bg-gray-950 border-gray-800 transition-all duration-300 hover:shadow-xl">
        <div className="text-3xl mb-4">🚀</div>
        <h3 className="text-lg font-bold mb-2">Plataforma de Automatización</h3>
        <p className="text-xs md:text-sm opacity-80 mb-6">
          La tecnología ideal para escalar procesos y maximizar la captación de clientes en automático.
        </p>
        <a 
          href="TU_ENLACE_DE_AFILIADO_AQUI" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-center w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md hover:opacity-95 transition-opacity"
        >
          Explorar Herramienta
        </a>
      </div>

      {/* Tarjeta 3 */}
      <div className="p-6 rounded-2xl border bg-gray-950 border-gray-800 transition-all duration-300 hover:shadow-xl">
        <div className="text-3xl mb-4">💡</div>
        <h3 className="text-lg font-bold mb-2">Recursos de Formación Pro</h3>
        <p className="text-xs md:text-sm opacity-80 mb-6">
          Capacitaciones especializadas para dominar estrategias de monetización y marketing digital.
        </p>
        <a 
          href="TU_ENLACE_DE_AFILIADO_AQUI" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-center w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md hover:opacity-95 transition-opacity"
        >
          Conocer Más
        </a>
      </div>

    </div>
  </div>
</section>

{/* SECCIÓN DE KITS DIGITALES Y RECURSOS PRO */}
<section className="py-12 px-6 bg-gray-950 text-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
        Kits Digitales y Herramientas Estratégicas
      </h2>
      <p className="text-sm md:text-base opacity-80 max-w-2xl mx-auto">
        Soluciones profesionales, recursos listos para usar y plataformas recomendadas para potenciar tus proyectos digitales.
      </p>
    </div>

    {/* Cuadrícula de opciones */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Kit 1: Kit Emprendedor Pro */}
      <div className="p-6 rounded-2xl border bg-gray-900 border-gray-800 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
        <div>
          <div className="text-3xl mb-4">⚡</div>
          <h3 className="text-lg font-bold mb-2">Kit Emprendedor Pro</h3>
          <p className="text-xs md:text-sm opacity-80 mb-6">
            Herramientas, plantillas y guías especializadas para potenciar proyectos comerciales y de afiliación.
          </p>
        </div>
        <a 
          href="https://wa.me/2tu_numero_aqui?text=Hola,%20estoy%20interesado%20en%20el%20Kit%20Emprendedor%20Pro" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-center w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md hover:opacity-95 transition-opacity"
        >
          Adquirir Kit
        </a>
      </div>

      {/* Kit 2: Kit de Automatización */}
      <div className="p-6 rounded-2xl border bg-gray-900 border-gray-800 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
        <div>
          <div className="text-3xl mb-4">🚀</div>
          <h3 className="text-lg font-bold mb-2">Kit de Automatización</h3>
          <p className="text-xs md:text-sm opacity-80 mb-6">
            Sistemas automáticos de respuesta, gestión de clientes y optimización de embudos digitales.
          </p>
        </div>
        <a 
          href="https://wa.me/2tu_numero_aqui?text=Hola,%20estoy%20interesado%20en%20el%20Kit%20de%20Automatizacion" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-center w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md hover:opacity-95 transition-opacity"
        >
          Explorar Sistema
        </a>
      </div>

      {/* Herramienta / Dominio recomendado (Afiliado limpio) */}
      <div className="p-6 rounded-2xl border bg-gray-900 border-gray-800 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
        <div>
          <div className="text-3xl mb-4">🌐</div>
          <h3 className="text-lg font-bold mb-2">Registro de Dominios y Hosting</h3>
          <p className="text-xs md:text-sm opacity-80 mb-6">
            Asegura tu presencia en internet con dominios propios de forma rápida, segura y confiable.
          </p>
        </div>
        <a 
          href="https://www.namecheap.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-center w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md hover:opacity-95 transition-opacity"
        >
          Registrar Dominio
        </a>
      </div>

    </div>
  </div>
</section>

{/* MÓDULO NUEVO: VALIDADOR DE ENLACES SEGURO */}
<div className="my-8 p-6 sm:p-8 rounded-2xl border bg-gray-900/90 border-gray-800 space-y-6 shadow-xl text-gray-100">
  <div className="space-y-2">
    <h3 className="text-xl font-bold flex items-center space-x-2">
      <span>🔗 Validador de Enlaces Activos</span>
    </h3>
    <p className="text-xs sm:text-sm text-gray-400">
      Introduce cualquier enlace de afiliado o pasarela para comprobar su redirección de forma inmediata.
    </p>
  </div>

  <div className="space-y-4">
    <div>
      <input 
        type="text" 
        placeholder="https://tu-enlace-de-afiliado.com" 
        className="w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-950 border-gray-800 text-gray-100"
        id="global-custom-affiliate-input"
      />
    </div>

    <div>
      <button 
        type="button"
        onClick={() => {
          const input = document.getElementById('global-custom-affiliate-input') as HTMLInputElement;
          if (input && input.value) {
            window.open(input.value, '_blank');
          } else {
            alert('Por favor, introduce un enlace válido.');
          }
        }}
        className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-red-600/20 text-sm flex items-center space-x-2 cursor-pointer"
      >
        <span>Probar Enlace en Vivo</span>
        <span>→</span>
      </button>
    </div>
  </div>
</div>

{/* MÓDULO ADICIONAL: VALIDADOR DE ENLACES ACTIVO (AGREGADO LIMPIO) */}
<div className="my-8 p-6 sm:p-8 rounded-2xl border bg-gray-900/90 border-gray-800 space-y-6 shadow-xl text-gray-100">
  <div className="space-y-2">
    <h3 className="text-xl font-bold flex items-center space-x-2">
      <span>🔗 Validador y Gestor de Enlaces Activos</span>
    </h3>
    <p className="text-xs sm:text-sm text-gray-400">
      Prueba tu enlace de afiliado, pasarela de pago o URL de destino antes de lanzarlo al tráfico masivo.
    </p>
  </div>

  <div className="space-y-4">
    <div>
      <input 
        type="url" 
        placeholder="https://tu-enlace-de-afiliado.com" 
        id="active-affiliate-url-input"
        className="w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-950 border-gray-800 text-gray-100"
      />
    </div>

    <div className="flex flex-wrap gap-4">
      <button 
        type="button"
        onClick={() => {
          const inputElement = document.getElementById('active-affiliate-url-input') as HTMLInputElement;
          if (inputElement && inputElement.value.trim() !== '') {
            let targetUrl = inputElement.value.trim();
            if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
              targetUrl = 'https://' + targetUrl;
            }
            window.open(targetUrl, '_blank');
          } else {
            alert('Por favor, introduce una URL válida (ejemplo: https://tu-sitio.com)');
          }
        }}
        className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-red-600/20 text-sm flex items-center space-x-2 cursor-pointer"
      >
        <span>Probar Enlace en Vivo</span>
        <span>→</span>
      </button>

      <button 
        type="button"
        onClick={() => {
          const inputElement = document.getElementById('active-affiliate-url-input') as HTMLInputElement;
          if (inputElement) {
            inputElement.value = '';
          }
          alert('Campo limpiado con éxito. Listo para un nuevo enlace.');
        }}
        className="border border-gray-700 hover:bg-gray-800 text-gray-300 font-bold px-4 py-3 rounded-xl transition-all text-sm cursor-pointer"
      >
        Limpiar
      </button>
    </div>
  </div>
</div>

{/* MÓDULO ADICIONAL: REGISTRO Y ACCESO DIRECTO A KITS (AGREGADO LIMPIO) */}
<div className="my-8 p-6 sm:p-8 rounded-2xl border bg-gray-900/90 border-gray-800 space-y-6 shadow-xl text-gray-100">
  <div className="space-y-2">
    <h3 className="text-xl font-bold flex items-center space-x-2">
      <span>🚀 Registro de Usuario y Acceso a Kits</span>
    </h3>
    <p className="text-xs sm:text-sm text-gray-400">
      Crea tu cuenta de acceso rápido o selecciona el kit de trabajo operativo para desplegar tu infraestructura digital.
    </p>
  </div>

  <div className="space-y-4">
    {/* CAMPO DE REGISTRO DE CORREO */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-red-500">
          Tu Correo Electrónico
        </label>
        <input 
          type="email" 
          placeholder="tu-correo@dominio.com" 
          id="user-registration-email"
          className="w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-950 border-gray-800 text-gray-100"
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-red-500">
          Selecciona tu Kit de Interés
        </label>
        <select 
          id="user-selected-kit"
          className="w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-950 border-gray-800 text-gray-100"
        >
          <option value="emprendedor">Kit de Emprendedor</option>
          <option value="automatizacion">Kit de Automatización</option>
          <option value="storytelling">Estrategia de Storytelling</option>
          <option value="afiliados">Plataforma de Afiliados</option>
        </select>
      </div>
    </div>

    {/* BOTONES DE ACCIÓN REAL */}
    <div className="flex flex-wrap gap-4 pt-2">
      <button 
        type="button"
        onClick={() => {
          const emailInput = document.getElementById('user-registration-email') as HTMLInputElement;
          const kitSelect = document.getElementById('user-selected-kit') as HTMLSelectElement;
          
          if (emailInput && emailInput.value.trim() !== '' && emailInput.value.includes('@')) {
            alert(`¡Registro exitoso para ${emailInput.value.trim()}! Kit seleccionado: ${kitSelect.value.toUpperCase()}. Bienvenido a DataLinkGo.`);
            emailInput.value = '';
          } else {
            alert('Por favor, introduce un correo electrónico válido para completar tu registro.');
          }
        }}
        className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-red-600/20 text-sm flex items-center space-x-2 cursor-pointer"
      >
        <span>Registrarse en la Plataforma</span>
        <span>→</span>
      </button>
      
<section className="my-12 p-8 bg-gray-900 rounded-2xl border border-gray-800 text-center">
  <h3 className="text-2xl font-bold text-white mb-4">Registro y Selección de Kits</h3>
  <p className="text-gray-400 mb-6">Introduce tu correo y selecciona tu acceso directo:</p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <input 
      id="user-registration-email" 
      type="email" 
      placeholder="Tu correo electrónico" 
      className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white w-full sm:w-72" 
    />
    <select 
      id="user-selected-kit" 
      className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white"
    >
      <option value="emprendedor">Kit Emprendedor Pro</option>
      <option value="automatizacion">Kit de Automatización</option>
      <option value="dominios">Registro de Dominios</option>
    </select>
    <button
      type="button"
      onClick={() => {
        const emailInput = document.getElementById('user-registration-email') as HTMLInputElement;
        const kitSelect = document.getElementById('user-selected-kit') as HTMLSelectElement;
        if (emailInput && emailInput.value.trim() !== '' && emailInput.value.includes('@')) {
          alert(`¡Registro exitoso para ${emailInput.value.trim()}! Kit seleccionado: ${kitSelect.value.toUpperCase()}`);
          emailInput.value = '';
        } else {
          alert('Por favor, introduce un correo electrónico válido para completar tu registro.');
        }
      }}
      className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition"
    >
      Registrarse en la Plataforma
    </button>
  </div>
</section>
  </div>
</div>
</div>  

  
