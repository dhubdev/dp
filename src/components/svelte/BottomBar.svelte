<script lang="ts">
  import ModeToggle from "./ModeToggle.svelte";
  import MobileDrawer from "./MobileDrawer.svelte";
  import { onMount } from "svelte";
  import Skeleton from "../ui/skeleton/skeleton.svelte";

  let mounted = new Promise((resolve, reject) => {
    onMount(() => resolve(true));
  });
</script>

<div
  class="fixed bottom-0 left-1/2 -translate-x-1/2 h-16 flex items-center justify-between z-[2] bg-primary w-full px-4"
>
  {#await mounted}
    <Skeleton class="w-10 h-10 rounded-full" />
    <Skeleton class="w-10 h-10 rounded-full" />
  {:then value}
    <ModeToggle
      iconClass="stroke-black"
      class="flex lg:hidden stroke-none outline-none !bg-white"
    />
    <MobileDrawer />
  {/await}
</div>
