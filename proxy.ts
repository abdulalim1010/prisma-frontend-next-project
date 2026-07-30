import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";


export function proxy(request: NextRequest) {

  const pathname = request.nextUrl.pathname;

  const token = request.cookies.get("accessToken")?.value;


  // Protected routes
  const protectedRoutes = [
    "/dashboard",
    "/tenant-dashboard",
    "/admin-dashboard",
    "/premium",
  ];


  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );


  if (isProtectedRoute) {

    // No token
    if (!token) {

      return NextResponse.redirect(
        new URL("/login", request.url)
      );

    }


    const decoded = jwt.decode(token) as {
      role?: string;
    };


    const role = decoded?.role;



    // Admin Dashboard
    if (
      pathname.startsWith("/admin-dashboard") &&
      role !== "ADMIN"
    ) {

      return NextResponse.redirect(
        new URL("/", request.url)
      );

    }



    // Tenant Dashboard
    if (
      pathname.startsWith("/tenant-dashboard") &&
      role !== "TENANT"
    ) {

      return NextResponse.redirect(
        new URL("/", request.url)
      );

    }



    // Landlord Dashboard
    if (
      pathname.startsWith("/dashboard") &&
      role !== "LANDLORD"
    ) {

      return NextResponse.redirect(
        new URL("/", request.url)
      );

    }

  }


  return NextResponse.next();

}



export const config = {

  matcher: [
    "/dashboard/:path*",
    "/tenant-dashboard/:path*",
    "/admin-dashboard/:path*",
    "/premium/:path*",
  ],

};