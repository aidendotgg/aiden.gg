export default function Button({ label, onClick, width }: { label: string; onClick: () => void; width: string }) {
  return (
    <button onClick={onClick} className={`${width} bg-secondary hover:bg-accent duration-300 border border-accent px-2 py-1.5 text-lg font-medium flex items-center justify-center rounded-lg`}>
      {label}
    </button>
  );
}
