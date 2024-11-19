import Image from "next/image";
import { formatDate } from "../../utils/date";
import { Slide } from "../../animation/Slide";
import RefLink from "../shared/RefLink";
import { educations } from "../../data/education"

export default async function Education() {
    return (
        <section className="mt-16">
            <Slide delay={0.16}>
                <div className="mb-16">
                    <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
                        Education
                    </h2>
                </div>
            </Slide>

            <Slide delay={0.18}>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
                    {educations.map((education) => (
                        <div
                            key={education._id}
                            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
                        >
                            <RefLink
                                href={'#'}
                                className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
                            >
                                <Image
                                    src={education.logo}
                                    className="object-cover duration-300"
                                    alt={`${education.org} logo`}
                                    width={50}
                                    height={50}
                                />
                            </RefLink>

                            <div className="flex flex-col items-start">
                                <h3 className="text-xl font-semibold">{education.title}</h3>

                                <p className="font-medium text-zinc-300">{education.org}</p>

                                <p className="text-sm text-zinc-500 mt-1">{education.mejor}</p>

                                <p className="text-sm font-semibold text-zinc-500 mt-1">GPA: {education.result}</p>

                                <time className="text-sm text-zinc-500 tracking-widest uppercase mt-1">
                                    {education.compliation}
                                </time>

                                <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                                    {education.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Slide>
        </section>
    );
}
