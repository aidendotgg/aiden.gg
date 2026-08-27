import type { ReactNode, Ref } from "react";

export default function Button({ children, size, onClick, ref }: { children: ReactNode; size: "full" | "fit"; onClick?: () => void; ref?: Ref<HTMLButtonElement> }) {
    return (
        <button ref={ref} onClick={onClick} className={`bg-mid/75 outline-none border border-dark/75 hover:bg-dark/75 ${size === "full" ? "w-full" : "w-fit"} text-lg p-2 rounded-sm duration-300`}>
            {children}
        </button>
    );
}
