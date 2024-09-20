<script lang="ts">
  import LogoIcon from "./LogoIcon.svelte";
  import { Button } from "$lib/components/ui/button";
</script>

<Button class="flex items-center gap-2 no-underline !p-0" variant="ghost" href="/">
  <LogoIcon />
  <div class="flex flex-col leading-[1] text-primary dark:text-white">
    <p class="font-bold">DHUB</p>
    <span class="font-bold text-xxs">PROPERTY</span>
  </div>
</Button>