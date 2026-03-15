import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pacesmarek.github.io',
  base: '/twa-styleguide-2026',
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 500
      },
    },
  },
});
