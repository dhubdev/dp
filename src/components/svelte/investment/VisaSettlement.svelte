<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "$lib/components/ui/card";
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "$lib/components/ui/tabs";
  import {
    AlertCircle,
    CheckCircle,
    Clock,
    FileText,
    MapPin,
    Users,
  } from "lucide-svelte"; 
</script>

<section class="py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <Badge
        variant="outline"
        class="mb-4 border-2 border-primary text-primary dark:border-white dark:text-white"
      >
        UK Settlement Opportunity
      </Badge>
      <h2 class="text-3xl lg:text-4xl font-bold mb-4">
        Property Investment + UK Settlement
      </h2>
      <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
        Combine your property investment with a pathway to UK residency and
        citizenship. We handle both the investment and immigration process.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <Card
          class="border-2 bg-gradient-to-br from-white to-slate-50 dark:from-primary/50 dark:to-primary/20 border-primary"
        >
          <CardHeader>
            <div class="flex items-center space-x-3 mb-4">
              <div class="p-3 rounded-lg bg-primary/10 dark:bg-green-600/30">
                <MapPin class="size-8 text-primary dark:text-white" />
              </div>
              <div>
                <CardTitle class="text-2xl"
                  >UK Settlement Package</CardTitle
                >
                <CardDescription class="text-muted-foreground">
                  Investment + Immigration Support
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent class="space-y-6">
            <p class="text-muted-foreground leading-relaxed">
              Open a property company in the UK and be recognized as an
              investor. Within 5 years, you can become eligible for UK
              citizenship while building your property portfolio.
            </p>

            <div class="space-y-4">
              <h4 class="font-semibold flex items-center">
                <CheckCircle class="h-5 w-5 mr-2 text-green-600" />
                What's Included
              </h4>
              <ul class="space-y-3 text muted-foreground">
                <li class="flex items-start">
                  <div
                    class="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-primary"
                  ></div>
                  UK property company formation
                </li>
                <li class="flex items-start">
                  <div
                    class="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-primary"
                  ></div>
                  Property investment management
                </li>
                <li class="flex items-start">
                  <div
                    class="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-primary"
                  ></div>
                  Visa application assistance
                </li>
                <li class="flex items-start">
                  <div
                    class="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-primary"
                  ></div>
                  Ongoing compliance support
                </li>
                <li class="flex items-start">
                  <div
                    class="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-primary"
                  ></div>
                  Citizenship pathway guidance
                </li>
              </ul>
            </div>

            <div class="p-4 rounded-lg bg-primary/10">
              <div class="flex items-center justify-between mb-2 text-primary dark:text-green-600">
                <span class="text-sm font-medium"
                  >Timeline to Citizenship</span
                >
                <span class="text-lg font-bold">5 Years</span>
              </div>
              <div class="flex items-center justify-between text-primary dark:text-green-600">
                <span class="text-sm font-medium"
                  >Minimum Investment</span
                >
                <span class="text-lg font-bold">£200,000</span>
              </div>
            </div>

            <Button class="w-full text-white hover:opacity-90 bg-primary">
              Schedule Immigration Consultation
            </Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <Tabs value="advantages" class="w-full">
          <TabsList class="grid w-full grid-cols-2">
            <TabsTrigger value="advantages">Advantages</TabsTrigger>
            <TabsTrigger value="considerations">Considerations</TabsTrigger>
          </TabsList>

          <TabsContent value="advantages" class="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle class="flex items-center text-green-700">
                  <CheckCircle class="h-6 w-6 mr-2" />
                  Key Advantages
                </CardTitle>
              </CardHeader>
              <CardContent class="space-y-4">
                <div class="space-y-3">
                  <div class="flex items-start space-x-3">
                    <div class="p-2 bg-green-100 rounded-lg">
                      <Users class="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 class="font-semibold text-slate-900">Dual Benefit</h4>
                      <p class="text-slate-600 text-sm">
                        Generate investment returns while building towards UK
                        residency
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <div class="p-2 bg-green-100 rounded-lg">
                      <FileText class="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 class="font-semibold text-slate-900">Full Support</h4>
                      <p class="text-slate-600 text-sm">
                        Complete immigration and investment management
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <div class="p-2 bg-green-100 rounded-lg">
                      <Clock class="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 class="font-semibold text-slate-900">
                        Clear Timeline
                      </h4>
                      <p class="text-slate-600 text-sm">
                        Structured 5-year pathway to citizenship
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="considerations" class="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle class="flex items-center text-amber-700">
                  <AlertCircle class="h-6 w-6 mr-2" />
                  Important Considerations
                </CardTitle>
              </CardHeader>
              <CardContent class="space-y-4">
                <div class="space-y-3">
                  <div
                    class="p-4 bg-amber-50 rounded-lg border border-amber-200"
                  >
                    <h4 class="font-semibold text-slate-900 mb-2">
                      Higher Investment Requirement
                    </h4>
                    <p class="text-slate-600 text-sm">
                      Minimum £200,000 investment required for immigration
                      pathway
                    </p>
                  </div>

                  <div
                    class="p-4 bg-amber-50 rounded-lg border border-amber-200"
                  >
                    <h4 class="font-semibold text-slate-900 mb-2">
                      Compliance Requirements
                    </h4>
                    <p class="text-slate-600 text-sm">
                      Must maintain active business operations and meet
                      residency requirements
                    </p>
                  </div>

                  <div
                    class="p-4 bg-amber-50 rounded-lg border border-amber-200"
                  >
                    <h4 class="font-semibold text-slate-900 mb-2">
                      Long-term Commitment
                    </h4>
                    <p class="text-slate-600 text-sm">
                      5-year minimum commitment required for citizenship
                      eligibility
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  </div>
</section>
