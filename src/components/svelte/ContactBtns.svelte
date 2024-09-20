<script lang="ts">
  import Button from "../ui/button/button.svelte";
  import WhatsApp from "./icons/WhatsApp.svelte";
</script>

<div class="flex items-center justify-center gap-4">
  <Button variant="outline" href="/contact">
    Contact Us
  </Button>
  <Button size="icon" href="https://api.whatsapp.com/send?phone=+447930739927&text=Hello">
    <WhatsApp />
  </Button>
</div>