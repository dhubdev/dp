<script lang="ts">
  import Embla from "./slider/Embla.svelte";
  import { cn } from "$lib/utils";
    import type { iSlider } from "$lib/modules";

  let className: string = ""
  export { className as class }
  export let sliders: iSlider[] = []

</script>

<div class={cn("bg-white dark:bg-background p-4 rounded-lg", className)}>
  <h1
    class="text-2xl md:text-4xl font-bold mb-4 text-primary dark:text-white text-center md:text-start">
    DHUB PROPERTY
  </h1>
  <p
    class="md:text-xl lg:text-2xl text-muted-foreground mb-8 text-center md:text-start">
    Your premier destination for housing solutions
  </p>
  <Embla {sliders} />
</div>