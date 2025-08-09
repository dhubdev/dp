<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import AppsIcon from "./icons/AppsIcon.svelte";
  import NavigationMobile from "./NavigationMobile.svelte";
</script>

<Drawer.Root>
  <Drawer.Trigger asChild let:builder>
    <Button
      builders={[builder]}
      variant="ghost"
      class="bg-white rounded-full"
      size="icon"
    >
      <AppsIcon />
    </Button>
  </Drawer.Trigger>
  <Drawer.Content class="bg-[#eaeded] dark:bg-background">
    <div class="mx-auto w-full max-w-sm">
      <Drawer.Header class="flex flex-col items-center">
        <Drawer.Title class="text-font dark:text-white"
          >Dhub Property</Drawer.Title
        >
        <Drawer.Description>Navigate our space</Drawer.Description>
      </Drawer.Header>
      <div class="p-4">
        <NavigationMobile
          class="grid grid-cols-3 gap-4"
          textClass="text-xs"
          linkClass="h-auto shadow"
        />
      </div>
      <Drawer.Footer>
        <Drawer.Close asChild let:builder>
          <Button builders={[builder]} variant="outline">Close</Button>
        </Drawer.Close>
      </Drawer.Footer>
    </div>
  </Drawer.Content>
</Drawer.Root>
