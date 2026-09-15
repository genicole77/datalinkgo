'use client';

import React, { useState } from 'react';

export default function GlobalECommercePlatform() {
  // Estados globales de la plataforma
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('es');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCountry, setUserCountry] = useState('Venezuela');
  const [userRegion, setUserRegion] = useState('Caracas');
  const [selectedKit, setSelectedKit] = useState('emprendedor');
  const [customAffiliateLink, setCustomAffiliateLink] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('binance');

  // Estados para formularios de Servicios y Publicidad
  const [serviceName, setServiceName] = useState('');
  const [serviceEmail, setServiceEmail] = useState('');
  const [serviceDetails, setServiceDetails] = useState('');

  const [adBrand, setAdBrand] = useState('');
  const [adBudget, setAdBudget] = useState('');
  const [adContact, setAdContact] = useState('');

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail.trim() || !userName.trim()) {
      alert(language === 'es' ? 'Por favor completa al menos tu nombre y correo.' : 'Please fill in at least your name and email.');
      return;
    }
    alert(`¡Registro exitoso, ${userName}! Kit seleccionado: ${selectedKit}. Pago configurado via ${selectedPaymentMethod.toUpperCase()}.`);
    setUserEmail('');
    setUserName('');
    setUserPhone('');
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceEmail.trim() || !serviceDetails.trim()) {
      alert('Por favor completa tu correo y los detalles del servicio.');
      return;
    }
    alert('¡Solicitud de servicio enviada con éxito! Nos pondremos en contacto contigo pronto.');
    setServiceName('');
    setServiceEmail('');
    setServiceDetails('');
  };

  const handleAdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adBrand.trim() || !adContact.trim()) {
      alert('Por favor indica tu marca y medio de contacto para la pauta publicitaria.');
      return;
    }
    alert('¡Propuesta de pauta publicitaria recibida! Un asesor de anuncios se comunicará contigo.');
    setAdBrand('');
    setAdBudget('');
    setAdContact('');
  };

  return (
    <div className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen transition-colors duration-300 font-sans`}>
      {/* HEADER / BARRA DE NAVEGACIÓN GLOBAL */}
      <header className={`border-b ${darkMode ? 'border-gray-800 bg-gray-900/80' : 'border-gray-200 bg-white/80'} sticky top-0 z-50 backdrop-blur-md px-6 py-4 flex flex-wrap justify-between items-center gap-4`}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 via-orange-500 to-yellow-400 flex items-center justify-center font-extrabold text-white shadow-lg shadow-orange-500/20 text-xl">
            DL
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">DataLinkGo <span className="text-orange-500">Global</span></h1>
            <p className="text-xs text-gray-400">E-commerce, Affiliates & Digital Hub</p>
          </div>
        </div>

        {/* Controles de Idioma y Tema */}
        <div className="flex items-center space-x-3">
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            className={`px-3 py-1.5 rounded-lg text-sm border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-800'} focus:outline-none focus:border-orange-500`}
          >
            <option value="es">🇪🇸 Español</option>
            <option value="en">🇺🇸 English</option>
            <option value="pt">🇧🇷 Português</option>
          </select>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${darkMode ? 'bg-gray-800 border-gray-700 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 border-gray-300 text-gray-800 hover:bg-gray-300'} transition`}
          >
            {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
          </button>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        
        {/* SECCIÓN HERO / BIENVENIDA */}
        <section className="text-center space-y-4 py-8">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-orange-500/10 text-orange-500 border border-orange-500/20">
            Plataforma Multiregional y Afiliados 2026
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Conecta, Compra y Monetiza a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400">Escala Global</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Integración total con Amazon, AliExpress, Hotmart, pasarelas digitales internacionales, sistemas de video con publicidad y tarifas transparentes.
          </p>
        </section>

        {/* GRID PRINCIPAL: VIDEOS Y PRODUCTOS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLUMNA 1 & 2: REPRODUCTOR DE VIDEO + FORMULARIOS DE SERVICIOS Y ANUNCIOS */}
          <div className="lg:col-span-2 space-y-6">
            <div className={`border rounded-2xl p-4 shadow-xl ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white border-gray-200'}`}>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></span>
                  Canal de Medios & Contenido Activo
                </h3>
                <span className="text-xs bg-red-600/20 text-red-500 font-semibold px-2.5 py-1 rounded-md">Monetización Activa</span>
              </div>
              
              {/* Contenedor del Video */}
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden flex items-center justify-center border border-gray-800 shadow-inner">
                <div className="text-center space-y-2 p-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-red-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-red-600/40 cursor-pointer hover:scale-105 transition">
                    ▶
                  </div>
                  <p className="text-sm text-gray-300 font-medium">Reproduciendo Transmisión / Historia Multimedia</p>
                  <p className="text-xs text-orange-400">Anuncio Patrocinado / Espacio Publicitario Dinámico Integrado</p>
                </div>
              </div>
            </div>

            {/* GRID DE FORMULARIOS COMERCIALES: SOLICITUD DE SERVICIOS & ANUNCIOS PUBLICITARIOS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Formulario para Interesados en Servicios */}
              <div className={`border rounded-2xl p-6 shadow-xl ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white border-gray-200'}`}>
                <h3 className="text-lg font-bold mb-1 text-orange-500">Solicitar un Servicio</h3>
                <p className="text-xs text-gray-400 mb-4">¿Buscas desarrollo, asesoría o un servicio personalizado? Escríbenos:</p>

                <form onSubmit={handleServiceSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Tu Nombre"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border text-sm focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  />
                  <input
                    type="email"
                    placeholder="Tu Correo"
                    value={serviceEmail}
                    onChange={(e) => setServiceEmail(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border text-sm focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  />
                  <textarea
                    placeholder="¿Qué servicio necesitas?"
                    rows={3}
                    value={serviceDetails}
                    onChange={(e) => setServiceDetails(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border text-sm focus:outline-none focus:border-orange-500 resize-none ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold transition shadow-md"
                  >
                    Enviar Solicitud de Servicio
                  </button>
                </form>
              </div>

              {/* Formulario para Pauta Publicitaria (Anunciantes) */}
              <div className={`border rounded-2xl p-6 shadow-xl ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white border-gray-200'}`}>
                <h3 className="text-lg font-bold mb-1 text-red-500">Pautar Publicidad</h3>
                <p className="text-xs text-gray-400 mb-4">Anuncia tu marca en nuestros videos y espacios de la plataforma:</p>

                <form onSubmit={handleAdSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Nombre de tu Marca / Empresa"
                    value={adBrand}
                    onChange={(e) => setAdBrand(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border text-sm focus:outline-none focus:border-red-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  />
                  <input
                    type="text"
                    placeholder="Presupuesto Estimado / Tipo de Pauta"
                    value={adBudget}
                    onChange={(e) => setAdBudget(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border text-sm focus:outline-none focus:border-red-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  />
                  <input
                    type="text"
                    placeholder="Correo o Teléfono de Contacto"
                    value={adContact}
                    onChange={(e) => setAdContact(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border text-sm focus:outline-none focus:border-red-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition shadow-md"
                  >
                    Solicitar Espacio Publicitario
                  </button>
                </form>
              </div>

            </div>

            {/* INTEGRACIÓN DE PRODUCTOS GLOBALES (Amazon, AliExpress, Hotmart) */}
            <div className={`border rounded-2xl p-6 shadow-xl ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white border-gray-200'}`}>
              <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                <span>Catálogo Global de Productos</span>
                <span className="text-xs font-normal text-gray-400">Amazon • AliExpress • Hotmart</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['Kit Emprendedor Pro', 'Tecnología & Gadgets', 'Infoproductos Digitales'].map((prod, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'} flex flex-col justify-between space-y-3`}>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">Afiliado Top</span>
                      <h4 className="font-bold text-sm mt-2">{prod}</h4>
                      <p className="text-xs text-gray-400 mt-1">Comisiones directas optimizadas para pasarelas internacionales.</p>
                    </div>
                    <button className="w-full py-2 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs font-semibold hover:opacity-95 transition shadow-md">
                      Ver Producto / Comprar
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
              <h3 className="text-lg font-bold mb-2">Panel de Afiliados</h3>
              <p className="text-xs text-gray-400 mb-4">Inserta o genera tu enlace personalizado para comisiones:</p>
              <input
                type="text"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                id="global-custom-affiliate-input"
                placeholder="https://datalinkgo.com/ref/tu-nombre"
                value={customAffiliateLink}
                onChange={(e) => setCustomAffiliateLink(e.target.value)}
              />
            </div>

            {/* FORMULARIO DE REGISTRO COMPLETO */}
            <div className={`border rounded-2xl p-6 shadow-xl ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white border-gray-200'}`}>
              <h3 className="text-lg font-bold mb-2">Registro y Selección de Kits</h3>
              <p className="text-xs text-gray-400 mb-4">Crea tu cuenta con acceso multiregional:</p>

              <form onSubmit={handleRegistration} className="space-y-3">
                <input
                  type="text"
                  placeholder="Tu Nombre Completo"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                />

                <input
                  type="email"
                  placeholder="tu@correo.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                />

                <input
                  type="tel"
                  placeholder="Teléfono / WhatsApp (+...)"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                />

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="País"
                    value={userCountry}
                    onChange={(e) => setUserCountry(e.target.value)}
                    className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  />
                  <input
                    type="text"
                    placeholder="Región / Ciudad"
                    value={userRegion}
                    onChange={(e) => setUserRegion(e.target.value)}
                    className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  />
                </div>

                <select
                  value={selectedKit}
                  onChange={(e) => setSelectedKit(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                >
                  <option value="emprendedor">Kit Emprendedor Pro ($29)</option>
                  <option value="automatizacion">Kit de Automatización ($49)</option>
                  <option value="dominios">Registro de Dominios (datalinkgo.com - $15)</option>
                </select>

                {/* PASARELAS DE PAGO Y RETIROS */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Método de Pago / Retiro de Comisiones:</label>
                  <select
                    value={selectedPaymentMethod}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-orange-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-yellow-400 font-medium' : 'bg-gray-50 border-gray-300 text-gray-900 font-medium'}`}
                  >
                    <option value="binance">🟡 Binance Pay (USDT / Cripto)</option>
                    <option value="paypal">🔵 PayPal Global</option>
                    <option value="banco_digital">🟢 Banco Digital / Internacional</option>
                    <option value="transferencia">🏦 Transferencia Bancaria Local</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 hover:opacity-95 text-white font-bold transition shadow-lg shadow-orange-500/30 mt-2"
                >
                  Completar Registro y Acceso
                </button>
              </form>
            </div>

            {/* SOPORTE DIRECTO WHATSAPP */}
            <div className={`border rounded-2xl p-5 shadow-xl text-center ${darkMode ? 'bg-green-950/20 border-green-900/50' : 'bg-green-50 border-green-200'}`}>
              <h4 className="font-bold text-sm text-green-500 mb-1">¿Necesitas Soporte Rápido?</h4>
              <p className="text-xs text-gray-400 mb-3">Atención personalizada directa para pagos y activación de kits.</p>
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

        {/* SECCIÓN DE TARIFAS Y PLANES OFICIALES */}
        <section className={`border rounded-3xl p-8 shadow-2xl ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white border-gray-200'}`}>
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">Transparencia Comercial</span>
            <h3 className="text-2xl md:text-3xl font-extrabold">Tarifas y Planes de Servicios</h3>
            <p className="text-sm text-gray-400">Precios accesibles adaptados al mercado global con retiros y pagos instantáneos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Plan 1 */}
            <div className={`border rounded-2xl p-6 flex flex-col justify-between space-y-4 ${darkMode ? 'bg-gray-800/40 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <div>
                <span className="text-xs font-bold text-yellow-400 bg-yellow-400/10 px-2.5 py-1 rounded-md">Kit Emprendedor</span>
                <div className="text-3xl font-extrabold mt-3">$29 <span className="text-xs font-normal text-gray-400">/ pago único</span></div>
                <p className="text-xs text-gray-400 mt-2">Acceso a recursos iniciales, herramientas de afiliación y capacitación básica.</p>
              </div>
              <ul className="text-xs space-y-2 text-gray-300">
                <li>✔️ Comisión de afiliado estándar</li>
                <li>✔️ Soporte por WhatsApp</li>
                <li>✔️ Acceso a pasarelas Binance/PayPal</li>
              </ul>
              <button className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold transition shadow-md">
                Seleccionar Plan
              </button>
            </div>

            {/* Plan 2 (Destacado) */}
            <div className={`border-2 border-orange-500 rounded-2xl p-6 flex flex-col justify-between space-y-4 relative ${darkMode ? 'bg-gray-900/90' : 'bg-white'}`}>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-orange-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow">
                Más Popular
              </div>
              <div>
                <span className="text-xs font-bold text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-md">Kit Automatización Pro</span>
                <div className="text-3xl font-extrabold mt-3">$49 <span className="text-xs font-normal text-gray-400">/ mes</span></div>
                <p className="text-xs text-gray-400 mt-2">Automatización completa, dominios en datalinkgo.com y pauta publicitaria prioritaria.</p>
              </div>
              <ul className="text-xs space-y-2 text-gray-300">
                <li>✔️ Comisión de afiliado VIP (alta rentabilidad)</li>
                <li>✔️ Dominio personalizado incluido</li>
                <li>✔️ Espacios de pauta en videos estilo YouTube</li>
                <li>✔️ Retiros ilimitados (Binance, PayPal, Bancos)</li>
              </ul>
              <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white text-xs font-semibold transition shadow-lg shadow-orange-500/30">
                Elegir Kit Pro
              </button>
            </div>

            {/* Plan 3 (Anunciantes) */}
            <div className={`border rounded-2xl p-6 flex flex-col justify-between space-y-4 ${darkMode ? 'bg-gray-800/40 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <div>
                <span className="text-xs font-bold text-red-500 bg-red-500/10 px-2.5 py-1 rounded-md">Pauta Publicitaria</span>
                <div className="text-3xl font-extrabold mt-3">Desde $15 <span className="text-xs font-normal text-gray-400">/ campaña</span></div>
                <p className="text-xs text-gray-400 mt-2">Exhibe tu marca, productos de Amazon o servicios directamente en nuestros reproductores de video y banners.</p>
              </div>
              <ul className="text-xs space-y-2 text-gray-300">
                <li>✔️ Impactos garantizados en la red global</li>
                <li>✔️ Segmentación por país y región</li>
                <li>✔️ Reporte de clics y conversiones</li>
              </ul>
              <button className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition shadow-md">
                Cotizar Pauta
              </button>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className={`border-t py-6 text-center text-xs ${darkMode ? 'border-gray-800 text-gray-500 bg-gray-900/40' : 'border-gray-200 text-gray-500 bg-gray-100'}`}>
        <p>© 2026 DataLinkGo C.A. Todos los derechos reservados. Operando globalmente.</p>
      </footer>
    </div>
  );
}
