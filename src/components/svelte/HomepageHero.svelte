<script lang="ts">
  import HeroForms from "./HeroForms.svelte";
  import Embla from "./slider/Embla.svelte";
  import SliderSection from "./SliderSection.svelte";
  import type { iSlider } from "$lib/modules/interface";
    import { services } from "$lib/modules/constants/index";

  const sliders = services
</script>


<section
class="w-full relative z-[1] grid grid-cols-1 md:grid-cols-[1fr_400px] items-stretch gap-8 placeholder-opacity-80"
>
<SliderSection { sliders }/>
<HeroForms />
</section>
