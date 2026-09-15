import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, category, details } = body;

    console.log('Solicitud de servicio recibida:', { name, email, category, details });

    return NextResponse.json(
      { message: 'Solicitud procesada con éxito' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en la API send-service:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
