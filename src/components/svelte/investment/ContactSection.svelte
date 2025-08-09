<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import { Input } from "$lib/components/ui/input";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Clock, Mail, MapPin, Phone } from "lucide-svelte";

  const fruits = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "grapes", label: "Grapes" },
    { value: "pineapple", label: "Pineapple" },
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
  <div class="max-w-7xl mx-auto px-4 md:px-0">
    <div class="text-center mb-16">
      <h2 class="text-3xl lg:text-4xl font-bold mb-4">
        Get Started Today
      </h2>
      <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
        Ready to begin your property investment journey? Contact our experts for
        a personalized consultation.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <Card class="bg-gradient-to-br from-white to-slate-50 dark:from-primary/30 dark:to-primary/10">
        <CardHeader>
          <CardTitle class="text-2xl"
            >Request Consultation</CardTitle
          >
        </CardHeader>
        <CardContent class="space-y-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label for="firstName" class="text-sm font-medium text-muted-foreground"
                >First Name</label
              >
              <Input name="firstName" placeholder="Enter your first name" />
            </div>
            <div class="space-y-2">
              <label for="lastName" class="text-sm font-medium text-muted-foreground"
                >Last Name</label
              >
              <Input name="lastName" placeholder="Enter your last name" />
            </div>
          </div>

          <div class="space-y-2">
            <label for="email" class="text-sm font-medium text-muted-foreground"
              >Email Address</label
            >
            <Input
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>

          <div class="space-y-2">
            <label for="phone" class="text-sm font-medium text-muted-foreground"
              >Phone Number</label
            >
            <Input
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>

          <div class="space-y-2">
            <label
              for="investmentInterest"
              class="text-sm font-medium text-muted-foreground"
              >Investment Interest</label
            >
            <select name="investmentInterest">
              <option value="" disabled selected
                >Select your investment type</option
              >
              <option value="part-investment">Part Investment</option>
              <option value="solo-investment">Solo Investment</option>
              <option value="uk-settlement">UK Settlement Package</option>
              <option value="general-inquiry">General Inquiry</option>
            </select>
          </div>

          <div class="space-y-2">
            <label
              for="investmentBudget"
              class="text-sm font-medium text-muted-foreground"
              >Investment Budget</label
            >
            <select name="investmentBudget">
              <option value="" disabled selected
                >Select your budget range</option
              >
              <option value="25k-50k">£25,000 - £50,000</option>
              <option value="50k-100k">£50,000 - £100,000</option>
              <option value="100k-200k">£100,000 - £200,000</option>
              <option value="200k-500k">£200,000 - £500,000</option>
              <option value="500k-plus">£500,000+</option>
            </select>
          </div>

          <div class="space-y-2">
            <label for="message" class="text-sm font-medium text-muted-foreground"
              >Message</label
            >
            <Textarea
              name="message"
              placeholder="Tell us about your investment goals and any questions you have..."
              rows={4}
            />
          </div>

          <Button class="w-full text-white py-3 hover:opacity-90 bg-primary">
            Schedule Free Consultation
          </Button>

          <p class="text-sm text-muted-foreground text-center">
            We'll respond within 24 hours to schedule your consultation
          </p>
        </CardContent>
      </Card>

      <div class="space-y-8">
        <Card class="bg-gradient-to-br from-white to-slate-50 dark:from-primary/30 dark:to-primary/10">
          <CardHeader>
            <CardTitle class="text-2xl"
              >Contact Information</CardTitle
            >
          </CardHeader>
          <CardContent class="space-y-6">
            <div class="flex items-start space-x-4">
              <div
                class="p-3 bg-primary/10 rounded-lg"
              >
                <Phone class="h-6 w-6 text-primary"/>
              </div>
              <div>
                <h4 class="font-semibold">Phone</h4>
                <p class="text-muted-foreground">+44 79 3073 9927</p>
                <p class="text-sm text-slate-500">Mon-Fri 9AM-6PM GMT</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="p-3 bg-emerald-600/10 rounded-lg">
                <Mail class="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h4 class="font-semibold">Email</h4>
                <p class="text-muted-foreground">property@dhubgroup.com</p>
                <p class="text-sm text-slate-500">We respond within 24 hours</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="p-3 bg-purple-600/10 rounded-lg">
                <MapPin class="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h4 class="font-semibold">Office</h4>
                <p class="text-muted-foreground">
                  5 Union Street, City View House<br/> Manchester M12 4JD UK
                </p>
                <p class="text-sm text-slate-500">By appointment only</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="p-3 bg-orange-600/10 rounded-lg">
                <Clock class="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h4 class="font-semibold">Business Hours</h4>
                <p class="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p class="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                <p class="text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card
          class="bg-gradient-to-br from-white to-slate-50 dark:from-primary/30 dark:to-primary/10"
        >
          <CardContent class="p-6">
            <h3 class="text-xl font-bold mb-4">Emergency Support</h3>
            <p class="mb-4">
              For urgent matters regarding active investments, our emergency
              support line is available 24/7.
            </p>
            <a href="tel:+447930739927" class="flex items-center space-x-3">
              <Phone class="h-5 w-5" />
              <span class="font-semibold">+44 79 3073 9927</span>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>
