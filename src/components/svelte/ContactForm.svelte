<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { type iStatus } from "$lib/modules/interface";

  import { removeRingClasses } from "$lib/modules/constants";
  import { Textarea } from "../ui/textarea";
  import { toast, Toaster } from "svelte-sonner";
  import SpinLoader from "./SpinLoader.svelte";
  import { cn } from "$lib/utils";

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
      const { status, message } = (await response.json()) as iStatus;

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
    }
  };
</script>

<div class="fixed top-0 left-0 z-10">
  <Toaster richColors position="top-center" />
</div>
<form on:submit={onSubmit}>
  <Card.Root class="w-full bg-background">
    <Card.Header>
      <Card.Title>Contact Us</Card.Title>
      <Card.Description class="line-clamp-2"
        >Connect with us today to discover how we can assist you.</Card.Description
      >
    </Card.Header>
    <Card.Content class="flex flex-col gap-4 lg:gap-8">
      <Input required placeholder="Full name" name="name" class={removeRingClasses} />
      <Input required placeholder="Email Address" type="email" name="email" class={removeRingClasses} />
      <Input required placeholder="Subject" type="text" name="subject" class={removeRingClasses} />
      <Textarea
        required
        placeholder="Message..."
        name="message"
        class={cn("resize-none", removeRingClasses)}
      />
    </Card.Content>
    <Card.Footer class="flex justify-center">
      {#if loading}
        <Button class="w-full">
          <SpinLoader />
        </Button>
      {:else}
        <Button class="w-full" type="submit">Submit</Button>
      {/if}
    </Card.Footer>
  </Card.Root>
</form>
