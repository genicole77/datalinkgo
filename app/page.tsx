export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'Arial, sans-serif', color: '#1e293b' }}>
      {/* Barra superior */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <h2 style={{ margin: 0, color: '#0f172a', fontSize: '1.5rem' }}>DataLinkGo</h2>
        <span style={{ fontSize: '0.9rem', color: '#16a34a', backgroundColor: '#dcfce7', padding: '6px 12px', borderRadius: '20px', fontWeight: 'bold' }}>Sistema Activo 🟢</span>
      </header>

      {/* Sección Hero / Principal */}
      <section style={{ textAlign: 'center', padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.8rem', color: '#0f172a', marginBottom: '15px', fontWeight: 'bold' }}>
          Conecta tus datos, potencia tu <span style={{ color: '#2563eb' }}>futuro digital</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: '1.5', marginBottom: '30px' }}>
          Tu centro de acceso rápido para herramientas, recursos y plataformas tecnológicas.
        </p>
      </section>

      {/* Sección de Enlaces y Módulos Interactivos */}
      <section style={{ padding: '20px 20px 60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', color: '#334155', marginBottom: '30px', fontSize: '1.5rem' }}>Accesos Directos y Módulos</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          
          {/* Tarjeta 1 */}
          <a href="#analitica" style={{ textDecoration: 'none', background: '#ffffff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'block', transition: 'all 0.3s ease', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h4 style={{ color: '#2563eb', margin: '0 0 10px 0', fontSize: '1.2rem' }}>📊 Panel de Analítica</h4>
            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Monitoreo de métricas, rendimiento y estadísticas en tiempo real.</p>
          </a>

          {/* Tarjeta 2 */}
          <a href="#directorio" style={{ textDecoration: 'none', background: '#ffffff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'block', transition: 'all 0.3s ease', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h4 style={{ color: '#2563eb', margin: '0 0 10px 0', fontSize: '1.2rem' }}>🔗 Directorio de Enlaces</h4>
            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Colección organizada de recursos web y accesos externos de interés.</p>
          </a>

          {/* Tarjeta 3 */}
          <a href="#utilidades" style={{ textDecoration: 'none', background: '#ffffff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'block', transition: 'all 0.3s ease', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h4 style={{ color: '#2563eb', margin: '0 0 10px 0', fontSize: '1.2rem' }}>🛠️ Centro de Utilidades</h4>
            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Herramientas de automatización y utilidades digitales a la medida.</p>
          </a>

        </div>
      </section>

      {/* Pie de página */}
      <footer style={{ textAlign: 'center', padding: '30px', color: '#94a3b8', fontSize: '0.9rem', borderTop: '1px solid #e2e8f0' }}>
        &copy; 2026 DataLinkGo. Todos los derechos reservados.
      </footer>
    </main>
  );
}
