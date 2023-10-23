import Link from "next/link";
import { cn } from "../../utils/cn";
import { caveat } from "../fonts";


export default function AboutPage(){
    return (
        <section className="grid grid-cols-1 gap-8 w-full max-w-4xl mx-auto px-10 my-10">
            <h1 className={cn("text-5xl text-black", caveat.className)}>Hey there,</h1>

            <p className={cn("text-black")}>
                I’m a creative lead and content strategist with a knack for impactful concept development and video storytelling. Conceptualizing the untold stories of marginalized and grassroot communities like Revolution. 
            </p>
            
            <p className={cn("text-black")}>
                When not working, I’m a <Link href="mixer" className="underline text-purple-500">budding DJ</Link>, part of a music collective, and working on my first documentary film.
            </p>


        </section>
    )
}