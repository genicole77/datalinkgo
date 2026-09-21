'use client';

import React, { useState } from 'react';

export default function GlobalECommercePlatform() {
  // Estados globales de la plataforma
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('es');
  const [currency, setCurrency] = useState('USD');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCountry, setUserCountry] = useState('Venezuela');
  const [userRegion, setUserRegion] = useState('Caracas');
  const [selectedKit, setSelectedKit] = useState('emprendedor');
  const [customAffiliateLink, setCustomAffiliateLink] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('binance');
  const [activeTab, setActiveTab] = useState('dashboard');

const [productFilesList, setProductFilesList] = useState<File[]>([]);

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const chosenFiles = Array.from(e.target.files);
      setProductFilesList(prevList => [...prevList, ...chosenFiles].slice(0, 5));
    }
  };
  
  // Estados para formularios de Servicios y Publicidad
  const [serviceName, setServiceName] = useState('');
  const [serviceEmail, setServiceEmail] = useState('');
  const [serviceDetails, setServiceDetails] = useState('');
  const [serviceCategory, setServiceCategory] = useState('general');

  const [adBrand, setAdBrand] = useState('');
  const [adBudget, setAdBudget] = useState('');
  const [adContact, setAdContact] = useState('');
  const [adType, setAdType] = useState('banner_video');

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail.trim() || !userName.trim()) {
      alert(language === 'es' ? 'Por favor completa al menos tu nombre y correo.' : 'Please fill in at least your name and email.');
      return;
    }
    alert(`¡Registro y activación exitosa, ${userName}! Kit seleccionado: ${selectedKit} (${userCountry} - ${userRegion}). Pago configurado via ${selectedPaymentMethod.toUpperCase()}.`);
    setUserEmail('');
    setUserName('');
    setUserPhone('');
  };

  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceEmail.trim() || !serviceDetails.trim()) {
      alert('Por favor completa tu correo y los detalles del servicio.');
      return;
    }

    try {
      const response = await fetch('/api/send-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: serviceName || 'Cliente General',
          email: serviceEmail,
          category: serviceCategory,
          details: serviceDetails,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('¡Solicitud enviada con éxito! Se ha enviado un correo de confirmación al cliente y una notificación al equipo de la plataforma.');
        setServiceName('');
        setServiceEmail('');
        setServiceDetails('');
      } else {
        alert('Error al procesar la solicitud: ' + (data.error || 'Inténtalo de nuevo.'));
      }
    } catch (error) {
      console.error('Error de red:', error);
      alert('Error de conexión con el servidor de correo.');
    }
  };

  const handleAdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adBrand.trim() || !adContact.trim()) {
      alert('Por favor indica tu marca y medio de contacto para la pauta publicitaria.');
      return;
    }
    alert('¡Propuesta de pauta publicitaria recibida! El departamento comercial procesará tu campaña.');
    setAdBrand('');
    setAdBudget('');
    setAdContact('');
  };

  return (
    <div className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen transition-colors duration-300 font-sans`}>
      {/* HEADER / BARRA DE NAVEGACIÓN GLOBAL AVANZADA */}
      <header className={`border-b ${darkMode ? 'border-gray-800 bg-gray-900/90' : 'border-gray-200 bg-white/90'} sticky top-0 z-50 backdrop-blur-md px-6 py-4 flex flex-wrap justify-between items-center gap-4 shadow-sm`}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 via-orange-500 to-yellow-400 flex items-center justify-center font-extrabold text-white shadow-lg shadow-orange-500/20 text-xl">
            DL
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">DataLinkGo <span className="text-orange-500">Global Hub</span></h1>
            <p className="text-xs text-gray-400">E-commerce, Afiliados, Monetización & Automatización</p>
          </div>
        </div>

        {/* Pestañas de Navegación Interna */}
        <nav className="hidden md:flex items-center space-x-1 bg-gray-900/40 p-1 rounded-xl border border-gray-800">
          <button 
            onClick={() => setActiveTab('dashboard')} 
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${activeTab === 'dashboard' ? 'bg-orange-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}
          >
            Panel Principal
          </button>
          <button 
            onClick={() => setActiveTab('catalog')} 
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${activeTab === 'catalog' ? 'bg-orange-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}
          >
            Catálogo Global
          </button>
          <button 
            onClick={() => setActiveTab('tariffs')} 
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${activeTab === 'tariffs' ? 'bg-orange-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}
          >
            Tarifas y Precios
          </button>
        </nav>

        {/* Controles de Moneda, Idioma y Tema */}
        <div className="flex items-center space-x-2.5">
          <select 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value)}
            className={`px-2.5 py-1.5 rounded-lg text-xs border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-800'} focus:outline-none`}
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="USDT">USDT</option>
            <option value="VES">VES (Bs)</option>
          </select>

          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            className={`px-2.5 py-1.5 rounded-lg text-xs border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-800'} focus:outline-none`}
          >
            <option value="es">🇪🇸 ES</option>
            <option value="en">🇺🇸 EN</option>
            <option value="pt">🇧🇷 PT</option>
          </select>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${darkMode ? 'bg-gray-800 border-gray-700 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 border-gray-300 text-gray-800 hover:bg-gray-300'} transition`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        
        {/* SECCIÓN HERO / BIENVENIDA */}
        <section className="text-center space-y-4 py-8">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-orange-500/10 text-orange-500 border border-orange-500/20 shadow-sm">
            Ecosistema Comercial Conectado • Amazon, AliExpress, Hotmart & Pasarelas Globales
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Plataforma Integral de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400">Afiliados y Servicios</span>
          </h2>
          <p className={`max-w-3xl mx-auto text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Gestiona tus enlaces de afiliación, impulsa campañas de pauta publicitaria en streams multimedia, adquiere dominios personalizados y opera con liquidaciones instantáneas seguras.
          </p>
        </section>

        {/* GRID PRINCIPAL: CONTENIDO DE VALOR Y FORMULARIOS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLUMNA 1 & 2: REPRODUCTOR DE VIDEO + FORMULARIOS DE SERVICIOS Y ANUNCIOS */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tarjeta de Reproductor Multimedia / Transmisión Interactiva */}
            <div className={`border rounded-2xl p-5 shadow-xl ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white border-gray-200'}`}>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-base flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></span>
                  Canal de Medios, Historias y Entretenimiento
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-red-600/20 text-red-500 px-2.5 py-1 rounded-md border border-red-500/20">
                  Monetización Activa
                </span>
              </div>
              
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden flex items-center justify-center border border-gray-800 shadow-inner group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <div className="text-center space-y-3 p-4 z-20">
                  <div className="w-16 h-16 mx-auto rounded-full bg-red-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-red-600/40 cursor-pointer hover:scale-105 transition">
                    ▶
                  </div>
                  <p className="text-sm text-gray-200 font-medium">Reproduciendo Historia Multimedia / Streaming Educativo</p>
                  <p className="text-xs text-orange-400 bg-black/50 py-1 px-3 rounded-full inline-block border border-orange-500/30">
                    💡 Anuncio Patrocinado Dinámico Integrado (Espacio Disponible)
                  </p>
                </div>
              </div>
            </div>

            {/* GRID DE FORMULARIOS COMERCIALES: SOLICITUD DE SERVICIOS & ANUNCIOS PUBLICITARIOS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Formulario para Interesados en Servicios */}
              <div className={`border rounded-2xl p-6 shadow-xl ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white border-gray-200'}`}>
                <h3 className="text-base font-bold mb-1 text-orange-500 flex items-center gap-2">
                  🛠️ Solicitar Servicio Profesional
                </h3>
                <p className="text-xs text-gray-400 mb-4">Desarrollo web, asesoría de afiliados o soporte técnico especializado:</p>

                <form onSubmit={handleServiceSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Tu Nombre / Empresa"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  />
                  <input
                    type="email"
                    placeholder="Tu Correo Electrónico"
                    value={serviceEmail}
                    onChange={(e) => setServiceEmail(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  />
                  <select
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  >
                    <option value="general">Consultoría y Soporte General</option>
                    <option value="desarrollo">Desarrollo de Plataforma / E-commerce</option>
                    <option value="marketing">Estrategia de Afiliados y Tráfico</option>
                  </select>
                  <textarea
                    placeholder="Describe los detalles de lo que necesitas..."
                    rows={3}
                    value={serviceDetails}
                    onChange={(e) => setServiceDetails(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-orange-500 resize-none ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition shadow-md"
                  >
                    Enviar Solicitud de Servicio
                  </button>
                </form>
              </div>

              {/* Formulario para Pauta Publicitaria (Anunciantes) */}
              <div className={`border rounded-2xl p-6 shadow-xl ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white border-gray-200'}`}>
                <h3 className="text-base font-bold mb-1 text-red-500 flex items-center gap-2">
                  📢 Pautar Espacio Publicitario
                </h3>
                <p className="text-xs text-gray-400 mb-4">Anuncia tus productos, marca o enlaces de Amazon/AliExpress en nuestros streams:</p>

                <form onSubmit={handleAdSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Nombre de la Marca o Empresa"
                    value={adBrand}
                    onChange={(e) => setAdBrand(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-red-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  />
                  <input
                    type="text"
                    placeholder="Presupuesto Estimado (ej: $50 / campaña)"
                    value={adBudget}
                    onChange={(e) => setAdBudget(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-red-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  />
                  <select
                    value={adType}
                    onChange={(e) => setAdType(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-red-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  >
                    <option value="banner_video">Banner Patrocinado en Reproductor</option>
                    <option value="mencion">Mención en Videos y Redes</option>
                    <option value="destacado_catalogo">Producto Destacado en Catálogo</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Correo o Teléfono de Contacto"
                    value={adContact}
                    onChange={(e) => setAdContact(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-red-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition shadow-md"
                  >
                    Solicitar Espacio de Anuncio
                  </button>
                </form>
              </div>

            </div>

            {/* INTEGRACIÓN DE PRODUCTOS GLOBALES (Amazon, AliExpress, Hotmart) */}
            <div className={`border rounded-2xl p-6 shadow-xl ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white border-gray-200'}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Catálogo Global de Afiliados y Productos</h3>
                <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">Amazon • AliExpress • Hotmart</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Kit Emprendedor Pro', comm: '40% Comisión', price: '$29' },
                  { name: 'Tecnología & Gadgets IA', comm: '35% Comisión', price: '$49' },
                  { name: 'Infoproductos & Cursos', comm: '50% Comisión', price: '$39' }
                ].map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border ${darkMode ? 'bg-gray-800/40 border-gray-700' : 'bg-gray-50 border-gray-200'} flex flex-col justify-between space-y-3`}>
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] uppercase font-bold text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">{item.comm}</span>
                        <span className="text-xs font-bold text-gray-300">{item.price}</span>
                      </div>
                      <h4 className="font-bold text-sm mt-2">{item.name}</h4>
                      <p className="text-xs text-gray-400 mt-1">Enlace optimizado con tracking global y pasarelas de pago múltiples.</p>
                    </div>
                    <button className="w-full py-2 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs font-semibold hover:opacity-95 transition shadow-md">
                      Generar Enlace / Comprar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA 3: REGISTRO GLOBAL, AFILIADOS Y PASARELAS FINANCIERAS */}
          <div className="space-y-6">
            
            {/* PANEL DE AFILIADOS */}
            <div className={`border rounded-2xl p-6 shadow-xl ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white border-gray-200'}`}>
              <h3 className="text-base font-bold mb-1 flex items-center gap-2">
                🔗 Generador de Enlace de Afiliado
              </h3>
              <p className="text-xs text-gray-400 mb-3">Crea tu URL personalizada para comisiones internacionales:</p>
              <input
                type="text"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs transition-all focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                placeholder="https://datalinkgo.com/ref/tu-nombre"
                value={customAffiliateLink}
                onChange={(e) => setCustomAffiliateLink(e.target.value)}
              />
              <p className="text-[10px] text-gray-500 mt-2">Comparte este enlace y recibe pagos automáticos por cada referido.</p>
            </div>

// 1. Asegúrate de tener esta línea con los demás estados arriba en tu componente:
const [userPassword, setUserPassword] = useState('');

// 2. Y este es el formulario completo limpio y ordenado para reemplazar en tu código:
{/* FORMULARIO DE REGISTRO COMPLETO */}
<div className={`border rounded-2xl p-6 shadow-xl ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white border-gray-200'}`}>
  <h3 className="text-base font-bold mb-1">📝 Registro de Usuario</h3>
  <p className="text-xs text-gray-400 mb-4">Crea tu cuenta en datalinkgo.com:</p>

  <form onSubmit={handleRegistration} className="space-y-3">
    <input
      type="text"
      placeholder="Tu Nombre Completo"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
    />

    <input
      type="email"
      placeholder="tu@correo.com"
      value={userEmail}
      onChange={(e) => setUserEmail(e.target.value)}
      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
    />

    <input
      type="password"
      placeholder="Contraseña segura"
      value={userPassword}
      onChange={(e) => setUserPassword(e.target.value)}
      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
    />

    <input
      type="tel"
      placeholder="Teléfono / WhatsApp (+...)"
      value={userPhone}
      onChange={(e) => setUserPhone(e.target.value)}
      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
    />

    <div className="grid grid-cols-2 gap-2">
      <input
        type="text"
        placeholder="País"
        value={userCountry}
        onChange={(e) => setUserCountry(e.target.value)}
        className={`w-full px-3 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
      />
      <input
        type="text"
        placeholder="Ciudad / Región"
        value={userRegion}
        onChange={(e) => setUserRegion(e.target.value)}
        className={`w-full px-3 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
      />
    </div>
  </form>
</div>

                {/* PASARELAS DE PAGO Y RETIROS */}
                <div className="pt-1">
                  <label className="block text-[11px] font-semibold text-gray-400 mb-1">Método de Pago / Retiro de Comisiones:</label>
                  <select
                    value={selectedPaymentMethod}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-yellow-400 font-medium' : 'bg-gray-50 border-gray-300 text-gray-900 font-medium'}`}
                  >
                    <option value="binance">🟡 Binance Pay (USDT / Cripto)</option>
                    <option value="paypal">🔵 PayPal Global</option>
                    <option value="banco_digital">🟢 Zelle / Banco Digital Internacional</option>
                    <option value="transferencia">🏦 Transferencia Bancaria Local</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 hover:opacity-95 text-white font-bold text-xs transition shadow-lg shadow-orange-500/30 mt-2"
                >
                  Completar Registro y Acceso
                </button>
              </form>
            </div>

            {/* SOPORTE DIRECTO WHATSAPP */}
            <div className={`border rounded-2xl p-4 shadow-xl text-center ${darkMode ? 'bg-green-950/20 border-green-900/50' : 'bg-green-50 border-green-200'}`}>
              <h4 className="font-bold text-xs text-green-500 mb-1">¿Necesitas Soporte Inmediato?</h4>
              <p className="text-[11px] text-gray-400 mb-3">Atención personalizada directa por WhatsApp para pagos y activación.</p>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-semibold transition shadow-md shadow-green-600/30"
              >
                💬 Abrir Soporte por WhatsApp
              </a>
            </div>

          </div>
        </div>

        {/* SECCIÓN COMPLETA DE TARIFAS Y PLANES OFICIALES */}
        <section id="tarifas" className={`border rounded-3xl p-8 shadow-2xl ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white border-gray-200'}`}>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-wider bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              Transparencia Comercial 2026
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold">Tarifas y Planes de Servicios Globales</h3>
            <p className="text-xs md:text-sm text-gray-400">Precios competitivos adaptados al mercado internacional con soporte multidivisa y retiros instantáneos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Plan 1: Kit Emprendedor */}
            <div className={`border rounded-2xl p-6 flex flex-col justify-between space-y-5 ${darkMode ? 'bg-gray-800/40 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <div className="space-y-3">
                <span className="text-xs font-bold text-yellow-400 bg-yellow-400/10 px-2.5 py-1 rounded-md border border-yellow-400/20">Kit Emprendedor</span>
                <div className="text-3xl font-extrabold">$29 <span className="text-xs font-normal text-gray-400">/ pago único</span></div>
                <p className="text-xs text-gray-400">Acceso a recursos iniciales, herramientas de afiliación y capacitación básica para empezar a vender.</p>
              </div>
              <ul className="text-xs space-y-2.5 text-gray-300 border-t border-b py-4 border-gray-700/50">
                <li className="flex items-center gap-2">✔️ Comisión de afiliado estándar</li>
                <li className="flex items-center gap-2">✔️ Soporte directo por WhatsApp</li>
                <li className="flex items-center gap-2">✔️ Acceso a pasarelas Binance/PayPal</li>
                <li className="flex items-center gap-2">✔️ Materiales de marketing digital</li>
              </ul>
              <button 
                onClick={() => setSelectedKit('emprendedor')}
                className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition shadow-md"
              >
                Seleccionar Plan Emprendedor
              </button>
            </div>

            {/* Plan 2: Kit Automatización Pro (Destacado) */}
            <div className={`border-2 border-orange-500 rounded-2xl p-6 flex flex-col justify-between space-y-5 relative ${darkMode ? 'bg-gray-900/90 shadow-orange-500/10 shadow-2xl' : 'bg-white shadow-xl'}`}>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                Más Popular / Recomendado
              </div>
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20">Kit Automatización Pro</span>
                <div className="text-3xl font-extrabold">$49 <span className="text-xs font-normal text-gray-400">/ mes</span></div>
                <p className="text-xs text-gray-400">Automatización completa, dominios personalizados en datalinkgo.com y pauta publicitaria prioritaria.</p>
              </div>
              <ul className="text-xs space-y-2.5 text-gray-300 border-t border-b py-4 border-gray-700/50">
                <li className="flex items-center gap-2">✔️ Comisión de afiliado VIP (alta rentabilidad)</li>
                <li className="flex items-center gap-2">✔️ Dominio personalizado (datalinkgo.com)</li>
                <li className="flex items-center gap-2">✔️ Espacios de pauta en videos estilo YouTube</li>
                <li className="flex items-center gap-2">✔️ Retiros ilimitados (Binance, PayPal, Zelle)</li>
                <li className="flex items-center gap-2">✔️ Automatización de embudos de venta</li>
              </ul>
              <button 
                onClick={() => setSelectedKit('automatizacion')}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white text-xs font-bold transition shadow-lg shadow-orange-500/30"
              >
                Elegir Kit Automatización Pro
              </button>
            </div>

            {/* Plan 3: Pauta Publicitaria */}
            <div className={`border rounded-2xl p-6 flex flex-col justify-between space-y-5 ${darkMode ? 'bg-gray-800/40 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <div className="space-y-3">
                <span className="text-xs font-bold text-red-500 bg-red-500/10 px-2.5 py-1 rounded-md border border-red-500/20">Pauta Publicitaria</span>
                <div className="text-3xl font-extrabold">Desde $15 <span className="text-xs font-normal text-gray-400">/ campaña</span></div>
                <p className="text-xs text-gray-400">Exhibe tu marca, productos de Amazon/AliExpress o servicios directamente en nuestros reproductores de video y banners.</p>
              </div>
              <ul className="text-xs space-y-2.5 text-gray-300 border-t border-b py-4 border-gray-700/50">
                <li className="flex items-center gap-2">✔️ Impactos garantizados en la red global</li>
                <li className="flex items-center gap-2">✔️ Segmentación por país y región</li>
                <li className="flex items-center gap-2">✔️ Reporte detallado de clics y conversiones</li>
                <li className="flex items-center gap-2">✔️ Integración con enlaces de afiliado externos</li>
              </ul>
              <button 
                onClick={() => alert('Selecciona el formulario de pauta arriba para cotizar tu campaña publicitaria.')}
                className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition shadow-md"
              >
                Cotizar Pauta Publicitaria
              </button>
            </div>

          </div>
        </section>

      </main>

  {/* Sección de Productos Recomendados y Afiliados */}
<section className="py-12 px-4 max-w-6xl mx-auto border-t border-gray-800 mt-12">
  <div className="text-center mb-10">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Recomendaciones y Recursos</h2>
    <p className="text-gray-400 text-sm md:text-base">Herramientas, cursos y productos seleccionados para impulsar tus proyectos.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Tarjeta 1: Ejemplo Hotmart / Curso */}
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500 transition-all">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/50 px-2.5 py-1 rounded-full">Hotmart / Curso</span>
        <h3 className="text-lg font-bold text-white mt-4 mb-2">Aprende Automatización Digital</h3>
        <p className="text-gray-400 text-sm mb-4">Domina las herramientas tecnológicas y escala tus ingresos desde casa paso a paso.</p>
      </div>
      <a 
        href="AQUI_PEGAS_TU_LINK_DE_AFILIADO_DE_HOTMART" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition-colors text-sm"
      >
        Ver Oferta
      </a>
    </div>

    {/* Tarjeta 2: Ejemplo Amazon */}
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500 transition-all">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/50 px-2.5 py-1 rounded-full">Amazon / Gadget</span>
        <h3 className="text-lg font-bold text-white mt-4 mb-2">Equipos y Tecnología Recomendada</h3>
        <p className="text-gray-400 text-sm mb-4">Los mejores dispositivos probados para optimizar tu espacio de trabajo y productividad.</p>
      </div>
      <a 
        href="AQUI_PEGAS_TU_LINK_DE_AFILIADO_DE_AMAZON" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full text-center bg-amber-600 hover:bg-amber-500 text-white font-medium py-2.5 rounded-lg transition-colors text-sm"
      >
        Ver en Amazon
      </a>
    </div>

    {/* Tarjeta 3: Ejemplo Producto Digital / E-book */}
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500 transition-all">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded-full">E-book / Guía</span>
        <h3 className="text-lg font-bold text-white mt-4 mb-2">Kit de Recursos Digitales</h3>
        <p className="text-gray-400 text-sm mb-4">Plantillas y estrategias listas para usar en tus negocios online y emprendimientos.</p>
      </div>
      <a 
        href="AQUI_PEGAS_TU_OTRO_LINK_DE_AFILIADO" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 rounded-lg transition-colors text-sm"
      >
        Obtener Acceso
      </a>
    </div>
  </div>
</section>

{/* Sección Maestra del Marketplace: Registro B2B, Mayor/Detal, Multimedia y Monetización */}
<section className="py-12 px-4 max-w-5xl mx-auto border-t border-gray-800 mt-12">
  <div className="text-center mb-10">
    <span className="bg-blue-600/20 text-blue-400 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">DataLinkGo Marketplace & Hub</span>
    <h2 className="text-2xl md:text-4xl font-bold text-white mt-3 mb-2">Publica tu Producto, Curso o Inventario</h2>
    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">Conectamos fabricantes, importadores y creadores con compradores globales y mayoristas. Gestionamos transacciones seguras con comisiones transparentes.</p>
  </div>

  {/* Tarjetas de Opciones de Monetización / Planes para Proveedores */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl flex flex-col justify-between">
      <div>
        <h3 className="text-white font-bold text-lg mb-1">Plan Estándar</h3>
        <p className="text-blue-400 font-semibold text-2xl mb-3">Gratis</p>
        <p className="text-gray-400 text-sm mb-4">Ideal para creadores independientes o pruebas de productos individuales.</p>
        <ul className="text-gray-300 text-xs space-y-2 mb-6">
          <li>✓ 1 Producto o curso activo</li>
          <li>✓ Formato Detal y Multimedia</li>
          <li>✓ Comisión estándar por venta</li>
        </ul>
      </div>
      <span className="text-xs text-gray-500 text-center font-medium">Activo por defecto</span>
    </div>

    <div className="bg-gradient-to-b from-blue-950/40 to-gray-900 border border-blue-500/50 p-6 rounded-2xl flex flex-col justify-between relative shadow-xl">
      <div className="absolute -top-3 right-4 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">Más Popular</div>
      <div>
        <h3 className="text-white font-bold text-lg mb-1">Fábrica / Mayorista B2B</h3>
        <p className="text-blue-400 font-semibold text-2xl mb-3">$29 <span className="text-xs text-gray-400 font-normal">/ mes</span></p>
        <p className="text-gray-400 text-sm mb-4">Diseñado para distribuidores con inventario físico (ej: stock en EE.UU.).</p>
        <ul className="text-gray-300 text-xs space-y-2 mb-6">
          <li>✓ Precios Mayor y Detal habilitados</li>
          <li>✓ Inventario masivo y videos ilimitados</li>
          <li>✓ Menor comisión por transacción</li>
        </ul>
      </div>
      <a href="#registro-form" className="bg-blue-600 hover:bg-blue-500 text-white text-center font-medium py-2 rounded-lg text-xs transition-colors">Seleccionar Plan</a>
    </div>

    <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl flex flex-col justify-between">
      <div>
        <h3 className="text-white font-bold text-lg mb-1">Patrocinio Destacado</h3>
        <p className="text-blue-400 font-semibold text-2xl mb-3">$15 <span className="text-xs text-gray-400 font-normal">/ semana</span></p>
        <p className="text-gray-400 text-sm mb-4">Posiciona tus productos o cursos en el primer lugar del Catálogo Global.</p>
        <ul className="text-gray-300 text-xs space-y-2 mb-6">
          <li>✓ Máxima visibilidad en portada</li>
          <li>✓ Prioridad en validación</li>
          <li>✓ Reporte directo de clics</li>
        </ul>
      </div>
      <a href="#registro-form" className="bg-gray-800 hover:bg-gray-700 text-white text-center font-medium py-2 rounded-lg text-xs transition-colors">Destacar Producto</a>
    </div>
  </div>

  {/* Formulario Principal de Registro con Mayor/Detal y Multimedia */}
  <div id="registro-form" className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl mb-12">
    <h3 className="text-xl font-bold text-white mb-6">Formulario de Alta de Producto o Inventario</h3>
    <form onSubmit={(e) => {
      e.preventDefault();
      const form = e.currentTarget as HTMLFormElement;
      const nameInput = form.elements.namedItem('productName') as HTMLInputElement;
      const typeSelect = form.elements.namedItem('productType') as HTMLSelectElement;
      const retailPrice = form.elements.namedItem('retailPrice') as HTMLInputElement;
      const wholesalePrice = form.elements.namedItem('wholesalePrice') as HTMLInputElement;
      const minWholesale = form.elements.namedItem('minWholesale') as HTMLInputElement;
      const descInput = form.elements.namedItem('productDesc') as HTMLTextAreaElement;

      const newProduct = {
        name: nameInput.value,
        type: typeSelect.value,
        retail: retailPrice.value,
        wholesale: wholesalePrice.value || 'N/D',
        minW: minWholesale.value || '1',
        desc: descInput.value,
 media: productFilesList.map((f: File) => f.name).join(', '),
        date: new Date().toLocaleDateString()
      };

      const listContainer = document.getElementById('live-products-list');
      if (listContainer) {
        const emptyMsg = document.getElementById('empty-catalog-message');
        if (emptyMsg) emptyMsg.remove();

        const item = document.createElement('div');
        item.className = 'bg-gray-950 border border-gray-800 p-6 rounded-2xl shadow-xl transition-all';
        item.innerHTML = `
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
            <span class="bg-blue-600/20 text-blue-400 text-xs px-3 py-1 rounded-full font-semibold">${newProduct.type}</span>
            <span class="text-xs text-gray-500">Registrado: ${newProduct.date}</span>
          </div>
          <h4 class="text-white font-bold text-xl mb-2">${newProduct.name}</h4>
          <p class="text-gray-300 text-sm mb-4 leading-relaxed">${newProduct.desc}</p>
          
          <div class="grid grid-cols-2 gap-4 bg-gray-900 p-4 rounded-xl mb-4 border border-gray-800/60">
            <div>
              <span class="text-[11px] uppercase tracking-wider text-gray-400 block font-medium">Precio al Detal</span>
              <span class="text-white font-bold text-lg">$${newProduct.retail}</span>
            </div>
            <div>
              <span class="text-[11px] uppercase tracking-wider text-gray-400 block font-medium">Precio al Mayor (Min: ${newProduct.minW})</span>
              <span class="text-blue-400 font-bold text-lg">$${newProduct.wholesale}</span>
            </div>
          </div>

   ${productFilesList.map(file => {
  const url = URL.createObjectURL(file);
  if (file.type.startsWith('video/')) {
return `<video src="${url}" controls class="w-32 h-32 object-cover rounded-lg m-1"></video>`;
  } else {
    return `<img src="${url}" class="w-32 h-32 object-cover rounded-lg m-1" alt="Media del producto" />`;
  }
}).join('')}
        `;
        listContainer.prepend(item);
      }

      alert('¡Producto, precios y material multimedia cargados con éxito al marketplace!');
      form.reset();
    }} className="space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Nombre del Producto o Creador</label>
          <input 
            type="text" 
            name="productName"
            required 
            placeholder="Ej: Lote de Perfumes / Curso de Trading" 
            className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Tipo de Negocio / Producto</label>
          <select name="productType" className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm">
            <option>Producto Físico - Stock Mayorista (B2B)</option>
            <option>Producto Físico - Venta Minorista (Detal)</option>
            <option>Infoproducto / Curso Digital (Hotmart)</option>
            <option>E-book / Recurso Descargable</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Precio al Detal ($)</label>
          <input 
            type="number" 
            step="0.01" 
            name="retailPrice"
            required 
            placeholder="Ej: 49.99" 
            className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Precio al Mayor ($)</label>
          <input 
            type="number" 
            step="0.01" 
            name="wholesalePrice"
            placeholder="Ej: 35.00 (Opcional)" 
            className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Cant. Mínima Mayorista</label>
          <input 
            type="number" 
            name="minWholesale"
            placeholder="Ej: 10 unidades" 
            className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Descripción y Logística de Envíos</label>
        <textarea 
          name="productDesc"
          rows={3} 
          required 
          placeholder="Indica origen del stock (ej: despacho desde EE.UU.), tiempos de entrega o características principales..." 
          className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm resize-none"
        ></textarea>
      </div>

    <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
          Archivos del Producto (Sube uno a uno o en grupo)
        </label>
        <input
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={handleFileChange}
          className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-gray-400 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500 transition-colors cursor-pointer"
        />
        <p className="text-xs text-blue-400 font-medium mt-1">
          Archivos acumulados listos para subir: {productFilesList.length}
        </p>
      </div> 

      <button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 rounded-lg transition-colors text-sm shadow-xl"
      >
        Publicar en el Catálogo Global de DataLinkGo
      </button>
    </form>
  </div>

  {/* Contenedor del Catálogo en Vivo */}
  <div className="mt-10">
    <h3 className="text-xl font-bold text-white mb-4">Catálogo Global en Validación y Nuevos Ingresos</h3>
    <div id="live-products-list" className="space-y-4">
      <div id="empty-catalog-message" className="bg-gray-950 border border-gray-800 p-8 rounded-2xl text-gray-500 text-sm text-center">
        Aún no hay productos registrados en esta sesión. ¡Prueba llenando el formulario superior para ver tu inventario en tiempo real!
      </div>
    </div>
  </div>
</section>      
      {/* FOOTER */}
      <footer className={`border-t py-6 text-center text-xs ${darkMode ? 'border-gray-800 text-gray-500 bg-gray-900/40' : 'border-gray-200 text-gray-500 bg-gray-100'}`}>
        <p>© 2026 DataLinkGo C.A. Todos los derechos reservados. Operando globalmente con pasarelas seguras.</p>
      </footer>
    </div>
  );
}
