<script lang="ts">
  import Tracker from "$lib/components/Tracker.svelte" 
  import Modal from "$lib/components/Modal.svelte"
  import type { PageServerData } from "./$types"

  let showModal = false;
  let showLogout = false

  export let data: PageServerData;
</script>

<main>
  <h1>This is the dashboard </h1>
  <button on:click={() => (showLogout = true)}>Log out</button>
  <Modal bind:showModal={showLogout}>
    <form method="POST" action="/auth/logout">
      <p>Are you sure?</p>
      <button type="submit">YES</button>
      <button on:click={() => (showLogout = false)} type="button">NO</button>
    </form>
  </Modal>
  <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
    {#each data.docs as doc}
      <Tracker name={doc.name} link={`/dashboard/${doc.uid}`} />
    {/each}
    <button on:click={() => (showModal=true)} class="w-full flex flex-col aspect-square border-2 border-dashed border-black rounded-lg items-center justify-center hover:bg-gray-100 duration-200 font-bold text-2xl text-center">
      <svg class="h-1/4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
      </svg>
      Add New
    </button>
    <Modal bind:showModal={showModal}>
      <form method="POST">
        <input type="text" name="name" required minlength="1" maxlength="20" placeholder="The name: " />
        <button>Continue</button>
      </form>
    </Modal>
  </section>
</main>
