<script lang="ts">
  export let showModal;

  let dialog;

  $: if (dialog && showModal) dialog.showModal()
  $: if (!showModal && dialog) dialog.close()

  function onKeyDown(e) {
    if (e.keyCode == 27) showModal = false
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:click|self={() => (showModal = false)} on:close={() => (showModal = false)}>
  <button on:click={() => (showModal = false)}>Close</button>
  <slot />
</dialog>

<svelte:window on:keydown|self|preventDefault={onKeyDown} />
