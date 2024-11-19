import Job from "./components/pages/Job";
import Social from "./components/shared/Social";
import { Slide } from "./animation/Slide";
import { profile } from "./data/profile";
import Image from "next/image";
import RefLink from "./components/shared/RefLink";
import { BiLinkExternal } from "react-icons/bi";
import Posts from "./components/pages/Posts";
import PageHeading from "./components/shared/PageHeading";
import { technologies } from "./data/technologies";
import Link from "next/link";
import EmptyState from "./components/shared/EmptyState";
import Education from "./components/pages/Education";

export default async function Home() {
    return (
        <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
            <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-12">
                {profile &&
                    <div key={profile.id} className="lg:max-w-2xl max-w-2xl">
                        <Slide>
                            <h1 className="font-incognito mb-0 font-semibold uppercase text-3xl sm:text-5xl lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                                {profile.name}
                            </h1>
                            
                            <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                                {profile.headline}
                            </h1>

                            <p className="text-base mb-4 dark:text-zinc-400 text-zinc-600 leading-relaxed">
                                {profile.bio}
                            </p>

                            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
                                {profile.about}
                            </p>
                        </Slide>

                        <Slide delay={0.1}>
                            <Social type="social" />
                        </Slide>
                    </div>
                }

                <Slide delay={0.14}>
                    <Image
                        src={profile.avatar}
                        className="object-cover duration-300 rounded-2xl"
                        alt={`${profile.name} logo`}
                        height={450}
                    />

                    <div className="flex items-center justify-center gap-y-4 mt-4">
                        <RefLink
                          href={profile.resume}
                          className="flex items-center justify-center text-center gap-x-2 basis-[95%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                        >
                            Résumé <BiLinkExternal className="text-base" />
                        </RefLink>
                      </div>
                </Slide>
            </section>

            <Job />
            <Education />
            
            <Slide delay={0.1}>
                <PageHeading
                    title="Technologies"
                />
            </Slide>

            <Slide delay={0.1}>
                {technologies.length > 0 ? (
                    <section className="">
                        {technologies.map((technology) => (
                            <div key={technology.id}>
                                <div className="mb-8">
                                    <h3 className="font-incognito text-xl text-zinc-400 font-medium tracking-tight">
                                        {technology.title}
                                    </h3>
                                </div>

                                <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mb-8">
                                    {technology.tools.map((item) => (
                                        <Link
                                            href={`#`}
                                            key={item.id}
                                            className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
                                        >
                                            {item.icon ? (
                                                <item.icon className={`text-3xl`} />
                                            ) : (
                                                <div className="dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-2 rounded-lg text-3xl">
                                                    🪴
                                                </div>
                                            )}

                                            <h2 className="text-lg tracking-wide text-lg text-zinc-400">{item.name}</h2>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                ) : (
                    <EmptyState value="technology" />
                )}
            </Slide>

            <Slide delay={0.16}>
                <PageHeading
                    title="Projects"
                />
            </Slide>

            <Slide delay={0.18}>
                <Posts />
            </Slide>
        </main>
    );
}
