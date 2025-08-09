<script lang="ts">
  import Map from "./icons/Map.svelte";
  import Email from "./icons/Email.svelte";
  import Phone from "./icons/Phone.svelte";
  import { Button } from "../ui/button";
</script>

<div class="h-10 bg-primary block">
  <div class="center flex items-center justify-between !py-0 h-full">
    <Button
      variant="ghost"
      href="https://www.google.com/maps/place/5+Union+St,+Ardwick,+Greater+M12+4JD/@53.4728546,-2.2234096,17z/data=!3m1!4b1!4m6!3m5!1s0x487bb1983e4228d5:0x1fa06f2556e8f6ab!8m2!3d53.4728546!4d-2.2208347!16s%2Fg%2F11jzpm82kf?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D"
      class="flex items-center gap-2 !p-0 h-full !px-2 text-white"
    >
      <Map class="" />
      <span class="hidden lg:inline-block">5 Union Street, City View House, Manchester M12 4JD UK</span>
    </Button>

    <div class="flex items-center gap-2">
      <Button
        href="tel:+447930739927"
        class="flex items-center gap-2 !p-0 h-full !px-2 text-white"
        variant="ghost"
      >
        <Phone class="" />
        <span class="hidden lg:inline-block">+44 793 073 9927</span>
      </Button>
      <Button
        variant="ghost"
        href="mailto:enquiries@dhubproperty.co.uk?subject=Dhub%20Property%20Inquiry&body=Hello"
        class="flex items-center gap-2 !p-0 h-full !px-2 text-white"
      >
        <Email class="" />
        <span class="hidden lg:inline-block">enquiries@dhubproperty.co.uk</span>
      </Button>
    </div>
  </div>
</div>
