import Image from "next/legacy/image";
import Link from "next/link";
import EmptyState from "../shared/EmptyState";
import {projects} from '../../data/project';
import { SiAwsorganizations } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";

const fallbackImage: string = "../../assets/images/not-found.jpg";

export default async function Posts() {
    return (
        <section>
            {projects.length > 0 ? (
                <div className="flex flex-col lg:max-w-[950px] max-w-full lg:gap-y-8 gap-y-12">
                    {projects.map((project) =>
                        <article key={project._id}>
                            <Link
                                href={project.url}
                                className="flex lg:flex-row flex-col lg:items-center items-start gap-8 dark:bg-primary-bg bg-secondary-bg p-6 rounded-lg border dark:border-zinc-800 border-zinc-200 group"
                            >
                                <div className="relative lg:w-[450px] lg:h-52 w-full h-56 overflow-clip">
                                    <Image
                                        src={project.banner || fallbackImage}
                                        className="dark:bg-zinc-800 bg-zinc-100 rounded-md object-cover group-hover:scale-125 duration-300"
                                        alt={project.name}
                                        layout="fill"
                                        placeholder={project.banner ? "blur" : "empty"}
                                    />
                                </div>

                                <div className="max-w-lg">
                                    <h2 className="text-2xl font-semibold tracking-tight mb-4">
                                        {project.name}
                                    </h2>

                                    <p className="dark:text-zinc-400 text-zinc-600 text-[0.95rem]">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center gap-x-4 mt-3 text-sm">
                                        <div className="flex items-center gap-x-2">
                                            <SiAwsorganizations className="text-zinc-300" />
                                            
                                            <div className="text-zinc-400">
                                                {project.company}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-x-2">
                                            <FaCalendarAlt className="text-zinc-500" />

                                            <time className="text-xs text-zinc-400 tracking-widest uppercase">
                                                {project.compliation_date ? (
                                                    project.compliation_date
                                                ) : (
                                                    <span className="dark:text-primary-color text-tertiary-color">
                                                        Present
                                                    </span>
                                                )}
                                            </time>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    )}
                </div>
            ) : (
                <EmptyState value="projects" />
            )}
        </section>
    );
}
