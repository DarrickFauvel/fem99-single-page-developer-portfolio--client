import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0"
  },
  integrations: [react()]
});