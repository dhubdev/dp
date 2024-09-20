<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import type { iStatus } from "$lib/modules";
  import { Textarea } from "../ui/textarea";
  import { toast, Toaster } from "svelte-sonner";
  import SpinLoader from "./SpinLoader.svelte";

  $: loading = false;

  const onSubmit = async (evt: SubmitEvent) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());

    try {
      loading = true;
      const url = `/api/quote`;
      const options: RequestInit = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entries),
      };
      const response = await fetch(url, options);
      const { status, message, data } = (await response.json()) as iStatus;

      if (status === "error") {
        toast.error(message);
      } else {
        toast.success(message);
        form.reset();
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      loading = false;
      console.log("loading should be set to false")
    }
  };
</script>

<div class="fixed top-0 left-0 z-10">
  <Toaster richColors position="top-center" />
</div>
<form on:submit={onSubmit}>
  <Card.Root class="w-full bg-background">
    <Card.Header>
      <Card.Title>Get a Quote</Card.Title>
      <Card.Description class="line-clamp-2"
        >Reach out to us today for a quick consultation and receive a free
        quote.</Card.Description
      >
    </Card.Header>
    <Card.Content class="flex flex-col gap-4 lg:gap-8">
      <Input required placeholder="Full name" name="name" />
      <Input required placeholder="Email Address" type="email" name="email" />
      <Input required placeholder="Phone Number" type="text" name="phone" />
      <Textarea
        required
        placeholder="Enter the details of your quote"
        name="quoteDescription"
        class="resize-none"
      />
    </Card.Content>
    <Card.Footer class="flex justify-center">
      {#if loading}
        <Button class="w-full">
          <SpinLoader />
        </Button>
      {:else}
        <Button class="w-full" type="submit">Get Quote</Button>
      {/if}
    </Card.Footer>
  </Card.Root>
</form>
