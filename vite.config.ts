import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'key.pem')), // Path to the private key
    //   cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')), // Path to the certificate
    // },

    host: "0.0.0.0",
    port: 5173,
  },
});
