
export async function POST(state:Boolean) {
  const res = await fetch('https://backend.thinger.io/v3/users/rtaufiqulrtrh/devices/Vector/resources/D0', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTc2NTIwOTksImlhdCI6MTY5NzY0NDg5OSwicm9sZSI6InVzZXIiLCJ1c3IiOiJydGF1ZmlxdWxydHJoIn0.TQEm5aDhGolsfGBjMFrEq2G-ERUrt4BG5vHQofRrOZ8'
    },
    body: JSON.stringify({ request: state }),
  })
 
  const data = await res.json()
 
  return Response.json(data)
}