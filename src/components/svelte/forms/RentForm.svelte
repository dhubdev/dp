<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Input } from "$lib/components/ui/input";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Home, Loader2, Mail, MapPin, Phone, PoundSterling, User } from "lucide-svelte";
  import { toast } from "svelte-sonner";

  interface SubmitRentalInquiryRequest {
    name: string;
    phoneNumber: string;
    email: string;
    address: string;
    propertyType: "flat" | "house";
    location: string;
    price: number;
    ukReference: string;
  }

  const initialFormData = {
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    propertyType: "flat",
    location: "",
    price: 0,
    ukReference: "",
  };

  $: formData = initialFormData as SubmitRentalInquiryRequest;

  const setFormData = (
    updater: (prev: SubmitRentalInquiryRequest) => SubmitRentalInquiryRequest
  ) => {
    formData = updater(formData);
  };

  let isSubmitting = false;

  // const handleInputChange = (
  //   field: keyof SubmitRentalInquiryRequest,
  //   value: string | number
  // ) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [field]: value,
  //   }));
  // };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.address ||
      !formData.location ||
      !formData.ukReference ||
      formData.price <= 0
    ) {
      toast.error("Missing Information", {
        description: "Please fill in all required fields",
      });
      return;
    }

    isSubmitting = true;

    try {
      // const response = await backend.rental.submit(formData);
      const response = { message: "Inquiry submitted successfully" }; // Mock response

      toast.success("Inquiry Submitted Successfully", {
        description: response.message,
      });

      // Reset form
      formData = initialFormData as SubmitRentalInquiryRequest
    } catch (error: any) {
      console.error("Failed to submit rental inquiry:", error);
      toast.error("Failed to submit rental inquiry:", {
        description: error.message,
      });
    } finally {
      isSubmitting = false;
    }
  };
</script>

<Card class="w-full dark:bg-secondary">
  <CardHeader>
    <CardTitle class="flex items-center gap-2">
      <Home class="h-5 w-5" />
      Rental Inquiry Form
    </CardTitle>
  </CardHeader>
  <CardContent>
    <form on:submit={handleSubmit} class="space-y-6 w-full flex flex-col items-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-2">
          <label for="name" class="flex items-center gap-2">
            <User class="h-4 w-4" />
            Full Name *
          </label>
          <Input
            id="name"
            type="text"
            name="name"
            bind:value={formData.name}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div class="space-y-2">
          <label for="phone" class="flex items-center gap-2">
            <Phone class="h-4 w-4" />
            Phone Number *
          </label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            bind:value={formData.phoneNumber}
            placeholder="Enter your phone number"
            required
          />
        </div>
      </div>

      <div class="space-y-2 w-full">
        <label for="email" class="flex items-center gap-2">
          <Mail class="h-4 w-4" />
          Email Address *
        </label>
        <Input
          id="email"
          type="email"
          name="email"
          bind:value={formData.email}
          placeholder="Enter your email address"
          required
        />
      </div>

      <div class="space-y-2 w-full">
        <label for="address" class="flex items-center gap-2">
          <MapPin class="h-4 w-4" />
          Current Address *
        </label>
        <Textarea
          id="address"
          value={formData.address}
          name="address"
          class="resize-none"
          placeholder="Enter your current address"
          rows={3}
          required
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div class="space-y-2">
          <label for="propertyType">Property Type *</label>
          <!-- <Select value={formData.propertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flat">Flat</SelectItem>
              <SelectItem value="house">House</SelectItem>
            </SelectContent>
          </Select> -->
        </div>

        <div class="space-y-2">
          <label for="location" class="flex items-center gap-2">
            <MapPin class="h-4 w-4" />
            Desired Location *
          </label>
          <Input
            id="location"
            type="text"
            name="location"
            value={formData.location}
            placeholder="Enter desired location"
            required
          />
        </div>
      </div>

      <div class="space-y-2 w-full">
        <label for="price" class="flex items-center gap-2">
          <PoundSterling class="h-4 w-4" />
          Budget (£ per month) *
        </label>
        <Input
          id="price"
          type="number"
          name="price"
          min="0"
          step="50"
          bind:value={formData.price} 
          placeholder="Enter your monthly budget"
          required
        />
      </div>

      <div class="space-y-2 w-full">
        <label for="ukReference">UK Reference *</label>
        <Textarea
          id="ukReference"
          value={formData.ukReference}
          name="ukReference"
          placeholder="Please provide details of your UK reference (name, relationship, contact information)"
          rows={3}
          required
        />
      </div>

      <Button type="submit" class="w-full md:w-fit" disabled={isSubmitting}>
        {#if isSubmitting}
          <Loader2 class="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        {:else}
          Submit Rental Inquiry
        {/if}
      </Button>
    </form>
  </CardContent>
</Card>
