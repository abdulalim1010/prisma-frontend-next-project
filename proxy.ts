import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";


export function proxy(request: NextRequest) {

  const pathname = request.nextUrl.pathname;

  const token = request.cookies.get("accessToken")?.value;


  // Protected route
  if (
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/tenant-dashboard") ||
    pathname.startsWith("/admin-dashboard")
  ) {


    if (!token) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }


    const decoded = jwt.decode(token) as {
      role?: string;
    };


    const role = decoded?.role;



    if (
      pathname.startsWith("/admin-dashboard") &&
      role !== "ADMIN"
    ) {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }


    if (
      pathname.startsWith("/tenant-dashboard") &&
      role !== "TENANT"
    ) {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }


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
  matcher:[
    "/dashboard/:path*",
    "/tenant-dashboard/:path*",
    "/admin-dashboard/:path*",
  ],
};