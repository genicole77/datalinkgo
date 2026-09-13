'use client';

import React, { useState } from 'react';

export default function Home() {
  const [vista, setVista] = useState<'inicio' | 'kits' | 'afiliados' | 'formulario'>('inicio');
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

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column' }}>
      
      {/* Barra de Navegación Superior */}
      <header style={{ backgroundColor: '#1e293b', color: '#ffffff', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', borderBottom: '1px solid #334155' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => setVista('inicio')}>
          <span style={{ backgroundColor: '#ea580c', color: '#fff', padding: '8px 14px', borderRadius: '8px', fontWeight: 'bold', fontSize: '18px' }}>DLG</span>
          <span style={{ fontSize: '22px', fontWeight: 'bold', letterSpacing: '0.5px' }}>DataLinkGo</span>
        </div>
        <nav style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button 
            onClick={() => setVista('inicio')} 
            style={{ background: 'none', border: 'none', color: vista === 'inicio' ? '#ea580c' : '#cbd5e1', cursor: 'pointer', fontSize: '15px', fontWeight: 'bold', padding: '8px 12px' }}
          >
            Plataforma / Inicio
          </button>
          <button 
            onClick={() => setVista('kits')} 
            style={{ background: 'none', border: 'none', color: vista === 'kits' ? '#ea580c' : '#cbd5e1', cursor: 'pointer', fontSize: '15px', fontWeight: 'bold', padding: '8px 12px' }}
          >
            Kits Digitales
          </button>
          <button 
            onClick={() => setVista('afiliados')} 
            style={{ background: 'none', border: 'none', color: vista === 'afiliados' ? '#ea580c' : '#cbd5e1', cursor: 'pointer', fontSize: '15px', fontWeight: 'bold', padding: '8px 12px' }}
          >
            Afiliados
          </button>
          <button 
            onClick={() => setVista('formulario')} 
            style={{ backgroundColor: '#ea580c', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(234, 88, 12, 0.4)' }}
          >
            Módulo de Consultas
          </button>
        </nav>
      </header>

      {/* Contenido Principal */}
      <main style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box', flex: 1 }}>
        
        {vista === 'inicio' && (
          <div>
            {/* Banner Principal */}
            <div style={{ backgroundColor: '#1e293b', padding: '60px 40px', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.4)', textAlign: 'center', marginBottom: '40px', border: '1px solid #334155' }}>
              <h1 style={{ color: '#ffffff', fontSize: '36px', marginBottom: '15px', fontWeight: '800' }}>
                Bienvenido a DataLinkGo
              </h1>
              <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '750px', margin: '0 auto 30px auto', lineHeight: '1.6' }}>
                Tu plataforma centralizada de consultas, catálogos de kits digitales, herramientas de afiliación y alianzas estratégicas comerciales.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => setVista('formulario')}
                  style={{ backgroundColor: '#ea580c', color: '#ffffff', border: 'none', padding: '14px 30px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 14px rgba(234, 88, 12, 0.4)' }}
                >
                  Acceder a Consultas y Requerimientos 🚀
                </button>
              </div>
            </div>

            {/* Cuadrícula de Opciones / Módulos Interactivos */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px', marginBottom: '40px' }}>
              
              <div 
                onClick={() => setVista('kits')}
                style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '14px', boxShadow: '0 6px 20px rgba(0,0,0,0.3)', border: '1px solid #334155', cursor: 'pointer', transition: 'transform 0.2s' }}
              >
                <div style={{ fontSize: '28px', marginBottom: '15px' }}>📦</div>
                <h3 style={{ color: '#ffffff', fontSize: '18px', marginBottom: '10px', fontWeight: '700' }}>Catálogo de Kits Digitales</h3>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>
                  Explora recursos digitales, plantillas y guías especializadas para potenciar tus proyectos comerciales y de afiliados.
                </p>
                <span style={{ display: 'inline-block', marginTop: '15px', color: '#ea580c', fontWeight: 'bold', fontSize: '14px' }}>
                  Ver catálogo completo &rarr;
                </span>
              </div>

              <div 
                onClick={() => setVista('afiliados')}
                style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '14px', boxShadow: '0 6px 20px rgba(0,0,0,0.3)', border: '1px solid #334155', cursor: 'pointer', transition: 'transform 0.2s' }}
              >
                <div style={{ fontSize: '28px', marginBottom: '15px' }}>🔗</div>
                <h3 style={{ color: '#ffffff', fontSize: '18px', marginBottom: '10px', fontWeight: '700' }}>Plataforma de Afiliados</h3>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>
                  Conexión directa con pasarelas, enlaces estratégicos y herramientas de monetización optimizadas para tu negocio.
                </p>
                <span style={{ display: 'inline-block', marginTop: '15px', color: '#ea580c', fontWeight: 'bold', fontSize: '14px' }}>
                  Explorar herramientas &rarr;
                </span>
              </div>

              <div 
                onClick={() => setVista('formulario')}
                style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '14px', boxShadow: '0 6px 20px rgba(0,0,0,0.3)', border: '1px solid #334155', cursor: 'pointer', transition: 'transform 0.2s' }}
              >
                <div style={{ fontSize: '28px', marginBottom: '15px' }}>💬</div>
                <h3 style={{ color: '#ffffff', fontSize: '18px', marginBottom: '10px', fontWeight: '700' }}>Consultas y Tarifarios</h3>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>
                  Canal directo de comunicación para solicitar cotizaciones a la medida y requerimientos específicos.
                </p>
                <span style={{ display: 'inline-block', marginTop: '15px', color: '#ea580c', fontWeight: 'bold', fontSize: '14px' }}>
                  Ir al módulo de consultas &rarr;
                </span>
              </div>

            </div>
          </div>
        )}

        {/* Vista de Kits Digitales */}
        {vista === 'kits' && (
          <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '16px', border: '1px solid #334155' }}>
            <button 
              onClick={() => setVista('inicio')}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold' }}
            >
              &larr; Volver al inicio
            </button>
            <h2 style={{ fontSize: '26px', marginBottom: '15px', color: '#ffffff' }}>📦 Catálogo de Kits Digitales</h2>
            <p style={{ color: '#94a3b8', marginBottom: '25px', lineHeight: '1.6' }}>
              Aquí tienes acceso a todos los recursos, plantillas de automatización, kits de marketing y herramientas digitales configuradas en el sistema.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '10px', border: '1px solid #334155' }}>
                <h4 style={{ color: '#ea580c', marginBottom: '10px' }}>Kit Emprendedor Pro</h4>
                <p style={{ color: '#94a3b8', fontSize: '13px' }}>Recursos esenciales para gestión comercial y estructuración de negocios digitales.</p>
              </div>
              <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '10px', border: '1px solid #334155' }}>
                <h4 style={{ color: '#ea580c', marginBottom: '10px' }}>Kit de Automatización</h4>
                <p style={{ color: '#94a3b8', fontSize: '13px' }}>Plantillas y flujos optimizados para captación de clientes y pasarelas.</p>
              </div>
            </div>
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <button 
                onClick={() => setVista('formulario')}
                style={{ backgroundColor: '#ea580c', color: '#fff', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Solicitar Kit Personalizado
              </button>
            </div>
          </div>
        )}

        {/* Vista de Afiliados */}
        {vista === 'afiliados' && (
          <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '16px', border: '1px solid #334155' }}>
            <button 
              onClick={() => setVista('inicio')}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold' }}
            >
              &larr; Volver al inicio
            </button>
            <h2 style={{ fontSize: '26px', marginBottom: '15px', color: '#ffffff' }}>🔗 Plataforma de Afiliados</h2>
            <p style={{ color: '#94a3b8', marginBottom: '25px', lineHeight: '1.6' }}>
              Conexiones estratégicas, pasarelas de pago integradas y enlaces de distribución de alto rendimiento.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '10px', border: '1px solid #334155' }}>
                <h4 style={{ color: '#ea580c', marginBottom: '10px' }}>Red de Distribución DLG</h4>
                <p style={{ color: '#94a3b8', fontSize: '13px' }}>Enlaces optimizados para programas de referidos y monetización directa.</p>
              </div>
              <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '10px', border: '1px solid #334155' }}>
                <h4 style={{ color: '#ea580c', marginBottom: '10px' }}>Alianzas Comerciales</h4>
                <p style={{ color: '#94a3b8', fontSize: '13px' }}>Gestión de convenios y tarifas preferenciales para socios.</p>
              </div>
            </div>
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <button 
                onClick={() => setVista('formulario')}
                style={{ backgroundColor: '#ea580c', color: '#fff', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Postularme como Afiliado
              </button>
            </div>
          </div>
        )}

        {/* Vista del Formulario de Consultas Interno */}
        {vista === 'formulario' && (
          <div style={{ maxWidth: '650px', margin: '0 auto', backgroundColor: '#1e293b', padding: '40px', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.4)', border: '1px solid #334155' }}>
            
            <button 
              onClick={() => setVista('inicio')}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              &larr; Volver a la plataforma principal
            </button>

            <h2 style={{ color: '#ffffff', fontSize: '24px', marginBottom: '8px', fontWeight: '800' }}>
              Módulo de Consultas y Solicitudes
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '25px', lineHeight: '1.5' }}>
              Completa los datos a continuación para procesar tu consulta, cotización o requerimiento específico en nuestros sistemas.
            </p>

            {enviado ? (
              <div style={{ backgroundColor: '#064e3b', border: '1px solid #059669', color: '#34d399', padding: '25px', borderRadius: '10px', textAlign: 'center', fontWeight: 'bold' }}>
                ¡Consulta enviada con éxito! Nos pondremos en contacto contigo muy pronto.
                <br /><br />
                <button 
                  onClick={() => { setEnviado(false); setVista('inicio'); }}
                  style={{ backgroundColor: '#059669', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
                >
                  Regresar al inicio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#cbd5e1', marginBottom: '8px' }}>
                    Nombre o Empresa *
                  </label>
                  <input 
                    type="text" 
                    name="nombre" 
                    required 
                    placeholder="Ej. Tu Nombre o Empresa"
                    style={{ width: '100%', padding: '14px', border: '1px solid #334155', borderRadius: '8px', fontSize: '15px', boxSizing: 'border-box', backgroundColor: '#0f172a', color: '#ffffff' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#cbd5e1', marginBottom: '8px' }}>
                    Correo electrónico *
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="tucorreo@dominio.com"
                    style={{ width: '100%', padding: '14px', border: '1px solid #334155', borderRadius: '8px', fontSize: '15px', boxSizing: 'border-box', backgroundColor: '#0f172a', color: '#ffffff' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#cbd5e1', marginBottom: '8px' }}>
                    Detalle de la consulta o requerimiento *
                  </label>
                  <textarea 
                    name="mensaje" 
                    required 
                    rows={4}
                    placeholder="Describe detalladamente qué necesitas consultar o solicitar..."
                    style={{ width: '100%', padding: '14px', border: '1px solid #334155', borderRadius: '8px', fontSize: '15px', boxSizing: 'border-box', resize: 'vertical', backgroundColor: '#0f172a', color: '#ffffff' }}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={cargando}
                  style={{ backgroundColor: '#ea580c', color: '#ffffff', border: 'none', padding: '15px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(234, 88, 12, 0.4)' }}
                >
                  {cargando ? 'Enviando consulta...' : 'Enviar Consulta'}
                </button>

              </form>
            )}

          </div>
        )}

      </main>

      {/* Pie de página */}
      <footer style={{ textAlign: 'center', padding: '25px', color: '#64748b', fontSize: '13px', borderTop: '1px solid #334155', backgroundColor: '#1e293b' }}>
        &copy; 2026 DataLinkGo. Todos los derechos reservados.
      </footer>

    </div>
  );
}
