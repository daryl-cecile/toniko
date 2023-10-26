
import { cn } from "../../utils/cn";
import { blackSansa, caveat } from "../fonts";
import Markdown from "react-markdown";
import { getProjects } from "../../utils/projects";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Fragment } from "react";
import { toId } from "../../utils/dom";


export default async function ProjectsPage(){
    const projects = await getProjects();

    return (
        <section className="grid grid-cols-1 gap-8 w-full max-w-4xl mx-auto px-10 my-10 text-tony-green">
            {
                projects.map((project, ind) => (
                    <Fragment key={ind}>
                        <Markdown 
                            children={project.body} 
                            components={{
                                'h1': ({node, ...props}) => <h1 id={toId(props.children.toString())} className={cn("text-tony-green text-[60px] flex items-center gap-4", blackSansa.className)} {...props}/>,
                                'a': ({node, ...props}) => <a className={cn("text-fire-orange underline")} {...props}/>,
                                'ul': ({node, ...props}) => <ul className={cn("text-black my-0 py-0")} {...props}/>,
                                'li': ({node, ...props}) => <li className={cn("list-disc ml-4")} {...props}/>,
                                'video': ({node, ...props}) => <video className={cn("bg-black w-full aspect-video object-contain")} controls {...props}/>,
                                'iframe': ({node, ...props}) => <iframe className={cn("bg-black w-full aspect-video object-contain")} {...props}/>,
                            }}
                            disallowedElements={[]}
                            skipHtml={false}
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                        />
                        <br/>
                    </Fragment>
                ))
            }
        </section>
    )
}