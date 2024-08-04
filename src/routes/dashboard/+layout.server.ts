import { user } from "$lib/stores/auth";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async () => {
  const unsub = user.subscribe((sub) => {
    if (!sub) {
      redirect(302, "/auth/login")
    }
  })
  unsub()

}) satisfies LayoutServerLoad;
