import { doc, getDoc, updateDoc } from "firebase/firestore";
import type { PageServerLoad } from "../$types";
import { db } from "$lib/firebase";
import type { RouteParams } from "./$types";
import { error, fail, type Actions } from "@sveltejs/kit";
import type { Habit } from "$lib/customTypes";

export const load: PageServerLoad = (async ({ params }) => {
  const { slug } = params as RouteParams
  const tracker = await getDoc(doc(db, "trackers", slug))

  if (!tracker.exists()) {
    error(404, "Not found")
  }

  return {
    tracker: {
      name: tracker.get("name")
    }
  }
})

export const actions = {
  default: (async ({ params, request }) => {
    const { slug } = params as RouteParams

    const data = await request.formData()
    const ref = doc(db, "trackers", slug)
    const name = data.get("name")?.toString()

    if (!name) {
      return fail(400, { missing: true })
    }
    const habit: Habit = {
      lastChecked: new Date(),
      streak: 0,
      longestStreak: 0,
    }

    await updateDoc(ref, {
      [`habits.${name}`]: habit,
    })

    return { success: true }
  })
} satisfies Actions;
