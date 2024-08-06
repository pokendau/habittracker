<script lang="ts">
  export let name = "Unknown";
  export let link ="/";
</script>

<a href={link} class="w-full flex aspect-square border-2 border-black rounded-lg items-center justify-center hover:bg-gray-100 duration-200 font-bold text-2xl text-center">
  {name}
</a>
