import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import clerk from "@clerk/astro";

import vercel from "@astrojs/vercel/serverless";
import clerk from "@clerk/astro"
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), svelte(), tailwind(), mdx()],
  output: "server",
  adapter: vercel(),
  redirects: {
    '/cookie-policy': '/legal/cookie-policy',
    '/privacy-policy': '/legal/privacy-policy',
    '/terms-of-use': '/legal/terms-of-use',
  },
});