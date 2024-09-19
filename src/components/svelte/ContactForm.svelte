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
      <Card.Title>Contact Us</Card.Title>
      <Card.Description
       class="line-clamp-2"
        >Connect with us today to discover how we can assist you.</Card.Description
      >
    </Card.Header>
    <Card.Content class="flex flex-col gap-4 lg:gap-8">
      <Input required placeholder="Full name" name="name" />
      <Input required placeholder="Email Address" type="email" name="email" />
      <Input required placeholder="Subject" type="text" name="subject" />
      <Textarea required placeholder="Message..." name="message" class="resize-none" />
    </Card.Content>
    <Card.Footer class="flex justify-center">
      <Button class="w-full dark:bg-white dark:text-primary" type="submit"
        >Submit</Button
      >
    </Card.Footer>
  </Card.Root>
</form>
