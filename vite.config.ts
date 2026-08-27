import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import VitePluginImageTools from "vite-plugin-image-tools";

export default defineConfig({
    plugins: [
        tailwindcss(),
        reactRouter(),
        VitePluginImageTools({
            convert: {
                enable: true,
                format: "webp",
                deleteOriginImg: true,
            },
            sharpConfig: {
                webp: { lossless: true, effort: 6 },
            },
        }),
    ],
    resolve: {
        tsconfigPaths: true,
    },
    build: {
        assetsInlineLimit: 0,
    },
});
