const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

export async function query(endpoint: string) {
  // Con Strapi 5 es vital manejar los tokens para el modo producción
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const response = await fetch(`${BASE_URL}/api/${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Strapi Fetch Error:", error);
    throw error; // Es mejor lanzar el error que devolver null para que Next.js lo maneje
  }
}
