import { cn } from "../../utils/cn";
import { caveat } from "../fonts";


export default function MixerPage(){
    return (
        <section className="grid grid-cols-1 gap-8 w-full max-w-4xl mx-auto px-10 my-10">
            <h1 className={cn("text-5xl text-black", caveat.className)}>Mixer</h1>

            <p className={cn("text-black")}>
                Come back soon to hear my latest mixes!
            </p>
        </section>
    )
}