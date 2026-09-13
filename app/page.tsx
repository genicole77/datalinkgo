export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#1F2937', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Barra superior */}
      <header style={{ backgroundColor: '#B91C1C', color: '#FFFFFF', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800', letterSpacing: '1px' }}>DataLinkGo</h2>
        <span style={{ backgroundColor: '#F59E0B', color: '#111827', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700' }}>Sistema Activo</span>
      </header>

      {/* Sección Principal */}
      <section style={{ textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(135deg, #FEF2F2 0%, #FFFBEB 100%)', borderBottom: '4px solid #F59E0B' }}>
        <h1 style={{ fontSize: '2.8rem', color: '#B91C1C', marginBottom: '15px', fontWeight: '900' }}>
          Conecta tus datos, potencia tu futuro digital
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#4B5563', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          Tu centro de acceso rápido para herramientas, recursos y plataformas tecnológicas.
        </p>
      </section>

      {/* Directorio de Enlaces y Módulos */}
      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.6rem', color: '#B91C1C', borderBottom: '3px solid #F59E0B', paddingBottom: '10px', marginBottom: '30px' }}>
          Directorio de Enlaces y Módulos
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          
          {/* Enlace 1 */}
          <div style={{ backgroundColor: '#FFFFFF', border: '2px solid #F3F4F6', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderTop: '6px solid #B91C1C' }}>
            <h4 style={{ color: '#B91C1C', marginTop: 0, fontSize: '1.2rem' }}>Canales y Contenido</h4>
            <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: '1.5' }}>Acceso directo a producción de videos, historias y material multimedia.</p>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#F97316', color: '#FFFFFF', padding: '10px 18px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', marginTop: '10px' }}>
              Ir a Canales
            </a>
          </div>

          {/* Enlace 2 */}
          <div style={{ backgroundColor: '#FFFFFF', border: '2px solid #F3F4F6', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderTop: '6px solid #F59E0B' }}>
            <h4 style={{ color: '#D97706', marginTop: 0, fontSize: '1.2rem' }}>Gestión de Dominios</h4>
            <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: '1.5' }}>Panel de control de plataformas, enlaces web y configuraciones.</p>
            <a href="https://www.namecheap.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#F59E0B', color: '#111827', padding: '10px 18px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', marginTop: '10px' }}>
              Ver Dominios
            </a>
          </div>

          {/* Enlace 3 */}
          <div style={{ backgroundColor: '#FFFFFF', border: '2px solid #F3F4F6', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderTop: '6px solid #B91C1C' }}>
            <h4 style={{ color: '#B91C1C', marginTop: 0, fontSize: '1.2rem' }}>Plataforma Digital y Vercel</h4>
            <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: '1.5' }}>Monitoreo de despliegues, sistemas activos y automatización.</p>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#B91C1C', color: '#FFFFFF', padding: '10px 18px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', marginTop: '10px' }}>
              Abrir Vercel
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
