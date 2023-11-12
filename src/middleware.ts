import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/project'],
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get('vector/token')?.value
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  } 
  // else if (request.nextUrl.pathname.startsWith('/login') && token) {
  //   return NextResponse.redirect(new URL('/', request.url))
  // }
  return NextResponse.next();
}
 