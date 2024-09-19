<script lang="ts">
  import { sublineClasses } from "$lib/modules/constants";
  import Service from "./cards/Service.svelte";
  import ServiceList from "./ServiceList.svelte";
</script>

<div class="flex flex-col gap-4">
  <div class="flex flex-col items-center">
    <h2 class={sublineClasses}>Our Services</h2>
    <p class="text-muted-foreground text-center">
      Comprehensive property solutions for buying, selling, renting, renovating,
      or building, with expert guidance and personalized service every step of
      the way.
    </p>
  </div>
  <ServiceList />
</div>
