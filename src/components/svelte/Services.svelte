<script lang="ts">
  import { sublineClasses } from "$lib/modules/constants";
  import { services } from "$lib/modules/constants";
  import Service from "./cards/Service.svelte";
</script>

<div class="flex flex-col gap-4">
  <div class="flex flex-col items-center">
    <h2 class={sublineClasses}>Our Services</h2>
    <p class="text-muted-foreground text-center">
      Comprehensive property solutions for buying, selling, renting, renovating, or building, with expert guidance and personalized service every step of the way.
    </p>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
  >
    {#each services as service, i}
      <Service {service} />
    {/each}
  </div>
</div>
