<script lang="ts">
  import { sublineClasses } from "$lib/modules/constants";
  import SmartHome from "./icons/SmartHome.svelte";
  import User from "./icons/User.svelte";

  const portrait = "/about/aspect_280x500.webp";
  const square = "/about/aspect_square.webp";
  const landscape = "/about/aspect_277x180.webp";

  const getStyle = (img: string) =>
    `background: url("${img}") no-repeat;background-position:center;background-size:cover`;
</script>

<div class="grid grid-cols-1 gap-4">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="flex flex-col gap-4">
      <div>
        <h2 class={`${sublineClasses} text-start`}>About DHUB Property</h2>
        <p>
          At Dhub Property, we are a dynamic and innovative company specializing
          in construction and cleaning services that cater to the diverse needs of
          our clients. Based in Manchester, we pride ourselves on delivering
          excellence in every project we undertake, whether it’s creating
          stunning, functional spaces or ensuring pristine, hygienic environments.
        </p>
      </div>
      <div class="flex flex-col gap-4">
        <div class="grid grid-cols-1 md:grid-cols-[100px_1fr] items-center gap-4">
          <img src="/authenticity/ef.webp" class="w-[100px]" alt="eco friendly" />
          <div>
            <h4>Eco-Friendly</h4>
            <p>
              We prioritize sustainable practices in every step we take. Committed
              to protecting the planet, our solutions are green and responsible.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-[100px_1fr] items-center gap-4">
          <img
            src="/authenticity/ur.webp"
            class="w-[100px]"
            alt="universal recycling"
          />
          <div>
            <h4>Universal Recycling</h4>
            <p>
              Universal recycling is our commitment to a cleaner, greener future.
              We ensure waste is managed responsibly, promoting sustainability at
              every level.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div
        class="aspect-[280/500] rounded-lg md:rounded-3xl"
        style={getStyle(portrait)}
      ></div>
      <div class="flex flex-col gap-4 -mt-4">
        <div
          class="aspect-square rounded-lg md:rounded-3xl"
          style={getStyle(square)}
        ></div>
        <div
          class="aspect-[277/180] rounded-lg md:rounded-3xl"
          style={getStyle(landscape)}
        ></div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="grid grid-cols-1 items-center gap-4">
      <img
        src="/authenticity/bicsc-logo.webp"
        class="aspect-auto h-[100px] place-self-center"
        alt="bicsc standards"
      />
      <div>
        <h4>
          Proudly aligned with British Institute of Cleaning Science standards
        </h4>
        <p>
          We commit to excellence in professional cleaning practices. This
          reflects our dedication to quality, safety, and raising industry
          standards for hygiene
        </p>
      </div>
    </div>
  
    <div class="grid grid-cols-1 items-center gap-4">
      <img
        src="/authenticity/cs.webp"
        class="w-[100px] place-self-center"
        alt="customer satisfaction guaranteed"
      />
      <div>
        <h4>Client Satisfaction Guaranteed</h4>
        <p>
          We deliver exceptional services tailored to your needs. Our commitment
          to quality ensures results that exceed expectations every time.
        </p>
      </div>
    </div>
  </div>
</div>
