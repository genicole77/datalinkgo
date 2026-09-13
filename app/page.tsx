'use client';

import React, { useState } from 'react';

export default function Home() {
  const [vista, setVista] = useState<'inicio' | 'kits' | 'afiliados' | 'creadores' | 'formulario' | 'sobre-nosotros'>('inicio');
  const [temaOscuro, setTemaOscuro] = useState(true);
  const [menuLateralAbierto, setMenuLateralAbierto] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCargando(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mljeywjd", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setEnviado(true);
        form.reset();
      } else {
        alert("Hubo un problema al enviar la solicitud. Por favor intenta de nuevo.");
      }
    } catch (error) {
      alert("Error de red. Verifica tu conexión e intenta de nuevo.");
    } finally {
      setCargando(false);
    }
  };

  // Definición de colores según el tema (Oscuro o Claro)
  const bgPrincipal = temaOscuro ? '#0f172a' : '#f8fafc';
  const bgCard = temaOscuro ? '#1e293b' : '#ffffff';
  const textoPrincipal = temaOscuro ? '#ffffff' : '#0f172a';
  const textoSecundario = temaOscuro ? '#94a3b8' : '#475569';
  const bordeColor = temaOscuro ? '#334155' : '#e2e8f0';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: bgPrincipal, color: textoPrincipal, fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* Barra de Navegación Superior */}
      <header style={{ backgroundColor: bgCard, color: textoPrincipal, padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', borderBottom: `1px solid ${bordeColor}`, zIndex: 100 }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {/* Botón para abrir el Menú Lateral */}
          <button 
            onClick={() => setMenuLateralAbierto(!menuLateralAbierto)}
            style={{ backgroundColor: '#ea580c', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
            title="Menú de información de la plataforma"
          >
            ☰ Menú
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setVista('inicio')}>
            <span style={{ backgroundColor: '#ea580c', color: '#fff', padding: '6px 12px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px' }}>DLG</span>
            <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.5px' }}>DataLinkGo</span>
          </div>
        </div>
        
        <nav style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setVista('inicio')} 
            style={{ background: 'none', border: 'none', color: vista === 'inicio' ? '#ea580c' : textoSecundario, cursor: 'pointer', fontSize: '14px', fontWeight: 'bold', padding: '8px 8px' }}
          >
            Inicio
          </button>
          <button 
            onClick={() => setVista('kits')} 
            style={{ background: 'none', border: 'none', color: vista === 'kits' ? '#ea580c' : textoSecundario, cursor: 'pointer', fontSize: '14px', fontWeight: 'bold', padding: '8px 8px' }}
          >
            Kits
          </button>
          <button 
            onClick={() => setVista('afiliados')} 
            style={{ background: 'none', border: 'none', color: vista === 'afiliados' ? '#ea580c' : textoSecundario, cursor: 'pointer', fontSize: '14px', fontWeight: 'bold', padding: '8px 8px' }}
          >
            Afiliados
          </button>
          <button 
            onClick={() => setVista('creadores')} 
            style={{ background: 'none', border: 'none', color: vista === 'creadores' ? '#ea580c' : textoSecundario, cursor: 'pointer', fontSize: '14px', fontWeight: 'bold', padding: '8px 8px' }}
          >
            Creadores
          </button>
          <button 
            onClick={() => setVista('formulario')} 
            style={{ backgroundColor: '#ea580c', color: '#fff', border: 'none', padding: '9px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(234, 88, 12, 0.4)' }}
          >
            Consultas
          </button>

          <button 
            onClick={() => setTemaOscuro(!temaOscuro)}
            style={{ backgroundColor: temaOscuro ? '#334155' : '#cbd5e1', color: textoPrincipal, border: 'none', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}
          >
            {temaOscuro ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>

      {/* Contenedor Principal con Menú Lateral Desplegable */}
      <div style={{ display: 'flex', flex: 1, position: 'relative', overflow: 'hidden' }}>
        
        {/* Barra Lateral Desplegable (Sidebar de Información) */}
        <aside style={{ 
          width: menuLateralAbierto ? '300px' : '0px', 
          backgroundColor: bgCard, 
          borderRight: menuLateralAbierto ? `1px solid ${bordeColor}` : 'none',
          transition: 'width 0.3s ease',
          overflowX: 'hidden',
          overflowY: 'auto',
          padding: menuLateralAbierto ? '25px 20px' : '0px',
          boxShadow: menuLateralAbierto ? '4px 0 15px rgba(0,0,0,0.1)' : 'none',
          zIndex: 90
        }}>
          <div style={{ minWidth: '260px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#ea580c' }}>📖 Guía de DataLinkGo</h3>
              <button 
                onClick={() => setMenuLateralAbierto(false)} 
                style={{ background: 'none', border: 'none', color: textoSecundario, fontSize: '18px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                ✕
              </button>
            </div>
            <p style={{ color: textoSecundario, fontSize: '13px', lineHeight: '1.6', marginBottom: '20px' }}>
              Todo lo que necesitas saber sobre nuestra infraestructura digital, herramientas de afiliación y modelos de consulta automatizados.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button onClick={() => { setVista('sobre-nosotros'); setMenuLateralAbierto(false); }} style={{ textAlign: 'left', background: 'none', border: 'none', color: textoPrincipal, fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', padding: '8px', borderRadius: '6px', backgroundColor: temaOscuro ? '#0f172a' : '#f1f5f9' }}>
                📌 ¿Qué es DataLinkGo?
              </button>
              <button onClick={() => { setVista('kits'); setMenuLateralAbierto(false); }} style={{ textAlign: 'left', background: 'none', border: 'none', color: textoPrincipal, fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', padding: '8px', borderRadius: '6px', backgroundColor: temaOscuro ? '#0f172a' : '#f1f5f9' }}>
                📦 Kits Digitales y Recursos
              </button>
              <button onClick={() => { setVista('afiliados'); setMenuLateralAbierto(false); }} style={{ textAlign: 'left', background: 'none', border: 'none', color: textoPrincipal, fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', padding: '8px', borderRadius: '6px', backgroundColor: temaOscuro ? '#0f172a' : '#f1f5f9' }}>
                🔗 Plataforma de Afiliados
              </button>
              <button onClick={() => { setVista('creadores'); setMenuLateralAbierto(false); }} style={{ textAlign: 'left', background: 'none', border: 'none', color: textoPrincipal, fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', padding: '8px', borderRadius: '6px', backgroundColor: temaOscuro ? '#0f172a' : '#f1f5f9' }}>
                🎬 Creadores y Publicidad
              </button>
              <button onClick={() => { setVista('formulario'); setMenuLateralAbierto(false); }} style={{ textAlign: 'left', background: 'none', border: 'none', color: '#ea580c', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', padding: '8px', borderRadius: '6px', backgroundColor: temaOscuro ? '#0f172a' : '#f1f5f9' }}>
                💬 Tarifarios y Consultas
              </button>
            </div>
          </div>
        </aside>

        {/* Contenido Dinámico Central */}
        <main style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box', flex: 1, overflowY: 'auto' }}>
          
          {vista === 'inicio' && (
            <div>
              {/* Banner Principal */}
              <div style={{ backgroundColor: bgCard, padding: '50px 30px', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)', textAlign: 'center', marginBottom: '35px', border: `1px solid ${bordeColor}` }}>
                <h1 style={{ fontSize: '32px', marginBottom: '15px', fontWeight: '800' }}>
                  Bienvenido a DataLinkGo
                </h1>
                <p style={{ color: textoSecundario, fontSize: '16px', maxWidth: '750px', margin: '0 auto 25px auto', lineHeight: '1.6' }}>
                  Tu plataforma centralizada de consultas, catálogos de kits digitales, herramientas para creadores de contenido, publicidad y alianzas estratégicas.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => setVista('formulario')}
                    style={{ backgroundColor: '#ea580c', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 14px rgba(234, 88, 12, 0.4)' }}
                  >
                    Acceder a Consultas y Requerimientos 🚀
                  </button>
                  <button 
                    onClick={() => setMenuLateralAbierto(true)}
                    style={{ backgroundColor: 'transparent', color: textoPrincipal, border: `2px solid ${bordeColor}`, padding: '14px 24px', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' }}
                  >
                    Leer sobre la Plataforma 📖
                  </button>
                </div>
              </div>

              {/* Cuadrícula de Módulos */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                
                <div 
                  onClick={() => setVista('kits')}
                  style={{ backgroundColor: bgCard, padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', border: `1px solid ${bordeColor}`, cursor: 'pointer' }}
                >
                  <div style={{ fontSize: '26px', marginBottom: '12px' }}>📦</div>
                  <h3 style={{ fontSize: '17px', marginBottom: '8px', fontWeight: '700' }}>Catálogo de Kits Digitales</h3>
                  <p style={{ color: textoSecundario, fontSize: '13px', lineHeight: '1.5' }}>
                    Recursos, plantillas y guías especializadas para potenciar proyectos comerciales y de afiliados.
                  </p>
                  <span style={{ display: 'inline-block', marginTop: '12px', color: '#ea580c', fontWeight: 'bold', fontSize: '13px' }}>
                    Ver catálogo &rarr;
                  </span>
                </div>

                <div 
                  onClick={() => setVista('afiliados')}
                  style={{ backgroundColor: bgCard, padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', border: `1px solid ${bordeColor}`, cursor: 'pointer' }}
                >
                  <div style={{ fontSize: '26px', marginBottom: '12px' }}>🔗</div>
                  <h3 style={{ fontSize: '17px', marginBottom: '8px', fontWeight: '700' }}>Plataforma de Afiliados</h3>
                  <p style={{ color: textoSecundario, fontSize: '13px', lineHeight: '1.5' }}>
                    Pasarelas, enlaces estratégicos y herramientas de monetización optimizadas para tu negocio.
                  </p>
                  <span style={{ display: 'inline-block', marginTop: '12px', color: '#ea580c', fontWeight: 'bold', fontSize: '13px' }}>
                    Explorar &rarr;
                  </span>
                </div>

                <div 
                  onClick={() => setVista('creadores')}
                  style={{ backgroundColor: bgCard, padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', border: `1px solid ${bordeColor}`, cursor: 'pointer' }}
                >
                  <div style={{ fontSize: '26px', marginBottom: '12px' }}>🎬</div>
                  <h3 style={{ fontSize: '17px', marginBottom: '8px', fontWeight: '700' }}>Creadores y Publicidad</h3>
                  <p style={{ color: textoSecundario, fontSize: '13px', lineHeight: '1.5' }}>
                    Herramientas, estrategias de video, storytelling y gestión publicitaria para canales digitales.
                  </p>
                  <span style={{ display: 'inline-block', marginTop: '12px', color: '#ea580c', fontWeight: 'bold', fontSize: '13px' }}>
                    Ver detalles &rarr;
                  </span>
                </div>

                <div 
                  onClick={() => setVista('formulario')}
                  style={{ backgroundColor: bgCard, padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', border: `1px solid ${bordeColor}`, cursor: 'pointer' }}
                >
                  <div style={{ fontSize: '26px', marginBottom: '12px' }}>💬</div>
                  <h3 style={{ fontSize: '17px', marginBottom: '8px', fontWeight: '700' }}>Consultas y Tarifarios</h3>
                  <p style={{ color: textoSecundario, fontSize: '13px', lineHeight: '1.5' }}>
                    Canal directo para solicitar cotizaciones a la medida y requerimientos específicos.
                  </p>
                  <span style={{ display: 'inline-block', marginTop: '12px', color: '#ea580c', fontWeight: 'bold', fontSize: '13px' }}>
                    Ir al módulo &rarr;
                  </span>
                </div>

              </div>
            </div>
          )}

          {/* Sección Sobre la Plataforma */}
          {vista === 'sobre-nosotros' && (
            <div style={{ backgroundColor: bgCard, padding: '35px', borderRadius: '16px', border: `1px solid ${bordeColor}` }}>
              <button onClick={() => setVista('inicio')} style={{ background: 'none', border: 'none', color: textoSecundario, cursor: 'pointer', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold' }}>
                &larr; Volver al inicio
              </button>
              <h2 style={{ fontSize: '26px', marginBottom: '15px' }}>📌 ¿Qué es DataLinkGo?</h2>
              <p style={{ color: textoSecundario, marginBottom: '20px', lineHeight: '1.7' }}>
                **DataLinkGo** es una infraestructura digital avanzada diseñada para centralizar consultas comerciales, catálogos de recursos digitales, distribución de enlaces de afiliados y estrategias para creadores de contenido multimedia.
              </p>
              <p style={{ color: textoSecundario, marginBottom: '20px', lineHeight: '1.7' }}>
                Nuestro objetivo principal es conectar de forma rápida y automatizada a los usuarios con las herramientas tecnológicas, tarifarios y solicitudes específicas que requieran para escalar sus proyectos comerciales y digitales.
              </p>
              <div style={{ marginTop: '30px' }}>
                <button onClick={() => setVista('formulario')} style={{ backgroundColor: '#ea580c', color: '#fff', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                  Realizar una Consulta Ahora
                </button>
              </div>
            </div>
          )}

          {/* Vista de Kits Digitales */}
          {vista === 'kits' && (
            <div style={{ backgroundColor: bgCard, padding: '35px', borderRadius: '16px', border: `1px solid ${bordeColor}` }}>
              <button onClick={() => setVista('inicio')} style={{ background: 'none', border: 'none', color: textoSecundario, cursor: 'pointer', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold' }}>
                &larr; Volver al inicio
              </button>
              <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>📦 Catálogo de Kits Digitales</h2>
              <p style={{ color: textoSecundario, marginBottom: '25px', lineHeight: '1.6' }}>
                Recursos y plantillas de automatización configuradas para optimizar operaciones y ventas digitales.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div style={{ backgroundColor: temaOscuro ? '#0f172a' : '#f1f5f9', padding: '20px', borderRadius: '10px', border: `1px solid ${bordeColor}` }}>
                  <h4 style={{ color: '#ea580c', marginBottom: '8px' }}>Kit Emprendedor Pro</h4>
                  <p style={{ color: textoSecundario, fontSize: '13px' }}>Estructuración comercial y gestión de recursos.</p>
                </div>
                <div style={{ backgroundColor: temaOscuro ? '#0f172a' : '#f1f5f9', padding: '20px', borderRadius: '10px', border: `1px solid ${bordeColor}` }}>
                  <h4 style={{ color: '#ea580c', marginBottom: '8px' }}>Kit de Automatización</h4>
                  <p style={{ color: textoSecundario, fontSize: '13px' }}>Flujos optimizados para captación de clientes.</p>
                </div>
              </div>
            </div>
          )}

          {/* Vista de Afiliados */}
          {vista === 'afiliados' && (
            <div style={{ backgroundColor: bgCard, padding: '35px', borderRadius: '16px', border: `1px solid ${bordeColor}` }}>
              <button onClick={() => setVista('inicio')} style={{ background: 'none', border: 'none', color: textoSecundario, cursor: 'pointer', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold' }}>
                &larr; Volver al inicio
              </button>
              <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>🔗 Plataforma de Afiliados</h2>
              <p style={{ color: textoSecundario, marginBottom: '25px', lineHeight: '1.6' }}>
                Enlaces de distribución de alto rendimiento y pasarelas de pago integradas.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div style={{ backgroundColor: temaOscuro ? '#0f172a' : '#f1f5f9', padding: '20px', borderRadius: '10px', border: `1px solid ${bordeColor}` }}>
                  <h4 style={{ color: '#ea580c', marginBottom: '8px' }}>Red DLG</h4>
                  <p style={{ color: textoSecundario, fontSize: '13px' }}>Enlaces optimizados para referidos y monetización.</p>
                </div>
              </div>
            </div>
          )}

          {/* Vista de Creadores y Publicidad */}
          {vista === 'creadores' && (
            <div style={{ backgroundColor: bgCard, padding: '35px', borderRadius: '16px', border: `1px solid ${bordeColor}` }}>
              <button onClick={() => setVista('inicio')} style={{ background: 'none', border: 'none', color: textoSecundario, cursor: 'pointer', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold' }}>
                &larr; Volver al inicio
              </button>
              <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>🎬 Creadores de Videos y Publicidad</h2>
              <p style={{ color: textoSecundario, marginBottom: '25px', lineHeight: '1.6' }}>
                Sección especializada en producción de contenido, storytelling, gestión de historias y estrategias de publicidad digital.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div style={{ backgroundColor: temaOscuro ? '#0f172a' : '#f1f5f9', padding: '20px', borderRadius: '10px', border: `1px solid ${bordeColor}` }}>
                  <h4 style={{ color: '#ea580c', marginBottom: '8px' }}>Estrategia de Contenido</h4>
                  <p style={{ color: textoSecundario, fontSize: '13px' }}>Guiones, flujos de edición y distribución para canales digitales.</p>
                </div>
                <div style={{ backgroundColor: temaOscuro ? '#0f172a' : '#f1f5f9', padding: '20px', borderRadius: '10px', border: `1px solid ${bordeColor}` }}>
                  <h4 style={{ color: '#ea580c', marginBottom: '8px' }}>Campañas Publicitarias</h4>
                  <p style={{ color: textoSecundario, fontSize: '13px' }}>Optimización de anuncios y conversiones comerciales.</p>
                </div>
              </div>
            </div>
          )}

          {/* Módulo de Consultas y Formulario */}
          {vista === 'formulario' && (
            <div style={{ maxWidth: '650px', margin: '0 auto', backgroundColor: bgCard, padding: '35px', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)', border: `1px solid ${bordeColor}` }}>
              
              <button onClick={() => setVista('inicio')} style={{ background: 'none', border: 'none', color: textoSecundario, cursor: 'pointer', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold' }}>
                &larr; Volver a la plataforma
              </button>

              <h2 style={{ fontSize: '24px', marginBottom: '8px', fontWeight: '800' }}>
                Módulo de Consultas y Solicitudes
              </h2>
              <p style={{ color: textoSecundario, fontSize: '14px', marginBottom: '25px', lineHeight: '1.5' }}>
                Completa los datos a continuación para procesar tu consulta, cotización o requerimiento específico.
              </p>

              {enviado ? (
                <div style={{ backgroundColor: temaOscuro ? '#064e3b' : '#dcfce7', border: '1px solid #22c55e', color: temaOscuro ? '#34d399' : '#15803d', padding: '25px', borderRadius: '10px', textAlign: 'center', fontWeight: 'bold' }}>
                  ¡Consulta enviada con éxito! Nos pondremos en contacto contigo muy pronto.
                  <br /><br />
                  <button onClick={() => { setEnviado(false); setVista('inicio'); }} style={{ backgroundColor: '#15803d', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}>
                    Regresar al inicio
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: textoSecundario, marginBottom: '8px' }}>
                      Nombre o Empresa *
                    </label>
                    <input type="text" name="nombre" required placeholder="Ej. Tu Nombre o Empresa" style={{ width: '100%', padding: '14px', border: `1px solid ${bordeColor}`, borderRadius: '8px', fontSize: '15px', boxSizing: 'border-box', backgroundColor: temaOscuro ? '#0f172a' : '#ffffff', color: textoPrincipal }} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: textoSecundario, marginBottom: '8px' }}>
                      Correo electrónico *
                    </label>
                    <input type="email" name="email" required placeholder="tucorreo@dominio.com" style={{ width: '100%', padding: '14px', border: `1px solid ${bordeColor}`, borderRadius: '8px', fontSize: '15px', boxSizing: 'border-box', backgroundColor: temaOscuro ? '#0f172a' : '#ffffff', color: textoPrincipal }} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: textoSecundario, marginBottom: '8px' }}>
                      Detalle de la consulta o requerimiento *
                    </label>
                    <textarea name="mensaje" required rows={4} placeholder="Describe detalladamente qué necesitas consultar..." style={{ width: '100%', padding: '14px', border: `1px solid ${bordeColor}`, borderRadius: '8px', fontSize: '15px', boxSizing: 'border-box', resize: 'vertical', backgroundColor: temaOscuro ? '#0f172a' : '#ffffff', color: textoPrincipal }}></textarea>
                  </div>

                  <button type="submit" disabled={cargando} style={{ backgroundColor: '#ea580c', color: '#ffffff', border: 'none', padding: '15px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(234, 88, 12, 0.4)' }}>
                    {cargando ? 'Enviando consulta...' : 'Enviar Consulta'}
                  </button>
                </form>
              )}

            </div>
          )}

        </main>
      </div>

      {/* Botón Flotante de WhatsApp Permanente */}
      <a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          backgroundColor: '#25d366',
          color: '#fff',
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          zIndex: 1000,
          textDecoration: 'none'
        }}
        title="Contáctanos por WhatsApp"
      >
        💬
      </a>

      {/* Pie de página */}
      <footer style={{ textAlign: 'center', padding: '25px', color: textoSecundario, fontSize: '13px', borderTop: `1px solid ${bordeColor}`, backgroundColor: bgCard, zIndex: 100 }}>
        &copy; 2026 DataLinkGo. Todos los derechos reservados.
      </footer>

    </div>
  );
}
