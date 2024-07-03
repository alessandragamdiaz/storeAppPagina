// import {clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher(["/api/:path*"]); //addYourSpecificRoutesInHereInTheFormOfAnArrayElement

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) {
//     auth().protect();
//   }
// });

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],}

// import { authMiddleware } from "@clerk/nextjs/server";
 
// export default authMiddleware({
//   publicRoutes: ["/:path*"]
// });

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher([
//   "/api/webhooks",
//   "/sign-in(.*)",
//   "/sign-up(.*)",
//   "/",
// ]);

// export default clerkMiddleware((auth, req) => {
//   if (!isPublicRoute(req)) {
//     auth().protect();
//   }
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};