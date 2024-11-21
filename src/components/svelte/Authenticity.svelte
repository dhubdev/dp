<script lang="ts">
  interface iIcon {
    name: string;
    src: string;
  }

  let icons: iIcon[] = [
    {
      name: "BICSc",
      src: "/authenticity/bicsc-logo.webp",
    },
    {
      name: "100% Customer Satisfaction Guaranteed",
      src: "/authenticity/customer-satisfaction-guaranteed.webp",
    },
    {
      name: "Eco-Friendly",
      src: "/authenticity/eco-friendly.webp",
    },
    {
      name: "Universal Recycling",
      src: "/authenticity/universal-recycling.webp",
    },
  ];
</script>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
  {#each icons as { name, src }, i}
    <div class="w-full rounded-lg p-4 dark:bg-white">
      <img {src} alt={name} class="aspect-auto" />
    </div>
  {/each}
</div>
