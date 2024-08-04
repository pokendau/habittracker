import type { LayoutServerLoad } from "./$types";
import { user } from "$lib/stores/auth";
import { redirect } from "@sveltejs/kit";


export const load = (async () => {
  const unsub = user.subscribe((user) => {
    if (user) {
      redirect(302, "/")
    }
  })
  unsub()
}) satisfies LayoutServerLoad
