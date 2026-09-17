import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import VitePluginImageTools from "vite-plugin-image-tools";
import { imagetools } from "vite-imagetools";

export default defineConfig({
    plugins: [
        tailwindcss(),
        reactRouter(),
        imagetools(),
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
