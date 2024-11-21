<script lang="ts">
  import {
    highlightAlternateClasses,
    highlightBlueClasses,
    highlightClasses,
    highlightRedClasses,
    highlighVioletClasses,
    sublineClasses,
    titleClasses,
  } from "$lib/modules/constants";
  import { cn } from "$lib/utils";
  import { Card } from "../ui/card";

  interface iAbout {
    title: string;
    content: string;
    image: string;
  }
  const topSection: iAbout[] = [
    {
      title: "Our Mission",
      content:
        "At Dhub Property, our mission is simple yet powerful: 'To build and maintain spaces that inspire, elevate, and exceed expectations.'<br/><br/>We strive to create sustainable, high-quality structures through our construction services while ensuring cleanliness and safety through our exceptional cleaning solutions. Our focus is on delivering unparalleled customer satisfaction by combining innovation, attention to detail, and a commitment to excellence in everything we do.<br/><br/>Whether you’re looking to construct your dream space or maintain a clean, professional environment, Dhub Property is here to transform your vision into reality.",
      image: "/about/our-mission.webp",
    },
    {
      title: "Our Team",
      content:
        "DHUB Property is a team of passionate and experienced professionals with a deep understanding of the real estate industry. From our knowledgeable sales agents to our skilled renovation experts and construction team, every member is committed to delivering excellence in everything we do.<br/><br/>Our mission is simple, yet powerful: We strive to create sustainable, high-quality structures through our construction services while ensuring cleanliness and safety through our exceptional cleaning solutions. Our focus is on delivering unparalleled customer satisfaction by combining innovation, attention to detail, and a commitment to excellence in everything we do.",
      image: "/about/our-team.webp",
    },
  ];

  const bottomSection: iAbout[] = [
    {
      title: "Expertise",
      content:
        "With years of industry experience under our belt, we have the knowledge and expertise to handle all your housing needs with professionalism and precision.",
      image: "/about/expertise.webp",
    },
    {
      title: "Personalized Service",
      content:
        "We believe in providing personalized service tailored to each client's unique needs and preferences. From the initial consultation to the final closing, we'll be by your side every step of the way.",
      image: "/about/personalized-service.webp",
    },
    {
      title: "Integrity",
      content:
        "At DHub Property, we believe in doing business with integrity and transparency. You can trust us to always act in your best interests and uphold the highest standards of ethics and professionalism.",
      image: "/about/integrity.webp",
    },
    {
      title: "Commitment to Excellence",
      content:
        "We are committed to excellence in everything we do, from the quality of our workmanship to the level of customer service we provide. Your satisfaction is our top priority.",
      image: "/about/excellence.webp",
    },
  ];

  const highlights = [
    highlighVioletClasses,
    highlightRedClasses,
    highlightBlueClasses,
    highlightClasses,
  ];
</script>

<div class="h-14" id="who-we-are"></div>
<div class="center">
  <h2 class="font-bold text-3xl">Who We are</h2>
  <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
    {#each topSection as { image, title, content }, i}
      <Card
        class="grid grid-cols-1 gap-4 p-4 rounded-lg overflow-hidden"
      >
        <div class="flex flex-col gap-4">
          <h2 class={cn(sublineClasses, "my-0 !text-2xl")}>{title}</h2>
          <img class="aspect-video" src={image} alt={title} />
        </div>
        <p class="my-0">{@html content}</p>
      </Card>
    {/each}
  </div>
</div>
<div class="h-14" id="what-we-offer"></div>
<div class="bg-white dark:bg-secondary">
  <h2 class="center font-bold text-3xl">What We Offer</h2>
  <div class="center grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
    {#each bottomSection as { image, title, content }, i}
      <div class={cn(highlights[i], "p-0")}>
        <img src={image} class="aspect-[16/6] w-full" alt={title} />
        <div class="p-4 flex flex-col gap-2 pt-0">
          <h2 class={cn(sublineClasses, "my-0 !text-2xl text-start self-start")}>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
