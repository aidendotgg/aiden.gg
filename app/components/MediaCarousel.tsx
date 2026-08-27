import { useEffect, useImperativeHandle, useState, type Ref } from "react";

export type MediaCarouselHandle = {
    goTo: (index: number) => void;
};

export default function MediaCarousel({ media, ref, onIndexChange }: { media: { type: "image" | "video"; src: string }[]; ref?: Ref<MediaCarouselHandle>; onIndexChange?: (index: number) => void }) {
    const [currentIndex, setCurrentIndex] = useState(2);
    const [isResetting, setIsResetting] = useState(false);
    const [isSliding, setIsSliding] = useState(false);
    const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

    const count = media.length;

    const move = (direction: "forward" | "backward") => {
        if (isSliding) return;
        if (isResetting) return;
        setIsSliding(true);

        if (direction === "forward") {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }

        setTimeout(() => {
            setIsSliding(false);
        }, 500);
    };

    const goTo = (index: number) => {
        if (count === 0) return;

        const target = ((index % count) + count) % count;
        if (target + 2 === currentIndex) return;

        setCurrentIndex(target + 2);
    };

    useImperativeHandle(ref, () => ({ goTo }));

    const activeIndex = count > 0 ? (((currentIndex - 2) % count) + count) % count : 0;

    useEffect(() => {
        onIndexChange?.(activeIndex);
    }, [activeIndex, onIndexChange]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (currentIndex >= count + 2) {
                setCurrentIndex(2);
                setIsResetting(true);
            } else if (currentIndex < 2) {
                setCurrentIndex(count + 1);
                setIsResetting(true);
            }

            setTimeout(() => {
                setIsResetting(false);
            }, 100);
        }, 500);

        return () => clearTimeout(timeout);
    }, [currentIndex, count]);

    useEffect(() => {
        if (!containerRef) return;

        const videos = Array.from(containerRef.querySelectorAll<HTMLVideoElement>("video[data-slide]"));

        const isPlayable = currentIndex >= 2 && currentIndex < count + 2;
        const active = isPlayable ? videos.find((video) => Number(video.dataset.slide) === currentIndex) : undefined;

        if (active) {
            active.currentTime = 0;
            active.play().catch(() => {});
        }

        const timeout = setTimeout(() => {
            videos.forEach((video) => {
                if (video === active) return;

                video.pause();
                video.currentTime = 0;
            });
        }, 500);

        return () => clearTimeout(timeout);
    }, [containerRef, currentIndex, count]);

    const slides = media.length > 0 ? [media[(count - 2) % count], media[(count - 1) % count], ...media, media[0], media[1]] : [];

    return (
        <>
            <div ref={setContainerRef} className={`flex group flex-row relative w-full h-full aspect-video overflow-hidden`}>
                {media.length > 1 && (
                    <button
                        onClick={() => move("backward")}
                        className="absolute flex justify-center items-center  left-0 p-2 rounded-l-sm h-full opacity-0 group-hover:opacity-100 -translate-x-30 z-10 group-hover:translate-x-0 bg-mid/75 backdrop-blur-sm border border-dark/75 hover:bg-dark/75 duration-300"
                    >
                        <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                fill="currentColor"
                                d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"
                            />
                        </svg>
                    </button>
                )}
                {media.length > 1 ? (
                    <>
                        {slides.map((media, index) => (
                            <div
                                key={index}
                                style={{ transform: `translateX(${(index - currentIndex) * (containerRef?.clientWidth ?? 10000)}px)` }}
                                className={`flex absolute select-none aspect-video ${isResetting ? "transition-none" : "transition-all"} duration-500 bg-mid/75 border border-dark/75 overflow-hidden rounded-sm`}
                            >
                                {media.type === "image" ? (
                                    <img draggable="false" src={media.src} className="inset-0 flex mx-auto" alt={`Slide ${index + 1}`} />
                                ) : (
                                    <video
                                        draggable="false"
                                        data-slide={index}
                                        src={media.src}
                                        className="inset-0 flex mx-auto"
                                        preload={index === currentIndex ? "auto" : "metadata"}
                                        loop
                                        muted
                                        playsInline
                                    />
                                )}
                            </div>
                        ))}
                    </>
                ) : (
                    <div
                        className={`flex absolute select-none aspect-video ${isResetting ? "transition-none" : "transition-all"} duration-500 bg-mid/75 border border-dark/75 overflow-hidden rounded-sm`}
                    >
                        {media[0].type === "image" ? (
                            <img draggable="false" src={media[0].src} className="inset-0 flex mx-auto" alt="Slide 1" />
                        ) : (
                            <video draggable="false" data-slide={2} src={media[0].src} className="inset-0 flex mx-auto" preload="auto" loop muted playsInline />
                        )}
                    </div>
                )}
                {media.length > 1 && (
                    <button
                        onClick={() => move("forward")}
                        className="absolute flex justify-center items-center right-0 p-2 rounded-r-sm h-full opacity-0 group-hover:opacity-100 translate-x-30 z-10 group-hover:translate-x-0 bg-mid/75 backdrop-blur-sm border border-dark/75 hover:bg-dark/75 duration-300"
                    >
                        <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                fill="currentColor"
                                d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"
                            />
                        </svg>
                    </button>
                )}
            </div>
            <div className="flex flex-row justify-center gap-2 mt-2">
                {media.length > 1 &&
                    slides
                        .slice(2, 2 + count)
                        .map((_, index) => <button onClick={() => goTo(index)} className={`${activeIndex === index ? "bg-white/75" : "bg-white/25"} duration-300 w-full h-1.5 rounded-sm`} />)}
            </div>
        </>
    );
}
