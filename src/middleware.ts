import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("middleware teste");
}

export const config = {
  matcher: ["/search/:path*"],
};
