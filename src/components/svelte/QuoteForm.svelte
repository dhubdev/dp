<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Textarea } from "../ui/textarea";

  const onSubmit = (evt: SubmitEvent) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());

    console.log({ entries });
  };
</script>

<form on:submit={onSubmit}>
  <Card.Root class="w-full bg-background">
    <Card.Header>
      <Card.Title>Get a Quote</Card.Title>
      <Card.Description class="line-clamp-2"
        >Reach out to us today for a quick consultation and receive a free quote.</Card.Description
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
      <Button class="w-full dark:bg-white dark:text-primary" type="submit">Get Quote</Button>
    </Card.Footer>
  </Card.Root>
</form>
