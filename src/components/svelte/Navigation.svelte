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
    {
      name: "Self Sponsorship",
      href: "/self-sponsorship",
    },
    {
      name: "Investment",
      href: "/services/investment",
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
    mounted = true;
  });
</script>

<div class="hidden md:flex items-center gap-2">
  {#if mounted}
    {#each navLinks as { name, href } (href)}
      <Button {href} variant={isCurrentPage(href) ? "outline" : "default"}>{name}</Button>
    {/each}
  {/if}
</div>
