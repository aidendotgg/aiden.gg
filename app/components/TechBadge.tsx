import type { ReactNode } from "react";
import Bun from "./icons/tech/Bun";
import DiscordJS from "./icons/tech/DiscordJS";
import Elysia from "./icons/tech/Elysia";
import Fastify from "./icons/tech/Fastify";
import Figma from "./icons/tech/Figma";
import FramerMotion from "./icons/tech/FramerMotion";
import Gsap from "./icons/tech/Gsap";
import MongoDB from "./icons/tech/MongoDB";
import NextJS from "./icons/tech/NextJS";
import NodeJS from "./icons/tech/NodeJS";
import NuxtJS from "./icons/tech/NuxtJS";
import React from "./icons/tech/React";
import Redis from "./icons/tech/Redis";
import Sass from "./icons/tech/Sass";
import TailwindCSS from "./icons/tech/TailwindCSS";
import TanStackStart from "./icons/tech/TanStackStart";
import TypeScript from "./icons/tech/TypeScript";
import Vue from "./icons/tech/Vue";

export default function TechBadge({ tech }: { tech: string }) {
    const techMap: Record<string, { color: string; icon: ReactNode }> = {
        TailwindCSS: { color: "#06B6D4", icon: <TailwindCSS className="h-4 w-4" /> },
        React: { color: "#61DAFB", icon: <React className="h-4 w-4" /> },
        NextJS: { color: "#FFFFFF", icon: <NextJS className="h-4 w-4" /> },
        Vue: { color: "#4FC08D", icon: <Vue className="h-4 w-4" /> },
        NuxtJS: { color: "#00DC82", icon: <NuxtJS className="h-4 w-4" /> },
        "TanStack Start": { color: "#54965E", icon: <TanStackStart className="h-4 w-4" /> },
        Figma: { color: "#F24E1E", icon: <Figma className="h-4 w-4" /> },
        "Framer Motion": { color: "#0055FF", icon: <FramerMotion className="h-4 w-4" /> },
        Sass: { color: "#CC6699", icon: <Sass className="h-4 w-4" /> },
        Gsap: { color: "#0AE448", icon: <Gsap className="h-4 w-4" /> },
        TypeScript: { color: "#3178C6", icon: <TypeScript className="h-4 w-4" /> },
        NodeJS: { color: "#5FA04E", icon: <NodeJS className="h-4 w-4" /> },
        MongoDB: { color: "#47A248", icon: <MongoDB className="h-4 w-4" /> },
        Redis: { color: "#FF4438", icon: <Redis className="h-4 w-4" /> },
        DiscordJS: { color: "#5865F2", icon: <DiscordJS className="h-4 w-4" /> },
        Fastify: { color: "#FFFFFF", icon: <Fastify className="h-4 w-4" /> },
        Bun: { color: "#FBF0DF", icon: <Bun className="h-4 w-4" /> },
        Elysia: { color: "#FFFFFF", icon: <Elysia className="h-4 w-4" /> },
    };

    const { color, icon } = techMap[tech];

    return (
        <div style={{ backgroundColor: color + "50", borderColor: color, fill: color }} className="flex flex-row items-center gap-1 border px-2.5 py-1 rounded-full">
            {icon}
            <p style={{ color: `color-mix(in srgb, ${color} 20%, #FFFFFF)` }} className="text-sm font-bold whitespace-nowrap">
                {tech}
            </p>
        </div>
    );
}
