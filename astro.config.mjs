import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://engineerwithoutfear.github.io',
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
