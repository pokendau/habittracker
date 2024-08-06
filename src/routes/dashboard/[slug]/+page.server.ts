import { doc, getDoc } from "firebase/firestore";
import type { PageServerLoad } from "../$types";
import { db } from "$lib/firebase";
import type { RouteParams } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = (async ({ params }) => {
  const { slug } = params as RouteParams
  const tracker = await getDoc(doc(db, "trackers", slug))

  if (!tracker.exists()) {
    error(404, "Not found")
  }

  return {
    tracker: tracker.data()
  }
})
