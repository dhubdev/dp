<script lang="ts">
  import Card from "../ui/card/card.svelte";
  const customers: string[] = [
    "/reviews/customer-1.webp",
    "/reviews/customer-2.webp",
    "/reviews/customer-3.webp",
    "/reviews/customer-4.webp",
    "/reviews/customer-5.webp",
  ];
  const offset: number = 36;
  const width: number = (offset * customers.length) + (64 - offset)

  const style = `width: ${width}px`
  const positionLeft = (i: number) => `left: ${i * offset}px`;
</script>

<Card class="flex items-center gap-2 p-4 rounded-full dark:bg-background">
  <div class="h-16 relative" { style }>
    {#each customers as customer, i}
      <img
        class="absolute rounded-full w-16 border-4 border-white dark:border-background top-1/2 -translate-y-1/2"
        style={positionLeft(i)}
        src={customer}
        alt={customer}
      />
    {/each}
  </div>
  <div class="text-sm">
    <div>1k+ Happy</div>
    <div>Customers</div>
  </div>
</Card>
