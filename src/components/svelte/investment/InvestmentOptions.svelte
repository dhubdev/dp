<script lang="ts">
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { PoundSterling, Shield, TrendingUp, User, Users } from "lucide-svelte";

</script>

<section id="investment-options" class="py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl lg:text-4xl font-bold mb-4">
        Choose Your Investment Path
      </h2>
      <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
        Whether you prefer collaborative investing or going solo, we have the
        perfect solution for your investment goals.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-8">
      <Card
        class="relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl border-primary" 
      >
        <div class="absolute top-4 right-4">
          <Badge
            variant="secondary"
            class="text-white bg-primary"
          >
            Collaborative
          </Badge>
        </div>
        <CardHeader class="pb-4">
          <div class="flex items-center space-x-3 mb-4">
            <div
              class="p-3 rounded-lg bg-primary/10" 
            >
              <Users class="size-8 text-primary" />
            </div>
            <div>
              <CardTitle class="text-2xl"
                >Part Investment</CardTitle
              >
              <CardDescription class="text-muted-foreground">
                Pool resources with other investors
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent class="space-y-6">
          <p class="text-muted-foreground leading-relaxed">
            Join forces with 2 or more investors to collectively purchase,
            renovate, and sell properties. Share both the investment and the
            profits proportionally based on your contribution.
          </p>

          <div class="space-y-4">
            <h4 class="font-semibold flex items-center">
              <TrendingUp class="h-5 w-5 mr-2 text-green-600" />
              Key Benefits
            </h4>
            <ul class="space-y-2 text-muted-foreground">
              <li class="flex items-start">
                <div
                  class="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-primary" 
                ></div>
                Lower entry barrier - start with smaller amounts
              </li>
              <li class="flex items-start">
                <div
                  class="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-primary"
                ></div>
                Shared risk across multiple investors
              </li>
              <li class="flex items-start">
                <div
                  class="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-primary"
                ></div>
                Access to larger, more profitable properties
              </li>
              <li class="flex items-start">
                <div
                  class="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-primary"
                ></div>
                Proportional profit sharing
              </li>
            </ul>
          </div>

          <div
            class="p-4 rounded-lg bg-primary/10"
          >
            <div class="flex items-center justify-between mb-2 text-primary dark:text-green-600">
              <span class="text-sm font-medium"
                >Minimum Investment</span
              >
              <span class="text-lg font-bold"
                >£25,000</span
              >
            </div>
            <div class="flex items-center justify-between text-primary dark:text-green-600">
              <span class="text-sm font-medium"
                >Expected Timeline</span
              >
              <span class="text-lg font-bold"
                >6-12 months</span
              >
            </div>
          </div>

          <Button
            class="w-full text-white hover:opacity-90 bg-primary"
          >
            Learn More About Part Investment
          </Button>
        </CardContent>
      </Card>

      <Card
        class="relative overflow-hidden border-2 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl"
      >
        <div class="absolute top-4 right-4">
          <Badge variant="secondary" class="bg-emerald-100 text-emerald-800">
            Independent
          </Badge>
        </div>
        <CardHeader class="pb-4">
          <div class="flex items-center space-x-3 mb-4">
            <div class="p-3 bg-emerald-100 rounded-lg">
              <User class="h-8 w-8 text-emerald-600" />
            </div>
            <div>
              <CardTitle class="text-2xl"
                >Solo Investment</CardTitle
              >
              <CardDescription class="text-muted-foreground">
                Full control, full returns
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent class="space-y-6">
          <p class="text-muted-foreground leading-relaxed">
            Take complete ownership of your investment journey. You provide the
            capital, we handle the property acquisition, renovation, and sale.
            All proceeds go directly to you.
          </p>

          <div class="space-y-4">
            <h4 class="font-semibold flex items-center">
              <PoundSterling class="h-5 w-5 mr-2 text-green-600" />
              Investment Breakdown
            </h4>
            <div class="space-y-3">
              <div
                class="flex justify-between items-center p-3 bg-slate-100 rounded-lg"
              >
                <span class="text-slate-700">Your Investment</span>
                <span class="font-bold text-slate-900">£100,000</span>
              </div>
              <div
                class="flex justify-between items-center p-3 bg-emerald-50 rounded-lg"
              >
                <span class="text-slate-700">Property Purchase</span>
                <span class="font-bold text-emerald-700">£70,000</span>
              </div>
              <div
                class="flex justify-between items-center p-3 bg-emerald-50 rounded-lg"
              >
                <span class="text-slate-700">Renovation</span>
                <span class="font-bold text-emerald-700">£30,000</span>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="font-semibold flex items-center">
              <Shield class="h-5 w-5 mr-2 text-green-600" />
              What We Handle
            </h4>
            <ul class="space-y-2 text-muted-foreground">
              <li class="flex items-start">
                <div
                  class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                Property sourcing and acquisition
              </li>
              <li class="flex items-start">
                <div
                  class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                Complete renovation management
              </li>
              <li class="flex items-start">
                <div
                  class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                Marketing and sale process
              </li>
              <li class="flex items-start">
                <div
                  class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                Legal and administrative tasks
              </li>
            </ul>
          </div>

          <div class="bg-emerald-50 p-4 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-slate-700"
                >All Proceeds to You</span
              >
              <span class="text-lg font-bold text-emerald-600">100%</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-slate-700"
                >Expected Timeline</span
              >
              <span class="text-lg font-bold text-emerald-600">8-14 months</span
              >
            </div>
          </div>

          <Button class="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
            Start Solo Investment
          </Button>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
