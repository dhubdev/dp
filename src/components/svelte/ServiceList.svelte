<script lang="ts">
  import { services } from "$lib/modules/constants";
  import Service from "./cards/Service.svelte";
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
  {#each services as service, i}
    <Service {service} />
  {/each}
</div>
