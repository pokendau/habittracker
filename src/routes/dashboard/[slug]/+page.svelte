<script lang="ts">
import type {PageServerData} from "./$types"

export let data: PageServerData;

</script>

<h1>The name is {data.tracker.name}</h1>
