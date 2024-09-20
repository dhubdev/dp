<script lang="ts">
  import type { iServiceCard } from "$lib/modules/interface";
  import Resizable from "../Resizable.svelte";

  export let props: iServiceCard[] = [];
  const { content, image, name } = props[0]
</script>

<div>
  {#if props.length > 1}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {#each props as service, i}
        <Resizable {service} />
      {/each}
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <img src={image} alt={name}/>
      <div class="prose dark:prose-invert">
        <h2>{name}</h2>
        {@html content}
      </div>
    </div>
  {/if}
</div>
