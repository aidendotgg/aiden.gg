import "react-responsive-carousel/lib/styles/carousel.min.css"
import type { Presence } from "../../typings";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import Divider from "@/components/Divider";

export default function PresenceCard({ presence, date, direction, span, gradient, delay }: { presence: Presence | null, date: Date, direction: 'top' | 'bottom' | 'left' | 'right', span: 1 | 2, gradient: string, delay: number }) {
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
                    <style jsx global>
                        {`.control-dots {
                            display: none;
                        }
                        `}
                    </style>
                    <h2 className="text-center font-semibold text-4xl">
                        Currently Doing
                    </h2>
                    <p className="text-center text-xl mb-1.5">
                        Below are the activities I am currently doing.
                    </p>
                    <Divider />
                    <Carousel
                        className="w-full rounded-lg mt-2"
                        showArrows={false}
                        showStatus={false}
                        autoPlay={true}
                        stopOnHover={true}
                        infiniteLoop={true}
                        emulateTouch={true}
                        showThumbs={false}
                    >
                        {presence?.activities.map((activity, index) => (
                            <div key={index} className="flex min-[450px]:flex-row flex-col gap-4 items-center px-1 select-none">
                                <img alt="" className="max-w-28 max-h-28 rounded-lg" src={activity.assets.largeImage} />
                                {activity.name === "Spotify" ?
                                    <div className="flex flex-col overflow-x-hidden w-full min-[450px]:text-left text-center">
                                        <h1 className="text-lg font-bold leading-7">
                                            {activity.title}
                                        </h1>
                                        <p className="text-lg font-medium leading-6 text-nowrap truncate">
                                            {activity.details}
                                        </p>
                                        <p className="text-lg font-medium leading-6 text-nowrap truncate">
                                            by {activity.state}
                                        </p>
                                        <div className="flex flex-row gap-2 justify-between mt-1 items-center">
                                            <p className={`whitespace-normal text-sm`}>{new Date((date.getTime() - new Date(activity.timestamps.start).getTime())).toISOString().slice(14, 19)}</p>
                                            <div className="w-full rounded-full h-2 bg-secondary overflow-x-hidden">
                                                <div style={{ width: `${((date.getTime() - new Date(activity.timestamps.start).getTime()) / (new Date(activity.timestamps.end).getTime() - new Date(activity.timestamps.start).getTime())) * 100}%` }} className="h-2 rounded-full bg-white"></div>
                                            </div>
                                            <p className={`whitespace-normal text-sm`}>{new Date((new Date(activity.timestamps.end).getTime() - new Date(activity.timestamps.start).getTime())).toISOString().slice(14, 19)}</p>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex flex-col overflow-x-hidden w-full min-[450px]:text-left text-center">
                                        <h1 className="text-lg font-bold leading-7">
                                            {activity.title}
                                        </h1>
                                        <p className="text-lg font-medium leading-6 text-nowrap truncate">
                                            {activity.details}
                                        </p>
                                        <p className="text-lg font-medium leading-6 text-nowrap truncate">
                                            {activity.state}
                                        </p>
                                        {activity.timestamps.end && !activity.timestamps.start &&
                                            <p className="text-base leading-6 text-nowrap truncate">
                                                {new Date((new Date(activity.timestamps.end).getTime() - date.getTime())).toISOString().slice(11, 19)} left
                                            </p>
                                        }
                                        {activity.timestamps.start && !activity.timestamps.end &&
                                            <p className="text-base leading-6 text-nowrap truncate">
                                                {new Date((date.getTime() - new Date(activity.timestamps.start).getTime())).toISOString().slice(11, 19)} elapsed
                                            </p>
                                        }
                                    </div>
                                }
                            </div>
                        ))}
                    </Carousel>
                </div>
            </motion.li>
        </>
    );
}
