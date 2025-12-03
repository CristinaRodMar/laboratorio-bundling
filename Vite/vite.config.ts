import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { analyzer } from "vite-bundle-analyzer";
import { compression } from "vite-plugin-compression2"; // ← nuevo

export default defineConfig({
    plugins: [
    checker({ typescript: true }),
    tailwindcss(),
    react(),
    analyzer({ analyzerMode: "static", openAnalyzer: true }),
    compression({
    algorithms: ["gzip", "brotliCompress"], 
    exclude: [/\.(br)$/, /\.(gz)$/],       
    deleteOriginalAssets: false,           
    threshold: 1024,                     
    }),
    ],

    build: {
        rollupOptions: {
        output: {
            chunkFileNames: "assets/[name]-[hash].js",
            assetFileNames: "assets/[name]-[hash][extname]",
            entryFileNames: "assets/[name]-[hash].js",
        },
        },
    },
});