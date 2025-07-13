import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import unocss from '@unocss/astro';

export default defineConfig({
  integrations: [
    unocss(),
    react()
  ]
});