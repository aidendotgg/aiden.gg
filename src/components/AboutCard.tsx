import { motion } from "framer-motion";
import Divider from "@/components/Divider";
import TechBadge from "@/components/TechBadge";
import Marquee from "react-fast-marquee";
import type { Tech } from "../../typings";

export default function AboutCard({ title, description, tech, direction, span, gradient, delay }: { title: string, description: string, tech?: Tech[], direction: 'top' | 'bottom' | 'left' | 'right', span: 1 | 2, gradient: string, delay: number }) {
    return (
        <>
            <motion.li
                className={`${span === 1 ? 'min-[940px]:col-span-1 col-span-2' : 'col-span-2'} `}
                initial={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'Y' : 'X'}(${direction === 'top' || direction === 'left' ? '-' : ''}30px)`, opacity: 0 }}
                whileInView={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'Y' : 'X'}(0px)`, opacity: 100 }}
                transition={{ duration: 0.5, delay: delay, ease: [0.39, 0.21, 0.12, 0.96], }}
                viewport={{ amount: 0.1, once: true }}
            >
                <div className={`${gradient} from-primary to-secondary p-4 flex flex-col rounded-lg border-1 border-accent shadow-2xl shadow-background`}>
                    <h2 className="text-center font-semibold text-4xl">
                        {title}
                    </h2>
                    <p className="text-center text-xl mb-2">
                        {description}
                    </p>
                    {tech &&
                        <>
                            <Divider />
                            <Marquee pauseOnHover speed={70} className="my-2">
                                <ul className="flex flex-row">
                                    {tech.map((tech: Tech) => (
                                        <TechBadge key={tech.title} title={tech.title} icon={tech.icon} link={tech.link} />
                                    ))}
                                </ul>
                            </Marquee>
                            <Divider />
                        </>
                    }
                </div>
            </motion.li>
        </>
    );
}
