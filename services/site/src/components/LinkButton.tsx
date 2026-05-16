import Link from 'next/link';

export default function LinkButton({ label, link, width }: { label: string; link: string; width: string }) {
  return (
    <Link
      href={link}
      target="_blank"
      className={`${width} bg-secondary hover:bg-accent duration-300 border border-accent px-2 py-1.5s text-lg font-medium flex items-center justify-center rounded-lg`}
    >
      {label}
    </Link>
  );
}
