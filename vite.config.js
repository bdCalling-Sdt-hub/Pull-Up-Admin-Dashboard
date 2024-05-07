import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "192.168.10.14",
    // host: "143.110.241.244",
    port: "3001",
  },
});
