<script lang="ts">
  import type { iService } from "$lib/modules/interface";
  import { Button } from "$lib/components/ui/button";

  export let service: iService;

  const { cta, href, image, name, subline, target } = service;

  const style = `background:url(${image}) no-repeat;background-position:center;background-size:cover`
</script>

<a {href} {target} aria-label={name} class="flex flex-col gap-4 h-full">
  <div class="aspect-video rounded-lg w-full" {style} />
  <div class="flex flex-col gap-4">
    <div>
      <h4 class="font-semibold">{name}</h4>
      <p class="line-clamp-3 text-sm text-muted-foreground">{subline}</p>
    </div>
  </div>
  <Button class="mt-auto w-full md:w-fit">Learn more</Button>
</a>
