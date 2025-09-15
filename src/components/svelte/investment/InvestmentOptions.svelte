<script lang="ts">
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { PoundSterling, Shield, TrendingUp, User, Users, Building, Calendar } from "lucide-svelte";

</script>

<section id="investment-options" class="py-20">
  <div class="max-w-7xl mx-auto px-4 md:px-0">
    <div class="text-center mb-16">
      <h2 class="text-3xl lg:text-4xl font-bold mb-4">
        Choose Your Investment Path
      </h2>
      <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
        Whether you prefer collaborative investing, going solo, or building rental income, we have the
        perfect solution for your investment goals.
      </p>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Part Investment -->
      <Card
        class="relative overflow-hidden transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 dark:from-primary/30 dark:to-primary/10" 
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
            <div class="p-3 rounded-lg bg-primary/10">
              <Users class="size-8 text-primary" />
            </div>
            <div>
              <CardTitle class="text-xl">Part Investment</CardTitle>
              <CardDescription class="text-muted-foreground">
                Pool resources with other investors
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent class="space-y-6">
          <p class="text-muted-foreground leading-relaxed">
            Join forces with 2 or more investors to collectively purchase,
            renovate, and sell high-value properties. By combining resources, you gain access to larger and more profitable opportunities while sharing both the investment and the returns in proportion to your contribution.
          </p>

          <div class="space-y-4">
            <h4 class="font-semibold flex items-center">
              <TrendingUp class="h-5 w-5 mr-2 text-green-600" />
              Why Invest Together?
            </h4>
            <ul class="space-y-2 text-muted-foreground">
              <li class="flex items-start">
                <div class="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-primary"></div>
                Lower Entry Barrier – Start strong with a smaller capital outlay
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-primary"></div>
                Shared Risk – Minimize exposure by distributing risk among partners
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-primary"></div>
                Bigger Opportunities – Access premium properties typically out of reach for solo investors
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-primary"></div>
                Fair Profit Sharing – Earn returns proportionally to your investment
              </li>
            </ul>
          </div>

          <div class="p-4 rounded-lg bg-red-50 border border-red-200">
            <p class="text-red-800 text-sm font-medium mb-2">Important Note:</p>
            <p class="text-red-700 text-sm">
              Properties will be sold unless ALL parties in the part investment agree otherwise. The emphasis is on the sale in this investment model.
            </p>
          </div>

          <div class="p-4 rounded-lg bg-primary/10">
            <div class="flex items-center justify-between mb-2 text-primary dark:text-green-600">
              <span class="text-sm font-medium">Investment Range</span>
              <span class="text-lg font-bold">£50,000 - £100,000</span>
            </div>
          </div>

          <Button class="w-full text-white hover:opacity-90 bg-primary">
            Learn More About Part Investment
          </Button>
        </CardContent>
      </Card>

      <!-- Solo Investment -->
      <Card
        class="relative overflow-hidden transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 dark:from-primary/30 dark:to-primary/10"
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
              <CardTitle class="text-xl">Solo Investment</CardTitle>
              <CardDescription class="text-muted-foreground">
                Full control, full returns
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent class="space-y-6">
          <p class="text-muted-foreground leading-relaxed">
            Take complete ownership of your investment journey as a single person. You provide the
            capital, we handle the property acquisition, renovation, and sale.
            All proceeds go directly to you.
          </p>

          <div class="space-y-4">
            <h4 class="font-semibold flex items-center">
              <PoundSterling class="h-5 w-5 mr-2 text-green-600" />
              Investment Breakdown
            </h4>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-3 bg-slate-100 rounded-lg">
                <span class="text-slate-700">Your Investment</span>
                <span class="font-bold text-slate-900">£100,000</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                <span class="text-slate-700">Property Purchase</span>
                <span class="font-bold text-emerald-700">£70,000</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
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
                <div class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Property sourcing and acquisition
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Complete renovation management
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Marketing and sale process
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Legal and administrative tasks
              </li>
            </ul>
          </div>

          <div class="bg-emerald-50 p-4 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-slate-700">Investment Range</span>
              <span class="text-lg font-bold text-emerald-600">£50,000 - £150,000</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-slate-700">All Proceeds to You</span>
              <span class="text-lg font-bold text-emerald-600">100%</span>
            </div>
          </div>

          <Button class="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
            Start Solo Investment
          </Button>
        </CardContent>
      </Card>

      <!-- Buy to Rent Investment -->
      <Card
        class="relative overflow-hidden transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 dark:from-primary/30 dark:to-primary/10"
      >
        <div class="absolute top-4 right-4">
          <Badge variant="secondary" class="bg-blue-100 text-blue-800">
            Rental Income
          </Badge>
        </div>
        <CardHeader class="pb-4">
          <div class="flex items-center space-x-3 mb-4">
            <div class="p-3 bg-blue-100 rounded-lg">
              <Building class="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <CardTitle class="text-xl">Buy to Rent</CardTitle>
              <CardDescription class="text-muted-foreground">
                Monthly rental returns
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent class="space-y-6">
          <p class="text-muted-foreground leading-relaxed">
            Similar to solo investment but focused on rental income. You buy the property, we renovate it, and you receive monthly rental income from tenants.
          </p>

          <div class="space-y-4">
            <h4 class="font-semibold flex items-center">
              <Calendar class="h-5 w-5 mr-2 text-blue-600" />
              Monthly Income Stream
            </h4>
            <ul class="space-y-2 text-muted-foreground">
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Consistent monthly rental payments
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Property management handled for you
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Long-term wealth building through property appreciation
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Full renovation and tenant sourcing included
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <h4 class="font-semibold flex items-center">
              <Shield class="h-5 w-5 mr-2 text-blue-600" />
              We Handle Everything
            </h4>
            <ul class="space-y-2 text-muted-foreground">
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Property sourcing and purchase
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Complete renovation for rental readiness
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Tenant screening and placement
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Ongoing property management
              </li>
            </ul>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-slate-700">Investment Range</span>
              <span class="text-lg font-bold text-blue-600">£50,000 - £100,000</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-slate-700">Monthly Returns</span>
              <span class="text-lg font-bold text-blue-600">Ongoing</span>
            </div>
          </div>

          <Button class="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Start Buy to Rent Investment
          </Button>
        </CardContent>
      </Card>
    </div>
  </div>
</section>