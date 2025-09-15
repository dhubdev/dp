<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import { Card, CardContent } from "$lib/components/ui/card";
  import { cn } from "$lib/utils";
  import {
    FileCheck,
    Hammer,
    MapPin,
    Search,
    TrendingUp,
    Users,
    Package,
    Shield,
  } from "lucide-svelte";

  const steps = [
    {
      icon: FileCheck,
      title: "Consultation",
      description:
        "We assess your investment goals and determine the best path forward",
      color: "#055648",
    },
    {
      icon: Package,
      title: "Pick Type Package",
      description:
        "Choose between Part Investment, Solo Investment, or Buy to Rent based on your preferences",
      color: "#10b981",
    },
    {
      icon: Search,
      title: "Property Sourcing",
      description:
        "Our experts identify high-potential properties in prime locations",
      color: "#f97316",
    },
    {
      icon: Hammer,
      title: "Renovation & Development",
      description:
        "Professional renovation to maximize property value and appeal",
      color: "#8b5cf6",
    },
    {
      icon: TrendingUp,
      title: "Sales & Returns",
      description: "Strategic marketing and sale to deliver optimal returns",
      color: "#ef4444",
    },
  ];

  const immigrationSteps = [
    {
      icon: FileCheck,
      title: "Consultation",
      description: "Initial assessment of your immigration and investment goals",
      color: "#055648",
    },
    {
      icon: Package,
      title: "Pick Type Package",
      description: "Select the UK Settlement Package that fits your needs",
      color: "#10b981",
    },
    {
      icon: Users,
      title: "Company Formation",
      description: "Establish your UK property investment company",
      color: "#f97316",
    },
    {
      icon: Search,
      title: "Property Sourcing",
      description: "Identify and acquire suitable investment properties",
      color: "#8b5cf6",
    },
    {
      icon: Shield,
      title: "Sponsorship License",
      description: "Obtain sponsorship license for your business",
      color: "#ef4444",
    },
    {
      icon: MapPin,
      title: "Visa Application",
      description: "Submit investor visa application with our support",
      color: "#6366f1",
    },
    {
      icon: FileCheck,
      title: "Ongoing Compliance",
      description: "Maintain requirements for residency and citizenship",
      color: "#ec4899",
    },
    {
      icon: Hammer,
      title: "Renovation & Development",
      description: "Professional renovation of your investment properties",
      color: "#14b8a6",
    },
    {
      icon: TrendingUp,
      title: "Sales & Returns",
      description: "Generate returns while maintaining immigration compliance",
      color: "#f59e0b",
    },
  ];

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
</script>

<section class="py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0">
    <div class="text-center mb-16">
      <h2 class="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
      <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
        Our streamlined process ensures your investment journey is smooth and
        profitable
      </p>
    </div>

    <div class="mb-16">
      <div class="text-center mb-8">
        <Badge
          variant="outline"
          class="mb-4 border-2 text-primary border-primary dark:text-white dark:border-white"
        >
          Other Investment Paths
        </Badge>
        <h3 class="text-2xl font-bold text-slate-900">
          From Investment to Returns
        </h3>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {#each steps as step, index}
          {@const Icon = step.icon}
          <Card
          class={cn(
            "relative hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 dark:from-primary/30 dark:to-primary/10"
          )}
          >
            <CardContent class="p-6 text-center">
              <div class="relative mb-4">
                <div
                  class={cn(
                    "w-16 h-16 mx-auto rounded-full flex items-center justify-center",
                    `bg-[${step.color}]`
                  )}
                  style="background-color: {hexToRgba(step.color, 0.1)};"
                >
                  <Icon
                    class={cn("h-8 w-8", `text-[${step.color}]`)}
                    style="color:{step.color}"
                  />
                </div>
                <div
                  class="absolute -top-2 -right-2 w-8 h-8 text-white bg-primary dark:text-primary dark:bg-white rounded-full flex items-center justify-center text-sm font-bold"
                >
                  {index + 1}
                </div>
              </div>
              <h4
                class="text-lg font-semibold mb-2"
                style="color: {step.color}"
              >
                {step.title}
              </h4>
              <p class="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </CardContent>
          </Card>
        {/each}
      </div>
    </div>

    <div>
      <div class="text-center mb-8">
        <Badge
          variant="outline"
          class="text-emerald-600 border-emerald-200 mb-4"
        >
          The Path to UK Citizenship
        </Badge>
        <h3 class="text-2xl font-bold text-slate-900">
          Complete UK Settlement Process
        </h3>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each immigrationSteps as step, index}
          {@const Icon = step.icon}
          <Card
          class={cn(
            "relative hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 dark:from-primary/30 dark:to-primary/10"
          )}
          >
            <CardContent class="p-6 text-center">
              <div class="relative mb-4">
                <div
                  class={cn(
                    "w-16 h-16 mx-auto rounded-full flex items-center justify-center",
                    `bg-[${step.color}]`
                  )}
                  style="background-color: {hexToRgba(step.color, 0.1)};"
                >
                  <Icon
                    class={cn("h-8 w-8", `text-[${step.color}]`)}
                    style="color:{step.color}"
                  />
                </div>
                <div
                  class="absolute -top-2 -right-2 w-8 h-8 text-white bg-primary dark:text-primary dark:bg-white rounded-full flex items-center justify-center text-sm font-bold"
                >
                  {index + 1}
                </div>
              </div>
              <h4
                class="text-lg font-semibold mb-2"
                style="color: {step.color}"
              >
                {step.title}
              </h4>
              <p class="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </CardContent>
          </Card>
        {/each}
      </div>
    </div>
  </div>
</section>