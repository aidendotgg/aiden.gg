import { Fragment, ReactNode } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';

export default function Modal({ children, open, setOpen }: { children: ReactNode; open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <>
      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-150" onClose={() => setOpen(false)}>
          <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 backdrop-blur-sm transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full justify-center items-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-0 translate-y-4 sm:translate-y-0"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-0 translate-y-4 sm:translate-y-0"
              >
                <DialogPanel className={`max-w-208 w-full relative transform overflow-hidden rounded-md bg-secondary border border-accent md:p-6 p-4 sm:m-8 mx-4 my-8 shadow-xl transition-all`}>
                  {children}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
