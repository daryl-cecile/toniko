import Link from 'next/link';
import { Queue } from '../../utils/queue';
import { cn } from '../../utils/cn';

type ArticleLinkProps = {
    src:string,
    title: string,
    on?: string,
    year?: string,
    type: string
}
export default async function ArticleLink(props:ArticleLinkProps){

    return (
        <li className="text-tony-green font-bold mb-4">
            <Link className="text-tony-red underline" href={props.src}>{props.title}</Link> | <span>{props.year && `(${props.year})`} {props.type}</span>
            {props.on && (
                <>
                    <br /> 
                    <span>on {props.on}</span>
                </>
            )}
        </li>
    )
}

type OpenGraphMetadata = {
    title?: string;
    description?: string;
    image?: string;
}

const openGraphCache = new Map<string, OpenGraphMetadata>();
const openGraphQueue = new Queue<OpenGraphMetadata>();
async function getOpenGraphMetadata(url:string):Promise<OpenGraphMetadata>{
    if (openGraphCache.has(url)) return openGraphCache.get(url);
    if (openGraphQueue.has(url)) return openGraphQueue.get(url);

    const { JSDOM } = await import('jsdom');
    const dom = await JSDOM.fromURL(url);
    const doc = dom.window.document;

    openGraphQueue.set(url);

    const result = {
        title: doc.querySelector('meta[property="og:title"]')?.getAttribute('content'),
        description: doc.querySelector('meta[property="og:description"]')?.getAttribute('content') ?? doc.querySelector('meta[name="description"]')?.getAttribute('content'),
        image: doc.querySelector('meta[property="og:image"]')?.getAttribute('content') ?? doc.querySelector('meta[name="twitter:image"]')?.getAttribute('content'),
    };

    openGraphCache.set(url, result);
    openGraphQueue.process(url, result);

    return result;
}