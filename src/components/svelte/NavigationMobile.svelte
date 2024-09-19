<script lang="ts">
  import { Skeleton } from "./../ui/skeleton";
  import { Button, buttonVariants } from "../ui/button";
  import { onMount } from "svelte";
  import type { iNavLink } from "$lib/modules/interface";
  import { purify } from "$lib/modules/fxns";
  import { cn } from "$lib/utils";
  import { Home, User, Phone, PoundSterlingIcon, CogIcon } from "lucide-svelte";
  import AppsIcon from "./icons/AppsIcon.svelte";

  const navLinks: iNavLink[] = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "About",
      href: "/about",
      icon: User,
    },
    {
      name: "Services",
      href: "/services",
      icon: CogIcon,
    },
    // {
    //   name: "Projects",
    //   href: "/projects",
    //   icon: Cog,
    // },
    {
      name: "Investment",
      href: "/investment",
      icon: PoundSterlingIcon,
    },
    {
      name: "Contact Us",
      href: "/contact",
      icon: Phone,
    },
  ];

  $: mounted = false;
  $: pathname = "";

  const isCurrentPage = (href: string) => purify(href) === purify(pathname);

  onMount(() => {
    pathname = new URL(location.href).pathname;
    mounted = true;
  });

  const secondaryClass = buttonVariants({ variant: "secondary" });

  let className: string = "";

  export { className as class };
  export let iconClass: string = "";
  export let textClass: string = "";
  export let linkClass: string = "";
</script>

<div class={cn("flex items-center gap-8", className)}>
  {#if mounted}
    {#each navLinks as { name, href, icon } (href)}
      <Button
        variant="link"
        {href}
        class={cn(
          "text-sm flex flex-col gap-1 items-center justify-center font-medium bg-white dark:bg-secondary p-4 rounded-lg",
          linkClass,
        )}
      >
        <svelte:component
          this={icon}
          class={cn("stroke-font dark:stroke-white", iconClass)}
        ></svelte:component>
        <span class={cn("dark:text-white", textClass)}>{name}</span>
      </Button>
    {/each}
  {/if}
</div>
