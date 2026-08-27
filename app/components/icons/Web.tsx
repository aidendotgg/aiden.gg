export default function Web({ className }: { className?: string }) {
    return (
        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
            <title>Website</title>
            <path d="M0 0h48v48H0z" fill="none" />
            <g fill="none" stroke="currentColor" strokeWidth="3">
                <path strokeLinejoin="round" d="M3 24a21 21 0 1 0 42 0a21 21 0 1 0-42 0" />
                <path strokeLinejoin="round" d="M15 24a9 21 0 1 1 18 0a9 21 0 1 1-18 0" />
                <path strokeLinecap="round" d="M4.5 31h39m-39-14h39" />
            </g>
        </svg>
    );
}
