<script lang="ts">
    import { sublineClasses } from "$lib/modules/constants";
  import SmartHome from "./icons/SmartHome.svelte";
  import User from "./icons/User.svelte";

  const portrait = "/about/aspect_280x500.webp"
  const square = "/about/aspect_square.webp"
  const landscape = "/about/aspect_277x180.webp"

  const getStyle = (img: string) => `background: url("${img}") no-repeat;background-position:center;background-size:cover`
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="flex flex-col gap-4">
    <div>
      <h2 class={`${sublineClasses} text-start`}>Assisting individuals in locating the appropriate real estate.</h2>
      <p>
        At Dhub Property, we are a dynamic and innovative company specializing in construction and cleaning services that cater to the diverse needs of our clients. Based in Manchester, we pride ourselves on delivering excellence in every project we undertake, whether it’s creating stunning, functional spaces or ensuring pristine, hygienic environments.
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <div
        class="grid grid-cols-[56px_1fr] md:grid-cols-[64px_1fr] items-center gap-4"
      >
        <SmartHome class="w-14 h-14 md:w-16 md:h-16" />
        <div>
          <h4>The Future of Smart Living</h4>
          <p>
            We integrate the latest smart home technology to enhance
            convenience, security, and energy efficiency in your living space.
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-[56px_1fr] md:grid-cols-[64px_1fr] items-center gap-4"
      >
        <User class="w-14 h-14 md:w-16 md:h-16" />
        <div>
          <h4>Tailored Real Estate Services</h4>
          <p>
            We prioritize understanding and meeting each client's unique needs,
            offering personalized services for a seamless experience.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="aspect-[280/500] rounded-lg md:rounded-3xl" style={getStyle(portrait)}></div>
    <div class="flex flex-col gap-4 -mt-4">
      <div class="aspect-square rounded-lg md:rounded-3xl" style={getStyle(square)}></div>
      <div class="aspect-[277/180] rounded-lg md:rounded-3xl" style={getStyle(landscape)}></div>
    </div>
  </div>
</div>
