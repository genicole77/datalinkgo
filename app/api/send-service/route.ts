import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Reenviar los datos del formulario a Formspree
    const formspreeResponse = await fetch('https://formspree.io/f/mljeypjv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body),
    });

    if (formspreeResponse.ok) {
      return NextResponse.json(
        { success: true, message: 'Solicitud enviada con éxito' },
        { status: 200 }
      );
    } else {
      const errorData = await formspreeResponse.json();
      console.error('Error en Formspree:', errorData);
      return NextResponse.json(
        { success: false, error: 'Error al enviar el correo' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error interno:', error);
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
