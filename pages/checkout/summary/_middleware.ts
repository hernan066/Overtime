import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { isValidToken } from '../../../utils/jws';




export async function middleware( req: NextRequest, ev: NextFetchEvent ) {

    const { token = '' } = req.cookies;

    //return new Response ( 'Token:' + token)
    
    
    // return new Response('No autorizado', {
    //     status: 401
    // });

     try {
        await isValidToken( token );
        
        return NextResponse.next();

    } catch (error) {
        
        const { origin } = req.nextUrl
        const requestedPage = req.page.name;
        
        //return  Response.redirect(`${origin}/auth/login`);
        return NextResponse.redirect(`${origin}/auth/login?p=${ requestedPage }`); 
    } 

}