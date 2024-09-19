import { defineCollection, z } from "astro:content"

const legal = defineCollection({
  type: "content",
  schema: z.object({
    active: z.boolean(),
    title: z.string(),
    caption: z.string(),
  })
})

export const collections = {
  'legal': legal
}