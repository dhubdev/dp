<script lang="ts">
  import type { iListing } from "$lib/modules/interface";
  import Beds from "../icons/Beds.svelte";
  import Bath from "../icons/Bath.svelte";

  export let listing: iListing

  const { address, bath, beds, images, name, oldPrice, price, details, tags, type } = listing
</script>

<div class="flex flex-col gap-4">
  <img src={images[0]} alt={name} class="aspect-square w-full rounded-xl md:rounded-3xl"/>

  <div>
    <h3 class="my-0 font-bold">{price}</h3>
    <h4>{name}</h4>
    <p class="line-clamp-1 text-sm text-muted-foreground">{address}</p>
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-1 text-sm text-muted-foreground">
        <Beds class="!fill-muted-foreground" />
        <span class="capitalize">{beds}</span>
        <span>beds</span>
      </div>
      <div class="flex items-center gap-1 text-sm text-muted-foreground">
        <Bath class="!fill-muted-foreground" />
        <span class="capitalize">{bath}</span>
        <span>bath</span>
      </div>
    </div>
  </div>
</div>