import { useEffect, useRef, useState } from 'react';

export default function MediaCarousel({ media }: { media: string[] }) {
  const [currentMedia, setCurrentMedia] = useState(0);
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    refs.current = refs.current.slice(0, media.length);
  }, [media.length]);

  const scrollToMedia = (i: number) => {
    setCurrentMedia(i);

    refs.current[i]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  const nextMedia = () => {
    scrollToMedia((currentMedia + 1) % media.length);
  };

  const previousMedia = () => {
    scrollToMedia((currentMedia - 1 + media.length) % media.length);
  };

  return (
    <div className="scrollbar flex w-full snap-x snap-mandatory overflow-x-auto rounded-lg media-carousel">
      {media.length > 1 && <CarouselControl isLeft handleNext={nextMedia} handlePrevious={previousMedia} />}
      {media.map((src, i) => (
        <div
          ref={(el) => {
            if (el) refs.current[i] = el;
          }}
          key={i}
          className="flex w-full shrink-0 snap-center justify-center rounded-lg"
        >
          {src.includes('.mp4') ? <video src={src} muted loop controls /> : <img src={src} alt={`Media ${i}`} />}
        </div>
      ))}
      {media.length > 1 && <CarouselControl handleNext={nextMedia} handlePrevious={previousMedia} />}
    </div>
  );
}

function CarouselControl({ isLeft = false, handleNext, handlePrevious }: { isLeft?: boolean; handleNext: () => void; handlePrevious: () => void }) {
  return (
    <button
      type="button"
      onClick={!isLeft ? handleNext : handlePrevious}
      className={`absolute z-10 flex h-8 w-8 items-center justify-center self-center rounded-full bg-neutral-700 text-sm text-white opacity-60 md:text-2xl ${isLeft ? 'md:left-8 left-6' : 'md:right-8 right-6'}`}
    >
      {isLeft ?
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path stroke-dasharray="20" d="M21 12h-17.5">
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" />
            </path>
            <path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12l7 7M3 12l7 -7">
              <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" to="0" />
            </path>
          </g>
        </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path stroke-dasharray="20" d="M3 12h17.5">
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" />
            </path>
            <path stroke-dasharray="12" stroke-dashoffset="12" d="M21 12l-7 7M21 12l-7 -7">
              <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" to="0" />
            </path>
          </g>
        </svg>
      }
    </button>
  );
}
