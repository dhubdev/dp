<script lang="ts">
  import LogoIcon from "./LogoIcon.svelte";
  import { Button } from "$lib/components/ui/button";
</script>

<a class="flex items-center gap-2 no-underline !p-0" href="/">
  <LogoIcon />
  <div class="flex flex-col leading-[1] text-primary dark:text-white">
    <p class="font-bold">Dhub</p>
    <span class="font-bold text-xxs">Property</span>
  </div>
</a>