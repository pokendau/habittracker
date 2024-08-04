import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { auth } from '$lib/firebase';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { user } from '$lib/stores/auth';

export const actions = {
  signup: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

    if (!email || !password) {
      return fail(400, { email, missing: true });
    }

    const userCredentials = await createUserWithEmailAndPassword(
      auth, email.toString(), password.toString()
    )
    const currentUser = userCredentials.user
    await sendEmailVerification(currentUser);
    user.set(currentUser)

    redirect(302, "/")
  }
} satisfies Actions;
