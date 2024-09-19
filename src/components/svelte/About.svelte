<script lang="ts">
  import SmartHome from "./icons/SmartHome.svelte";
  import User from "./icons/User.svelte";

  const portrait = "/about/aspect_280x500.webp"
  const square = "/about/aspect_square.webp"
  const landscape = "/about/aspect_277x180.webp"

  const getStyle = (img: string) => `background: url("${img}") no-repeat;background-position:center;background-size:cover`
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="flex flex-col">
    <h2>Assisting individuals in locating the appropriate real estate.</h2>
    <p>
      At DHUB PROPERTY, we guide clients through every step of their real estate
      journey, ensuring they find the perfect property that aligns with their
      unique needs and aspirations.
    </p>
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
