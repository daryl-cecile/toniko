

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { cn } from '../../../utils/cn';
import { caveat } from '../../fonts';
import { getProject } from '../../../utils/projects';

export default async function Page(props:{params:{slug:string}}){

    const {body} = await getProject(props.params.slug);

    return (
        <section className="grid grid-cols-1 gap-8 w-full max-w-4xl mx-auto px-10 my-10">
            <Markdown 
                children={body} 
                components={{
                    'h1': ({node, ...props}) => <h1 className={cn("text-5xl text-black", caveat.className)} {...props}/>,
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
        </section>
    )

}