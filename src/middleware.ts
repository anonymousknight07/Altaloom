import { clerkMiddleware,createRouteMatcher} from "@clerk/nextjs/server";

const isProtectedRouter = createRouteMatcher([
  '/'
])

export default clerkMiddleware((auth,req)=> {
  if(isProtectedRouter(req)){
    auth().protect()
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}