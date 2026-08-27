import Grainient from "~/components/Grainient";
import LinkButton from "~/components/LinkButton";
import GitHub from "~/components/icons/GitHub";
import Linkedin from "~/components/icons/Linkedin";
import NameMC from "~/components/icons/NameMC";
import Steam from "~/components/icons/Steam";
import Roblox from "~/components/icons/Roblox";
import Lastfm from "~/components/icons/Lastfm";
import Discord from "~/components/icons/Discord";
import Email from "~/components/icons/Email";
import ExperienceCard from "~/components/ExperienceCard";
import ProjectCard from "~/components/ProjectCard";

import ezLogo from "~/assets/logos/e-z.png";
import polyfrostLogo from "~/assets/logos/polyfrost.png";
import outsoLogo from "~/assets/logos/outso.png";
import voidtagLogo from "~/assets/logos/voidtag.png";
import tnttaginfoLogo from "~/assets/logos/tnttaginfo.png";
import lilithLogo from "~/assets/logos/lilith.png";

import ezhostImage from "~/assets/sites/images/e-zhost.png";
import oneclientImage from "~/assets/sites/images/oneclient.png";
import voidtagImage from "~/assets/sites/images/voidtag.png";
import outsoImage from "~/assets/sites/images/outso.png";
import tnttaginfoImage from "~/assets/sites/images/tnttaginfo.png";
import lilithImage from "~/assets/sites/images/lilith.png";
import bio1Image from "~/assets/sites/images/bio1.png";
import bio2Image from "~/assets/sites/images/bio2.png";
import bio3Image from "~/assets/sites/images/bio3.png";
import bio4Image from "~/assets/sites/images/bio4.png";
import bio5Image from "~/assets/sites/images/bio5.png";
import bio6Image from "~/assets/sites/images/bio6.png";
import bio7Image from "~/assets/sites/images/bio7.png";
import bio8Image from "~/assets/sites/images/bio8.png";
import vtGameImage from "~/assets/sites/images/vtgameimage.png";
import vtStatImage from "~/assets/sites/images/vtstatimage.png";

import ezhostVideo from "~/assets/sites/videos/e-zhost.mp4";
import ezbioVideo from "~/assets/sites/videos/e-zbio.mp4";
import oneclientVideo from "~/assets/sites/videos/oneclient.mp4";
import oneclientStoreVideo from "~/assets/sites/videos/oneclientstore.mp4";
import voidtagVideo from "~/assets/sites/videos/voidtag.mp4";
import outsoVideo from "~/assets/sites/videos/outso.mp4";
import outsoBioCardVideo from "~/assets/sites/videos/outsobiocard.mp4";
import tnttaginfoVideo from "~/assets/sites/videos/tnttaginfo.mp4";
import lilithVideo from "~/assets/sites/videos/lilith.mp4";

