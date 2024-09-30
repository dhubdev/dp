import { defineCollection, z } from "astro:content"

const legal = defineCollection({
  type: "content",
  schema: z.object({
    active: z.boolean(),
    title: z.string(),
    caption: z.string(),
  })
})

const services = defineCollection({
  type: "content",
  schema: z.object({
    active: z.boolean(),
    order: z.number(),
    name: z.string(),
    subline: z.string(),
    image: z.string()
  })
})

export const collections = {
  'legal': legal,
  'services': services
}