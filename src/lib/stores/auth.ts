import { auth } from "$lib/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { writable, type Writable } from "svelte/store";

export const user: Writable<User | null> = writable(null)

onAuthStateChanged(auth, (firebaseUser) => {
  if (firebaseUser) {
    user.set(firebaseUser)
  } else {
    user.set(null)
  }
})
