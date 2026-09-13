'use client';

import React, { useState } from 'react';

export default function Home() {
  const [vista, setVista] = useState<'inicio' | 'formulario'>('inicio');
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
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Barra de Navegación Superior */}
      <header style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ backgroundColor: '#ea580c', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontWeight: 'bold', fontSize: '18px' }}>DLG</span>
          <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.5px' }}>DataLinkGo</span>
        </div>
        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <button 
            onClick={() => setVista('inicio')} 
            style={{ background: 'none', border: 'none', color: vista === 'inicio' ? '#ea580c' : '#cbd5e1', cursor: 'pointer', fontSize: '15px', fontWeight: 'bold' }}
          >
            Plataforma / Inicio
          </button>
          <button 
            onClick={() => setVista('formulario')} 
            style={{ backgroundColor: '#ea580c', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}
          >
            Módulo de Consultas
          </button>
        </nav>
      </header>

      {/* Contenido Dinámico */}
      <main style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        
        {vista === 'inicio' ? (
          <div>
            {/* Banner Principal de la Plataforma */}
            <div style={{ backgroundColor: '#ffffff', padding: '50px 40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center', marginBottom: '30px' }}>
              <h1 style={{ color: '#0f172a', fontSize: '32px', marginBottom: '15px' }}>
                Bienvenido a DataLinkGo
              </h1>
              <p style={{ color: '#475569', fontSize: '16px', maxWidth: '700px', margin: '0 auto 25px auto', lineHeight: '1.6' }}>
                Tu plataforma centralizada de consultas, catálogos de kits digitales, herramientas de afiliación y alianzas estratégicas comerciales.
              </p>
              <button 
                onClick={() => setVista('formulario')}
                style={{ backgroundColor: '#ea580c', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)' }}
              >
                Acceder a Consultas y Requerimientos 🚀
              </button>
            </div>

            {/* Cuadrícula de Opciones / Módulos */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              
              <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <div style={{ color: '#ea580c', fontSize: '24px', marginBottom: '10px' }}>📦</div>
                <h3 style={{ color: '#1e293b', marginBottom: '8px' }}>Catálogo de Kits Digitales</h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>
                  Explora recursos digitales, plantillas y guías especializadas para potenciar tus proyectos comerciales y de afiliados.
                </p>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <div style={{ color: '#ea580c', fontSize: '24px', marginBottom: '10px' }}>🔗</div>
                <h3 style={{ color: '#1e293b', marginBottom: '8px' }}>Plataforma de Afiliados</h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>
                  Conexión directa con pasarelas, enlaces estratégicos y herramientas de monetización optimizadas.
                </p>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <div style={{ color: '#ea580c', fontSize: '24px', marginBottom: '10px' }}>💬</div>
                <h3 style={{ color: '#1e293b', marginBottom: '8px' }}>Consultas y Tarifarios</h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>
                  Canal directo de comunicación para solicitar cotizaciones a la medida y requerimientos específicos.
                </p>
                <button 
                  onClick={() => setVista('formulario')}
                  style={{ marginTop: '15px', background: 'none', border: 'none', color: '#ea580c', fontWeight: 'bold', cursor: 'pointer', padding: '0', fontSize: '14px' }}
                >
                  Ir al módulo &rarr;
                </button>
              </div>

            </div>
          </div>
        ) : (
          /* Vista del Formulario de Consultas Interno */
          <div style={{ maxWidth: '650px', margin: '0 auto', backgroundColor: '#ffffff', padding: '35px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            
            <button 
              onClick={() => setVista('inicio')}
              style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold' }}
            >
              &larr; Volver a la plataforma
            </button>

            <h2 style={{ color: '#0f172a', fontSize: '22px', marginBottom: '8px' }}>
              Módulo de Consultas y Solicitudes - DataLinkGo
            </h2>
            <p style={{ color: '#475569', fontSize: '14px', marginBottom: '25px' }}>
              Completa los datos a continuación para procesar tu consulta, cotización o requerimiento específico en nuestros sistemas.
            </p>

            {enviado ? (
              <div style={{ backgroundColor: '#dcfce7', border: '1px solid #22c55e', color: '#15803d', padding: '20px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
                ¡Consulta enviada con éxito! Nos pondremos en contacto contigo muy pronto.
                <br /><br />
                <button 
                  onClick={() => { setEnviado(false); setVista('inicio'); }}
                  style={{ backgroundColor: '#15803d', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}
                >
                  Regresar al inicio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#334155', marginBottom: '5px' }}>
                    Nombre o Empresa *
                  </label>
                  <input 
                    type="text" 
                    name="nombre" 
                    required 
                    placeholder="Ej. Tu Nombre o Empresa"
                    style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#334155', marginBottom: '5px' }}>
                    Correo electrónico *
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="tucorreo@dominio.com"
                    style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#334155', marginBottom: '5px' }}>
                    Detalle de la consulta o requerimiento *
                  </label>
                  <textarea 
                    name="mensaje" 
                    required 
                    rows={4}
                    placeholder="Describe detalladamente qué necesitas consultar o solicitar..."
                    style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={cargando}
                  style={{ backgroundColor: '#ea580c', color: '#ffffff', border: 'none', padding: '14px', borderRadius: '6px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }}
                >
                  {cargando ? 'Enviando consulta...' : 'Enviar Consulta'}
                </button>

              </form>
            )}

          </div>
        )}

      </main>

      {/* Pie de página */}
      <footer style={{ textAlign: 'center', padding: '20px', color: '#94a3b8', fontSize: '13px', marginTop: '50px', borderTop: '1px solid #e2e8f0' }}>
        &copy; 2026 DataLinkGo. Todos los derechos reservados.
      </footer>

    </div>
  );
}
