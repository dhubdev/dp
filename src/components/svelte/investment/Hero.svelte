<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { ArrowRight, Building2, TrendingUp } from "lucide-svelte";

  let style = `background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

  const scrollToInvestment = () => {
    document
      .getElementById("investment-options")
      ?.scrollIntoView({ behavior: "smooth" });
  };
</script>

<section
  class="relative dark:text-white overflow-hidden"
>
  <div class="absolute inset-0 opacity-20">
    <div class="absolute inset-0 bg-repeat" {style}></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-24 lg:py-32">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-8">
        <div class="space-y-4">
          <h1 class="text-4xl lg:text-6xl font-bold leading-tight">
            Unlock Your
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary"
            >
              Property Investment</span
            > Potential
          </h1>
          <p class="text-xl text-muted-foreground leading-relaxed">
            From part investments to solo ventures and UK settlement
            opportunities - we provide comprehensive property investment
            solutions tailored to your goals.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            class="text-white px-8 py-3 text-lg hover:opacity-90 bg-primary"
            on:click={scrollToInvestment}
          >
            Explore Investment Options
            <ArrowRight class="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            class="border-slate-400 px-8 py-3 text-lg"
          >
            Schedule Consultation
          </Button>
        </div>

        <div class="grid grid-cols-3 gap-8 pt-8 border-t border-muted-foreground/20">
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">£2M+</div>
            <div class="text-sm text-slate-400">Properties Sold</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-emerald-400">500+</div>
            <div class="text-sm text-slate-400">Happy Investors</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-yellow-400">25%</div>
            <div class="text-sm text-slate-400">Average ROI</div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border dark:border-white/20 border-muted-foreground/20"
        >
          <div class="space-y-6">
            <div class="flex items-center space-x-3">
              <TrendingUp class="h-8 w-8 text-emerald-400" />
              <h3 class="text-xl font-semibold">Investment Calculator</h3>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-muted-foreground">Initial Investment:</span>
                <span class="font-semibold">£100,000</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">Property Purchase:</span>
                <span class="font-semibold">£70,000</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">Renovation:</span>
                <span class="font-semibold">£30,000</span>
              </div>
              <div class="border-t border-muted-foreground/20 pt-4">
                <div class="flex justify-between text-lg">
                  <span class="text-emerald-400">Projected Return:</span>
                  <span class="font-bold text-emerald-400">£125,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="absolute -top-4 -right-4 w-72 h-72 rounded-full blur-3xl background-primary/20" 
        ></div>
        <div
          class="absolute -bottom-4 -left-4 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"
        ></div>
      </div>
    </div>
  </div>
</section>
