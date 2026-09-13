export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#1F2937', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Barra superior */}
      <header style={{ backgroundColor: '#B91C1C', color: '#FFFFFF', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800' }}>DataLinkGo</h2>
        <span style={{ backgroundColor: '#F59E0B', color: '#111827', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700' }}>Sistema Activo</span>
      </header>

      {/* Sección Principal */}
      <section style={{ textAlign: 'center', padding: '60px 20px', background: '#FEF2F2', borderBottom: '4px solid #F59E0B' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#B91C1C', marginBottom: '15px', fontWeight: '900' }}>
          Conecta tus datos, potencia tu futuro digital
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#4B5563', maxWidth: '700px', margin: '0 auto' }}>
          Tu centro de acceso rápido para herramientas, recursos y plataformas tecnológicas.
        </p>
      </section>

      {/* Directorio de Enlaces */}
      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.5rem', color: '#B91C1C', borderBottom: '3px solid #F59E0B', paddingBottom: '10px', marginBottom: '30px' }}>
          Directorio de Enlaces y Módulos
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          
          <div style={{ backgroundColor: '#FFFFFF', border: '2px solid #F3F4F6', borderRadius: '12px', padding: '20px', borderTop: '6px solid #B91C1C' }}>
            <h4 style={{ color: '#B91C1C', marginTop: 0 }}>Canales y Contenido</h4>
            <p style={{ color: '#4B5563', fontSize: '0.9rem' }}>Acceso directo a producción de videos, historias y material multimedia.</p>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#F97316', color: '#FFFFFF', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', marginTop: '10px' }}>
              Ir a Canales
            </a>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', border: '2px solid #F3F4F6', borderRadius: '12px', padding: '20px', borderTop: '6px solid #F59E0B' }}>
            <h4 style={{ color: '#D97706', marginTop: 0 }}>Gestión de Dominios</h4>
            <p style={{ color: '#4B5563', fontSize: '0.9rem' }}>Panel de control de plataformas, enlaces web y configuraciones.</p>
            <a href="https://www.namecheap.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#F59E0B', color: '#111827', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', marginTop: '10px' }}>
              Ver Dominios
            </a>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', border: '2px solid #F3F4F6', borderRadius: '12px', padding: '20px', borderTop: '6px solid #B91C1C' }}>
            <h4 style={{ color: '#B91C1C', marginTop: 0 }}>Plataforma Digital</h4>
            <p style={{ color: '#4B5563', fontSize: '0.9rem' }}>Monitoreo de despliegues, sistemas activos y automatización.</p>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#B91C1C', color: '#FFFFFF', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', marginTop: '10px' }}>
              Abrir Vercel
            </a>
          </div>

        </div>

        {/* SECCIÓN NUEVA: WHATSAPP Y FORMULARIO */}
        <h3 style={{ fontSize: '1.5rem', color: '#B91C1C', borderBottom: '3px solid #F59E0B', paddingBottom: '10px', marginBottom: '30px' }}>
          💬 Anúnciate en Datalinkgo
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          
          <div style={{ backgroundColor: '#FFFBEB', border: '2px solid #F59E0B', borderRadius: '12px', padding: '25px' }}>
            <h4 style={{ color: '#B91C1C', marginTop: 0 }}>Contacto Inmediato</h4>
            <p style={{ color: '#4B5563', fontSize: '0.9rem', marginBottom: '20px' }}>
              ¿Quieres negociar un espacio publicitario de forma rápida? Escríbenos al chat.
            </p>
            <a href="https://wa.me/?text=Hola%20DataLinkGo,%20estoy%20interesado%20en%20espacios%20publicitarios." target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', backgroundColor: '#25D366', color: '#FFFFFF', padding: '10px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700' }}>
              Hablar por WhatsApp
            </a>
          </div>

          <div style={{ backgroundColor: '#FFFBEB', border: '2px solid #F59E0B', borderRadius: '12px', padding: '25px' }}>
            <h4 style={{ color: '#B91C1C', marginTop: 0 }}>Formulario de Solicitud</h4>
            <p style={{ color: '#4B5563', fontSize: '0.9rem', marginBottom: '15px' }}>
              Déjanos tus datos corporativos para enviarte nuestro tarifario.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input type="text" placeholder="Nombre de tu Marca" style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #D1D5DB' }} />
              <input type="email" placeholder="Correo electrónico" style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #D1D5DB' }} />
              <button style={{ backgroundColor: '#F97316', color: '#FFFFFF', border: 'none', padding: '10px', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}>
                Enviar Solicitud
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Pie de página */}
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#1F2937', color: '#F9FAFB', marginTop: '40px' }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>DataLinkGo © 2026 — Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}
