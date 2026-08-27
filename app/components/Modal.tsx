import { Dialog, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import type { Dispatch, ReactNode, SetStateAction } from "react";

export default function Modal({ children, open, setOpen, origin }: { children: ReactNode; open: boolean; setOpen: Dispatch<SetStateAction<boolean>>; origin?: { x: number; y: number } }) {
    const originX = origin?.x ?? 0;
    const originY = origin?.y ?? 0;

    return (
        <AnimatePresence>
            {open && (
                <Dialog static open={open} onClose={() => setOpen(false)} className="relative z-50">
                    <motion.div
                        initial={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0, 0, 0, 0)" }}
                        animate={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(0, 0, 0, 0.5)", transition: { duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96] } }}
                        exit={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0, 0, 0, 0)", transition: { duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96] } }}
                        className="fixed inset-0 overflow-y-auto"
                    >
                        <div className="flex w-screen min-h-screen items-center justify-center px-4 py-12">
                            <DialogPanel
                                as={motion.div}
                                initial={{ x: originX, y: originY, scale: 0.2, opacity: 0.1 }}
                                animate={{ x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96] } }}
                                exit={{ x: originX, y: originY, scale: 0.2, opacity: 0.1, transition: { duration: 0.5, ease: [0.39, 0.21, 0.12, 0.96] } }}
                                className="flex flex-col max-w-208 w-full rounded-sm bg-mid border border-dark p-4"
                            >
                                {children}
                            </DialogPanel>
                        </div>
                    </motion.div>
                </Dialog>
            )}
        </AnimatePresence>
    );
}
