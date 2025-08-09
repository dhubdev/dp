<script lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import {
    Award,
    Clock,
    HeartHandshake,
    Shield,
    TrendingUp,
    Users,
  } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";
  import { cn } from "$lib/utils";

  const hexToRgba = (hex: string, opacity: number): string => {
    // Remove leading # if present
    hex = hex.replace(/^#/, "");

    // Expand short hex (e.g. "03F") to full form (e.g. "0033FF")
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((c) => c + c)
        .join("");
    }

    if (hex.length !== 6) {
      throw new Error("Invalid hex color.");
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  const features = [
    {
      icon: Shield,
      title: "Proven Track Record",
      description:
        "Over £2M in successful property transactions with consistent returns for our investors",
      color: "#055648",
    },
    {
      icon: Award,
      title: "Expert Team",
      description:
        "Experienced property professionals and immigration specialists working together",
      color: "#10b981",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description:
        "Dedicated account management and regular updates throughout your investment journey",
      color: "#8b5cf6",
    },
    {
      icon: TrendingUp,
      title: "Market Expertise",
      description:
        "Deep knowledge of UK property markets and emerging investment opportunities",
      color: "#f97316",
    },
    {
      icon: Clock,
      title: "Efficient Process",
      description:
        "Streamlined procedures that minimize delays and maximize your time to market",
      color: "#ef4444",
    },
    {
      icon: HeartHandshake,
      title: "Full Transparency",
      description:
        "Complete visibility into all costs, timelines, and progress throughout the process",
      color: "#6366f1",
    },
  ];
</script>

<section class="py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0">
    <div class="text-center mb-16">
      <h2 class="text-3xl lg:text-4xl font-bold mb-4">
        Why Choose Dhub Property?
      </h2>
      <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
        We combine property investment expertise with immigration knowledge to
        deliver comprehensive solutions
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each features as feature, i}
        {@const Icon = feature.icon}
        <Card
          class={cn(
            "relative border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 dark:bg-background dark:border-muted-foreground/20"
          )}
          style="border-color: {hexToRgba(feature.color, 0.2)};"
        >
          <CardHeader class="pb-4">
            <div
              class="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style="background-color: {hexToRgba(feature.color, 0.1)};"
            >
              <Icon class="h-6 w-6" style="color: {feature.color}" />
            </div>
            <CardTitle class="text-xl" style="color: {feature.color}"
              >{feature.title}</CardTitle
            >
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      {/each}
    </div>

    <div
      class="mt-16 rounded-2xl p-8 text-white text-center"
      style="background: linear-gradient(to right, #055648, #10b981)"
    >
      <h3 class="text-2xl font-bold mb-4">
        Ready to Start Your Investment Journey?
      </h3>
      <p class="text-xl mb-6 opacity-90">
        Join hundreds of successful investors who have trusted us with their
        property investments
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          class="bg-white rounded-lg font-semibold hover:bg-gray-100 transition-colors text-primary"
        >
          Schedule Free Consultation
      </Button>
        <Button>Download Investment Guide</Button>
      </div>
    </div>
  </div>
</section>
