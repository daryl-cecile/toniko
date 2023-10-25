import { readdir } from "fs/promises";
import ArticleLink from "../../components/ArticleLink";
import { cn } from "../../utils/cn";
import { caveat } from "../fonts";


export default async function ProjectsPage(){
    const projects = await readdir('public/(projects)');

    return (
        <section className="grid grid-cols-1 gap-8 w-full max-w-4xl mx-auto px-10 my-10">
            <h1 className={cn("text-5xl text-black", caveat.className)}>Projects</h1>

            <ul>
                {projects.map(project => {
                    return (
                        <ArticleLink
                            key={project}
                            src={`/projects/${project}`}
                            title={project}
                            type="Campaign"
                        />
                    )
                })}
            </ul>
        </section>
    )
}