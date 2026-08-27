import GitHub from "./icons/GitHub";
import Web from "./icons/Web";

export default function ExperienceCard({
    img,
    name,
    role,
    timeline,
    description,
    site,
    github,
}: {
    img: string;
    name: string;
    role: string;
    timeline: string;
    description: string;
    site?: string;
    github?: string;
}) {
    return (
        <div className="flex flex-row items-start gap-3">
            <div className="relative bg-mid/75 border border-dark/75 p-2 rounded-sm shrink-0">
                <img className="sm:h-20 h-16 sm:w-20 w-16" src={img} alt={`${name} logo`} />
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row gap-2 justify-between items-center">
                    <h2 className="text-lg font-bold leading-6">{name}</h2>
                    <div className="flex flex-row gap-2 items-center">
                        {site && (
                            <a href={site} target="_blank" rel="noopener noreferrer">
                                <Web className="h-5 w-5 fill-white" />
                            </a>
                        )}
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                <GitHub className="h-5 w-5 fill-white" />
                            </a>
                        )}
                    </div>
                </div>
                <p className="brightness-75 leading-6">{role}</p>
                <p className="brightness-75 leading-6">{timeline}</p>
                <p className="leading-6">{description}</p>
            </div>
        </div>
    );
}
