import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Datos recibidos en el servidor:', body);

    // Aquí puedes procesar o guardar los datos luego si deseas

    return NextResponse.json(
      { success: true, message: 'Solicitud enviada con éxito' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
