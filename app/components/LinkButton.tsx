import type { ReactNode } from "react";

export default function LinkButton({ children, size, href }: { children: ReactNode; size: "full" | "fit"; href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-mid/75 outline-none border border-dark/75 hover:bg-dark/75 ${size === "full" ? "w-full" : "w-fit"} text-lg p-2 rounded-sm duration-300`}
        >
            {children}
        </a>
    );
}
