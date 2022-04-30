import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
//import { isValidToken } from '../../../utils/jws';

export async function middleware(req: NextRequest | any, ev: NextFetchEvent) {
  
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // console.log({ session });

  if (!session) {
    const requestedPage = req.page.name;
    const { origin } = req.nextUrl
    return NextResponse.redirect(`${origin}/auth/login?p=${ requestedPage }`); 
  }

  return NextResponse.next();

  /*  const { token = '' } = req.cookies;

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
    }  */
}
