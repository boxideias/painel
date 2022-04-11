import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == '/') {
        return NextResponse.redirect('https://boxideias.com.br/')
    }
    else if (pathname == '/reports') {
        return NextResponse.redirect('https://boxideias.com.br/')
    }
    return NextResponse.next()
}