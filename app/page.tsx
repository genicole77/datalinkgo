import React, { useState } from 'react';

export default function ActualizarPagina() {
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
        headers: {
          'Accept': 'application/json'
        }
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
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        
        <h1 style={{ color: '#0f172a', fontSize: '24px', marginBottom: '10px', textAlign: 'center' }}>
          DataLinkGo - Solicitud de Tarifario y Alianzas
        </h1>
        <p style={{ color: '#475569', fontSize: '14px', marginBottom: '25px', textAlign: 'center' }}>
          Déjanos tus datos y cuéntanos cuáles son tus necesidades o requerimientos específicos para ponernos en contacto contigo de inmediato.
        </p>

        {enviado ? (
          <div style={{ backgroundColor: '#dcfce7', border: '1px solid #22c55e', color: '#15803d', padding: '20px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
            ¡Solicitud enviada con éxito! Nos pondremos en contacto contigo muy pronto.
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
                placeholder="Ej. Autopartes Genicole"
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
                ¿Cuáles son tus necesidades o consultas específicas? *
              </label>
              <textarea 
                name="mensaje" 
                required 
                rows={4}
                placeholder="Cuéntanos tus requerimientos, dudas o lo que necesitas resolver..."
                style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }}
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={cargando}
              style={{ backgroundColor: '#ea580c', color: '#ffffff', border: 'none', padding: '14px', borderRadius: '6px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' }}
            >
              {cargando ? 'Enviando...' : 'Enviar Solicitud'}
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
