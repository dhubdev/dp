<script lang="ts">
  import { Sun, Moon } from "lucide-svelte";

  import { toggleMode } from "mode-watcher";
  import { Button, buttonVariants } from "$lib/components/ui/button";
  import { Skeleton } from "$lib/components/ui/skeleton";
  import { cn } from "$lib/utils";
  import { onMount } from "svelte";

  let className: string = "";

  export { className as class };

  let mounted = new Promise((resolve, reject) => {
    onMount(() => resolve(true));
  });

  const onClick = () => {
    console.log("Clicking button");
  };
</script>

{#await mounted}
  <Skeleton
    class={cn(
      buttonVariants({ variant: "ghost", size: "icon" }),
      "rounded-full",
    )}
  />
{:then _}
  <Button
    on:click={toggleMode}
    variant="outline"
    size="icon"
    on:click={onClick}
    class={cn(className, "rounded-full")}
  >
    <Moon
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <Sun
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
{/await}
