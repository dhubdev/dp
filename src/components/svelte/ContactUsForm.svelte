<script lang="ts">
  import { Input } from "../ui/input";
  import { Button } from "../ui/button";
  import { Textarea } from "../ui/textarea";
  import { toast } from "svelte-sonner";
  import SpinLoader from "./SpinLoader.svelte";
  import type { iStatus } from "$lib/modules";

  $: loading = false;

  const onSubmit = async (evt: SubmitEvent) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries()) as Record<
      string,
      any
    >;
    entries.timestamp = Date.now();

    const url = "/api/contact";
    const options: RequestInit = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entries),
    };

    loading = true;
    try {
      const response = await fetch(url, options);
      const { message, status } = (await response.json()) as iStatus;
      status === "error" ? toast.error(message) : toast.success(message);
      loading = false;
      form.reset();
    } catch (error: any) {
      loading = false;
      toast.error(error.message);
    }
  };
</script>

<form on:submit={onSubmit} class="flex flex-col gap-4">
  <Input type="text" name="name" placeholder="Your Name" required />
  <Input type="email" name="email" placeholder="Your Email" required />
  <Input type="text" name="subject" placeholder="Subject" required />

  <Textarea id="message" name="message" rows={6} required class="resize-none"
  ></Textarea>
  {#if loading}
    <Button>
      <SpinLoader />
    </Button>
  {:else}
    <Button type="submit" class="w-fit">Send Message</Button>
  {/if}
</form>
