import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import os from 'os'; // <-- agregamos esto para saber tu IP

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name] || []) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

export default defineConfig({
  integrations: [tailwind(), svelte()],
  vite: {
    optimizeDeps: {
      include: []
    },
    server: {
      host: true,
      port: 4321,
    },
    plugins: [
      {
        name: 'show-local-ip',
        configureServer(server) {
          server.httpServer?.once('listening', () => {
            const address = getLocalIP();
            console.log(`🚀 Tu sitio está disponible en:`);
            console.log(`👉 http://localhost:4321/`);
            console.log(`👉 http://${address}:4321/`);
          });
        }
      }
    ]
  }
});
