export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'Arial, sans-serif', color: '#1e293b' }}>
      {/* Barra superior */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <h2 style={{ margin: 0, color: '#0f172a', fontSize: '1.5rem' }}>DataLinkGo</h2>
        <span style={{ fontSize: '0.9rem', color: '#64748b', backgroundColor: '#f1f5f9', padding: '6px 12px', borderRadius: '20px' }}>En Desarrollo 🚀</span>
      </header>

      {/* Sección Hero / Principal */}
      <section style={{ textAlign: 'center', padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '20px', fontWeight: 'bold' }}>
          Conecta tus datos, potencia tu <span style={{ color: '#2563eb' }}>futuro digital</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: '1.6', marginBottom: '40px' }}>
          La plataforma centralizada que estabas esperando para optimizar herramientas, enlaces y recursos tecnológicos en un solo lugar.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <span style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            Próximamente disponible
          </span>
        </div>
      </section>

      {/* Sección de características */}
      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#1e293b', marginTop: 0 }}>⚡ Acceso Rápido</h3>
          <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Optimizado para ofrecer la máxima velocidad de carga y navegación fluida desde cualquier dispositivo.</p>
        </div>
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#1e293b', marginTop: 0 }}>🔒 Seguridad Total</h3>
          <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Infraestructura en la nube respaldada con protocolos modernos y certificados SSL activos.</p>
        </div>
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#1e293b', marginTop: 0 }}>📈 Escalable</h3>
          <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Diseñado para crecer modularmente e integrar nuevas funciones a medida que las necesites.</p>
        </div>
      </section>

      {/* Pie de página */}
      <footer style={{ textAlign: 'center', padding: '40px', color: '#94a3b8', fontSize: '0.9rem', borderTop: '1px solid #e2e8f0', marginTop: '60px' }}>
        &copy; 2026 DataLinkGo. Todos los derechos reservados.
      </footer>
    </main>
  );
}
