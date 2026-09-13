  export default function Hugo() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8F9FA', fontFamily: 'Arial, sans-serif' }}>
      {/* Barra superior */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <h2 style={{ margin: 0, color: '#0F172A', fontSize: '1.5rem' }}>DataLinkGo</h2>
        <div style={{ fontSize: '0.9rem', color: '#64748B', backgroundColor: '#F1F5F9', padding: '6px 14px', borderRadius: '20px', fontWeight: '500' }}>Sistema Activo</div>
      </header>

      {/* Sección Principal */}
      <section style={{ textAlign: 'center', padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.8rem', color: '#0F172A', marginBottom: '15px' }}>
          Conecta tus datos, potencia tu <span style={{ color: '#2563EB' }}>futuro digital</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.6', marginBottom: '30px' }}>
          Tu centro de acceso rápido para herramientas, recursos y plataformas tecnológicas.
        </p>
      </section>

      {/* Directorio de Enlaces y Módulos */}
      <section style={{ padding: '10px 20px 40px', maxWidth: '1000px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.4rem', color: '#1E293B', marginBottom: '20px' }}>Directorio de Enlaces y Módulos</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          
          {/* Enlace 1 */}
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', background: '#FFFFFF', padding: '25px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'block', transition: 'transform 0.2s' }}>
            <h4 style={{ color: '#0284C7', marginBottom: '8px', marginTop: '0' }}>Canales y Contenido</h4>
            <p style={{ color: '#475569', fontSize: '0.9rem', margin: '0' }}>Acceso directo a producción de videos, historias y material multimedia.</p>
          </a>

          {/* Enlace 2 */}
          <a href="https://dash.cloudflare.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', background: '#FFFFFF', padding: '25px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'block' }}>
            <h4 style={{ color: '#0284C7', marginBottom: '8px', marginTop: '0' }}>Gestión de Dominios</h4>
            <p style={{ color: '#475569', fontSize: '0.9rem', margin: '0' }}>Panel de control de plataformas, enlaces web y configuraciones.</p>
          </a>

          {/* Enlace 3 */}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', background: '#FFFFFF', padding: '25px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'block' }}>
            <h4 style={{ color: '#0284C7', marginBottom: '8px', marginTop: '0' }}>Plataforma Digital y Vercel</h4>
            <p style={{ color: '#475569', fontSize: '0.9rem', margin: '0' }}>Monitoreo de despliegues, sistemas activos y automatización.</p>
          </a>

        </div>
      </section>
    </div>
  );
}
