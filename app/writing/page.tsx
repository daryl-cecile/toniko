import ArticleLink from "../../components/ArticleLink";
import { cn } from "../../utils/cn";
import { caveat } from "../fonts";

export default function WritingPage() {

    return (
        <section className="grid grid-cols-1 gap-8 w-full max-w-4xl mx-auto px-10 my-10">
            <h1 className={cn("text-5xl text-black", caveat.className)}>Writing</h1>

            <ul>

                <ArticleLink
                    src="https://slantedpress.com/articles/oh-thank-you-representation-matters"
                    title="Oh, thank you"
                    on="SlantedPress"
                    year="2019"
                    type="Film Review"
                />

                <ArticleLink
                    src="https://slantedpress.com/articles/the-japanese-house-at-thekla-review"
                    title="Skatergirls & tampons: 'Skate Kitchen' Review ft. Kabrina Adams"
                    on="SlantedPress"
                    year="2018"
                    type="Film Review"
                />

                <ArticleLink
                    src="https://slantedpress.com/articles/introducing-neverlander"
                    title="Introducing: Neverlander"
                    on="SlantedPress"
                    year="2019"
                    type="Music Review"
                />

                <ArticleLink
                    src="https://slantedpress.com/articles/introducing-cream-with-a-k"
                    title="Introducting: Cream with a K"
                    on="SlantedPress"
                    year="2019"
                    type="Film Review"
                />

                <ArticleLink
                    src="https://slantedpress.com/articles/skate-kitchen-film-review-ft-kabrina-adams"
                    title="Review: The Japanese House @ Thekla"
                    on="SlantedPress"
                    year="2018"
                    type="Music Review"
                />

                <ArticleLink
                    src="https://slantedpress.com/articles/introducing-marble-house"
                    title="Introducing: Marble House"
                    on="SlantedPress"
                    year="2018"
                    type="Film Review"
                />

                <ArticleLink
                    src="https://slantedpress.com/articles/the-man-behind-the-bands-a-chat-with-brad-oldham"
                    title="The Man behind the Bands: A chat with Brad Oldham"
                    on="SlantedPress"
                    year="2018"
                    type="Interview"
                />

            </ul>

        </section>
    )
}