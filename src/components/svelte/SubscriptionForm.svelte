<script lang="ts">
  import { Input } from "../ui/input";
  import { Button } from "../ui/button";
  import { toast } from "svelte-sonner";
  import SpinLoader from "./SpinLoader.svelte";
  import type { iStatus } from "$lib/modules/interface";

  $: loading = false;

  const onSubmit = async (evt: SubmitEvent) => {
    evt.preventDefault();
    evt.stopPropagation();

    loading = true;
    const form = evt.target as HTMLFormElement;
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());
    const url = "/api/newsletter";
    const options: RequestInit = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entries),
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();

      const { message, status } = result as iStatus;

      status === "error" ? toast.error(message) : toast.success(message);
      form.reset();
      loading = false;
    } catch (error: any) {
      toast.error(error.message);
      loading = false;
    }
  };
</script>

<form on:submit={onSubmit} class="flex flex-col md:flex-row gap-2 w-full">
  <Input
    name="email"
    type="email"
    placeholder="Enter your email"
    class="border-2 border-white outline-none text-white"
    required
  />
  {#if loading}
    <Button type="submit" class="bg-white text-primary">
      <SpinLoader />
    </Button>
  {:else}
    <Button type="submit" class="bg-white text-primary w-full md:w-fit">Subscribe</Button>
  {/if}
</form>
