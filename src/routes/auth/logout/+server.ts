import { auth } from "$lib/firebase";
import { redirect, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = (async () => {
  await auth.signOut()
  redirect(302, "/")
})
