import AboutCard from "@/components/AboutCard";
import type { Presence, Tech } from "../../../../typings";
import { motion } from "framer-motion";
import PresenceCard from "@/components/PresenceCard";
import { useEffect, useState } from "react";

export default function About() {
  let frontendTech: Tech[] = [
    { title: "HTML", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { title: "CSS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { title: "TailwindCSS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />, link: "https://tailwindcss.com/" },
    { title: "React", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />, link: "https://react.dev/" },
    { title: "NextJS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />, link: "https://nextjs.org/" },
    { title: "Vue", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" />, link: "https://vuejs.org/" },
    { title: "NuxtJS", icon: <svg className="h-5 w-[30px]" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M168 200H279C282.542 200 285.932 198.756 289 197C292.068 195.244 295.23 193.041 297 190C298.77 186.959 300.002 183.51 300 179.999C299.998 176.488 298.773 173.04 297 170.001L222 41C220.23 37.96 218.067 35.7552 215 34C211.933 32.2448 207.542 31 204 31C200.458 31 197.067 32.2448 194 34C190.933 35.7552 188.77 37.96 187 41L168 74L130 9.99764C128.228 6.95784 126.068 3.75491 123 2C119.932 0.245087 116.542 0 113 0C109.458 0 106.068 0.245087 103 2C99.9323 3.75491 96.7717 6.95784 95 9.99764L2 170.001C0.226979 173.04 0.00154312 176.488 1.90993e-06 179.999C-0.0015393 183.51 0.229648 186.959 2 190C3.77035 193.04 6.93245 195.244 10 197C13.0675 198.756 16.4578 200 20 200H90C117.737 200 137.925 187.558 152 164L186 105L204 74L259 168H186L168 200ZM89 168H40L113 42L150 105L125.491 147.725C116.144 163.01 105.488 168 89 168Z" fill="#00DC82"></path></svg>, link: "https://nuxt.com/" },
    { title: "Figma", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />, link: "https://figma.com"},
    { title: "Framer Motion", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/5q2uj9zv.png" />, link: "https://www.framer.com/motion/" },
    { title: "Sass", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />, link: "https://sass-css.org/" },
    { title: "Gsap", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/zkji5ma1.png" />, link: "https://gsap.com/" }
  ]

  let backendTech: Tech[] = [
    { title: "JavaScript", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />, link: "https://www.javascript.com/" },
    { title: "TypeScript", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />, link: "https://www.typescriptlang.org" },
    { title: "NodeJS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />, link: "https://nodejs.org/" },
    { title: "MongoDB", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />, link: "https://www.mongodb.com/" },
    { title: "Redis", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" />, link: "https://redis.io/" },
    { title: "DiscordJS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg" />, link: "https://discord.js.org/" },
    { title: "Fastify", icon: <img alt="" draggable={false} className="h-5" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/g9j04tdrsj5wwzw76d.png" />, link: "https://fastify.dev/" },
    { title: "Bun", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" />, link: "https://bun.sh/" },
    { title: "Elysia", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/y1iick8a.png" />, link: "https://elysiajs.com/" }
  ]

  let otherTech: Tech[] = [
    { title: "Git", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />, link: "https://git-scm.com/" },
    { title: "Github", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />, link: "https://github.com/" },
    { title: "NPM", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />, link: "https://www.npmjs.com/" },
    { title: "Visual Studio Code", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />, link: "https://code.visualstudio.com/" },
    { title: "Insomnia", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/qr3zqlfckx6hkdj0nl.png" />, link: "https://insomnia.rest/" },
    { title: "Cloudflare", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/me2uv8xk95n010sdwz.png" />, link: "https://www.cloudflare.com/" },
    { title: "Tailscale", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/9aivscb1.png" />, link: "https://tailscale.com/" },
    { title: "Hetzner", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/q4dzhs1beprvugs13m.png" />, link: "https://www.hetzner.com/" },
    { title: "Porkbun", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/z3xmhz3k1rc24l433c.png" />, link: "https://porkbun.com/" },
    { title: "Coolify", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/92tzzi14.png" />, link: "https://coolify.io" },
    { title: "Vercel", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />, link: "https://vercel.com/" },
    { title: "Linux", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />, link: "https://www.linux.org/" },
  ]

  const [presence, setPresence] = useState<Presence | null>(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const socket = new WebSocket(`wss://api.aiden.gg/presence`)
  
    const handleOpen = () => {
      socket.send("Connection established")
    }
  
    const handleMessage = (event: MessageEvent) => {
      if (event.data === "connected") return
      if (event.data === "pong") return
      setPresence(JSON.parse(event.data))
    }

    let ping = setInterval(() => {
      socket.send("ping")
    }, 10000)
  
    socket.addEventListener("open", handleOpen)
    socket.addEventListener("message", handleMessage)
  
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
  
    return () => {
      socket.removeEventListener("open", handleOpen)
      socket.removeEventListener("message", handleMessage)
      socket.close()
      clearInterval(ping)
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          About Me
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <AboutCard
            title="Overall"
            description="I've been running websites and other projects since the age of 15 but didn't learn how to code until I was nearly 17 as it took me a bit to find a good way to start learning. By the end of my education, I hope to secure a rewarding job in web development, as it is a lifelong passion of mine. I enjoy creating things and find great satisfaction when others genuinely use and appreciate the end product."
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="Frontend"
            description="I have ~3 years of experience with frontend development, and I have worked with a variety of different frameworks and libraries."
            tech={frontendTech}
            direction="left"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
          />
          <AboutCard
            title="Backend"
            description="I have ~3 years of experience with backend development. I have used different frameworks and runtimes to create various APIs."
            tech={backendTech}
            direction="right"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <AboutCard
            title="Other Technologies"
            description="When it comes to the development process, I use a wide variety of tools, services, and technologies."
            tech={otherTech}
            direction="bottom"
            span={presence && presence.activities.length > 0 ? 1 : 2}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
          {presence && presence.activities.length > 0 &&
            <PresenceCard
              presence={presence}
              date={date}
              direction="bottom"
              span={1}
              delay={0.1}
              gradient="bg-gradient-to-tl"
            />
          }
        </ul>
      </section>
    </>
  );
}
