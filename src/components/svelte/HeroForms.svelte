<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs";
  import ContactForm from "./ContactForm.svelte";
  import QuoteForm from "./QuoteForm.svelte";
  import { cn } from "$lib/utils";

  let className: string = ""
  export { className as class }
</script>

<Tabs.Root value="quote" class={cn("w-full md:w-[400px] p-4 rounded-lg bg-white dark:bg-background", className)}>
  <Tabs.List class="w-full flex">
    <Tabs.Trigger value="quote" class="flex-1">Quote</Tabs.Trigger>
    <Tabs.Trigger value="contact" class="flex-1">Contact</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="quote">
    <QuoteForm />
  </Tabs.Content>
  <Tabs.Content value="contact">
    <ContactForm />
  </Tabs.Content>
</Tabs.Root>
