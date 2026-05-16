import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function SocialIcon({ url, icon, delay }: { url: string; icon: ReactNode; delay: number }) {
  return (
    <>
      <motion.li
        className="flex flex-col"
        initial={{ transform: 'translateY(-30px)', opacity: 0 }}
        whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
        transition={{ duration: 0.5, delay: delay, ease: [0.39, 0.21, 0.12, 0.96] }}
        viewport={{ amount: 0.1, once: true }}
      >
        <Link draggable={false} href={url} target="_blank" className="p-2 bg-secondary hover:bg-accent border border-accent rounded-lg duration-300">
          {icon}
        </Link>
      </motion.li>
    </>
  );
}
