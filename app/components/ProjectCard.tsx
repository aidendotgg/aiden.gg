import { useRef, useState } from "react";
import GitHub from "./icons/GitHub";
import Web from "./icons/Web";
import Modal from "./Modal";
import Button from "./Button";
import LinkButton from "./LinkButton";
import MediaCarousel from "./MediaCarousel";
import TechBadge from "./TechBadge";

export default function ProjectCard({
    img,
    modalMedia,
    description,
    logoImg,
    name,
    animDelay,
    tech,
    site,
    github,
}: {
    img: string;
    modalMedia: { type: "image" | "video"; src: string }[];
    description: string;
    logoImg: string;
    name: string;
    animDelay: number;
    tech: string[];
    site?: string;
    github?: string;
}) {
    const [open, setOpen] = useState(false);
    const [origin, setOrigin] = useState({ x: 0, y: 0 });

    const modalRef = useRef<HTMLButtonElement | null>(null);

    const openModal = () => {
        const rect = modalRef.current?.getBoundingClientRect();
        if (rect) {
            setOrigin({
                x: rect.left + rect.width / 2 - window.innerWidth / 2,
                y: rect.top + rect.height / 2 - window.innerHeight / 2,
            });
        }
        setOpen(true);
    };

    return (
        <div
            className={`relative flex overflow-hidden group bg-mid/75 border border-dark/75 min-[1700px]:aspect-video min-[1500px]:aspect-auto aspect-video h-full w-full rounded-sm animate-fade`}
            style={{ willChange: "opacity", animationDelay: `${animDelay}s` }}
        >
            <img className="absolute inset-0 min-[1700px]:aspect-video min-[1500px]:aspect-auto aspect-video object-cover h-full w-full" src={img} alt={`${name} screenshot`} />
            <div className="absolute top-0 p-2 rounded-t-sm w-full opacity-0 group-hover:opacity-100 -translate-y-30 group-hover:translate-y-0 bg-mid/75 backdrop-blur-sm border-b border-b-dark/75 duration-300">
                <div className="flex flex-row gap-2 items-center">
                    <img className="h-8 w-8" src={logoImg} alt={`${name} logo`} />
                    <h2 className="text-2xl font-bold">{name}</h2>
                </div>
            </div>
            <div className="absolute bottom-0 p-2 rounded-b-sm w-full opacity-0 group-hover:opacity-100 translate-y-30 group-hover:translate-y-0 bg-mid/75 backdrop-blur-sm border-t border-t-dark/75 duration-300">
                <div className="flex flex-row gap-2 items-center">
                    <Button ref={modalRef} onClick={openModal} size="full">
                        View More
                    </Button>
                    {site && (
                        <LinkButton href={site} size="fit">
                            <Web className="h-7 w-7 fill-white" />
                        </LinkButton>
                    )}
                    {github && (
                        <LinkButton href={github} size="fit">
                            <GitHub className="h-7 w-7 fill-white" />
                        </LinkButton>
                    )}
                </div>
            </div>
            <Modal open={open} setOpen={setOpen} origin={origin}>
                <MediaCarousel media={modalMedia} />
                <div className="flex p-4">
                    <div className="flex md:flex-row flex-col gap-4">
                        <div className="flex flex-col gap-2 md:w-3/5 w-full">
                            <div className="flex flex-row gap-2 items-center">
                                <h1 className="text-3xl font-bold whitespace-nowrap">{name}</h1>
                                {site && (
                                    <LinkButton href={site} size="fit">
                                        <Web className="h-7 w-7 fill-white" />
                                    </LinkButton>
                                )}
                                {github && (
                                    <LinkButton href={github} size="fit">
                                        <GitHub className="h-7 w-7 fill-white" />
                                    </LinkButton>
                                )}
                            </div>
                            <p className="text-lg">{description}</p>
                        </div>
                        <div className="flex flex-col gap-2 md:w-2/5 w-full">
                            <div className="flex flex-row flex-wrap gap-2">
                                {tech.map((t) => (
                                    <TechBadge key={t} tech={t} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
