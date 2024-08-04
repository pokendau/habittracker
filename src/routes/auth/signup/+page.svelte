<script lang="ts">
	import type { ActionData } from "./$types";

 
  export let form: ActionData;
</script>

<form method="POST" action="?/signup">
  {#if form?.missing}
    <p>The email and password fields are required</p>
  {/if}
  <label>
    Email
    <input name="email" type="email" />
  </label>

  <label>
    Password 
    <input name="password" type="password" />
  </label>
  <button>Log in</button>
</form>
