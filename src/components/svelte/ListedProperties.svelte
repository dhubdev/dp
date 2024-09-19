<script lang="ts">
  import type { iListing } from "$lib/modules/interface";
  import { sublineClasses } from "$lib/modules/constants";
  import Listing from "./cards/Listing.svelte";
  import { Button } from "../ui/button";

  export let listings: iListing[] = [
    {
      name: "Tranquil Haven in the woods",
      address: "103 Wright CourtBurien, WA 98168",
      bath: "3",
      beds: "4",
      images: ["/listings/listing-1.webp"],
      oldPrice: "",
      price: "£5,970",
      tags: ["sell"],
      type: "popular",
      details: {},
    },
    {
      name: "Serene Retreat by the lake",
      address: "1964 Jehovah Drive, VA 22408",
      bath: "2",
      beds: "3",
      images: ["/listings/listing-2.webp"],
      oldPrice: "",
      price: "£1,970",
      tags: ["rent"],
      type: "new",
      details: {},
    },
    {
      name: "Charming Cottage in the Meadow",
      address: "1508 Centennial Farm RoadHarian, 51537",
      bath: "4",
      beds: "4",
      images: ["/listings/listing-3.webp"],
      oldPrice: "",
      price: "£3,450",
      tags: ["sell"],
      type: "discounted",
      details: {},
    },
    {
      name: "Grand Estate on the Hilltop",
      address: "103 Wright CourtBurien, WA 98168",
      bath: "3",
      beds: "4",
      images: ["/listings/listing-4.webp"],
      oldPrice: "",
      price: "£2,389",
      tags: ["sell"],
      type: "discounted",
      details: {},
    },
  ];
</script>

<div class="flex flex-col gap-4">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <h2 class={`${sublineClasses} text-start`}>Property Listing</h2>
      <p class="text-muted-foreground">
        Where comfort meets style - your next home, today.
      </p>
    </div>
    <div class="flex items-center justify-center md:justify-end gap-2">
      <Button class="rounded-full w-20 border-2 border-white" variant="secondary">
        All
      </Button>
      <Button class="rounded-full w-20" variant="secondary">
        Sell
      </Button>
      <Button class="rounded-full w-20" variant="secondary">
        Rent
      </Button>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {#each listings as listing, i}
      <Listing {listing} />
    {/each}
  </div>
</div>
