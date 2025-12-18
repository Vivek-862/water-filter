// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import TanStackRouterVite from "@tanstack/router-plugin/vite";

// // import { routerPlugin } from "@tanstack/router-plugin/vite";


// // // https://vite.dev/config/
// // export default defineConfig({
// //   plugins: [tailwindcss(),react(),  routerPlugin(),],
// // })

// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react(),
//     TanStackRouterVite(),
//   ],
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import routerPlugin from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    react(),          // MUST be first
    tailwindcss(),
    routerPlugin(),   // DEFAULT import
  ],
});

