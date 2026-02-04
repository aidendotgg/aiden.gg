import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  //set to true by default for now because there aren't enough projects to warrant a show more button
  const [showAll, setShowAll] = useState(true);

  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16 -mb-2"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          Other Projects
        </motion.h1>
        <ul className={`${showAll ? '' : 'max-h-[100rem]'} grid md:grid-cols-2 pt-6 pb-1 grid-cols-1 gap-4 overflow-hidden`}>
          {!showAll &&
            <div className="absolute flex justify-center bottom-[5rem] z-10 bg-gradient-to-t from-background pb-8 pt-32 max-w-4xl w-full">
              <Button label="Show More" onClick={() => setShowAll(true)} width="w-[10rem]" />
            </div>
          }
          <ProjectCard
            url="https://lilith.rip"
            title="Lilith Website"
            fullDescription={[
              "Lilith is a proxy mod for Hypixel that lets you see the stats of other players in your game automatically. It supports all major PvP gamemodes on the server.",
              "This website serves as the main hub for Lilith, providing information about its features, download links, and support resources.",
            ]}
            cardImage="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/raaz68s6.png"
            cardDescription="Lilith is a proxy mod for Hypixel that lets you see the stats of other players in your game automatically. It supports all major PvP gamemodes on the server."
            media={[
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/bzliiv0z.mp4",
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/u17ctj81.png"
            ]}
            myRole="Frontend Developer/Designer"
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <ProjectCard
            url="https://tnttag.info"
            title="TNTTag Info"
            fullDescription={[
              "TNTTag info is a stats website for the Hypixel game TNT Tag. You can view an individual player's stats or view various top 1000 leaderboards.",
              "This website was made because at the time there wasn't a good place to view every single TNT Tag stat. TNT Tag is one of my favorite games on Hypixel and I wanted to make a website that would help the community."
            ]}
            cardImage="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/02kgidf1.png"
            cardDescription="TNTTag info is a stats website for the Hypixel game TNT Tag. You can view an individual player's stats or view various top 1000 leaderboards."
            media={[
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/02kgidf1.png",
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/rr5675i3.png",
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/k7kie26i.png"
            ]}
            myRole="Founder, Head Developer, Designer"
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
        </ul>
      </section>
    </>
  );
}
