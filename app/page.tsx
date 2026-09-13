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
      <section style={{ padding: '10px 20px 40px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', color: '#334155', marginBottom: '30px', fontSize: '1.5rem' }}>Accesos Directos y Módulos</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          
          <div style={{ background: '#ffffff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h4 style={{ color: '#2563eb', margin: '0 0 10px 0', fontSize: '1.2rem' }}>📊 Panel de Analítica</h4>
            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0 0 15px 0' }}>Monitoreo de métricas, rendimiento y estadísticas en tiempo real.</p>
            <span style={{ fontSize: '0.85rem', color: '#2563eb', fontWeight: 'bold', background: '#eff6ff', padding: '6px 12px', borderRadius: '6px' }}>Módulo Habilitado</span>
          </div>

          <div style={{ background: '#ffffff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h4 style={{ color: '#2563eb', margin: '0 0 10px 0', fontSize: '1.2rem' }}>🔗 Directorio de Enlaces</h4>
            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0 0 15px 0' }}>Colección organizada de recursos web y accesos externos de interés.</p>
            <span style={{ fontSize: '0.85rem', color: '#2563eb', fontWeight: 'bold', background: '#eff6ff', padding: '6px 12px', borderRadius: '6px' }}>Módulo Habilitado</span>
          </div>

          <div style={{ background: '#ffffff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h4 style={{ color: '#2563eb', margin: '0 0 10px 0', fontSize: '1.2rem' }}>🛠️ Centro de Utilidades</h4>
            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0 0 15px 0' }}>Herramientas de automatización y utilidades digitales a la medida.</p>
            <span style={{ fontSize: '0.85rem', color: '#2563eb', fontWeight: 'bold', background: '#eff6ff', padding: '6px 12px', borderRadius: '6px' }}>Módulo Habilitado</span>
          </div>

        </div>
      </section>

      {/* Sección de Contacto */}
      <section style={{ padding: '40px 20px 60px 20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ background: '#ffffff', padding: '40px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#0f172a', marginBottom: '10px', fontSize: '1.5rem' }}>¿Tienes algún proyecto en mente?</h3>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '25px' }}>Comunícate con nosotros para integrar nuevas soluciones a tu medida.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Tu nombre" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} />
            <input type="email" placeholder="Tu correo electrónico" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} />
            <textarea placeholder="¿En qué podemos ayudarte?" rows={3} style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', resize: 'vertical' }}></textarea>
            <button onClick={() => alert('¡Mensaje preparado con éxito! Próximamente conectado al servidor.')} style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', marginTop: '5px' }}>
              Enviar Mensaje
            </button>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer style={{ textAlign: 'center', padding: '30px', color: '#94a3b8', fontSize: '0.9rem', borderTop: '1px solid #e2e8f0' }}>
        &copy; 2026 DataLinkGo. Todos los derechos reservados.
      </footer>
    </main>
  );
}
