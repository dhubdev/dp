<script lang="ts">
  import LogoIconWhite from "./LogoIconWhite.svelte";
  import { Button } from "$lib/components/ui/button";
</script>

<Button class="flex items-center gap-2 no-underline !p-0" variant="ghost" href="/">
  <LogoIconWhite />
  <div class="md:flex flex-col leading-[1] text-primary dark:text-white hidden">
    <p class="font-bold">DHUB</p>
    <span class="font-bold text-xxs">PROPERTY</span>
  </div>
</Button>