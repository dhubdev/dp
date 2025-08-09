<script lang="ts">
  import Embla from "./slider/Embla.svelte";
  import { cn } from "$lib/utils";
    import type { iSlider } from "$lib/modules";

  let className: string = ""
  export { className as class }
  export let sliders: iSlider[] = []

</script>

<div class={cn("bg-white dark:bg-background p-4 rounded-lg relative backdrop-blur-sm bg-gradient-to-br from-white to-slate-50 dark:from-primary/30 dark:to-primary/10", className)}>
  <h1
    class="text-2xl md:text-4xl font-bold mb-4 text-primary dark:text-white text-center md:text-start">
    Welcome to Dhub Property
  </h1>
  <p
    class="md:text-xl lg:text-2xl text-muted-foreground mb-8 text-center md:text-start">
    Your Premier Destination for Cleaning and Housing Solutions </p>
  <Embla {sliders} />
</div>