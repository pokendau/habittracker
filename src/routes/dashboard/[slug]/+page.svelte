<script lang="ts">
import type {PageServerData} from "./$types"
import Modal from "$lib/components/Modal.svelte"

export let data: PageServerData;

let showModal = false;
</script>

<h1>The name is {data.tracker.name}</h1>
<h2>The habits:</h2>

<hr />

<button on:click={() => (showModal = true)}>Add new Habit</button>
<Modal bind:showModal={showModal}>
  <form method="POST">
    <input type="text" name="name" placeholder="The name of the habit: " minlength="1" maxlength="10" required />
    <button>Add new Habit</button>
  </form>
</Modal>
