<script lang="ts">
  import type { iServiceCard } from "$lib/modules/interface";
  import Resizable from "../Resizable.svelte";

  export let props: iServiceCard[] = [];
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
  {#if props.length > 1}
    {#each props as service, i}
      <Resizable {service} />
    {/each}
  {:else}
    {#each props as service, i}
      <Resizable class="lg:col-span-2" {service} />
    {/each}
  {/if}
</div>
