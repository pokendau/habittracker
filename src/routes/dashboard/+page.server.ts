import type { Actions } from "@sveltejs/kit";
import { db, auth } from "$lib/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import type { PageServerLoad } from "./$types";
import type { Doc } from "$lib/customTypes";

export const actions = {
  default: (async ({ request }) => {
    const data = await request.formData()

    try {
      await addDoc(collection(db, "trackers"), {
        name: data.get("name"),
        habits: {},
        userId: auth.currentUser?.uid
      })
    } catch (error) {
      console.log(`Error in inserting document ${error}`)
    }
  })
} satisfies Actions;

export const load: PageServerLoad = (async () => {
  const q = query(collection(db, "trackers"), where("userId", "==", auth.currentUser?.uid))
  const querySnapshot = await getDocs(q)
  const docs: Array<Doc> = []

  querySnapshot.forEach((doc) => {
    const d: Doc = {
      name: "", uid: ""
    }
    const data = doc.data()
    d.name = data.name
    d.uid = doc.id

    docs.push(d)
  })

  return {
    docs: docs
  };
})
