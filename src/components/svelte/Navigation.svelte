<script lang="ts">
  import { Skeleton } from "./../ui/skeleton";
  import { Button, buttonVariants } from "../ui/button";
  import { onMount } from "svelte";
  import type { iNavLink } from "$lib/modules/interface";
  import { purify } from "$lib/modules/fxns";
  import { cn } from "$lib/utils";

  const navLinks: iNavLink[] = [
    {
      name: "Home",
      href: "/",

    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    // {
    //   name: "Projects",
    //   href: "/projects",
    // },
    {
      name: "Investment",
      href: "/investment",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  $: mounted = false;
  $: pathname = "";

  const isCurrentPage = (href: string) => purify(href) === purify(pathname);

  onMount(() => {
    pathname = new URL(location.href).pathname;
    mounted = true
  });

  const secondaryClass = buttonVariants({ variant: "secondary" })
</script>

<div class="hidden md:flex items-center gap-2">
  {#if mounted}
    {#each navLinks as { name, href } (href)}
      <Button
        {href}
        class={cn(isCurrentPage(href) ? `${secondaryClass} border-2 dark:border-white border-primary` : "", "rounded-full", "bg-secondary")}
        variant="outline">{name}</Button
      >
    {/each}
  {/if}
</div>
