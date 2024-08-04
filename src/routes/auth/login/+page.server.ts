import { auth } from "$lib/firebase"
import { user } from "$lib/stores/auth"
import { fail, redirect, type Actions } from "@sveltejs/kit"
import { signInWithEmailAndPassword } from "firebase/auth"

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const email = data.get("email")
    const password = data.get("password")

    if (!email || !password) {
      return fail(400, { email, missing: true })
    }

    const currentUser = await signInWithEmailAndPassword(auth, email.toString(), password.toString())
    user.set(currentUser.user)

    redirect(302, "/dashboard")
  }
} satisfies Actions 
