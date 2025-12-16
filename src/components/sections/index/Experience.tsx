import ExperienceCard from "@/components/ExperienceCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section id='experience' className="max-w-4xl w-full flex flex-col mx-auto">
                <motion.h1
                    className="text-center font-bold text-5xl mt-16 -mb-2"
                    initial={{ transform: 'translateY(-30px)', opacity: 0 }}
                    whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
                    viewport={{ amount: 0.1, once: true }}
                >
                    Experience
                </motion.h1>
                <ul className={`flex flex-col pt-6 pb-1 gap-4 overflow-hidden`}>
                    <ExperienceCard
                        url="https://e-z.gg"
                        title="E-Z Services"
                        fullDescription={[
                            "While running E-Z I have learned about the entire process of developing a website and pushing it securely into production. E-Z as a whole has gained 21,500+ users over the years and has been a great learning experience for me. I am responsible for all of the frontend development and a good chunk of the backend development.",
                            "E-Z's most notable projects are E-Z Host and E-Z Bio. E-Z Host is a very customizable file-sharing platform that integrates into uploading tools to upload and share screenshots, video clips, and other files. E-Z Bio is a customizable bio link platform that's easy to set up and and allows users to have a full page with all of their socials in minutes.",
                            "Our team is made up of me, my friend tsoxas, and my friend Nathan. As stated before, I am responsible for all of the frontend and a good portion of the backend, tsoxas steps in when needed for backend work, and Nathan organizes code and pitches in here and there.",
                            "I started E-Z before I even knew how to code by using an open-source project as a base. Tsoxas joined early on and helped carry the site through its first stages, developing a custom backend and adding new features. Eventually I leared how to code and now here we are today."
                        ]}
                        cardImage="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/giqhlh0p.png"
                        cardDescription="While running E-Z I have learned about the entire process of developing a website and pushing it securely into production. E-Z as a whole has gained 21,500+ users over the years and has been a great learning experience for me. I am responsible for all of the frontend development and a good chunk of the backend development."
                        media={[
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/7zdwvchf.mp4",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/04s2qt5p.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/7rivygg2.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/lejpmjvp.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/4qh6eag6.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/x8capy8n.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/slub8gdh.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/hf7i7o31.mp4",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/yrk5zedf.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/tb8jdveo.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/2v0ymhiz.mp4",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/3xfw3xts.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/k36z8iwq.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/su4s5oxd.png",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/dsolrzxq.png",
                        ]}
                        myRole="Founder/Head Developer"
                        timeline="March 2021 - Present"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                    />
                    <ExperienceCard
                        url="https://out.so"
                        title="Out.so"
                        fullDescription={[
                            "While working on Out I've collaborated closely with a designer to create intuitive and visually appealing user interfaces, ensuring seamless user experiences. I've also aided in the process of pushing the site into production securely and efficiently by advising on best practices and implementing security measures.",
                            "Out is a service that allows content creators to easily upload content between all of their platforms. Creators can upload their video to Out and schedule it to be posted on all of their social media platforms at once. Out also allows creators to import videos from existing platforms and schedule them to be posted on other platforms.",
                            "To list things that I've developed on Out, I've done the home page, dark mode across the entire site, the bio card pages, the layout of the dashboard, and part of mobile responsiveness on the dashboard."
                        ]}
                        cardImage="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/xt9q5o0l.png"
                        cardDescription="While working on Out I've collaborated closely with a designer to create intuitive and visually appealing user interfaces, ensuring seamless user experiences. I've also aided in the process of pushing the site into production securely and efficiently by advising on best practices and implementing security measures."
                        media={[
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/5mwfskp1.mp4",
                            "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/w5stxuds.mp4"
                        ]}
                        myRole="Full-stack Developer"
                        timeline="September 2024 - December 2025"
                        delay={0.2}
                        gradient="bg-gradient-to-br"
                    />
                </ul>
            </section>
        </>
    );
}
