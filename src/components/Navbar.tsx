import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {

    const handleClickScroll = () => {
        const element = document.getElementById('about');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ 
                top: elementPosition - 50,
                behavior: 'smooth'
            });
        }
    };

    const handleClickScroll2 = () => {
        const element = document.getElementById('experience');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ 
                top: elementPosition - 50,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <motion.header
                className="flex justify-center items-center w-full fixed px-4 top-0 z-50 pt-4"
                initial={{ transform: 'translateY(-30px)', opacity: 0 }}
                animate={{ transform: 'translateY(0px)', opacity: 100 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
            >
                <nav style={{ boxShadow: '0 0 30px 2.5px #0a0a0a' }} className="flex h-14 max-w-[46rem] w-screen bg-gradient-to-br from-primary/90 to to-secondary/90 backdrop-blur-md rounded-lg border-1 border-accent px-4">
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-2 items-center">
                            <img alt="" draggable={false} className="h-10 w-10 rounded-full border-1 border-accent" src="/me.jpeg" />
                            <button onClick={handleClickScroll} className="p-2 duration-300 text-lg font-medium hover:bg-secondary rounded-md">
                                About
                            </button>
                            <button onClick={handleClickScroll2} className="p-2 duration-300 text-lg font-medium hover:bg-secondary rounded-md">
                                Experience
                            </button>
                        </div>
                        <div className="min-[330px]:flex hidden flex-row gap-2 items-center">
                            <Link draggable={false} href="https://github.com/aidendotgg/aiden.gg" target="_blank" className="p-2 duration-300 text-lg font-medium hover:bg-secondary rounded-md">
                                Source
                            </Link>
                        </div>
                    </div>
                </nav>
            </motion.header>
        </>
    );
}