export function meta() {
    return [
        { title: "Aiden.gg" },
        { name: "description", content: "My personal web development portfolio website" },
        { name: "theme-color", content: "#09090b" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://aiden.gg" },
        { property: "og:title", content: "Aiden.gg" },
        { property: "og:description", content: "My personal web development portfolio website" },
        { property: "og:image", content: "https://aiden.gg/embed.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "https://aiden.gg/embed.png" },
    ];
}

export default function Home() {
    return (
        <section className="relative">
            <div className="fixed inset-0 m-4 overflow-y-hidden">
                <Grainient
                    className="rounded-sm"
                    color1="#27272a"
                    color2="#52525b"
                    color3="#09090b"
                    timeSpeed={0.2}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={6}
                    warpAmplitude={80}
                    blendAngle={8}
                    blendSoftness={1}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0.05}
                    grainScale={1}
                    grainAnimated={false}
                    contrast={1.5}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
                <div className="absolute inset-0 flex z-10 overflow-y-auto scrollbar-track-bg scrollbar-thumb-light rounded-sm overflow-x-hidden">
                    <div className="flex min-[1690px]:flex-row flex-col gap-3 max-w-525 max-h-275 min-[420px]:p-4 p-0 w-full h-full m-auto">
                        <div className="flex flex-col gap-6 p-4 w-fit">
                            <div className="flex flex-col gap-3 self-start">
                                <h1 className="sm:text-6xl text-5xl font-bold">Hey, I'm Aiden</h1>
                                <p className="sm:text-xl text-lg brightness-90 min-[1690px]:min-w-full xl:w-2/3">
                                    I'm a 20 year old full stack web developer located in upstate New York. Frontend is my strongsuit but I have experience in writing both. I work well both solo and
                                    alongside a design team. I've worked on a variety of projects and have ample experience in pushing websites securely to production.
                                </p>
                                <div className="flex flex-row flex-wrap gap-2">
                                    <LinkButton size="fit" href="https://github.com/aidendotgg">
                                        <GitHub className="w-8 h-8 fill-white" />
                                    </LinkButton>
                                    <LinkButton size="fit" href="https://www.linkedin.com/in/aidendotgg">
                                        <Linkedin className="w-8 h-8 fill-white" />
                                    </LinkButton>
                                    <LinkButton size="fit" href="https://namemc.com/profile/aidendotgg">
                                        <NameMC className="w-8 h-8 fill-white" />
                                    </LinkButton>
                                    <LinkButton size="fit" href="https://steamcommunity.com/id/aidendotsh">
                                        <Steam className="w-8 h-8 fill-white" />
                                    </LinkButton>
                                    <LinkButton size="fit" href="https://www.roblox.com/users/149899158/profile">
                                        <Roblox className="w-8 h-8 fill-white" />
                                    </LinkButton>
                                    <LinkButton size="fit" href="https://www.last.fm/user/aidendotgg">
                                        <Lastfm className="w-8 h-8 fill-white" />
                                    </LinkButton>
                                    <LinkButton size="fit" href="https://discord.gg/ez">
                                        <Discord className="w-8 h-8 fill-white" />
                                    </LinkButton>
                                    <LinkButton size="fit" href="mailto:me@aiden.gg">
                                        <Email className="w-8 h-8 fill-white" />
                                    </LinkButton>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 self-start">
                                <h1 className="text-2xl font-bold">Work Experience</h1>
                                <div className="flex flex-col gap-4 mb-4 min-[1690px]:min-w-full xl:w-2/3">
                                    <ExperienceCard
                                        img={ezLogo}
                                        site="https://e-z.gg"
                                        name="E-Z Services"
                                        role="Founder & Lead Developer/Designer"
                                        timeline="Mar 2021 - Present"
                                        description="Founded and led a small development team and managed the entire process of pushing a website securely out to production for thousands of users. Managed Linux servers, handling deployments and networking with tools like Coolify, Cloudflare, and Tailscale."
                                    />
                                    <ExperienceCard
                                        img={polyfrostLogo}
                                        site="https://polyfrost.org/projects/oneclient"
                                        github="https://github.com/Polyfrost"
                                        name="Polyfrost"
                                        role="Frontend Developer"
                                        timeline="Jul 2026 - Present"
                                        description="Worked closely alongside a designer and backend developer to ship the org's website and cosmetic shop, building the frontend in React and integrating the shop's backend."
                                    />
                                    <ExperienceCard
                                        img={outsoLogo}
                                        name="Out.so"
                                        role="Full Stack Developer"
                                        timeline="Sept 2024 - Dec 2025"
                                        description="Collaborated with the entire team to build and maintain the user facing parts of the website with Vue, and helped direct production decisions."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex p-4 shrink-0 min-[1690px]:h-full">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 h-full w-full overflow-y-auto overflow-x-visible scrollbar-track-bg scrollbar-thumb-light rounded-sm">
                                <ProjectCard
                                    tech={["TypeScript", "React", "NextJS", "TailwindCSS", "Framer Motion", "Bun", "Elysia", "NodeJS", "Fastify", "MongoDB"]}
                                    img={ezhostImage}
                                    animDelay={0.3}
                                    modalMedia={[
                                        { type: "video", src: ezhostVideo },
                                        { type: "video", src: ezbioVideo },
                                        { type: "image", src: bio1Image },
                                        { type: "image", src: bio2Image },
                                        { type: "image", src: bio3Image },
                                        { type: "image", src: bio4Image },
                                        { type: "image", src: bio5Image },
                                        { type: "image", src: bio6Image },
                                        { type: "image", src: bio7Image },
                                        { type: "image", src: bio8Image },
                                    ]}
                                    logoImg={ezLogo}
                                    name="E-Z Services"
                                    site="https://e-z.gg"
                                    description="E-Z Services is a web services company that I founded in 2021. Our biggest projects are a link in bio service known as e-z.bio and a file hosting service known as e-z.host. During its lifetime E-Z has served thousands of users and has been the biggest motivator for me to continue learning and improving my skills as a developer. The website is currently a bit outdated but I am working on a complete rewrite that will bring more life into the website."
                                />
                                <ProjectCard
                                    tech={["TypeScript", "React", "NextJS", "TanStack Start", "TailwindCSS", "Framer Motion", "Gsap"]}
                                    img={oneclientImage}
                                    animDelay={0.4}
                                    modalMedia={[
                                        { type: "video", src: oneclientVideo },
                                        { type: "video", src: oneclientStoreVideo },
                                    ]}
                                    logoImg={polyfrostLogo}
                                    name="Polyfrost"
                                    site="https://polyfrost.org/projects/oneclient"
                                    github="https://github.com/Polyfrost"
                                    description="Polyfrost is an open source Minecraft modding organization that is known for their unified configuration mod OneConfig and their newly released client OneClient. I started working with them for the release of OneClient to remake the org's website and build the client's cosmetic shop alongside a designer and backend developer."
                                />
                                <ProjectCard
                                    tech={["TypeScript", "React", "NextJS", "TailwindCSS", "Framer Motion", "Gsap"]}
                                    img={voidtagImage}
                                    animDelay={0.5}
                                    modalMedia={[
                                        { type: "video", src: voidtagVideo },
                                        { type: "image", src: vtGameImage },
                                        { type: "image", src: vtStatImage },
                                    ]}
                                    logoImg={voidtagLogo}
                                    name="VoidTag"
                                    site="https://voidtag.net"
                                    github="https://github.com/voidtag/voidtag.net"
                                    description="VoidTag is a Minecraft server that features a unique gamemode that is a mix between Bedwars and TNT Tag. I built the website and made some image cards for the server's game logs to showcase completed games and player stats."
                                />
                                <ProjectCard
                                    tech={["TypeScript", "Vue", "NuxtJS", "Sass", "Framer Motion", "Gsap"]}
                                    img={outsoImage}
                                    animDelay={0.6}
                                    modalMedia={[
                                        { type: "video", src: outsoVideo },
                                        { type: "video", src: outsoBioCardVideo },
                                    ]}
                                    logoImg={outsoLogo}
                                    name="Out.so"
                                    description="Out.so is a platform that aims to help content creators unify their uploading process. You upload your videos to out and it will automatically push out your content based on a schedule to all of your platforms at once. I built and maintained the user facing parts of the website with Vue and helped direct production decisions alongside the entire team."
                                />
                                <ProjectCard
                                    tech={["TypeScript", "React", "NextJS", "TailwindCSS", "Bun", "Elysia", "MongoDB", "Redis"]}
                                    img={tnttaginfoImage}
                                    animDelay={0.7}
                                    modalMedia={[{ type: "video", src: tnttaginfoVideo }]}
                                    logoImg={tnttaginfoLogo}
                                    name="TNTTag.info"
                                    site="https://tnttag.info"
                                    github="https://github.com/aidendotgg/tnttag.info"
                                    description="TNTTag.info is a stats website for Hypixel's Minecraft minigame TNT Tag. The community is fairly small and there wasn't a good source of info for stats and leaderboards so I decided to put something together myself. The website currently has the most accurate set of leaderboards for TNT Tag out of all other general stat websites."
                                />
                                <ProjectCard
                                    tech={["TypeScript", "React", "NextJS", "TailwindCSS", "Framer Motion"]}
                                    img={lilithImage}
                                    animDelay={0.8}
                                    modalMedia={[{ type: "video", src: lilithVideo }]}
                                    logoImg={lilithLogo}
                                    name="Lilith"
                                    site="https://lilith.rip"
                                    description="Lilith is a Minecraft proxy mod for Hypixel that gives you live stats of everyone in your game. I built their website to to showcase the mod and provide a place for users to find download links, documentation, and support."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
