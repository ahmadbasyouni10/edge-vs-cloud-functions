export const runtime = 'edge'; // Set the runtime to edge

export async function GET() {
  return new Response(
    JSON.stringify({ message: 'Salah is the best player in the world' })
  )
}